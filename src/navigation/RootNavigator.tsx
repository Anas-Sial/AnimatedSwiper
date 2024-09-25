import React from 'react'
import * as ui from '../screens'
import { SCREEN } from '../enums/AppEnums'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const screenOptionStyle = {
    headerShown: false,
}

const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name={SCREEN.HOME} component={ui.Home} />
        </Stack.Navigator>
    )
}

export default RootNavigator
