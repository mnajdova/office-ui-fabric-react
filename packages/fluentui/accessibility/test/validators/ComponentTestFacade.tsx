import * as React from 'react';
import { Props, PropValue, TestFacade } from '../../src/validators';
import * as ReactDOM from 'react-dom';

export class ComponentTestFacade implements TestFacade {
  private actual: any;

  constructor(private Component: React.FC, private props: Props) {
    const container = document.createElement('div');
    document.body.appendChild(container);

    ReactDOM.render(<Component {...props} />, container);
    this.actual = container.firstChild;
  }

  public slotExists(selector: string) {
    return selector === 'root' || this.actual.getElementById(selector).length > 0;
  }

  public attributeExists(selector: string, attributeName: string) {
    return this.slotExists(selector) && selector === 'root'
      ? this.actual.getAttribute(attributeName) !== undefined && this.actual.getAttribute(attributeName) !== null
      : this.actual.getElementById(selector).getAttribute(attributeName) !== undefined &&
          this.actual.getElementById(selector).getAttribute(attributeName) !== null;
  }

  public attributeHasValue(selector: string, attributeName: string, value: PropValue) {
    return this.attributeExists(selector, attributeName) && selector === 'root'
      ? this.actual.getAttribute(attributeName) === value
      : this.actual.getElementById(selector).getAttribute(attributeName) === value;
  }

  public getAttributeValue = (selector: string, attributeName: string) => {
    return selector === 'root'
      ? (this.actual.getAttribute(attributeName) as PropValue)
      : (this.actual.getElementById(selector).getAttribute(attributeName) as PropValue);
  };

  public forProps = (props: Props) => {
    return new ComponentTestFacade(this.Component, { ...this.props, ...props });
  };
}
