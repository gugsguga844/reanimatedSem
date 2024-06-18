import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import TabScreen from '@/components/Tabs/TabScreen'

const pageTwo = () => {
    return (
        <SafeAreaView style={styles.container}>
            <TabScreen />
        </SafeAreaView>
    )
}

export default pageTwo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 20,
    },
})