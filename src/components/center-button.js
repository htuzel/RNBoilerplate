import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

const CenterButton = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 56px;
  width: 56px;
  background-color: #ffbf00;
  border-radius: 999px;
`;

export default CenterButton;
