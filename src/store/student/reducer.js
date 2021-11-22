const studentReducer = (state = "kenzinho de teste", action) => {
  switch (action.type) {
    case "ADD_FRUIT":
      return action.student;
    default:
      return state;
  }
};
export default studentReducer;
