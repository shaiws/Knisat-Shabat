import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    fontFamily: 'ShmulikCLM',
    marginTop: 5,
    alignSelf: 'stretch',
    color: 'black',
    //textDecorationLine: 'underline',
  },
  copyrights: {
    fontSize: 10,
    textAlign: 'center',
    fontFamily: 'ShmulikCLM',
    marginTop: 5,
    alignSelf: 'stretch',
    color: 'black',
    textDecorationLine: 'underline',
  },
  ParashaTitle: {
    fontFamily: 'ShmulikCLM',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 30,
    color: 'darkblue',
  },
  date: {
    fontFamily: 'ShmulikCLM',
    alignSelf: 'center',
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
  },
  HebDate: {
    fontFamily: 'ShmulikCLM',
    alignSelf: 'center',
    fontSize: 20,
    color: 'black',
    paddingBottom: 10,
    textAlign: 'center',
  },
  text: {
    fontFamily: 'ShmulikCLM',
    flex: 1,
    fontSize: 18,
    color: 'black',
  },
  header: {
    fontSize: 14,
    color: 'darkgreen',
    textAlign: 'center',
    fontFamily: 'ShmulikCLM',

  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
  },
  modalView: {
    flex: 1,
    margin: 50,
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center"
  },
  button: {
    borderRadius: 80,
    padding: 10,
    width: '20%',
    elevation: 2,
    shadowColor: "gray",
  },
  buttonOpen: {
    backgroundColor: "white",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    margin: 5

  },
  city: {
    fontFamily: 'ShmulikCLM',
    flex: 1,
    alignSelf: 'stretch',
    fontSize: 18,
    color: 'black',

  },
  rowView: {
    fontFamily: 'ShmulikCLM',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 10,

  },
  columnView: {
    fontFamily: 'ShmulikCLM',
    width: '25%',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',

  },
  sides: {
    flexDirection: 'column',
    width: 50,
    borderColor: 'red',
    borderWidth: 2,
    backgroundColor: 'lightblue',
  },
  hebText: {
    flex: 1,
    alignSelf: 'stretch',
  },
  tableContainer: {
    flex: 1,
    paddingBottom: '5%',
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  tableHead: {
    height: 40,
    backgroundColor: '#f6f8fa'
  },
  tableWrapper: {
    flexDirection: 'row'
  },
  tableTitle: {
    flex: 1,
    backgroundColor: '#f6f8fa'
  },
  tableTitleText: {
    textAlign: 'center',
    fontFamily: 'ShmulikCLM',
    fontSize: 18,
    color: 'black'
  },
  tableHeaderText: {
    textAlign: 'center',
    fontFamily: 'ShmulikCLM',
    fontSize: 18,
    color: 'darkgreen',
  },
  tableRow: {
    height: 28
  },
  tableText: {
    textAlign: 'center',
    fontFamily: 'ShmulikCLM',
    fontSize: 18,
    color: 'black',
  }
}
);

