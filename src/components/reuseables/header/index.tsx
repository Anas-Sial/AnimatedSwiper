import { StyleSheet, View } from 'react-native'
import React from 'react'
import { AnyIcon, Label } from '..'
import { COLOR, commonStyles, hp, TEXT_STYLE, wp } from '../../../enums/StyleGuide'
import { ICONS } from '../../../assets/svg'
import { headerProps } from '../../../enums/Types'

const Header = (props: headerProps) => {
    const { title, onPress } = props
    return (
        <View style={styles.container}>
            <Label style={styles.label}>{title}</Label>
            <AnyIcon
                name='pluscircleo'
                type={ICONS.AntDesign}
                color={COLOR.white}
                size={20}
                onPress={onPress}
            />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        ...commonStyles.justifyView,
        marginVertical: hp(3),
        paddingHorizontal: wp(4)
    },
    label: {
        ...TEXT_STYLE.titleBold,
        color: COLOR.white
    }
})