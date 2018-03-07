import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

// Import Style

export class EventJoinWidget extends Component {
  handleJoinEvent = () => {
    const codeRef = this.refs.code;
    if (codeRef.value) {
      this.props.joinEvent(codeRef.value);
      codeRef.value = '';
    }
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-6">
            { this.props.showJoinEvent &&
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for..." ref="code" />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button" onClick={this.handleJoinEvent}>Go!</button>
                </span>
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

PostCreateWidget.propTypes = {
  showJoinEvent: PropTypes.bool.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(PostCreateWidget);
