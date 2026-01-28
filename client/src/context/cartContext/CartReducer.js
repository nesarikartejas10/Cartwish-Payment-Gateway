export function cartReducer(state, action) {
  if (action.type === "INCREMENT") {
    console.log("increment");
  } else {
    return state;
  }
}
