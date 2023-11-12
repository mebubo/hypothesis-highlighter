await Bun.build({
  entrypoints: ["src/annotator/highlighter.ts"],
  outdir: "./build",
  minify: false,
  plugins: [ /* ... */ ]
})
