import *as mt from './mutation-types'
export default{
  [mt.INCREMENT] (state) {
    state.count++
  }
}