

const initialState = {subArr: window?.subArr || []};

export default function subContext(state, action) {
  switch (action.type) {
    case 'addSub':
      return {subArr: [...state.subArr, action.payload]};
    case 'removeSub':
      return {subArr: state.subArr.filter((item)=>item !== action.payload)};
    default:
      throw new Error();
  }
}
