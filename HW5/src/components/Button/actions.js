export const BUTTON_CLICK = "BUTTON_CLICK";

export const handleClick = data => ({
  type: BUTTON_CLICK,
  data
});

export const BUTTON_COMMAND_CLICK = "BUTTON_COMMAND_CLICK";

export const handleCommandClick = data => ({
  type: BUTTON_COMMAND_CLICK,
  data
});
