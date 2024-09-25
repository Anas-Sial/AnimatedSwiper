import { LayoutAnimation, View } from 'react-native'
import React, { useState } from 'react'
import { SwipeListView } from 'react-native-swipe-list-view'
import { commonStyles, wp } from '../../enums/StyleGuide'
import { ContactView, Header, HiddenOptions } from '../../components'
import { ContactProps, SwipeData } from '../../enums/Types'
import { initialContacts } from '../../data/local'
import { emptyFunction } from '../../utils/Helpers'

const Home = () => {
    const [contacts, setContacts] = useState<ContactProps[]>(initialContacts)
    const [swipeDirection, setSwipeDirection] = useState<'leftToRight' | 'rightToLeft' | null>(null)

    let debounceTimeout: NodeJS.Timeout | null = null

    const pinContact = (id: string) => {
        if (debounceTimeout) {
            clearTimeout(debounceTimeout)
        }

        debounceTimeout = setTimeout(() => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)

            setContacts(prevContacts => {
                let updatedContacts = prevContacts.map(contact => {
                    if (contact.id === id) {
                        return { ...contact, pinned: !contact.pinned }
                    }
                    return contact
                })

                updatedContacts = updatedContacts.sort((a, b) => {
                    if (a.pinned && !b.pinned) return -1
                    if (!a.pinned && b.pinned) return 1
                    return 0
                })

                return updatedContacts;
            })

            debounceTimeout = null
        }, 300)
    }


    const deleteContact = (id: string) => {
        setContacts(contacts.filter(contact => contact.id !== id));
    }

    const handleSwipeValueChange = (swipeData: SwipeData) => {
        const { key, value } = swipeData;

        if (value < -wp(70)) {
            deleteContact(key)
        } else if (value > wp(70)) {
            pinContact(key)
        } else if (value > wp(1)) {
            setSwipeDirection('leftToRight')
        } else if (value < -wp(1)) {
            setSwipeDirection('rightToLeft')
        } else {
            setSwipeDirection(null)
        }
    }

    return (
        <View style={commonStyles.mainContainer}>

            <Header
                title='Chat'
                onPress={emptyFunction} />

            <SwipeListView
                useFlatList
                bounces={false}
                data={contacts}
                overScrollMode='never'
                rightOpenValue={-wp(12)}
                renderHiddenItem={({ item }) => (
                    <HiddenOptions
                        item={item}
                        swipeDirection={swipeDirection}
                        deleteContact={deleteContact}
                    />
                )}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <ContactView item={item} />}
                onSwipeValueChange={handleSwipeValueChange}
            />
        </View>
    )
}

export default Home
