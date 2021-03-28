import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    flexDirection: "row",
    flexBasis: '60%',
    flex: 1,
    padding: 12,
    marginTop: 15,
    marginVertical: 3,
    backgroundColor: '#FFF',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  infoText: {
    color: '$primaryYellow',
    fontSize: 24,
    fontWeight: '600',
  },
  text: {
    color: '$inputText',
    fontSize: 18,
    fontWeight: '500',
  },
  deleteBtn: {
    flex: 1,
  },
  streakContent: {
    padding: 10,
    borderWidth: 4,
    borderRadius: 50,
    borderColor: '#FFA700',
    alignItems: 'center',
    width:80,
    height:80
  },
});
