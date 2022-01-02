import { StyleSheet, Platform, StatusBar } from 'react-native'

const styles= StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: '#F5F1F0',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        paddingHorizontal: 25 
    },
    mainContainer:{
        flexGrow: 1,
        marginTop: 20,
        marginBottom: 10,
    },
    loadingComponentContainer: {
        height: '80%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    memeContainer: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    }
})

export default styles