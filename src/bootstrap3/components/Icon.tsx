/**
 * @see https://getbootstrap.com/docs/3.3/components/#glyphicons
 * @see https://fontawesome.com/icons?d=gallery
 */

import * as React from 'react';

interface IProps {
  className: string | undefined;
}

export default class Icon extends React.Component<IProps> {

  public render() {
    const { className } = this.props;
    if (className && className.match('^glyphicon glyphicon-')) {
      return <span className={className} />;
    } else if (className && className.match('^fa')) {
      return <i className={className} />;
    }
    return '';
  }

}

