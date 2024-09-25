import { StyleSheet, View } from 'react-native'
import React, { memo } from 'react'
import { AnyIcon, Image, Label, Pressable } from '../reuseables'
import { ICONS } from '../../assets/svg'
import { COLOR, commonStyles, hp, TEXT_STYLE, wp } from '../../enums/StyleGuide'

const ContactView = ({ item }: any) => {
    return (
        <Pressable style={styles.item}>
            {item.pinned && (
                <AnyIcon
                    name='pin'
                    type={ICONS.Octicons}
                    color={COLOR.secondary}
                    size={18}
                    style={styles.pinIcon}
                />
            )}
            <Image source={{ uri: item.image }} style={styles.userImage} />
            <View style={{ marginLeft: wp(2) }}>
                <Label style={styles.username}>{item?.name}</Label>
                <Label style={styles.description}>{item?.description}</Label>
            </View>
        </Pressable>
    )
}

export default memo(ContactView)

const styles = StyleSheet.create({
    item: {
        ...commonStyles.horizontalView,
        backgroundColor: COLOR.primary,
        height: hp(8),
        marginVertical: hp(1),
        borderRadius: hp(1.5),
        marginHorizontal: '5%',
    },
    username: {
        ...TEXT_STYLE.bigTextBold,
        color: COLOR.white,
    },
    description: {
        ...TEXT_STYLE.textMedium,
        color: COLOR.white,
    },
    pinIcon: {
        position: 'absolute',
        top: hp(1.8),
        right: wp(4),
    },
    userImage: {
        height: hp(8),
        width: hp(7.5),
        borderTopLeftRadius: hp(1.5),
        borderBottomLeftRadius: hp(1.5),
    },

})