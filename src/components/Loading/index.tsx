import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <ActivityIndicator color="#FFF" />
    </Container>
  );
};

export default Loading;
