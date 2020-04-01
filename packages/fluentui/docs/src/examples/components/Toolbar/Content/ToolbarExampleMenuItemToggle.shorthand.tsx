import { Toolbar, ToolbarMenuItemProps } from '@fluentui/react-northstar';
import * as _ from 'lodash';
import * as React from 'react';
import { MoreIcon } from '@fluentui/react-icons-northstar';

const ToolbarExampleMenuItemToggle = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [activeIndexes, setActiveIndexes] = React.useState<number[]>([]);

  const handleToggleClick = (e: React.SyntheticEvent, props: ToolbarMenuItemProps) => {
    if (_.includes(activeIndexes, props.index)) {
      setActiveIndexes(_.without(activeIndexes, props.index));
    } else {
      setActiveIndexes([...activeIndexes, props.index]);
    }
  };

  return (
    <Toolbar
      aria-label="Toolbar can contain toggle items in a menu"
      items={[
        {
          icon: <MoreIcon />,
          key: 'more',
          active: menuOpen,
          title: 'More',
          menu: [
            {
              key: 'bold',
              active: _.includes(activeIndexes, 0),
              content: 'Bold',
              kind: 'toggle',
              icon: 'bold',
              index: 0,
              onClick: handleToggleClick,
            },
            {
              key: 'italic',
              active: _.includes(activeIndexes, 1),
              content: 'Italic',
              kind: 'toggle',
              icon: 'italic',
              index: 1,
              onClick: handleToggleClick,
            },
            { key: 'divider', kind: 'divider' },
            'About...',
          ],
          menuOpen,
          onMenuOpenChange: (e, { menuOpen }) => setMenuOpen(menuOpen),
        },
      ]}
    />
  );
};

export default ToolbarExampleMenuItemToggle;
