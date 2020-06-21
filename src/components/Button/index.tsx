import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

import Loading from '../Loading';

interface ButtonProps extends RectButtonProperties {
  children: string;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => {
  return (
    <Container {...rest}>
      {loading ? <Loading /> : <ButtonText>{children}</ButtonText>}
    </Container>
  );
};

export default Button;
