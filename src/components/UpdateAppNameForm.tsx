/**
 * [WARNING]
 * This component is for testing purpose ONLY and should be disable when
 * the app is uploaded to the server.
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { updateAppName } from '../bootstrap3/actions/nav-actions';

interface IProps {
  appName?: string;
  onUpdateAppName?: (e: any)=>void;
}

const mapStateToProps = (state: any) => ({
  appName: state.nav.appName
});

const mapDispatchToProps = {
  onUpdateAppName: updateAppName
};

class UpdateAppNameForm extends React.Component<IProps> {

  constructor(props: any) {
    super(props);

    this.onUpdateAppName = this.onUpdateAppName.bind(this);
  }

  public onUpdateAppName(e: any) {
    if (this.props.onUpdateAppName) {
      this.props.onUpdateAppName(e.target.value);
    }
  }

  public render() {
    const descId = 'update-app-name';
    const { appName } = this.props;
    return [
      <label key={1} htmlFor="basic-url">
        App name will change in the navigation bar
      </label>,
      <div key={2} className="input-group">
        <span className="input-group-addon" id={descId}>Name:</span>
        <input
          type="text"
          className="form-control"
          id="basic-url"
          aria-describedby={descId}
          value={appName}
          onChange={this.onUpdateAppName}
        />
      </div>
    ];
  } // render() END

} // class UpdateAppNameFrom END

export default connect(mapStateToProps, mapDispatchToProps)(UpdateAppNameForm);