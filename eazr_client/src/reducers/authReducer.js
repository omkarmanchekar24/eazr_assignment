const INITIAL_STATE = {
  isAuthenticated: false,
  user: {},
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
