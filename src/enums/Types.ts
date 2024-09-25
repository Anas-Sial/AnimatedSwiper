import { ViewStyle } from "react-native"

export interface textProps {
    children: React.ReactNode
    style?: any
}

export interface scrollProps {
    children?: React.ReactNode
    hasInput?: React.ReactNode
    horizontal?: boolean
    containerStyle?: ViewStyle
}

export interface imageProps {
    source: any
    style?: any
    contain?: string
    url?: string
}

export interface pressable {
    children: React.ReactNode
    style?: any
    onPress?: () => void
    opacity?: number
    disabled?: any
}

export interface anyIconProps {
    type: any
    name: string
    color: string
    size: number
    style?: ViewStyle
    onPress?: () => void
}

export interface headerProps {
    title: string,
    onPress?: () => void
}

export interface ContactProps {
    id: string;
    name: string;
    description: string;
    image: string;
    pinned: boolean;
}

export interface HiddenOptionsProps {
    item: any;
    swipeDirection: 'leftToRight' | 'rightToLeft' | null;
    deleteContact: (id: string) => void;
}

export interface SwipeData {
    key: string;
    value: number;
}