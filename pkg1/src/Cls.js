export default class Cls {
  // commenting this will prevent from Cls to be included in the importing app
  static displayName = 'Cls'

  render() {
    return 'Cls'
  }
}

// moving static assignment inside this condition also works
// if (process.env.NODE_ENV !== 'production') {
//   Cls.displayName = 'Cls'
// }
