await Bun.build({
  entrypoints: ["src/main.ts"],
  outdir: "./build",
  minify: false,
  plugins: [ /* ... */ ]
})
