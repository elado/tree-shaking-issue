export default function Qux() {
  return 'Qux'
}

// commenting this will prevent from Qux to be included in the importing app
Qux.displayName = 'Qux'

// moving static assignment inside this condition also works
// if (process.env.NODE_ENV !== 'production') {
//   Qux.displayName = 'Qux'
// }
