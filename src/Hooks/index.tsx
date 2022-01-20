import React from 'react';
import { Col, Row } from 'react-bootstrap';

import UseStateInfo from './Info/UseStateInfo';
import CountButton from './Examples/CountButton';
import List from './Examples/List';
import UseEffectInfo from './Info/UseEffectInfo';
import UseRefInfo from './Info/UseRefInfo';

const Hooks = () => {
  return (
    <Row>
      <Col>
        <UseStateInfo />
        <UseEffectInfo />
        <UseRefInfo />
      </Col>
      <Col>
        <List />
        <CountButton />
      </Col>
    </Row>
  );
};

export default Hooks;
