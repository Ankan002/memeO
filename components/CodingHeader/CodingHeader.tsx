import React from 'react'
import { View, Text } from 'react-native'
import { useFonts, BalsamiqSans_700Bold, BalsamiqSans_400Regular_Italic } from '@expo-google-fonts/balsamiq-sans';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles'

const CodingHeader = () => {

    const [fontsLoaded] = useFonts({
        BalsamiqSans_700Bold,
        BalsamiqSans_400Regular_Italic
    });

    return (
        <>
        {
            (fontsLoaded) && (
                <View style={styles.headerContainer}>
                    <AntDesign name="CodeSandbox" color='#FFFFFF' size={40} style={styles.mainIcon} />
                    <Text style={[{fontFamily: 'BalsamiqSans_700Bold'}, styles.mainHeader]}>CODING</Text>
                    <Text  style={[{fontFamily: 'BalsamiqSans_400Regular_Italic'}, styles.textHeader]}>jokes</Text>
                </View>
            )
        }
        </>
        
    )
}

export default CodingHeader
