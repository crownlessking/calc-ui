
/**
 * Home
 * Contains both the history pane and the input footer.
 */

import * as React from 'react';
import { connect } from 'react-redux';
import History, { IHistory } from './History';
import './home.css';
import Input, { IInput } from './Input';

interface IProps {
  list?: IHistory[];
  value?: IInput;
}

class Home extends React.Component<IProps> {

  public render() {
    const { list, value } = this.props;
    return (
      <div className="home">
        <History list={list} />
        <footer className="home-footer">
          <Input value={value} />
        </footer>
      </div>
    );
  } // render() END

} // Home class END

export default connect()(Home);