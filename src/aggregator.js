import path from 'path'
import universal from 'react-universal-component'

export const aggregator = (componentPath, chunkName) => {
  return universal(() => import(componentPath), {
    path: path.resolve(__dirname, componentPath),
    resolve: () => require.resolveWeak(componentPath), /*ERROR: Cannot find module "."*/
    chunkName: chunkName,
    minDelay: 500
  })
}