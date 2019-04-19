import { BUTTON_CLICK, BUTTON_COMMAND_CLICK } from "./actions";

const initialState = {
  actions: [],
  commands: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BUTTON_CLICK: {
      console.log(state);
      const stateCopy = Object.assign({}, state);
      stateCopy.actions.push(action.data);
      return stateCopy;
    }
    case BUTTON_COMMAND_CLICK: {
      console.log(state);
      const stateCopy = Object.assign({}, state);
      stateCopy.commands.push(action.data);
      return stateCopy;
    }
    default:
      return state;
  }
};
