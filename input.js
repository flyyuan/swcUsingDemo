class IncStore {
  num = 0
  unInitValue
  inc() {
    this.num += 1
    this.unInitValue += 1
  }
}
const incStore = new IncStore()
window.aaa = incStore
export default incStore
