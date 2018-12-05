const count = (state = 0, action) => {
  switch (action.type) {
    case "INCREASE_COUNT":
      return action.payload;
    default:
      return state;
  }
};

export default count;
