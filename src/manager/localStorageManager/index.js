export default {
  getInteger (key) {
    return parseInt(localStorage[key])
  }
}