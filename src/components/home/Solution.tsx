
/**
 * Solution
 */

import * as React from 'react';

export interface ISolution {
  value: string;
}

interface IProps {
  value: ISolution;
}

export default class Solution extends React.Component<IProps> {

  public render() {
    const { value } = this.props;
    return <div className="home-h-res">{ value }</div>;
  } // render() END

} // Solution class END