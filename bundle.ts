await Bun.build({
  entrypoints: ["src/annotator/guest.ts"],
  outdir: "./build",
  minify: false,
  plugins: [ /* ... */ ]
})
