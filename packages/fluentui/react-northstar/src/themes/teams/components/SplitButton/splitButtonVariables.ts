import { SiteVariablesPrepared } from '@fluentui/styles';
import { pxToRem } from '../../../../utils';

export interface SplitButtonVariables {
  borderRadius: string;
  borderColorPrimary: string;
  borderColor: string;
  borderColorDisabled: string;
  smallDimension: string;
  smallPadding: string;
  smallMinWidth: string;
  smallBoxShadow: string;
  padding: string;

  toggleButtonHeight: string;

  toggleButtonColor: string;
  toggleButtonBackgroundColor: string;
  toggleButtonBorderRadius: string;
  toggleButtonBorderColor: string;
  toggleButtonBoxShadow: string;

  toggleButtonColorHover: string;
  toggleButtonBackgroundColorHover: string;
  toggleButtonBorderColorHover: string;

  toggleButtonColorActive: string;
  toggleButtonBackgroundColorActive: string;
  toggleButtonBorderColorActive: string;

  toggleButtonBackgroundColorFocus: string;
  toggleButtonBorderColorFocus: string;
  toggleButtonColorFocus: string;

  toggleButtonPrimaryColor: string;
  toggleButtonPrimaryBackgroundColor: string;
  toggleButtonPrimaryBorderColor: string;
  toggleButtonPrimaryBoxShadow: string;
  toggleButtonPrimaryBackgroundColorActive: string;
  toggleButtonPrimaryBackgroundColorFocus: string;

  toggleButtonColorDisabled: string;
  toggleButtonBackgroundColorDisabled: string;
  toggleButtonBorderColorDisabled: string;
}

export default (siteVars: SiteVariablesPrepared): SplitButtonVariables => {
  return {
    borderRadius: siteVars.borderRadius,
    borderColor: siteVars.colorScheme.default.border,
    borderColorPrimary: siteVars.colors.brand[500],
    borderColorDisabled: siteVars.colorScheme.brand.foregroundDisabled,
    smallDimension: pxToRem(24),
    smallPadding: `0 ${pxToRem(8)}`,
    smallMinWidth: '0',
    smallBoxShadow: 'none',
    padding: `0 ${pxToRem(16)}`,

    toggleButtonHeight: pxToRem(32),

    toggleButtonColor: siteVars.colorScheme.default.foreground,
    toggleButtonBackgroundColor: siteVars.colorScheme.default.background,
    toggleButtonBorderRadius: siteVars.borderRadius,
    toggleButtonBorderColor: siteVars.colorScheme.default.border,
    toggleButtonBoxShadow: siteVars.shadowLevel1,

    toggleButtonColorHover: siteVars.colorScheme.brand.foregroundHover,
    toggleButtonBackgroundColorHover: siteVars.colorScheme.default.backgroundHover2,
    toggleButtonBorderColorHover: siteVars.colorScheme.default.borderHover,

    toggleButtonColorActive: siteVars.colorScheme.default.foregroundPressed,
    toggleButtonBackgroundColorActive: siteVars.colorScheme.default.backgroundPressed,
    toggleButtonBorderColorActive: siteVars.colorScheme.default.borderPressed,

    toggleButtonBackgroundColorFocus: undefined,
    toggleButtonBorderColorFocus: undefined,
    toggleButtonColorFocus: undefined,

    toggleButtonPrimaryColor: siteVars.colorScheme.brand.foreground4,
    toggleButtonPrimaryBackgroundColor: siteVars.colorScheme.brand.background,
    toggleButtonPrimaryBorderColor: 'transparent',
    toggleButtonPrimaryBoxShadow: siteVars.shadowLevel1Dark,
    toggleButtonPrimaryBackgroundColorActive: siteVars.colorScheme.brand.backgroundPressed,
    toggleButtonPrimaryBackgroundColorFocus: undefined,

    toggleButtonColorDisabled: siteVars.colorScheme.brand.foregroundDisabled,
    toggleButtonBackgroundColorDisabled: siteVars.colorScheme.default.backgroundDisabled,
    toggleButtonBorderColorDisabled: 'transparent',
  };
};
