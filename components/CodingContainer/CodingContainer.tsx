import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { useRecoilState } from 'recoil'
import { codingMemeData } from '../../atom/codingMemeDataAtom'
import { useFonts, BalsamiqSans_700Bold, BalsamiqSans_400Regular_Italic } from '@expo-google-fonts/balsamiq-sans';
import CodingMemeButton from '../CodingMemeButton'

const CodingContainer = () => {

    const [codingMeme, setCodingMeme] = useRecoilState<any>(codingMemeData)
    const [fontsLoaded] = useFonts({
        BalsamiqSans_700Bold,
        BalsamiqSans_400Regular_Italic
    });

    return (
        <>
            <View style={styles.memeContainer}>
                {
                    (fontsLoaded) && (
                        <>
                            <Text style={[{fontFamily: 'BalsamiqSans_400Regular_Italic'}, styles.partOneText]}>
                                {codingMeme?.partOne}
                            </Text>
                            <Text style={[{fontFamily: 'BalsamiqSans_700Bold'}, styles.partTwoText]}>
                                {codingMeme?.partTwo}
                            </Text>
                        </>
                    )
                }
                
            </View>
            <View style={styles.buttonContainer}>
                <CodingMemeButton />
            </View>
        </>
    )
}

export default CodingContainer
