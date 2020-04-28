import * as React from 'react';

import ComponentExample from '../../../../components/ComponentDoc/ComponentExample';
import ExampleSection from '../../../../components/ComponentDoc/ExampleSection';

const Usage = () => (
  <ExampleSection title="Usage">
    <ComponentExample
      title="Simple"
      description="Simple card with title, body and footer"
      examplePath="components/Card/Usage/CardExampleSimple"
    />
    <ComponentExample
      title="With preview and checkbox"
      description="Example of adding Checkbox in TopControls and setting up media preview"
      examplePath="components/Card/Usage/CardExampleWithPreview"
    />
    <ComponentExample
      title="Focusable card"
      description="Example of card which can be focused and clicked"
      examplePath="components/Card/Usage/CardExampleFocusable"
    />
    <ComponentExample
      title="Cards in navigable grid"
      description="Example of cards in a grid with keyboard navigation"
      examplePath="components/Card/Usage/CardExampleFocusableGrid"
    />
    <ComponentExample
      title="Cards with actionable children in navigable grid"
      description="Example of cards in a grid with keyboard navigation for cards and inside cards"
      examplePath="components/Card/Usage/CardExampleFocusableChildrenGrid"
    />
  </ExampleSection>
);

export default Usage;
