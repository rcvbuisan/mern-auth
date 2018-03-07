import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './EventListItem.css';

function EventListItem(props) {
  return (
    <div className={styles['single-post']}>
      <h3 className={styles['post-title']}>
        <Link to={`/posts/${props.event.code}`} >
          {props.event.title}
        </Link>
      </h3>
      <hr className={styles.divider} />
    </div>
  );
}

EventListItem.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
  }).isRequired,
  onJoin: PropTypes.func.isRequired,
};

export default EventListItem;
