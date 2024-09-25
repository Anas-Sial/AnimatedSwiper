import React, { memo } from 'react'
import { StyleSheet } from 'react-native'
import FastImage from 'react-native-fast-image'
import { imageProps } from '../../../enums/Types'
import { hp } from '../../../enums/StyleGuide'

const Image = (props: imageProps) => {
    const { source, style, contain, url } = props
    return (
        <FastImage
            source={source ? source : { uri: url }}
            style={[styles.image, style]}
            resizeMode={contain ?
                FastImage.resizeMode.contain :
                FastImage.resizeMode.cover
            }
        />
    )
}

export default memo(Image)

const styles = StyleSheet.create({
    image: {
        height: hp(5),
        width: hp(5),
    },
})