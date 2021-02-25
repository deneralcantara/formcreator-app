import { StyleSheet } from 'react-native';


export const style = StyleSheet.create({
    body: {  
        flex:1,
        alignItems: "center",
        backgroundColor: "#DFE1E6",
    },
    form: {
        alignItems: "center",
    },
    flatlist: {
        width: "100%",
        paddingLeft: 30,
        paddingRight: 30,
    },
    label: {
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 5,
        fontSize: 16,
        fontWeight: "bold",
    },
    answer: {
        fontSize: 15,
        fontWeight: "normal",
        color: "#000",
        marginLeft: 20,
    },
    input: {
        borderWidth: 1,
        width: "90%",
        borderColor: '#fff',
        backgroundColor: '#fff',
        paddingRight: 10,
        paddingLeft: 20,
        marginBottom: 10,
        paddingTop: 10,
        marginHorizontal: 15,
        color: '#979797',
        lineHeight: 15,
        borderRadius: 10,
    },
    button: {
        backgroundColor: '#5cb85c',
        borderRadius: 10,
        paddingRight: 30,
        paddingLeft: 30,
        paddingBottom: 15,
        alignItems: "center",
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 20,
        marginTop: 50,
    },
    buttonBack: {
        backgroundColor: '#0275d8',
        borderRadius: 10,
        paddingRight: 30,
        paddingLeft: 30,
        paddingBottom: 15,
        alignItems: "center",
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 20,
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 15,
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        fontWeight: 'bold'
    },
    answerText: {
        fontSize: 17,
        fontWeight: "normal",
        color: "#000",
    },
    question: {
        fontSize: 17,
        fontWeight: "normal",
        color: "#000",
        marginTop: 20,
    },
    when_answered: {
        fontSize: 15,
        fontWeight: "normal",
        color: "#000",
    },
})