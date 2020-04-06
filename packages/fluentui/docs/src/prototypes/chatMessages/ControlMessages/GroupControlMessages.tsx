import * as React from 'react';
import * as _ from 'lodash';
import * as keyboardKey from 'keyboard-key';

import { List, ChatMessageProps, Flex } from '@fluentui/react-northstar';
import ControlMessage from './ControlMessage';
import controlMessagesGroupBehavior from './controlMessagesGroupBehavior';
import { ArrowDownIcon, ParticipantAddIcon, ArrowRightIcon } from '@fluentui/react-icons-northstar';

type GroupControlMessagesProps = {
  items: ChatMessageProps[];
  mainMessage: ChatMessageProps;
};

const GroupControlMessages = (props: GroupControlMessagesProps) => {
  const [expanded, setExpanded] = React.useState(false);
  const [focused, setFocused] = React.useState(false);

  const renderItems = () => {
    const { items } = props;
    return _.map(items, (item, index) => {
      return {
        content: <ControlMessage message={item} />,
        key: `control-message-${index}`,
      };
    });
  };

  return (
    <Flex
      onKeyDown={e => {
        const eventCode = keyboardKey.getCode(e);
        if (eventCode === keyboardKey.Enter) {
          setExpanded(true);
        }
        if (eventCode === keyboardKey.Escape) {
          setExpanded(false);
          setFocused(true);
        }
      }}
    >
      {expanded ? (
        <ArrowDownIcon onClick={() => setExpanded(!expanded)} />
      ) : (
        <ArrowRightIcon onClick={() => setExpanded(!expanded)} />
      )}
      <ParticipantAddIcon />
      {expanded ? (
        <List accessibility={controlMessagesGroupBehavior} items={renderItems()} aria-label={'control messages'} />
      ) : (
        <ControlMessage focused={focused} message={props.mainMessage} />
      )}
    </Flex>
  );
};

export default GroupControlMessages;
