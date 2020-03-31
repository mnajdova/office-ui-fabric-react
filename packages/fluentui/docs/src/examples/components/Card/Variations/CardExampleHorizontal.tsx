import { Button, Flex, Image, Text, Card } from '@fluentui/react-northstar';
import * as React from 'react';
import { Download, More } from '@fluentui/react-icons-northstar';

const CardExampleHorizontal = () => (
  <Card compact horizontal>
    <Card.Preview horizontal>
      <Image style={{ height: '115px', width: '115px' }} src="public/images/wireframe/square-image.png" />
    </Card.Preview>
    <Card.Column>
      <Card.Header>
        <Text content="It's a wonderful life" weight="bold" />
      </Card.Header>
      <Card.Body>
        <Text content="Citizens of distant epochs muse about..." />
      </Card.Body>
      <Card.Footer fitted>
        <Flex space="between" vAlign="center">
          <Text content="2.4k likes" />
          <Flex>
            <Button icon={<Download />} iconOnly text title="Download" />
            <Button icon={<More />} iconOnly text title="More" />
          </Flex>
        </Flex>
      </Card.Footer>
    </Card.Column>
  </Card>
);

export default CardExampleHorizontal;
