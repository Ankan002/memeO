import React from 'react'
import { View, Text, ActivityIndicator, Pressable } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';
import { useRecoilState } from 'recoil';
import { codingMemeLoading } from '../../atom/codingMemeLoadingAtom';
import { codingMemeData } from '../../atom/codingMemeDataAtom';
import { getCodingMeme } from '../../utils/getCodingMeme';

const CodingMemeButton = () => {

    const [isCodingMemeLoading, setIsCodingMemeLoading] = useRecoilState(codingMemeLoading)
    const [codingMeme, setCodingMeme] = useRecoilState(codingMemeData)

    const onRefreshPressed = () => {
        if (isCodingMemeLoading) return
        getCodingMeme(isCodingMemeLoading, setIsCodingMemeLoading, setCodingMeme)
    }

    return (
        <Pressable
            style={[
                isCodingMemeLoading ? {backgroundColor: '#F5F1F0'} : {backgroundColor: '#F6727C'},
                styles.button
            ]}
            onPress={onRefreshPressed}
        >
            {
                isCodingMemeLoading ? (
                    <>
                        <ActivityIndicator size="large" color="#F6727C" />
                    </>
                ) : (
                    <FontAwesome name="refresh" size={60} color="#FFF" style={styles.buttonText} />
                )
            }
            
        </Pressable>
    )
}

export default CodingMemeButton
