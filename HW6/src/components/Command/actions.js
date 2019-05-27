export const BUTTON_UNDO_CLICK = "BUTTON_UNDO_CLICK";
export const BUTTON_COMMAND_CLICK = "BUTTON_COMMAND_CLICK";
export const EQUAL_CLICK = "EQUAL_CLICK";
export const CLEAR_CLICK = "CLEAR_CLICK";

const handleCommandClick = data => ({
  type: BUTTON_COMMAND_CLICK,
  data
});

const handleEqualClick = () => ({
  type: EQUAL_CLICK
});

const handleClearClick = () => ({
  type: CLEAR_CLICK
});

const handleUndoClick = data => ({
  type: BUTTON_UNDO_CLICK,
  data
});

export default {
  command: handleCommandClick,
  equal: handleEqualClick,
  clear: handleClearClick,
  undo: handleUndoClick
};
