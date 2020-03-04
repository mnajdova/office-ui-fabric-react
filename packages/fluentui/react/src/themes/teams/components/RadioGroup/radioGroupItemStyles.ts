import { ComponentSlotStylesPrepared, ICSSInJSStyle } from '@fluentui/styles';
import { RadioGroupItemProps, RadioGroupItemState } from '../../../../components/RadioGroup/RadioGroupItem';
import { RadioGroupItemVariables } from './radioGroupItemVariables';
import { pxToRem } from '../../../../utils';
import Icon from '../../../../components/Icon/Icon';
import getBorderFocusStyles from '../../getBorderFocusStyles';

const restHoverFocusTextColor = textColor => ({
  color: textColor,

  ':hover': {
    color: textColor
  },

  ':focus': {
    color: textColor
  }
});

const radioStyles: ComponentSlotStylesPrepared<RadioGroupItemProps & RadioGroupItemState, RadioGroupItemVariables> = {
  root: ({ props: p, variables: v, theme: { siteVariables } }): ICSSInJSStyle => ({
    position: 'relative',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: `${pxToRem(1)}`,
    borderColor: 'transparent',
    borderRadius: `${pxToRem(2)}`,
    color: v.textColorDefault,
    cursor: 'pointer',
    display: p.vertical ? 'flex' : 'inline-flex',
    fontSize: v.textFontSize,
    padding: v.padding,

    ':hover': {
      color: v.textColorDefaultHoverFocus,

      [`& .${Icon.className}`]: {
        color: v.iconBorderColorDefaultHover
      }
    },

    ':focus': {
      color: v.textColorDefaultHoverFocus
    },

    ...(p.checked && {
      ...restHoverFocusTextColor(v.textColorChecked)
    }),

    ...(p.disabled && {
      ...restHoverFocusTextColor(v.colorDisabled)
    }),

    ...getBorderFocusStyles({ siteVariables })
  }),

  indicator: ({ props: p, variables: v }): ICSSInJSStyle => {
    const commonIndicatorBeforeStyles = {
      content: "' '",
      display: 'block',
      borderRadius: '50%',
      width: pxToRem(12),
      height: pxToRem(12)
    };

    return {
      margin: `0 ${pxToRem(12)} 0 0`,

      ':before': {
        ...commonIndicatorBeforeStyles,
        backgroundColor: 'transparent',
        border: `2px solid ${v.textColorDefault}`
      },

      ...(p.checked &&
        !p.disabled && {
          ':before': {
            ...commonIndicatorBeforeStyles,
            backgroundColor: v.iconBackgroundColorChecked
          }
        }),

      ...(p.disabled && {
        ...(!p.checked && {
          ':before': {
            ...commonIndicatorBeforeStyles,
            backgroundColor: 'transparent',
            border: `2px solid ${v.colorDisabled}`
          }
        }),

        ...(p.checked && {
          ':before': {
            ...commonIndicatorBeforeStyles,
            backgroundColor: v.colorDisabled
          }
        })
      })
    };
  }
};

export default radioStyles;
