import { StyleSheet, View } from 'react-native'
import React from 'react'
import { AnyIcon } from '../reuseables';
import { ICONS } from '../../assets/svg';
import { COLOR, commonStyles, hp } from '../../enums/StyleGuide';
import { HiddenOptionsProps } from '../../enums/Types';



const HiddenOptions = ({ item, swipeDirection, deleteContact }: HiddenOptionsProps) => {
    const backgroundColor =
        swipeDirection === 'leftToRight' ? COLOR.secondary :
            swipeDirection === 'rightToLeft' ? COLOR.red : 'transparent';

    return (
        <View style={[styles.hiddenContainer, { backgroundColor }]}>
            <AnyIcon
                name='pin'
                type={ICONS.Octicons}
                color={COLOR.white}
                size={22}
            />
            <AnyIcon
                name='delete-outline'
                type={ICONS.MaterialIcons}
                color={COLOR.white}
                size={22}
                onPress={() => deleteContact(item.id)}
            />
        </View>
    )
}
export default HiddenOptions

const styles = StyleSheet.create({
    hiddenContainer: {
        ...commonStyles.justifyView,
        height: hp(8),
        marginVertical: hp(1),
        borderRadius: hp(1.5),
        marginHorizontal: '5%',
        paddingHorizontal: '5%'
    },
})