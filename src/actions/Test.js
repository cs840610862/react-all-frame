import axios from 'axios';

export const TEST = 'TEST';
const func = params => dispatch => {
  // 同步方式的action
  dispatch({
    type: TEST,
    data: 999
  })
}

export const REQ_DATA = 'REQ_DATA';
const getXhrReq = params => dispatch => {
  // 异步方式的action
  axios.get('https://baike.baidu.com/api/usercenter/login?msg=1&_=1524742390637')
    .then(res => {
      debugger
      dispatch({
        type: REQ_DATA,
        data: res,
        err: false
      })
    })
    .catch(function (error) {
      dispatch({
        type: REQ_DATA,
        err: true
      })
    });
}

export default {
  func,
  getXhrReq
}
