import React from 'react';
import { DefaultTheme } from '@react-navigation/native'

const AppTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        card: '#FFFFFF',
        border: 'rgb(199, 199, 204)',
    }
}

export default AppTheme