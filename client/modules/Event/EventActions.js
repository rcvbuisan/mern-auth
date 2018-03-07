import callApi from '../../util/apiCaller';

// Export Constants
export const JOIN_EVENT = 'JOIN_EVENT';
export const ADD_EVENT = 'ADD_EVENT';

export function fetchEvent(code) {
  return (dispatch) => {
    return callApi(`events/${code}`).then(res => dispatch(addEvent(res.event)));
  };
}

// Export Actions
export function addEvent(event) {
  return {
    type: ADD_EVENT,
    event,
  };
}

export function addEventRequest(event) {
  return (dispatch) => {
    return callApi('events', 'event', {
      event: {
        title: event.title,
        code: event.code,
      }
    })
  }
}

export function joinEvent(event) {
  return {
    type: JOIN_EVENT,
    event,
  };
}

export function joinEventRequest(code) {
  return (dispatch) => {
    return callApi(`events/${code}`, 'GET').then((req) => dispatch(joinEvent(req.event)));
  };
}
