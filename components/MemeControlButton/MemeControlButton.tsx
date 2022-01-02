import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { useRecoilState } from 'recoil'
import { memeLoading } from '../../atom/memeLoadingAtom'
import { currentPosition } from '../../atom/currentPositionAtom'
import { useFonts, BalsamiqSans_700Bold } from '@expo-google-fonts/balsamiq-sans';
import styles from './styles'

export type ControlButtonProps = {
    title: string,
    action: any
}

const MemeControlButton = (props: ControlButtonProps) => {

    const {title, action} = props
    const [loading, setLoading] = useRecoilState(memeLoading)
    const [position, setPosition] = useRecoilState(currentPosition) 

    const [fontsLoaded] = useFonts({
        BalsamiqSans_700Bold
    });

    return (
        <>
        {
            (fontsLoaded) && (
                <Pressable 
                    style={[
                        styles.button, 
                        (loading || (position === 0 && title === 'Previous')) ? {backgroundColor: '#F8F8F9'} : {backgroundColor: '#FD5A5A'},
                    ]}
                    onPress={action}
                >
                    <Text style={[
                        {fontFamily:'BalsamiqSans_700Bold'},
                        (loading || (position === 0 && title === 'Previous')) ? {color: '#353E4C'} : {color: 'white'},
                    ]}>
                        {title}
                    </Text>
                </Pressable>
            )
        }
        </>
    )
}

export default MemeControlButton
