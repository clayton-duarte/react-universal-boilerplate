# react-universal-boilerplate

### Folders:

- /src
where you put your components, midlewares, actions, reducers, helpers...

- /static
where you put your static files, as images and fonts

- /pages
where you put the pages of your aplication


- /dist
build output, it's your aplication
(use this folder on your node server)

- /out
export output, it's a static version of your aplication
(use this folder on your static server)


### Config Files:

- .babelrc, .eslintrc, .gitignore, package.json
please, look for proper documentation on the owners site

- next.config.js
config of webpack build, default folders and etc.

- routes.json
config your app routes for static export

- pages/_document.js
config of your html template and ssr (server-side-render) of your styles


### scripts

- start
run your aplication, server-side rendered, in developer mode

- build
build your aplication for production

- server
build and serve your aplication

- export
build a static vertion of your aplication for production

- static
build and serve your static aplication



##### Author> clayton-duarte [github.com/clayton-duarte]