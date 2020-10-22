export const SET_USERS = 'SET_USERS';
export const SET_VENUES = 'SET_VENUES';
export const SET_EVENTS = 'SET_EVENTS';


const dataReducer = (state, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users,
        loading: false,
      };
    case SET_VENUES:
      return {
        ...state,
        venues: action.venues,
        loading: false,
      };
      case SET_EVENTS:
        return {
          ...state,
          events: action.events,
          loading: false,
      };  
    default:
      return state;
      };
};

export default dataReducer;