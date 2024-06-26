/** @type {import('vite').UserConfig} */
export default {
  build: {
    rollupOptions: {
      external: [/@rabbitholegg/, /@gfxlabs/],
    },
    lib: {
      entry: 'src/index.ts',
      emptyOutDir: false,
      name: 'QuestdkPluginOkutrade',
      fileName: (module, name) => {
        const outPath = `${module === 'es' ? 'esm' : 'cjs'}/${
          name.startsWith('index') ? 'index.js' : name + '/index.js'
        }`
        return outPath
      },
    },
  },
}
