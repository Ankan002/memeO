/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import { ColorSchemeName } from 'react-native';

import { RootStackParamList, RootTabParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import Memes from '../screens/Memes';
import Coding from '../screens/Coding';
import AppTheme from '../theme/AppTheme';
import { useRecoilState } from 'recoil';
import { memeData } from '../atom/memeDataAtom';
import { memeLoading } from '../atom/memeLoadingAtom';
import { getMemes } from '../utils/getMemes';
import { codingMemeData } from '../atom/codingMemeDataAtom';
import { codingMemeLoading } from '../atom/codingMemeLoadingAtom';
import { getCodingMeme } from '../utils/getCodingMeme';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? AppTheme : AppTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {

  const [memes, setMemes] = useRecoilState(memeData)
  const [isMemeLoading, setIsMemeLoading] = useRecoilState(memeLoading)
  const [codingMeme, setCodingMeme] = useRecoilState(codingMemeData)
  const [isCodingMemeLoading, setIsCodingMemeLoading] = useRecoilState(codingMemeLoading)


  useEffect(() => {
    getMemes(isMemeLoading, memes, setIsMemeLoading, setMemes)
    getCodingMeme(isCodingMemeLoading, setIsCodingMemeLoading, setCodingMeme)
  }, [])

  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Memes"
      screenOptions={{
        tabBarActiveTintColor: '#fd5a5a',
      }}>
      <BottomTab.Screen
        name="Memes"
        component={Memes}
        options={{
          title: 'Meme',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome5 name="laugh-squint" color={color} size={27} />,
        }}
      />
      <BottomTab.Screen
        name="Coding"
        component={Coding}
        options={{
          title: 'Coding',
          headerShown: false,
          tabBarIcon: ({ color }) => <AntDesign name="CodeSandbox" color={color} size={27} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
