
/**
 * Expression
 */

import * as React from 'react';

export interface IExpression {
  value: string;
};

interface IProps {
  value: IExpression;
}

export default class Expression extends React.Component<IProps> {

  public render() {
    const { value } = this.props;
    return <div className="home-h-exp">{ value }</div>;
  } // render() END

} // Expression class END
