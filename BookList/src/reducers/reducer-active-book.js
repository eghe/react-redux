export default function(state = {}, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      console.log(action);
      return Object.assign({}, state, {"book" : action.payload});
      break;
    default:
      return state;
  }
}
