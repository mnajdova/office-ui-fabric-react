import * as React from 'react';
import { HookTestFacade, imageBehaviorDefinition, validateBehavior } from '../../src/validators';
import { ImageState } from '@fluentui/react-image/src';
import { ComponentTestFacade } from './ComponentTestFacade';

export const useImageState = (state: ImageState) => {
  state['aria-hidden'] = state.alt || state['aria-label'] ? undefined : 'true';
};

export const Image: React.FC<{ alt?: string }> = props => {
  return <img {...props} aria-hidden={props.alt || props['aria-label'] ? undefined : 'true'} />;
};

describe('Image', () => {
  test('accessibility for component', () => {
    const testFacade = new ComponentTestFacade(Image, {});
    const errors = validateBehavior(imageBehaviorDefinition, testFacade);
    expect(errors).toEqual([]);
  });
});

// test("accessibility", () => {
//   const testFacade = new HookTestFacade(useImageState, {});
//   const errors = validateBehavior(imageBehaviorDefinition, testFacade);
//   expect(errors).toEqual([]);
// });
