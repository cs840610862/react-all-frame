import {
  TEST
} from '../actions/Test'

const Test = (state = {}, action) => {
  switch (action.type) {
    case TEST:
      return {
        ...action
      }
    default:
      return state;
  }
}

export default {
  Test
}
