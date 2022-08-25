import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SelectDropdown from 'react-native-select-dropdown'

const Demo = () => {
    const countries = ["Egypt", "Canada", "Australia", "Ireland"]
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <SelectDropdown
                data={countries}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
            />
        </View>
    )
}

export default Demo

const styles = StyleSheet.create({})