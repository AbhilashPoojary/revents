import React from "react";
import {
  Segment,
  Container,
  Header,
  Image,
  Button,
  Icon,
} from "semantic-ui-react";

export default function HomePage({ history }) {
  return (
    <Segment inverted textAlign='center' vertical className='musthead'>
      <Container>
        <Header as='h1' inverted>
          <Image
            size='massive'
            src='/assets/logo.png'
            style={{ marginBottom: 12 }}
          />
        </Header>
        <Button size='huge' onClick={() => history.push("/events")} inverted>
          Get started
          <Icon name='right arrow' inverted />
        </Button>
      </Container>
    </Segment>
  );
}
