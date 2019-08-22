import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        fontFamily: 'ShmulikCLM',
        marginTop: 5,
        alignSelf: 'stretch',
        color: 'black',
        textDecorationLine: 'underline'
    },
    ParashaTitle: {
        fontFamily: 'ShmulikCLM',
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 30,
        color: 'black',
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
        color: "black",
    },
    header: {
        fontFamily: 'ShmulikCLM',
        flex: 1,
        fontSize: 18,
        color: "green",
        textAlign: 'center',
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
        paddingBottom: 10
    },
    columnView: {
        fontFamily: 'ShmulikCLM',
        width: '25%',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center'
    }
});