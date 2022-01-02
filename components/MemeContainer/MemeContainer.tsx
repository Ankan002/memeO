import React from 'react'
import { View, Text, Image, ActivityIndicator } from 'react-native'
import { useRecoilState } from 'recoil'
import { memeData } from '../../atom/memeDataAtom'
import { currentPosition } from '../../atom/currentPositionAtom'
import { memeLoading } from '../../atom/memeLoadingAtom'
import MemeControlButton from '../MemeControlButton'
import { getMemes } from '../../utils/getMemes'
import styles from './styles'

const MemeContainer = () => {

    const [memes, setMeme] = useRecoilState<any>(memeData)
    const [position, setPosition] = useRecoilState<any>(currentPosition)
    const [isMemeLoading, setIsMemeLoading] = useRecoilState<any>(memeLoading)

    const onPreviousPress = () => {
        if (isMemeLoading || position === 0) return
        setPosition(position - 1)
    }

    const onNextPress = () => {
        if (isMemeLoading) return
        if (position === memes.length - 1){
            getMemes(isMemeLoading, memes, setIsMemeLoading, setMeme)
            setPosition(position + 1)
        }
        else{
            setPosition(position + 1)
        }
    }

    return (
        <View style={styles.memeContainer}>
            {
                isMemeLoading ? (
                    <View style={styles.loadingComponentContainer}>
                            <ActivityIndicator
                                size='large'
                                color='#fd5a5a' 
                            />
                    </View>
                ) : (
                    <Image
                        source={{uri: memes[position]?.url}} 
                        style={styles.memeImage}
                    />
                )
            }
            <View style={styles.buttonContainer}>
                <MemeControlButton title='Previous' action={onPreviousPress} />
                <MemeControlButton title='Next' action={onNextPress} />
            </View>
            
            
            
        </View>
    )
}

export default MemeContainer
