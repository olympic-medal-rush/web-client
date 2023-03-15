# Olympic Medal Rush - Web Client

## Project Setup

```sh
nvm use
pnpm i
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Generate translations

```sh
pnpm translate
```

### Compile and Minify for Production

``` bash
pnpm staging # build in staging mode
pnpm build # build in production mode
```

### Preview build

``` bash
pnpm preview
```

### TODO

- [ ] WebGL should be instanciated inside a Vue component when its mounted
- [ ] Server communication should be handled by a Vue component aswell
- [ ] Vue should dispatch server events to the WebGL
- [ ] Make the render agnostic of the game itself
- [ ] Update WebGL init events for better understanding
