import { AccessibilityAttributes } from '@fluentui/accessibility';
import * as customPropTypes from '@fluentui/react-proptypes';
import { getElementType, getUnhandledProps, useStyles, useTelemetry } from '@fluentui/react-bindings';
import { callable } from '@fluentui/styles';
import * as PropTypes from 'prop-types';
import * as React from 'react';
// @ts-ignore
import { ThemeContext } from 'react-fela';

import { SizeValue } from '../../utils';
import { ProviderContextPrepared, WithAsProp, withSafeTypeForAs } from '../../types';

export type SvgIconXSpacing = 'none' | 'before' | 'after' | 'both';

export type SvgIconFuncArg = {
  classes: { [iconSlot: string]: string };
  rtl: boolean;
  props: SvgIconProps;
};

export type SvgIconChildrenFn = (svgIcon: SvgIconFuncArg) => React.ReactNode;

export interface SvgIconProps {
  /** Alternative text. */
  alt?: string;

  'aria-label'?: AccessibilityAttributes['aria-label'];

  /** SvgIcon can appear with rectangular border. */
  bordered?: boolean;

  /** SvgIcon can appear as circular. */
  circular?: boolean;

  /** Additional CSS class name(s) to apply.  */
  className?: string;

  /**
   *  Content for childrenApi
   *  @docSiteIgnore
   */
  children?: SvgIconChildrenFn;

  /** An icon can show it is currently unable to be interacted with. */
  disabled?: boolean;

  /** An icon can provide an outline variant. */
  outline?: boolean;

  /** An icon can be rotated by the degree specified as number. */
  rotate?: number;

  /** Size of the icon. */
  size?: SizeValue;

  /** Adds space to the before, after or on both sides of the icon, or removes the default space around the icon ('none' value) */
  xSpacing?: SvgIconXSpacing;
}

export type SvgIconCreateFnParams = { svg: SvgIconChildrenFn; displayName: string; handledProps: string[] };

const SvgIcon: React.FC<WithAsProp<SvgIconProps>> & {
  className: string;
  handledProps: (keyof SvgIconProps)[];
} = props => {
  const context: ProviderContextPrepared = React.useContext(ThemeContext);

  const { setStart, setEnd } = useTelemetry(SvgIcon.displayName, context.telemetry);
  setStart();

  const { alt, 'aria-label': ariaLabel, bordered, circular, className, disabled, children, outline, rotate, size, xSpacing } = props;

  const { classes } = useStyles(SvgIcon.displayName, {
    className: SvgIcon.className,
    mapPropsToStyles: () => ({
      bordered,
      circular,
      disabled,
      outline,
      rotate,
      size,
      xSpacing
    }),
    mapPropsToInlineStyles: () => ({ className }),
    rtl: context.rtl
  });

  const ElementType = getElementType(props);
  const unhandledProps = getUnhandledProps(SvgIcon.handledProps, props);

  const element = (
    <ElementType
      role="img"
      aria-hidden={alt || ariaLabel ? undefined : 'true'}
      aria-label={ariaLabel}
      className={classes.root}
      {...unhandledProps}
    >
      {callable(children)({ classes, rtl: context.rtl, props })}
    </ElementType>
  );
  setEnd();

  return element;
};

SvgIcon.className = 'ui-icon';
SvgIcon.displayName = 'SvgIcon';
SvgIcon.defaultProps = {
  as: 'span',
  size: 'medium',
  rotate: 0
};

SvgIcon.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.func,
  className: PropTypes.string,
  bordered: PropTypes.bool,
  circular: PropTypes.bool,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  rotate: PropTypes.number,
  size: customPropTypes.size,
  xSpacing: PropTypes.oneOf(['none', 'before', 'after', 'both'])
};
SvgIcon.handledProps = Object.keys(SvgIcon.propTypes) as any;

/**
 * An SvgIcon displays a pictogram with semantic meaning.
 */
export default withSafeTypeForAs<typeof SvgIcon, SvgIconProps, 'span'>(SvgIcon);
