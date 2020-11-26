const INITIAL_STATE = {
  loading: false,
  errors: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};
