import * as _ from 'lodash';
import { ComponentSlotStylesPrepared, FontIconSpec, ICSSInJSStyle, ThemeIconSpec } from '@fluentui/styles';

import { pxToRem } from '../../../../utils';
import { StrictColorScheme, ItemType } from '../../../types';
import { IconXSpacing, IconStylesProps } from '../../../../components/Icon/Icon';

import { IconVariables, iconColorAreas } from './iconVariables';

export const emptyIcon: ThemeIconSpec = { icon: { content: '?', fontFamily: '' } };

const getPaddedStyle = (): ICSSInJSStyle => ({
  padding: pxToRem(4),
});

const getBorderedStyles = (boxShadowColor: string): ICSSInJSStyle => {
  return {
    ...getPaddedStyle(),

    boxShadow: `0 0 0 .05rem ${boxShadowColor} inset`,
  };
};

const getIconColor = (variables, colors: StrictColorScheme<ItemType<typeof iconColorAreas>>) => {
  return _.get(colors, 'foreground', variables.color || 'currentColor');
};

const getXSpacingStyles = (xSpacing: IconXSpacing, horizontalSpace: string): ICSSInJSStyle => {
  switch (xSpacing) {
    case 'none':
      return { marginLeft: 0, marginRight: 0 };
    case 'before':
      return { marginLeft: horizontalSpace, marginRight: 0 };
    case 'after':
      return { marginLeft: 0, marginRight: horizontalSpace };
    case 'both':
      return { marginLeft: horizontalSpace, marginRight: horizontalSpace };
  }
};

const iconStyles: ComponentSlotStylesPrepared<IconStylesProps, IconVariables> = {
  root: ({ props: p, variables: v, theme: t, rtl }): ICSSInJSStyle => {
    const iconSpec: ThemeIconSpec = (p.name && t.icons[p.name]) || emptyIcon;
    const colors = v.colorScheme[p.color];

    return {
      speak: 'none',
      verticalAlign: 'middle',

      ...getXSpacingStyles(p.xSpacing, v.horizontalSpace),

      ...(p.circular && { ...getPaddedStyle(), borderRadius: '50%' }),
      ...(p.disabled && {
        color: v.disabledColor,
      }),

      // overriding base theme border handling
      ...((p.bordered || v.borderColor) && getBorderedStyles(v.borderColor || getIconColor(v, colors))),

      fontWeight: 900, // required for the fontAwesome to render
      alignItems: 'center',
      boxSizing: 'content-box',
      display: 'inline-flex',
      justifyContent: 'center',

      fontFamily: iconSpec.icon.fontFamily,
      fontSize: v[`${p.size}Size`],
      lineHeight: 1,
      width: v[`${p.size}Size`],
      height: v[`${p.size}Size`],

      '::before': {
        content: (iconSpec.icon as FontIconSpec).content,
      },

      transform: rtl ? `scaleX(-1) rotate(${-1 * p.rotate}deg)` : `rotate(${p.rotate}deg)`,
    };
  },
};

export default iconStyles;
