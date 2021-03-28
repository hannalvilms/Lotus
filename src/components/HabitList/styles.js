import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    paddingTop: 0,
    backgroundColor: '#FFF',
    height: '91%',
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    borderRadius: 40,
  },
  habitItemContainer: {
    height: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: '#DBF0EE',
    borderRadius: 40,
    width: '97%',
    shadowColor: 'grey',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.26,
    elevation: 5,
  },
  habitItem: {
    flexDirection: 'row',
    padding: 7,
  },
  textBox: {
    flex: 3,
    justifyContent: 'center',
  },
  text: {
    color: '#262626',
    paddingLeft: 10,
    fontSize: 25,
    fontWeight: '500',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});
