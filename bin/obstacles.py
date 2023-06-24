import bpy
import colorsys
import re
import json
import os
import imbuf
from PIL import Image

obstacles_color = (1, 1, 1, 1)
terrain_color = (0, 0, 0, 1)
terrain_path = "//terrain.png"

blend_file_path = bpy.data.filepath
blend_directory = os.path.dirname(blend_file_path)

def split_name(name):
    # Extract the hex color code from the string using regular expressions
    hex_code = re.search("#[0-9a-fA-F]{6}", name).group().lstrip('#')
    # Convert the hex code to an RGBA tuple
    r, g, b = tuple(int(hex_code[i:i+2], 16) for i in (0, 2, 4))
    
    zone_name = name.replace("#" + hex_code, "").replace("-", '')
    return [(r/255, g/255, b/255, 1.0), zone_name]


def is_color_close(color1, color2, tolerance=0):
    r1, g1, b1, a1 = color1
    r2, g2, b2, a2 = color2
    hue1, sat1, light1 = colorsys.rgb_to_hls(r1, g1, b1)
    hue2, sat2, light2 = colorsys.rgb_to_hls(r2, g2, b2)
    hue_diff = abs(hue1 - hue2) * 360
    sat_diff = abs(sat1 - sat2) * 100
    light_diff = abs(light1 - light2) * 100
    if hue_diff <= tolerance and sat_diff <= tolerance and light_diff <= tolerance:
        return True
    else:
        return False

terrain = bpy.data.objects["Floor"]
terrain.color = terrain_color

dimension = int(terrain.dimensions.x)

# Update camera params to fit terrain dimensions
terrain_camera = bpy.data.scenes["Scene"].camera.data
terrain_camera.ortho_scale = terrain.dimensions.x

render = bpy.context.scene.render
image_settings = render.image_settings

# Store previous render params
_resolution_x = render.resolution_x
_resolution_y = render.resolution_y
_filepath = render.filepath

_image_format = image_settings.file_format
_image_quality = image_settings.quality
_image_color_management = image_settings.color_management
_image_color_mode = image_settings.color_mode
_image_compression = image_settings.compression
_image_view_transform = image_settings.view_settings.view_transform

# Update render params to fit terrain dimensions in pixels
render.resolution_x = 8192
render.resolution_y = 8192
render.filepath = terrain_path
render.resolution_percentage = 100

image_settings.file_format = 'PNG'
image_settings.quality = 100
image_settings.compression = 0
image_settings.color_management = 'OVERRIDE'
image_settings.color_mode = 'RGBA'
image_settings.view_settings.view_transform = 'Standard'

# Set all obstacles Object Color
obstacles_collection = bpy.data.collections.get("Obstacles")
if obstacles_collection is not None:
    for obj in obstacles_collection.objects:
        obj.color = obstacles_color
        obj.show_in_front = True

# Set all zones Object color and extrude them
zones_collection = bpy.data.collections.get("Zones")

color_map = {0: [terrain_color, 'Terrain'], 1: [obstacles_color, 'Obstacles']}
color_map.update({i: split_name(zones_collection.objects[i-2].name) for i in range(2, len(zones_collection.objects) + 2)})

for i, obj in enumerate(zones_collection.objects):
    obj.color = color_map[i+2][0]

# Set Viewport to Camera view
area = next(area for area in bpy.context.screen.areas if area.type == 'VIEW_3D')
space = next(space for space in area.spaces if space.type == 'VIEW_3D')

# Store previous params
_show_overlays = space.overlay.show_overlays
_color_type = space.shading.color_type
_object_outline = space.shading.show_object_outline
_show_shadows = space.shading.show_shadows
_show_specular_highlight = space.shading.show_specular_highlight
_light = space.shading.light
_type = space.shading.type
_view_perspective = space.region_3d.view_perspective

# Override params
space.overlay.show_overlays = False
space.shading.color_type = 'OBJECT'
space.shading.show_object_outline = False
space.shading.show_shadows = False
space.shading.show_specular_highlight = False
space.shading.light = 'FLAT'
space.shading.type = 'SOLID'
space.region_3d.view_perspective = 'CAMERA'

# Render viewport image
bpy.ops.render.opengl(write_still=True, view_context=True)

# Load the image to loop through its pixels

terrain_buffer_path = os.path.join(blend_directory, "terrain.png")



# Load the image using PIL
img = Image.open(terrain_buffer_path)

# Resize the image
resized_img = img.resize((dimension, dimension), Image.NEAREST)

# Save the resized image back to disk
resized_img.save(terrain_buffer_path)


terrain_data = [[None for y in range(dimension)] for x in range(dimension)]

for x in range(dimension):
    for y in range(dimension):
        pixel = resized_img.pixels[(y * dimension + x) * 4:(y * dimension + x) * 4 + 4]
        for key, value in color_map.items():
            if value[0] == pixel:
                terrain_data[y][x] = key
                break
            else:
                terrain_data[y][x] = 0

terrain_data = terrain_data[::-1]

# Mutate the color map before saving it to remove color
color_map = {k: v[1] for k, v in color_map.items()}       
json_data = json.dumps({"data": terrain_data, "mapping": color_map})

output_file_path = os.path.join(blend_directory, "terrain_data.json")

with open(output_file_path, "w") as f:
    f.write(json_data)


# Remove the image
bpy.data.images.remove(bpy.data.images['Terrain'])

# Revert any changes made
render.resolution_x = _resolution_x
render.resolution_y = _resolution_y
render.filepath = _filepath

image_settings.file_format = _image_format
image_settings.quality = _image_quality
image_settings.color_management = _image_color_management 
image_settings.color_mode = _image_color_mode
image_settings.compression = _image_compression
image_settings.view_settings.view_transform = _image_view_transform

space.overlay.show_overlays = True
space.shading.color_type = _color_type
space.shading.show_object_outline = _object_outline
space.shading.show_shadows = _show_shadows
space.shading.show_specular_highlight = _show_specular_highlight
space.shading.light = _light
space.shading.type = _type
space.region_3d.view_perspective = _view_perspective

if obstacles_collection is not None:
    for obj in obstacles_collection.objects:
        obj.show_in_front = False