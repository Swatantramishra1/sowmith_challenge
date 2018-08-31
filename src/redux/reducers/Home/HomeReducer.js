
export const HOMEREDUCER = (state = { text_value: "" }, action) => {
  switch(action.type) {
    case 'TEXT_VALUE':
      return {
        text_value:action.data
      };
    default:
      return state;
  }
};