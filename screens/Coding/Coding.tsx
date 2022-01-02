import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import CodingHeader from '../../components/CodingHeader'
import CodingContainer from '../../components/CodingContainer'
import styles from './styles'
import { StatusBar } from 'expo-status-bar'

const Coding = () => {
    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <StatusBar style='light' backgroundColor='#F6727C' />
            <CodingHeader />
            <View style={styles.mainContainer}>
                <CodingContainer />
            </View>
            
        </SafeAreaView>
    )
}

export default Coding
