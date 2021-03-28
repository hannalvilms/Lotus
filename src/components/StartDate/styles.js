import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    height: 80,
    alignItems: 'center',
    marginHorizontal: 11,
    marginVertical: 11,
    marginTop: 5,
    marginBottom: 25
  },
  buttonContainer: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 10,
    paddingHorizontal: 16,
    color: 'pink',
  },
  input: {
    flex: 1,
    color:'#262626',
    height: 45,
    paddingHorizontal: 8,
    fontSize: 15,
  },
});
