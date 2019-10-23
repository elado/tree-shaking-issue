import Qux from './Qux'

export default function Bar() {
  return 'Bar' + Qux()
}

Bar.displayName = 'Bar'
