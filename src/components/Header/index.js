import { Text, View, StatusBar } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { Searchbar } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Header = () => {

    const arr = [0, 1, 2, 3]
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    // bg - [#1da1f2] bg - midnight

    return (
        <View className="flex w-full h-2/3 items-center bg-green-100 rounded-b-3xl p-4">
            <StatusBar barStyle="light-content" />
            <View className="flex flex-row items-center w-full justify-between">
                <Feather name="menu" size={35} color={"black"} />
                <View className="flex flex-row items-center justify-around gap-2">
                    <Text className="text-xl font-bold">Ahmedabad</Text>
                    <Ionicons name="notifications-outline" size={35} color={"black"} />
                </View>
            </View>
            <View className="mt-5 w-full rounded-lg">
                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
            </View>
            <View className="flex flex-row mt-5">
                <Text className="text-md"> Need professional help? </Text>
                <Text className="text-md font-bold underline decoration-solid"> Connect to our Consultant </Text>
            </View>
            <View className="flex flex-row w-full mt-3">
                {
                    arr.map((data) => {
                        return (
                            <View className="p-2 items-center justify-center">
                                <View className="w-20 h-20 rounded-full bg-blue-100" />
                                <Text> Health </Text>
                                <Text> Package </Text>
                            </View>
                        );
                    })
                }
            </View>
        </View>
    )
}

export default Header