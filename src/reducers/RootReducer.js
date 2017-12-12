export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'RESUME_DATA_LOADED': {
      return Object.assign({}, state, { resumeData: payload });
    }
    case 'EDIT_RESUME': {
      const { pageNumber, attribute, value } = payload;
      const newState = Object.assign({}, state);
      newState.resumeData.pages[pageNumber][attribute] = value;
      return JSON.parse(JSON.stringify(newState));
    }
    default:
      return state;
  }
};
