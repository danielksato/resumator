export const loadResumeData = () => (dispatch) => {
  fetch('./resume.json')
    .then(res => res.json())
    .then((payload) => {
      dispatch({ type: 'RESUME_DATA_LOADED', payload });
    });
};

export const editResumePage = payload => (dispatch) => {
  dispatch({ type: 'EDIT_RESUME', payload });
};

export const saveResume = payload => (dispatch) => {
  dispatch({ type: 'SAVE_RESUME', payload });
};
