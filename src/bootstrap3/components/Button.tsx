
/**
 * Bootstrap 3 Button
 */

import * as React from 'react';
import { c } from '../common';

function getSizeClass (suffix: string) {
  switch (suffix) {
  case 'small':
  case 'sm':
    return ' btn-sm';
  }
  return '';
}

export function Button (props: any) {
  const { bsSize, children, className, ...other } = props;
  return (
    <button className={'btn'+getSizeClass(bsSize)+c(className)} {...other}>
      { children }
    </button>
  );
}

