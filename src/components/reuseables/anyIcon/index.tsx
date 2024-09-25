import React, { memo } from 'react'
import { anyIconProps } from '../../../enums/Types'

const AnyIcon = (props: anyIconProps) => {
    const { type, name, color, size = 25, style, onPress } = props
    const Tag = type
    return (
        <>
            {(type && name) &&
                <Tag name={name} size={size} color={color} style={style} onPress={() => { onPress && onPress() }} />
            }
        </>
    )
}

export default memo(AnyIcon)
