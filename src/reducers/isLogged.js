const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return !state; // the oposite of state > true  | je kan ook gewoon true gebruiken
    default:
      return state;
  }
};

export default loggedReducer;
