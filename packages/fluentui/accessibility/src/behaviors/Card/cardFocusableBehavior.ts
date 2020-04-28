import { Accessibility } from '../../types';
import { CardBehaviorProps } from './cardBehavior';
import * as keyboardKey from 'keyboard-key';
import { IS_FOCUSABLE_ATTRIBUTE } from '../../attributes';

/**
 * @description
 * Behavior for a focusable card component
 * @specification
 * Adds role='group'.
 * Adds attribute 'aria-disabled=true' based on the property 'disabled'.
 * Adds attribute 'tabIndex=0' to 'root' slot.
 * Adds attribute 'data-is-focusable=true' to 'root' slot.
 * Triggers 'performClick' action with 'Enter' or 'Spacebar' on 'root'.
 */
const cardFocusableBehavior: Accessibility<CardBehaviorProps> = props => ({
  attributes: {
    root: {
      role: 'group',
      tabIndex: 0,
      [IS_FOCUSABLE_ATTRIBUTE]: true,
      'aria-disabled': props.disabled,
    },
  },
  keyActions: {
    root: {
      performClick: {
        keyCombinations: [{ keyCode: keyboardKey.Enter }, { keyCode: keyboardKey.Spacebar }],
      },
    },
  },
});

export default cardFocusableBehavior;
