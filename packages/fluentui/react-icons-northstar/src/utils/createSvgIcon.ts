import * as React from 'react';
// @ts-ignore
import { ThemeContext } from 'react-fela';

import { StylesContextValue, useStyles, getUnhandledProps } from '@fluentui/react-bindings';
import { SvgIconCreateFnParams, SvgIconProps } from './types';

export const svgIconClassName = 'ui-icon';
export const svgIconDisplayName = 'Icon';

export const svgIconHandledProps: (keyof SvgIconProps)[] = [
  'bordered',
  'className',
  'circular',
  'design',
  'disabled',
  'outline',
  'size',
  'rotate',
  'styles',
  'variables',
  'xSpacing',
];

const createSvgIcon = <TProps = {}>({ svg, displayName, handledProps = [] }: SvgIconCreateFnParams<TProps>) => {
  const Component: React.FC<React.HTMLAttributes<HTMLSpanElement> & TProps & SvgIconProps> & {
    handledProps: (keyof (TProps & SvgIconProps))[];
  } = props => {
    const context: StylesContextValue & { rtl: boolean } = React.useContext(ThemeContext);

    const {
      alt,
      'aria-label': ariaLabel,
      bordered,
      circular,
      className,
      design,
      disabled,
      outline,
      rotate = 0,
      size = 'medium',
      styles,
      variables,
      xSpacing,
    } = props;

    const { classes } = useStyles(svgIconDisplayName, {
      className: svgIconClassName,
      mapPropsToStyles: () => ({
        bordered,
        circular,
        disabled,
        outline,
        rotate,
        size,
        xSpacing,
      }),
      mapPropsToInlineStyles: () => ({ className, design, styles, variables }),
      rtl: context.rtl,
    });

    const unhandledProps = getUnhandledProps([...svgIconHandledProps, ...handledProps], props);

    return React.createElement(
      'span',
      {
        role: 'img',
        'aria-hidden': alt || ariaLabel ? undefined : 'true',
        'aria-label': ariaLabel,
        className: classes.root,
        ...unhandledProps,
      },
      svg({ classes, rtl: context.rtl, icons: context.theme.icons, props }),
    );
  };

  Component.displayName = displayName;
  Component.handledProps = [...svgIconHandledProps, ...handledProps];

  return Component;
};

export default createSvgIcon;
