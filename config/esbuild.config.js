const path = require('path');
const esbuild = require('esbuild');
const vuePlugin = require('esbuild-plugin-vue3');
const sassPlugin = require('esbuild-sass-plugin').sassPlugin;

const isWatch = process.argv.includes('--watch');

const config = {
  entryPoints: ['app/javascript/application.js'],
  bundle: true,
  outdir: path.join(process.cwd(), 'app/assets/builds'),
  absWorkingDir: path.join(process.cwd()),
  publicPath: '/assets',
  plugins: [
    vuePlugin(),
    sassPlugin({
      type: 'css',
      outFile: path.join(process.cwd(), 'public/assets/application.css'),
    })
  ],
  loader: {
    '.png': 'dataurl',
    '.svg': 'text',
    '.vue': 'js',
    '.scss': 'css',
    '.css': 'css'
  },
  platform: 'browser',
  format: 'iife',
  metafile: true,
  minify: false,
  sourcemap: true
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
        console.log('Build completed. Output files:', Object.keys(result.metafile.outputs))
      }
    })
    .catch(() => process.exit(1))
}
