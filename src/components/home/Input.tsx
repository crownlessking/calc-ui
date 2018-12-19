/**
 * Input
 */

import * as React from 'react';
import { Button } from '../../bootstrap3/components/Button';

export interface IInput {
  value?: string;
}

interface IProps {
  value?: IInput;
}

export default class Input extends React.Component<IProps> {

  public render() {
    const { value } = this.props;
    return (
      <div className="home-input-all-items home-copyable-area">
        <div className="home-label">
          <span className="glyphicon glyphicon-menu-right" aria-hidden="true" />
        </div>
        <div className="home-input-wrap">
          <div className="home-input-spawns home-input-spawns-style">
            <div
              className="home-input-div-editable home-input-div-editable-style"
              contentEditable={true}
            >
              { value }
            </div>
          </div>
        </div>
        <Button bsSize="small" className="home-enter" type="button">Enter</Button>
      </div>
    );

  } // render() END

} // Input class END