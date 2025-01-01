const path = require('path')
const esbuild = require('esbuild')
const vuePlugin = require('esbuild-plugin-vue3')
const sassPlugin = require('esbuild-sass-plugin').sassPlugin

const isWatch = process.argv.includes('--watch')

const config = {
  entryPoints: ['app/javascript/application.js'],
  bundle: true,
  outdir: path.join(process.cwd(), 'app/assets/builds'),
  absWorkingDir: path.join(process.cwd()),
  publicPath: '/assets',
  plugins: [
    vuePlugin(),
    sassPlugin()
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

if (isWatch) {
  // Watch 모드
  esbuild.context(config).then(context => {
    context.watch()
    console.log('Watching for changes...')
  })
} else {
  // 일반 빌드
  esbuild.build(config).catch(() => process.exit(1))
} 