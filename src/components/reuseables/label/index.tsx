import { StyleSheet, Text } from 'react-native'
import React, { memo } from 'react'
import { textProps } from '../../../enums/Types'
import { COLOR, TEXT_STYLE } from '../../../enums/StyleGuide'

const Label = (props: textProps) => {
    const { children, style } = props
    return (
        <Text style={[styles.TextStyle, style]}>{children}</Text>
    )
}

export default memo(Label)

const styles = StyleSheet.create({
    TextStyle: {
        ...TEXT_STYLE.text,
        color: COLOR.dark
    }
})