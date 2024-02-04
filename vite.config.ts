import { PluginOption, defineConfig } from 'vite';
import path from 'path';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  base: "/aftereffects-diary/",
  plugins: [
    handlebars({
      partialDirectory: path.resolve(__dirname, './src/partials/'),
      compileOptions: {
        explicitPartialContext: true,
      },
      context: {
        data: {
          productionRoot: 'https://hondakeiu.github.io/aftereffects-diary/',
          diary: require('./src/data/diary.json')
        },
      },
    }) as PluginOption,
  ],
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        home: path.resolve(__dirname, './index.html'),
      },
    },
  },
  server: {
    host: true,
  },
});
