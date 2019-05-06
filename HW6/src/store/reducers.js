import {BUTTON_CLICK} from "../components/Number/actions";
import {
  BUTTON_UNDO_CLICK,
  BUTTON_COMMAND_CLICK,
  EQUAL_CLICK,
  CLEAR_CLICK,
} from "../components/Command/actions";

const initialState = {
  results: "",
  first: "",
  second: "",
  operation: "",
};

const formatResult = state => ({
  ...state,
  result: state.results,
});

const generateArgs = (expression) => {
  let copy = expression;
  expression = expression.replace(/[0-9]+/g, "#");
  let numbers = copy.split(/[^0-9\.]+/);
  let operators = expression.split("#").filter(function (n) {
    return n
  });
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i]);
    if (i < operators.length){
      result.push(operators[i]);
    }
  }
  return result;
};

const countResult = state => {
  let result = 0;
  const args = generateArgs(state.results);
  args.map((item, i) => {
    if (item === '+') {
      if (!result) {
        result = Number(args[i - 1]) + Number(args[i + 1]);
      } else {
        result = result + Number(args[i + 1]);
      }
    }
    if (item === '*') {
      console.log(args[i]);
      if (!result) {
        result = args[i - 1] * args[i + 1];
      } else {
        result = result * args[i + 1];
      }
    }
    if (item === '/') {
      console.log(args[i]);
      if (!result) {
        result = args[i - 1] / args[i + 1];
      } else {
        result = result / args[i + 1];
      }
    }
  });
  return result;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BUTTON_CLICK: {
      const result = Object.assign({}, state);
      result.results += action.data;
      return formatResult(result);
    }
    case BUTTON_COMMAND_CLICK: {
      const result = Object.assign({}, state,{operation: action.data});
      result.results += action.data;
      return formatResult(result);
    }
    case EQUAL_CLICK: {
      return Object.assign(
        {},
        {
          count: countResult(state),
          result: false
        },
        {...initialState}
      );
    }
    case BUTTON_UNDO_CLICK: {
      console.log(state);
    }
    case CLEAR_CLICK: {
      return initialState;
    }
    default:
      return state;
  }
};
