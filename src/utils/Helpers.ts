import { Platform } from 'react-native'
import { CommonActions } from '@react-navigation/native'

export const isIOS = () => {
    return Platform.OS == 'ios'
}

export const emptyFunction = () => { }

export const handleResetStack = (navigation: any, screenName: string) => {
    navigation.dispatch(
        CommonActions.reset({
            routes: [{ name: screenName }]
        })
    )
}
