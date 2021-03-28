import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;
export default EStyleSheet.create({
  btnContainer: {
    backgroundColor: '$white',
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    color: '#262626',
    borderRadius: 50,
  },
  input: {
    flex: 1,
    height: 48,
    borderTopRightRadius: 50,
    paddingHorizontal: 8,
    color: '#262626',
    fontSize: 18,
  },
});
