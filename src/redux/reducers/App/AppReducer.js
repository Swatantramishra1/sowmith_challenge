export const APPREDUCER =  (state = { showPreloader: true }, action) => {
  switch(action.type){
    case 'TOGGLE_PRELOADER':
      return {
        showPreloader: action.data
      };
    default:
      return state;
  }
};