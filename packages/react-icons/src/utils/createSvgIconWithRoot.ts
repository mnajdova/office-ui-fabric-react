import * as React from 'react';
import { css, getNativeProps, htmlElementProperties } from '@uifabric/utilities';
import { classes, MS_ICON } from './SvgIcon.styles';
import { ISvgIconProps } from './SvgIcon.types';
import { SvgIconCreateFnWithRootParams } from './types';

const createSvgIconWithRoot = <TProps = {}>({ children, displayName }: SvgIconCreateFnWithRootParams<TProps>) => {
  const Component: React.FC<React.HTMLAttributes<HTMLSpanElement> & TProps & ISvgIconProps> = props => {
    const { className, style = {} } = props;

    const nativeProps = getNativeProps<React.HTMLAttributes<HTMLElement>>(props, htmlElementProperties);
    const containerProps = props['aria-label']
      ? {}
      : {
          role: 'presentation',
          ['aria-hidden']: true,
        };

    const processedRootProps: React.HTMLAttributes<HTMLElement> = {
      ...containerProps,
      ...nativeProps,
      className: css(MS_ICON, classes.root, className),
      style,
    };

    return children({ classes, props, processedRootProps });
  };

  Component.displayName = displayName;

  return Component;
};

export default createSvgIconWithRoot;
