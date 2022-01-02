import React, {useEffect, useState} from 'react'
import { View, Text } from 'react-native'
import { useFonts, BalsamiqSans_700Bold } from '@expo-google-fonts/balsamiq-sans';
import styles from './styles'

const MemeHeader = () => {
    const [fontsLoaded] = useFonts({
        BalsamiqSans_700Bold
    });

    const [time, setTime] = useState('')

    const getTime = ()  => {
        const time = (new Date()).getHours()

        if (time >= 5 && time < 12) setTime('Good Morning')
        else if(time >= 12 && time < 17) setTime('Good Afternoon')
        else if(time >= 17 && time < 22) setTime('Good Evening')
        else if(time > 22 || time < 5) setTime('Good Night')
    }

    useEffect(() => {
        getTime()
    }, [])

    return (
        <View style={styles.greetingContainer}>
            {
                fontsLoaded && (
                    <Text style={[{fontFamily:'BalsamiqSans_700Bold'}, styles.greetingText]}>{time}</Text>
                )
            }
            
        </View>
    )
}

export default MemeHeader
