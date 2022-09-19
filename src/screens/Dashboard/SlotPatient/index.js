import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import React from 'react'
import { Colors } from '../../../constants/colors'
import { Calendar } from 'react-native-calendars'
import { getHeight, getWidth } from '../../../components/Dimensions'
import TextComponent from '../../../components/TextComponent'
import { useNavigation } from '@react-navigation/native'

const SlotPatient = () => {
    const navigation = useNavigation()
    const arr = [0, 1, 2, 3, 4, 5]
    const arr1 = [0, 1, 2]

    return (
        <ScrollView>
            <View className="flex w-full h-full">
                <View>
                    <View className="flex bg-white p-5 h-62" style={styles.firstView}>
                        <View className="flex flex-row items-center gap-10">
                            <View className="items-center">
                                <View className="w-24 h-24 rounded-full bg-red-500" />
                                <TouchableOpacity onPress={() => navigation.navigate('Doctor Info')}>
                                    <TextComponent className1="mt-2 text-md text-red-500" isSemiBold={true}>View Profile</TextComponent>
                                </TouchableOpacity>
                            </View>
                            <View className="w-2/4">
                                <TextComponent className1="text-xl" isSemiBold={true}>Dr. Mariam Garcia</TextComponent>
                                <TouchableOpacity className="mt-1 w-24 rounded-lg h-7 items-center justify-center bg-[#5aa272]">
                                    <TextComponent className1="text-sm text-white" isSemiBold={true}>Allopathic</TextComponent>
                                </TouchableOpacity>
                                <View className="flex flex-row items-center gap-1 mt-1">
                                    <Entypo name="location-pin" size={25} color={Colors.headerColor} />
                                    <TextComponent className1="text-md" isSemiBold={true}>4A, SSG Vadodara, Guj.</TextComponent>
                                </View>
                                <TextComponent className1="mt-1 text-md">Allopathic BHMS (Hons), DHMS(Hons), MBBS, MD</TextComponent>
                            </View>
                        </View>
                        <View className="mt-8">
                            <TouchableOpacity className="flex flex-row justify-between items-center rounded-lg bg-[#F6FAF8] w-full h-14 p-5">
                                <TextComponent className1="text-md" isSemiBold={true}>Video consultation</TextComponent>
                                <TextComponent className1="text-md text-red-500" isSemiBold={true}>₹400</TextComponent>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View className="h-3" />
                </View>
                <View className="h-0.5" />
                <View style={styles.mainView}>
                    <Calendar
                        initialDate={'2012-03-01'}
                        minDate={'2012-05-10'}
                        maxDate={'2022-05-30'}
                        onDayPress={day => {
                            console.log('selected day', day);
                        }}
                        onDayLongPress={day => {
                            console.log('selected day', day);
                        }}
                        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                        monthFormat={'yyyy MMM'}
                        // Handler which gets executed when visible month changes in calendar. Default = undefined
                        onMonthChange={month => {
                            console.log('month changed', month);
                        }}
                        // Hide month navigation arrows. Default = false
                        hideArrows={false}
                        // Replace default arrows with custom ones (direction can be 'left' or 'right')
                        // renderArrow={direction => <Arrow />}
                        // Do not show days of other months in month page. Default = false
                        hideExtraDays={false}
                        // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
                        // day from another month that is visible in calendar page. Default = false
                        disableMonthChange={false}
                        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
                        firstDay={1}
                        // Hide day names. Default = false
                        hideDayNames={true}
                        // Show week numbers to the left. Default = false
                        showWeekNumbers={false}
                        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                        onPressArrowLeft={subtractMonth => subtractMonth()}
                        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
                        onPressArrowRight={addMonth => addMonth()}
                        // Disable left arrow. Default = false
                        disableArrowLeft={false}
                        // Disable right arrow. Default = false
                        disableArrowRight={false}
                        // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
                        disableAllTouchEventsForDisabledDays={true}

                        // Replace default month and year title with custom one. the function receive a date as parameter
                        renderHeader={date => {
                            /*Return JSX*/
                        }}
                        enableSwipeMonths={true}
                    />
                    <View className="h-3 bg-white" />
                </View>
                <View className="h-3" />
                <View style={styles.mainView}>
                    <View className="w-full pl-5 pb-5 bg-white">
                        <View className="w-full h-14 items-center justify-center">
                            <TextComponent className1="text-lg" isBold={true}>Select your visiting slot</TextComponent>
                        </View>
                        <View className="pl-4 mt-3">
                            <View className="flex flex-row items-center gap-1">
                                <TextComponent className1="text-md" isSemiBold={true}>Morning</TextComponent>
                                <TextComponent classname1={"text-md text-gray-400"}>(6 slots)</TextComponent>
                            </View>
                            <View className="mt-5">
                                <View className="flex flex-row items-center gap-3" style={styles.wrapConent}>
                                    {
                                        arr.map((data) => {
                                            return (
                                                <TouchableOpacity style={styles.box} className="bg-[#F6FAF8]">
                                                    <TextComponent>09:00 AM</TextComponent>
                                                </TouchableOpacity>
                                            )
                                        })
                                    }
                                </View>
                            </View>
                            <View className="mt-5">
                                <View className="flex flex-row items-center gap-1">
                                    <TextComponent className1="text-md" isSemiBold={true}>Evening</TextComponent>
                                    <TextComponent classname1="text-md text-gray-400">(3 slots)</TextComponent>
                                </View>
                            </View>
                            <View className="mt-5">
                                <View className="flex flex-row items-center gap-3">
                                    {
                                        arr1.map((data) => {
                                            return (
                                                <TouchableOpacity style={styles.box} className="bg-[#F6FAF8]">
                                                    <TextComponent>09:00 AM</TextComponent>
                                                </TouchableOpacity>
                                            )
                                        })
                                    }
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View className="h-3" />
                <View style={styles.secondView}>
                    <View className="bg-white p-5">
                        <TouchableOpacity className="flex flex-row justify-between items-center rounded-lg bg-red-500 w-full h-14 p-5">
                            <TextComponent className1="text-md text-white" isSemiBold={true}>CONTINUE TO PAYMENT</TextComponent>
                            <TextComponent className1="text-md text-white" isSemiBold={true}>Pay ₹400</TextComponent>
                        </TouchableOpacity>
                        <TextComponent className1="text-sm mt-2">Proceed to online and secure payment.</TextComponent>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default SlotPatient

const styles = StyleSheet.create({
    firstView: {
        borderBottomColor: "#EBF4F3",
        borderBottomWidth: 2
    },
    secondView: {
        borderTopWidth: 2,
        borderTopColor: "#EBF4F3",
    },
    mainView: {
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderBottomColor: "#EBF4F3",
        borderTopColor: "#EBF4F3",
    },
    box: {
        paddingHorizontal: getWidth("5%"),
        paddingVertical: getHeight("1%"),
        borderWidth: 1,
        borderColor: "#EBF4F3",
        borderRadius: 10
    },
    wrapConent: {
        flexWrap: "wrap"
    }
})