import { defineBuildConfig } from 'unbuild'
import fg from 'fast-glob'
import { basename } from 'path'

export default defineBuildConfig({
  entries:[
    ...fg.sync('src/**/*.ts',{
      ignore:['src/**/*test.ts'],
    }).map(f => ({
      name:f.slice(4,-3),
      input:f.slice(0,-3)}))
  ],
  declaration: true,
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
  },
})
