# Olympic Medal Rush - Web Client

## Project Setup

```sh
nvm use
pnpm i
```

## Run dev server with hot-reload features

```sh
pnpm dev
```

## Generate translations

```sh
pnpm translate
```

## Generate flag colors

```sh
pnpm flags
```

## Compile and Minify for Production

``` bash
pnpm staging # build in staging mode
pnpm build # build in production mode
```

## Preview build

``` bash
pnpm preview
```

## URLParams

Add params to URL to turn on/off some features.  
Example: `www.url.com/?param1&param2`  

List of params:  
`debug`: Enable debug panes, stats, camera.  
`orbit`: Enable OrbitControls.
`tab`: Switch pane tabs
`noServer`: Disable server connection to fake events
`team`: Set current team (team=FRA)` if `noServer` is present
