import {
  TEST,
  REQ_DATA
} from '../actions/Test'

const Test = (state = {}, action) => {
  switch (action.type) {
    case TEST:
      return {
        ...action
      }
    default:
      return state
  }
}

const reqData = (state = {}, action) => {
  switch (action.type) {
    case REQ_DATA:
      return {
        ...action
      }
    default: 
      return state
  }
}

export default {
  Test,
  reqData
}
