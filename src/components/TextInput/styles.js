import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

export default EStyleSheet.create({
  container: {
    backgroundColor: '$white',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    marginHorizontal: 11,
    marginVertical: 11,
    shadowColor: 'grey',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.26,
    elevation: 7,
    paddingLeft: 10,
    marginBottom: 25,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonContainer: {
    height: INPUT_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$white',
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 20,
    paddingHorizontal: 16,
    color: '$primaryBlue',
  },
  input: {
    flex: 1,
    height: INPUT_HEIGHT,
    borderTopRightRadius: BORDER_RADIUS,
    paddingHorizontal: 8,
    color: '$inputText',
    fontSize: 18,
  },
});
