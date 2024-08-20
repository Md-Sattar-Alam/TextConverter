import { buy_cake } from "./BookTypes";
const initialState = {
  NumberOfCake: 20,
};

const CakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case buy_cake:
      return {
        ...state,
        NumberOfCake: state.initialState - 1,
      };
    default:
      return state;
  }
};
export default CakeReducer;
