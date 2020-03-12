import { pxToRem } from '../../../../utils';
import { ComponentSlotStylesPrepared, ICSSInJSStyle } from '@fluentui/styles';
import { AvatarStylesProps } from '../../../../components/Avatar/Avatar';
import { AvatarVariables } from './avatarVariables';

const sizeToPxValue = {
  smallest: 24,
  smaller: 24,
  small: 24,
  medium: 32,
  large: 36,
  larger: 42,
  largest: 48
};

// TODO: figure out icon sizes
const iconSizeToPxValue = {
  smallest: 7,
  smaller: 10,
  small: 12,
  medium: 16,
  large: 20,
  larger: 32,
  largest: 40
};

const avatarStyles: ComponentSlotStylesPrepared<AvatarStylesProps, AvatarVariables> = {
  root: ({ props: p }): ICSSInJSStyle => {
    const sizeInRem = pxToRem(sizeToPxValue[p.size]);

    return {
      position: 'relative',
      backgroundColor: 'inherit',
      display: 'inline-block',
      verticalAlign: 'middle',
      height: sizeInRem,
      width: sizeInRem
    };
  },
  image: ({ props: p, variables: v }): ICSSInJSStyle => ({
    borderColor: v.avatarBorderColor,
    borderStyle: 'solid',
    borderWidth: v.avatarBorderWidth,

    height: '100%',
    objectFit: 'cover',
    verticalAlign: 'top',
    width: '100%',

    ...(p.square && {
      borderRadius: v.squareAvatarBorderRadius
    })
  }),
  label: ({ props: p, variables: v }): ICSSInJSStyle => {
    const sizeInRem = pxToRem(sizeToPxValue[p.size]);
    return {
      display: 'inline-block',
      width: sizeInRem,
      height: sizeInRem,
      lineHeight: sizeInRem,
      fontSize: pxToRem(sizeToPxValue[p.size] / 2.333),
      verticalAlign: 'top',
      textAlign: 'center',
      padding: '0px',
      ...(p.square && {
        borderRadius: v.squareAvatarBorderRadius
      })
    };
  },
  icon: ({ props: p, variables: v }): ICSSInJSStyle => ({
    color: v.iconColor,
    backgroundColor: v.iconBackgroundColor,
    padding: pxToRem((sizeToPxValue[p.size] - iconSizeToPxValue[p.size]) / 2)
  }),
  status: ({ variables: v }): ICSSInJSStyle => ({
    position: 'absolute',
    bottom: 0,
    right: 0,
    boxShadow: `0 0 0 ${v.statusBorderWidth} ${v.statusBorderColor}`
  })
};

export default avatarStyles;
