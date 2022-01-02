import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    memeContainer: {
        width: '80%',
        minHeight: 400,
        backgroundColor: '#FFFFFF',
        marginTop: -130,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems:'center'
    },
    partOneText: {
        fontSize: 18,
        textAlign: "center",
        padding: 5
    },
    partTwoText: {
        fontSize: 20,
        textAlign: "center",
        padding: 5,
        paddingBottom: 45
    },
    buttonContainer: {
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -40
    }
})

export default styles