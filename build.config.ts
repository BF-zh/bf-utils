import { defineBuildConfig } from 'unbuild'
import fg from 'fast-glob'
import { basename } from 'path'

export default defineBuildConfig({
  entries:[
    "./src/index.ts",
  ],
  declaration: true,
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
  },
})
