import { loadResumeData, editResumePage } from 'actions';
import rootReducer from 'reducers/RootReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

describe('actions', () => {
  let store;
  let dispatch;

  const resumeData = {
    pages: [{ name: 'some page name' }],
  };

  beforeEach(() => {
    store = createStore(rootReducer, applyMiddleware(thunk));
    dispatch = action =>
      new Promise((resolve) => {
        store.dispatch(action);
        setTimeout(() => {
          resolve();
        });
      });
  });

  describe('loadResumeData', () => {
    it('should load resume data', (done) => {
      spyOn(window, 'fetch').and.returnValue(new Promise((res) => {
        res({ json: () => resumeData });
      }));

      expect(store.getState().resumeData).toBeUndefined();
      dispatch(loadResumeData()).then(() => {
        expect(store.getState().resumeData).toEqual(resumeData);
        done();
      });
    });
  });

  describe('editResumePage', () => {
    it('should edit a resume page', (done) => {
      store = createStore(rootReducer, { resumeData }, applyMiddleware(thunk));
      dispatch = action =>
        new Promise((resolve) => {
          store.dispatch(action);
          setTimeout(() => {
            resolve();
          });
        });
      expect(store.getState().resumeData).toEqual(resumeData);
      dispatch(editResumePage({
        attribute: 'name',
        pageNumber: 0,
        value: 'pizza',
      })).then(() => {
        expect(store.getState().resumeData.pages[0].name).toBe('pizza');
        done();
      });
    });
  });
});
