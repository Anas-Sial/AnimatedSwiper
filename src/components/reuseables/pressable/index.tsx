import { TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { pressable } from '../../../enums/Types'
import { emptyFunction } from '../../../utils/Helpers'

const Pressable = (props: pressable) => {
    const { children, onPress = emptyFunction, style, opacity = .8 ,disabled} = props
    return (
        <TouchableOpacity
            activeOpacity={opacity}
            style={style}
            disabled={disabled}
            onPress={() => onPress()}
        >
            {children}
        </TouchableOpacity>
    )
}

export default memo(Pressable)
