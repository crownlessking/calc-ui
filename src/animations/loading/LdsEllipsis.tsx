import * as React from 'react';
import './lds-ellipsis.css';

interface IProps {
  color?: string;
  height?: number;
}

/**
 * You can modify the color and the container (div) height of the animation.
 *
 * the default color is white (#fff)
 * The default height is 64px.
 */
export default class LdsEllipsis extends React.Component<IProps> {

  private readonly DEFAULT_HEIGHT = 64;
  private readonly DEFAULT_TOP = 27;
  private readonly DEFAULT_COLOR = '#fff';

  private dotStyle: React.CSSProperties;
  private style: React.CSSProperties;

  public constructor(props: any) {
    super(props);
    const { color, height } = this.props;
    this.dotStyle = {
      background: color || this.DEFAULT_COLOR,
      top: this.getCalcTop(height)
    }
    this.style = {
      height: (height || this.DEFAULT_HEIGHT)
    }
  }

  public render() {
    return (
      <div className="lds-ellipsis" style={this.style}>
        <div style={this.dotStyle}/>
        <div style={this.dotStyle}/>
        <div style={this.dotStyle}/>
        <div style={this.dotStyle}/>
      </div>
    );
  }

  private getCalcTop(height: number|undefined) {
    if (height) {
      const diff = this.DEFAULT_HEIGHT - height;
      const result = this.DEFAULT_TOP - diff;

      return result > 0 ? result+'px' : 0;
    }
    return this.DEFAULT_TOP;
  }
}