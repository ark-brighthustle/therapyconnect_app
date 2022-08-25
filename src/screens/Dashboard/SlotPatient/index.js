import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import React from 'react'
import { Colors } from '../../../constants/colors'
import { Calendar } from 'react-native-calendars'
import { getHeight, getWidth } from '../../../components/Dimensions'

const SlotPatient = () => {
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
                                    <Text className="mt-2 text-md font-bold text-red-500">View Profile</Text>
                                </TouchableOpacity>
                            </View>
                            <View className="w-2/4">
                                <Text className="text-xl font-bold">Dr. Mariam Garcia</Text>
                                <TouchableOpacity className="mt-1 w-24 rounded-lg h-7 items-center justify-center bg-[#5aa272]">
                                    <Text className="text-sm font-bold text-white">Allopathic</Text>
                                </TouchableOpacity>
                                <View className="flex flex-row items-center gap-1 mt-1">
                                    <Entypo name="location-pin" size={25} color={Colors.headerColor} />
                                    <Text className="text-md font-bold">4A, SSG Vadodara, Guj.</Text>
                                </View>
                                <Text className="mt-1 text-md">Allopathic BHMS (Hons), DHMS(Hons), MBBS, MD</Text>
                            </View>
                        </View>
                        <View className="mt-8">
                            <TouchableOpacity className="flex flex-row justify-between items-center rounded-lg bg-[#F6FAF8] w-full h-14 p-5">
                                <Text className="text-md font-bold">Video consultation</Text>
                                <Text className="text-md font-bold text-red-500">₹400</Text>
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
                            <Text className="text-lg font-bold">Select your visiting slot</Text>
                        </View>
                        <View className="pl-4 mt-3">
                            <View className="flex flex-row items-center gap-1">
                                <Text className="text-md font-bold">Morning</Text>
                                <Text classname="text-md text-slate-500">(6 slots)</Text>
                            </View>
                            <View className="mt-5">
                                <View className="flex flex-row items-center gap-3" style={styles.wrapConent}>
                                    {
                                        arr.map((data) => {
                                            return (
                                                <TouchableOpacity style={styles.box} className="bg-[#F6FAF8]">
                                                    <Text>09:00 AM</Text>
                                                </TouchableOpacity>
                                            )
                                        })
                                    }
                                </View>
                            </View>
                            <View className="mt-5">
                                <View className="flex flex-row items-center gap-1">
                                    <Text className="text-md font-bold">Evening</Text>
                                    <Text classname="text-md text-slate-500">(3 slots)</Text>
                                </View>
                            </View>
                            <View className="mt-5">
                                <View className="flex flex-row items-center gap-3">
                                    {
                                        arr1.map((data) => {
                                            return (
                                                <TouchableOpacity style={styles.box} className="bg-[#F6FAF8]">
                                                    <Text>09:00 AM</Text>
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
                            <Text className="text-md font-bold text-white">CONTINUE TO PAYMENT</Text>
                            <Text className="text-md font-bold text-white">Pay ₹400</Text>
                        </TouchableOpacity>
                        <Text className="text-sm mt-2">Proceed to online and secure payment.</Text>
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