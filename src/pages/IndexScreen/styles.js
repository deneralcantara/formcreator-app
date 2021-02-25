import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    body: {  
        flex:1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        textAlign: "center",
    },
    flatlist: {
        width: "100%",
        paddingLeft: 30,
        paddingRight: 30,
    },
    header: {
        marginTop: 50,
        fontWeight: "bold",
        fontSize: 15,
    },
    list_form: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        backgroundColor: '#0275d8',
        borderRadius: 10,
        paddingBottom: 15,
        alignItems: "center",
    },
    buttonAnswer: {
        backgroundColor: '#5cb85c',
        borderRadius: 10,
        paddingBottom: 15,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 11,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        fontWeight: 'bold'
    },
})