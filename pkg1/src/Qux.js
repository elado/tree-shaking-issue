import { setDisplayName } from './helpers'

export default function Qux() {
  return 'Qux'
}

// commenting this will prevent from Cls to be included in the importing app
Qux.displayName = 'Qux';

// this is another solution, marking this function call as PURE
// /*@__PURE__*/ setDisplayName(Qux, 'Qux')

// moving static assignment inside this condition also works
// if (process.env.NODE_ENV !== 'production') {
//   Qux.displayName = 'Qux'
// }
