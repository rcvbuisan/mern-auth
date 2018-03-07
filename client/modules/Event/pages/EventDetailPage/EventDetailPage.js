import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

// Import Style

// Import Actions
import { fetchEvent } from '../../EventActions';

// Import Selectors
import { getEvent } from '../../EventReducer';

export function EventDetailPage(props) {
  return (
    <div>
      { props.event &&
        <EventJoinWidget joinEvent={this.handleJoinEvent} showJoinEvent={this.props.showJoinEvent} />
      }

      { props.event &&
        <div>
          <Helmet title={props.event.title} />
          Event data {props.event.code}
        </div>
      }
      Hello world
    </div>
  );
}

// Actions required to provide data for this component to render in server side.
EventDetailPage.need = [params => {
  return fetchEvent(params.code);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    event: getEvent(state, props.params.code),
  };
}

EventDetailPage.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(EventDetailPage);
