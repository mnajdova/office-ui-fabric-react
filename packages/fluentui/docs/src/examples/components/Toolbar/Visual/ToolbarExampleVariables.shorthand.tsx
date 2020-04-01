import { Toolbar } from '@fluentui/react-northstar';
import * as React from 'react';
import { CallVideoIcon, MoreIcon } from '@fluentui/react-icons-northstar';

const ToolbarExampleVariables = () => {
  return (
    <Toolbar
      variables={{
        background: 'lightblue',
        dividerBorder: 'red',
        foregroundActive: 'red',
        menuBackground: 'lightblue',
        menuDividerBorder: 'yellow',
        menuItemForeground: 'grey',
      }}
      items={[
        // ToolbarDivider
        { kind: 'divider', key: 'divider' },
        { kind: 'divider', key: 'divider-variables', variables: { dividerBorder: 'green' } },

        // ToolbarGroup - no variables :(
        {
          kind: 'group',
          key: 'group',
          items: [
            // ToolbarDivider
            { kind: 'divider', key: 'divider' },
            { kind: 'divider', key: 'divider-variables', variables: { dividerBorder: 'orange' } },

            // ToolbarItem
            { key: 'item', active: true, icon: 'skype' },
            { key: 'item-variables', active: true, icon: 'skype', variables: { foregroundActive: 'orange' } },
          ],
        },

        // kind="toggle" is just ToolbarItem
        // ---

        // ToolbarCustomItem
        { kind: 'custom', key: 'custom', content: 'Custom' },
        { kind: 'custom', key: 'custom-variables', content: 'Custom', variables: { background: 'pink' } },

        // ToolbarItem
        {
          // switched to svg icon
          icon: <CallVideoIcon />,
          key: 'item',
          active: true,
        },
        {
          icon: <CallVideoIcon />,
          key: 'item-variables',
          active: true,
          variables: { foregroundActive: 'green' },
        },

        // ToolbarItem with menu
        {
          icon: <MoreIcon />,
          key: 'item-menu',
          menu: {
            items: [
              // ToolbarMenuDivider
              { kind: 'divider', key: 'divider' },
              { kind: 'divider', key: 'divider-variables', variables: { menuDividerBorder: 'orange' } },

              // ToolbarMenuItem
              { key: 'item', content: 'Item' },
              { key: 'item-variables', content: 'Item', variables: { menuItemForeground: 'orange' } },

              // ToolbarMenuItem with menu
              {
                key: 'item-menu',
                content: 'Item',
                menu: {
                  items: [
                    { key: 'item', content: 'Item' },
                    { key: 'item-variables', content: 'Item', variables: { menuItemForeground: 'gold' } },
                  ],
                  styles: { width: '100px' /* decrease width to fit other menus */ },
                },
                menuOpen: true,
              },
              {
                key: 'item-menu-variables',
                content: 'Item',
                menu: {
                  items: [
                    { key: 'item', content: 'Item' },
                    { key: 'item-variables', content: 'Item', variables: { menuItemForeground: 'gold' } },
                  ],
                  styles: { width: '100px' /* decrease width to fit other menus */ },
                },
                menuOpen: true,
                variables: { menuItemForeground: 'orange', menuBackground: 'grey' },
                styles: {
                  marginTop: '100px' /* avoid collision with other opened menu */,
                },
              },
            ],
            styles: { width: '100px' /* decrease width to fit other menus */ },
          },
          menuOpen: true,
          styles: { marginRight: '200px' /* avoid collision with other opened menu */ },
        },
        {
          icon: <MoreIcon />,
          key: 'item-menu-variables',
          menu: {
            items: [
              { kind: 'divider', key: 'divider' },
              { kind: 'divider', key: 'divider-variables', variables: { menuDividerBorder: 'orange' } },

              // ToolbarMenuItem
              { key: 'item', content: 'Item' },
              { key: 'item-variables', content: 'Item', variables: { menuItemForeground: 'orange' } },
              // ToolbarMenuItem with menu
              {
                key: 'item-menu',
                content: 'Item',
                menu: {
                  items: [
                    { key: 'item', content: 'Item' },
                    { key: 'item-variables', content: 'Item', variables: { menuItemForeground: 'gold' } },
                  ],
                  styles: { width: '100px' /* decrease width to fit other menus */ },
                },
                menuOpen: true,
              },
              {
                key: 'item-menu-variables',
                content: 'Item',
                menu: {
                  items: [
                    { key: 'item', content: 'Item' },
                    { key: 'item-variables', content: 'Item', variables: { menuItemForeground: 'gold' } },
                  ],
                  styles: { width: '100px' /* decrease width to fit other menus */ },
                },
                menuOpen: true,
                variables: { menuItemForeground: 'orange', menuBackground: 'grey' },
                styles: { marginTop: '100px' /* avoid collision with other opened menu */ },
              },
            ],
            styles: { width: '100px' /* decrease width to fit other menus */ },
          },
          menuOpen: true,
          variables: { menuBackground: 'pink', menuDividerBorder: 'white', menuItemForeground: 'olive' },
        },
      ]}
    />
  );
};

export default ToolbarExampleVariables;
