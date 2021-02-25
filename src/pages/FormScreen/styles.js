import { StyleSheet } from 'react-native';


export const style = StyleSheet.create({
    body: {  
        flex:1,
        alignItems: "center",
        backgroundColor: "#DFE1E6",
    },
    title: {
        height: 100,
        width: '100%',
        justifyContent: "center",
        backgroundColor: "#F5F9FF"
    },
    text: {
        textAlign: "center",
        marginTop: 20,
        color: "black",
        fontSize: 20,
    },
    form: {
        width: "100%",
    },
    label: {
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 5,
        fontSize: 16,
        fontWeight: "bold",
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
        backgroundColor: '#00000090',
        borderRadius: 10,
        paddingRight: 30,
        paddingLeft: 30,
        paddingBottom: 15,
        alignItems: "center",
        marginLeft: 50,
        marginRight: 50,
    },
    buttonSuccess: {
        backgroundColor: '#5cb85c',
        borderRadius: 10,
        paddingRight: 30,
        paddingLeft: 30,
        paddingBottom: 15,
        marginTop: 10,
        marginBottom: 15,
        alignItems: "center",
        marginLeft: 50,
        marginRight: 50,
    },
    buttonPrimary: {
        backgroundColor: '#428BCA',
        borderRadius: 10,
        paddingRight: 30,
        paddingLeft: 30,
        paddingBottom: 15,
        alignItems: "center",
        marginLeft: 50,
        marginRight: 50,
        marginTop: 20,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        fontWeight: 'bold'
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 20,
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
    },
    viewImage: {
        alignItems: "center",
    },
})