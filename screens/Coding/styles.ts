import { StyleSheet, Platform, StatusBar } from 'react-native'

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: '#F5F1F0',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    mainContainer: {
        flexGrow: 1,
        alignItems: 'center'
    }
})

export default styles