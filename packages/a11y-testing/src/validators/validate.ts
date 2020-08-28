import { Rule, TestFacade } from '../types';

import { SlotRule } from './rules';

export const validateSlot = (rule: SlotRule, baseTestFacade: TestFacade) => {
  const slot = rule.getData();
  const slotProps = slot.props || [{}];
  slotProps.map(props => {
    const testFacade = baseTestFacade.forProps(props);

    if (slot.checkEvent) {
      testFacade.afterEvent(slot.name, slot.afterEvent, slot.afterEventData);
    }

    if (slot.checkClick) {
      testFacade.afterClick(slot.name);
    }

    if (slot.expectAttribute) {
      if (!testFacade.slotExists(slot.name)) {
        throw new Error(`Expected slot ${slot.name} does not exist`);
      } else if (!testFacade.attributeExists(slot.name, slot.expectedAttribute)) {
        throw new Error(`Expected attribute ${slot.expectedAttribute} does not exist for slot ${slot.name}`);
      } else if (
        slot.expectedValue !== undefined &&
        !testFacade.attributeHasValue(slot.name, slot.expectedAttribute, slot.expectedValue)
      ) {
        throw new Error(
          `Expected attribute ${slot.expectedAttribute} for slot ${slot.name} to have value ${
            slot.expectedValue
          }. Actual value: ${testFacade.getAttributeValue(slot.name, slot.expectedAttribute)}`,
        );
      }
    } else if (testFacade.attributeExists(slot.name, slot.expectedAttribute)) {
      throw new Error(`Attribute ${slot.expectedAttribute} not expected for slot ${slot.name}`);
    }
  });
};

export const validateBehavior = (rules: Rule[], testFacade: TestFacade) => {
  const errors: any[] = [];
  rules.map(rule => {
    try {
      if (rule instanceof SlotRule) {
        validateSlot(rule, testFacade);
      }
    } catch (e) {
      errors.push({ rule: rule.stringify(), error: e.message });
    }
  });
  return errors;
};
