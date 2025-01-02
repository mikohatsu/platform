const path = require('path');
const esbuild = require('esbuild');
const vuePlugin = require('esbuild-plugin-vue3');
const sassPlugin = require('esbuild-sass-plugin').sassPlugin;

const isWatch = process.argv.includes('--watch');
const isProd = process.env.NODE_ENV === 'production';

const config = {
  entryPoints: ['app/javascript/application.js'],
  bundle: true,
  outdir: path.join(process.cwd(), 'app/assets/builds'),
  absWorkingDir: path.join(process.cwd()),
  publicPath: '/assets',
  minify: isProd, // 프로덕션 환경에서만 minify 활성화
  sourcemap: !isProd, // 프로덕션 환경에서는 sourcemap 비활성화
  plugins: [
    vuePlugin(),
    sassPlugin({
      type: 'css',
      sourceMap: !isProd, // 프로덕션 환경에서는 sourceMap 비활성화
      loadPaths: ['app/javascript', 'node_modules'],
      outputStyle: isProd ? 'compressed' : 'expanded', // 프로덕션 환경에서는 compressed
    }),
  ],
  loader: {
    '.png': 'dataurl',
    '.svg': 'text',
    '.vue': 'js',
    '.scss': 'css',
    '.css': 'css',
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  },
  platform: 'neutral', // 플랫폼 독립적인 코드 생성
  format: 'esm', // 필요에 따라 'esm' 또는 다른 형식으로 설정
};

esbuild.context(config).then((context) => {
  if (isWatch) {
    context.watch();
    console.log('Watching for changes...');
  } else {
    context.rebuild();
    context.dispose();
  }
}).catch(() => process.exit(1));
