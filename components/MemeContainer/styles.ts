import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    memeContainer: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        marginTop: 40,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    memeImage: {
        height: 300, 
        width: '100%', 
        resizeMode: 'contain',
        marginTop: 20
    },
    loadingComponentContainer: {
        height: 300,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 15
    }
})

export default styles