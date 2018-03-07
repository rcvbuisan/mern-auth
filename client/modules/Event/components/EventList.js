import React, { PropTypes } from 'react';

// Import Components
import EventListItem from './EventListItem/EventListItem';

function EventList(props) {
  return (
    <div className="listView">
      {
        props.posts.map(event => (
          <EventListItem
            event={event}
            key={event.code}
            onJoin={() => props.handleJoinEvent(event.code)}
          />
        ))
      }
    </div>
  );
}

EventList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  handleDeletePost: PropTypes.func.isRequired,
};

export default EventList;
