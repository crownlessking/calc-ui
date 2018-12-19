/**
 * Result Pane
 */

import * as React from 'react';
import { IExpression } from './Expression';
import { ISolution } from './Solution';

interface IProps {
  list?: IHistory[];
}

export interface IHistory {
  expression: IExpression;
  id: number;
  solution: ISolution;
}

export default class History extends React.Component<IProps> {

  public render() {
    const operations = this.getOperations();
    return (
      <div className="home-history">
        <div className="home-history-content">
          { operations }
        </div>
      </div>
    );
  } // render() END

  private getOperations() {
    const list: IHistory[] = [];

    return list;
  }

} // History class END
