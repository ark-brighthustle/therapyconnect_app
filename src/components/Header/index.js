import { Text, View, StatusBar } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const Header = (props) => {

    const navigation = useNavigation();
    const toggleDrawer = () => {
        console.log("toggleDrawer", navigation);
        navigation.toggleDrawer();
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[2[1]]}>
            <View className="w-full h-2/2 items-center bg-[#5aa272] rounded-b-3xl p-4">
                <View className="flex flex-row items-center w-full justify-between">
                    <Feather name="menu" size={35} color={"white"} />
                    <View className="flex flex-row items-center justify-around gap-2">
                        <SelectDropdown
                            buttonStyle={{ backgroundColor: "" }}
                            buttonTextStyle={styles.buttonText}
                            data={this.state.selectLocation}
                            dropdownStyle={styles.dropStyle}
                            dropdownIconPosition="right"
                            renderDropdownIcon={isOpened => {
                                return (
                                    <View>
                                        <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={Colors.white} size={18} />
                                    </View>
                                );
                            }}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index)
                                onSelectLocation(selectedItem, index)
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                        />
                        <Ionicons name="notifications-outline" size={35} color={"white"} />
                    </View>
                </View>
                <View className="mt-5 w-full flex flex-row items-center rounded-lg bg-white p-4">
                    <Image source={ImagesContent.search} className="w-4 h-4 ml-2 mr-5" style={{ tintColor: "black" }} resizeMode='contain' />
                    <TextInput
                        underlineColorAndroid="transparent"
                        placeholder="Search health isuue, doctor..."
                        placeholderTextColor="grey"
                        autoCapitalize="none"
                        onChangeText={(text) => this.setState({ searchText: text })}
                        value={this.state.searchText}
                        onSubmitEditing={() => onSearchSubmit()}
                    />
                </View>
                <View className="flex flex-row pt-5 gap-1">
                    <Text className="text-md font-bold text-white"> Need professional help? </Text>
                    <Text className="text-md font-bold underline decoration-solid text-white"> Connect to our Consultant</Text>
                    <Image source={ImagesContent.link} className="w-4 h-4" resizeMode='contain' />
                </View>
                <View className="flex flex-row w-full mt-3 justify-center">
                    {
                        arr.map((data) => {
                            return (
                                <TouchableOpacity className="p-3 items-center justify-center" onPress={() => toggleDrawer()}>
                                    <View className="w-16 h-16 rounded-full bg-[#2b4d36] items-center justify-center">
                                        <Image source={data.img} className="w-8 h-8" resizeMode='contain' />
                                    </View>
                                    <Text className="text-white"> {data.fn} </Text>
                                    <Text className="text-white"> {data.ln} </Text>
                                </TouchableOpacity>
                            );
                        })
                    }
                </View>
            </View>
            {props.children}
        </ScrollView>
    )
}

export default Header