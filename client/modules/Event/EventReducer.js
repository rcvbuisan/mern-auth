import { JOIN_EVENT, ADD_EVENT } from './EventActions';

// Initial State
const initialState = { data: [] };

const EventReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVENT :
      return {
        data: [action.event, ...state.data],
      };

    case JOIN_EVENT :
    console.log(state);
      return {
        data: state.data.filter(event => event.code !== action.code),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all events
export const getEvents = state => state.events.data;

// Get event by code
export const getEvent = (state, code) => state.events.data.filter(event => event.code === code)[0];

// Export Reducer
export default EventReducer;
