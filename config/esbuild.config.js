const path = require('path')
const esbuild = require('esbuild')
const vuePlugin = require('esbuild-plugin-vue3')
const sassPlugin = require('esbuild-sass-plugin').sassPlugin

const isWatch = process.argv.includes('--watch')
const isProd = process.env.NODE_ENV === 'production'

const config = {
  entryPoints: ['app/javascript/application.js'],
  bundle: true,
  outdir: path.join(process.cwd(), 'app/assets/builds'),
  absWorkingDir: path.join(process.cwd()),
  publicPath: '/assets',
  minify: false,
  sourcemap: true,
  plugins: [
    vuePlugin(),
    sassPlugin({
      type: 'css',
      sourceMap: true,
      loadPaths: ['app/javascript', 'node_modules'],
      outputStyle: 'expanded'
    })
  ],
  loader: { 
    '.png': 'dataurl', 
    '.svg': 'text',
    '.vue': 'js',
    '.scss': 'css',
    '.css': 'css'
  },
  define: {
    'process.env.NODE_ENV': '"development"'
  },
  platform: 'browser',
  format: 'iife'
}

esbuild.context(config).then(context => {
  if (isWatch) {
    context.watch()
    console.log('Watching for changes...')
  } else {
    context.rebuild()
    context.dispose()
  }
}).catch(() => process.exit(1)) 