const path = require('path')
const esbuild = require('esbuild')
const vuePlugin = require('esbuild-plugin-vue3')
const sassPlugin = require('esbuild-sass-plugin').sassPlugin

const isWatch = process.argv.includes('--watch')
const isProd = process.env.NODE_ENV === 'production'

// CSS 파일 생성을 위한 별도의 빌드 설정
const cssConfig = {
  entryPoints: ['app/javascript/src/assets/styles/main.scss'],
  bundle: true,
  outfile: 'app/assets/builds/application.css',
  plugins: [
    sassPlugin({
      type: 'css',
      sourceMap: !isProd,
      loadPaths: ['app/javascript', 'node_modules']
    })
  ]
}

// 메인 설정
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
    'process.env.NODE_ENV': isProd ? '"production"' : '"development"'
  },
  platform: 'browser',
  format: 'iife'
}

// 빌드 실행
if (isWatch) {
  Promise.all([
    esbuild.context(config).then(context => context.watch()),
    esbuild.context(cssConfig).then(context => context.watch())
  ]).then(() => {
    console.log('Watching for changes...')
  })
} else {
  Promise.all([
    esbuild.build(config),
    esbuild.build(cssConfig)
  ]).catch(() => process.exit(1))
} 