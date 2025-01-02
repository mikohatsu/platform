const path = require('path')
const esbuild = require('esbuild')
const vuePlugin = require('esbuild-plugin-vue3')
const sassPlugin = require('esbuild-sass-plugin').sassPlugin

const isWatch = process.argv.includes('--watch')
const isProd = process.env.NODE_ENV === 'production'

const config = {
  entryPoints: [
    'app/javascript/application.js',
    'app/javascript/src/assets/styles/main.scss'
  ],
  bundle: true,
  outdir: path.join(process.cwd(), 'app/assets/builds'),
  absWorkingDir: path.join(process.cwd()),
  publicPath: '/assets',
  minify: isProd,
  sourcemap: !isProd,
  plugins: [
    vuePlugin(),
    sassPlugin({
      type: 'css',
      outFile: path.join(process.cwd(), 'app/assets/builds/application.css'),
      loadPaths: ['app/javascript', 'node_modules'],
      sourceMap: !isProd,
      outputStyle: isProd ? 'compressed' : 'expanded'
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
    'process.env.NODE_ENV': isProd ? '"production"' : '"development"'
  },
  platform: 'browser',
  format: 'iife',
  metafile: true,
  splitting: false,
  write: true
}

if (isWatch) {
  esbuild.context(config).then(context => {
    context.watch()
    console.log('Watching for changes...')
  })
} else {
  esbuild.build(config)
    .then(result => {
      if (result.metafile) {
        console.log('Build completed:', result.metafile.outputs)
      }
    })
    .catch(() => process.exit(1))
} 