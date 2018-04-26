export const TEST = 'TEST';

const func = params => dispatch => {
  dispatch({
    type: TEST,
    data: 999
  })
}

export default {
  func
}
