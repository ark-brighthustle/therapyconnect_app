import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import React, {Component} from 'react';
import {Colors} from '../../../constants/colors';
import {CalendarList} from 'react-native-calendars';
import {getHeight, getWidth} from '../../../components/Dimensions';
import TextComponent from '../../../components/TextComponent';
import {ImagesContent} from '../../../constants/images';
import axios from 'axios';
import config from '../../../config';
import AnimatedLoader from 'react-native-animated-loader';
import moment from 'moment';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class SlotPatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueId: props.route.params.key,
      valueType: props.route.params.type,
      name: '',
      therapy: '',
      city: '',
      state: '',
      degree: '',
      deliveryFee: '',
      isLoading: true,
      tabId: '',
      selectedDate: moment().format('YYYY-MM-DD'),
      // selectedDate: "",
      selectMode: [],
      selectModeValue: props.route.params.mode,
      selectHealth: [],
      selectHealthValue: props.route.params.health,
    };
    console.log('my date', this.state.selectedDate);
    console.log('my mode', this.state.selectModeValue);
    console.log('my health', this.state.selectHealthValue);
  }

  componentDidMount() {
    axios
      .get(
        config.BASE_URL +
          '/doctor-registerations/' +
          this.state.valueId +
          '?populate=*',
      )
      .then(async response => {
        await this.setState({
          name: response.data.data.firstName,
          therapy: response.data.data.therapy.label,
          city: response.data.data.city,
          state: response.data.data.state,
          degree: response.data.data.degree.label,
          deliveryFee: response.data.data.deliveryModesFee[2],
          isLoading: false,
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get(config.BASE_URL + '/delivery-modes')
      .then(async response => {
        var count = Object.keys(response.data.data).length;
        for (var i = 0; i < count; i++) {
          await this.state.selectMode.push(response.data.data[i].label);
        }
        this.setState({
          isLoading: false,
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get(
        config.BASE_URL +
          '/health-concerns?sort=id:asc&populate[icon]=*&pagination[pageSize]=12',
      )
      .then(async response => {
        var count = Object.keys(response.data.data).length;
        for (var i = 0; i < count; i++) {
          await this.state.selectHealth.push(response.data.data[i].label);
        }
        this.setState({
          isLoading: false,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const {navigation} = this.props;
    const arr = [0, 1, 2, 3, 4, 5];
    const arr1 = [6, 7, 8];

    const onClickPress = value => {
      this.setState({selectModeValue: value});
      if (value === 'Video') {
        this.setState({
          valueType: 'Video Consultation',
        });
      } else if (value === 'Audio') {
        this.setState({
          valueType: 'Audio Consultation',
        });
      } else if (value === 'Chat') {
        this.setState({
          valueType: 'Chat Consultation',
        });
      } else if (value === 'At Clinic') {
        this.setState({
          valueType: 'At Clinic',
        });
      } else if (value === 'Home Visit') {
        this.setState({
          valueType: 'Home Visit',
        });
      }
    };

    return (
      <View>
        {this.state.isLoading ? (
          <View style={styles.container}>
            <AnimatedLoader
              visible={this.state.isLoading}
              overlayColor="rgba(255,255,255,0.75)"
              animationStyle={styles.lottie}
              source={ImagesContent.Loader1}
              speed={1}
            />
          </View>
        ) : (
          <ScrollView>
            <View className="flex w-full h-full">
              <View>
                <View
                  className="flex bg-white p-5 h-62"
                  style={styles.firstView}>
                  <View className="flex flex-row items-center gap-10">
                    <View className="w-24 h-24 rounded-full">
                      <Image
                        source={ImagesContent.Logo2}
                        className="w-24 h-24 rounded-full"
                        resizeMode="contain"
                      />
                    </View>
                    <View className="w-2/4">
                      <TextComponent className1="text-xl" isSemiBold={true}>
                        {this.state.name}
                      </TextComponent>
                      <TouchableOpacity className="mt-1 rounded-lg p-1 items-center justify-center bg-[#5aa272]">
                        <TextComponent
                          className1="text-sm text-white"
                          isSemiBold={true}>
                          {this.state.therapy}
                        </TextComponent>
                      </TouchableOpacity>
                      <View className="flex flex-row items-center gap-1 mt-1">
                        <Entypo
                          name="location-pin"
                          size={25}
                          color={Colors.headerColor}
                        />
                        <TextComponent className1="text-md" isSemiBold={true}>
                          {this.state.city}, {this.state.state}
                        </TextComponent>
                      </View>
                      <TextComponent className1="mt-1 text-md">
                        {this.state.degree}
                      </TextComponent>
                    </View>
                  </View>
                  {this.state.selectModeValue != null ? (
                    <View className="mt-8">
                      <TouchableOpacity
                        style={{
                          borderWidth: 1,
                          borderColor: Colors.borderColor,
                        }}
                        className="flex flex-row justify-between items-center rounded-lg bg-[#F6FAF8] p-5">
                        <TextComponent className1="text-md" isSemiBold={true}>
                          {this.state.valueType}
                        </TextComponent>
                        <TextComponent
                          className1="text-md text-red-500"
                          isSemiBold={true}>
                          ₹{this.state.deliveryFee}
                        </TextComponent>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <View className="mt-8">
                      <TouchableOpacity
                        style={{
                          borderWidth: 1,
                          borderColor: Colors.borderColor,
                        }}
                        className="flex flex-row justify-between items-center rounded-lg bg-[#F6FAF8] p-4">
                        <TextComponent className1="text-md" isSemiBold={true}>
                          Starting from
                        </TextComponent>
                        <TextComponent
                          className1="text-md text-red-500"
                          isSemiBold={true}>
                          ₹{this.state.deliveryFee}
                        </TextComponent>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
                <View className="h-3" />
              </View>
              <View className="h-0.5" />
              <View style={styles.mainView}>
                <View className="w-full pl-3 pb-5 bg-white">
                  <View className="w-full h-14 items-center justify-center">
                    <TextComponent className1="text-lg" isBold={true}>
                      Select Mode
                    </TextComponent>
                  </View>
                  <View className="pl-2">
                    <SelectDropdown
                      // ref={this.SelectRef}
                      // defaultButtonText={<TextComponent className1={"text-left text-md text-black"}>{this.state.searchLocationValue}</TextComponent>}
                      defaultButtonText={
                        this.state.selectModeValue != '' && (
                          <TextComponent
                            className1={'text-left text-md text-black'}>
                            {this.state.selectModeValue}
                          </TextComponent>
                        )
                      }
                      buttonStyle={styles.dropContent}
                      buttonTextStyle={{
                        textAlign: 'left',
                        marginLeft: getWidth('5%'),
                        fontSize: 16,
                      }}
                      data={this.state.selectMode}
                      dropdownStyle={{borderRadius: 10}}
                      dropdownIconPosition="right"
                      disabled={this.state.selectModeValue != '' && false}
                      onSelect={(selectedItem, index) =>
                        onClickPress(selectedItem)
                      }
                      renderDropdownIcon={isOpened => {
                        return (
                          <View className="mr-5">
                            <FontAwesome
                              name={isOpened ? 'chevron-up' : 'chevron-down'}
                              color={'#444'}
                              size={18}
                            />
                          </View>
                        );
                      }}
                      buttonTextAfterSelection={(selectedItem, index) => {
                        return <TextComponent>{selectedItem}</TextComponent>;
                      }}
                      rowTextForSelection={(item, index) => {
                        return <TextComponent>{item}</TextComponent>;
                      }}
                    />
                  </View>
                </View>
              </View>
              <View className="h-3" />
              <View>
                <CalendarList
                  theme={{
                    calendarBackground: '#ffffff',
                    // textSectionTitleColor: "#ffffff",
                    // textSectionTitleDisabledColor: "purple",
                    // selectedDayBackgroundColor: "purple",
                    // selectedDayTextColor: "blue",
                    todayTextColor: 'black',
                    dayTextColor: 'black',
                    textDisabledColor: '#d9e1e8',
                    // dotColor: "#00adf5",
                    // selectedDotColor: "#000000",
                    arrowColor: 'rgb(101,180,84)',
                    // disabledArrowColor: 'red',
                    monthTextColor: 'black',
                    // indicatorColor: "blue",
                    textDayFontFamily: 'Poppins_400Regular',
                    textMonthFontFamily: 'Poppins_700Bold',
                    textDayHeaderFontFamily: 'Poppins_500Medium',
                    textDayFontWeight: '400',
                    textMonthFontWeight: 'bold',
                    textDayHeaderFontWeight: '200',
                    textDayFontSize: 15,
                    textMonthFontSize: 20,
                    textDayHeaderFontSize: 11,
                  }}
                  onDayPress={async day => {
                    console.log('selected day', day.dateString);
                    await this.setState({
                      selectedDate: day.dateString,
                    });
                    console.log('date', this.state.selectedDate);
                    // console.log("date", this.state.selectedDate.format("DD.MM.YYYY"));
                  }}
                  markedDates={{
                    [this.state.selectedDate]: {
                      selected: true,
                      selectedColor: 'green',
                      selectedTextColor: 'white',
                    },
                  }}
                  onVisibleMonthsChange={months => {
                    console.log('now these months are visible', months);
                  }}
                  scrollEnabled={true}
                  showScrollIndicator={false}
                  horizontal={true}
                  pagingEnabled={true}
                  disableAllTouchEventsForDisabledDays={true}
                  // minDate={new Date()}
                  hideArrows={false}
                />
              </View>
              <View className="h-3" />
              <View style={styles.mainView}>
                <View className="w-full pl-3 pb-5 bg-white">
                  <View className="w-full h-14 items-center justify-center">
                    <TextComponent className1="text-lg" isBold={true}>
                      Select your visiting slot
                    </TextComponent>
                  </View>
                  <View className="pl-4 mt-3">
                    <View className="flex flex-row items-center gap-1">
                      <TextComponent className1="text-md" isSemiBold={true}>
                        Morning
                      </TextComponent>
                      <TextComponent classname1={'ml-1 text-md text-gray-400'}>
                        (6 slots)
                      </TextComponent>
                    </View>
                    <View className="mt-5">
                      <View
                        className="flex flex-row items-center gap-3"
                        style={styles.wrapConent}>
                        {arr.map((data, index) => {
                          return (
                            <TouchableOpacity
                              style={styles.box}
                              className={
                                this.state.tabId === data
                                  ? 'bg-[#5aa272]'
                                  : 'bg-[#F6FAF8]'
                              }
                              onPress={() => this.setState({tabId: data})}>
                              <TextComponent
                                className1={
                                  this.state.tabId === data
                                    ? 'text-white'
                                    : 'text-black'
                                }>
                                09:00 AM
                              </TextComponent>
                            </TouchableOpacity>
                          );
                        })}
                      </View>
                    </View>
                    <View className="mt-8">
                      <View className="flex flex-row items-center gap-1">
                        <TextComponent className1="text-md" isSemiBold={true}>
                          Evening
                        </TextComponent>
                        <TextComponent classname1="ml-1 text-md text-gray-400">
                          (3 slots)
                        </TextComponent>
                      </View>
                    </View>
                    <View className="mt-5">
                      <View className="flex flex-row items-center gap-3">
                        {arr1.map((data, index) => {
                          return (
                            <TouchableOpacity
                              style={styles.box}
                              className={
                                this.state.tabId === data
                                  ? 'bg-[#5aa272]'
                                  : 'bg-[#F6FAF8]'
                              }
                              onPress={() => this.setState({tabId: data})}>
                              <TextComponent
                                className1={
                                  this.state.tabId === data
                                    ? 'text-white'
                                    : 'text-black'
                                }>
                                09:00 AM
                              </TextComponent>
                            </TouchableOpacity>
                          );
                        })}
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View className="h-3" />
              <View style={styles.mainView}>
                <View className="w-full pl-3 pb-5 bg-white">
                  <View className="w-full h-14 items-center justify-center">
                    <TextComponent className1="text-lg" isBold={true}>
                      Select Health Concern
                    </TextComponent>
                  </View>
                  <View className="pl-2">
                    <SelectDropdown
                      // ref={this.SelectRef}
                      defaultButtonText={
                        this.state.selectHealthValue != '' && (
                          <TextComponent
                            className1={'text-left text-md text-black'}>
                            {this.state.selectHealthValue}
                          </TextComponent>
                        )
                      }
                      buttonStyle={styles.dropContent}
                      buttonTextStyle={{
                        textAlign: 'left',
                        marginLeft: getWidth('5%'),
                        fontSize: 16,
                      }}
                      data={this.state.selectHealth}
                      dropdownStyle={{borderRadius: 10}}
                      dropdownIconPosition="right"
                      disabled={this.state.selectHealthValue != '' && 'false'}
                      onSelect={(selectedItem, index) =>
                        this.setState({selectHealthValue: selectedItem})
                      }
                      renderDropdownIcon={isOpened => {
                        return (
                          <View className="mr-5">
                            <FontAwesome
                              name={isOpened ? 'chevron-up' : 'chevron-down'}
                              color={'#444'}
                              size={18}
                            />
                          </View>
                        );
                      }}
                      buttonTextAfterSelection={(selectedItem, index) => {
                        return <TextComponent>{selectedItem}</TextComponent>;
                      }}
                      rowTextForSelection={(item, index) => {
                        return <TextComponent>{item}</TextComponent>;
                      }}
                    />
                  </View>
                </View>
              </View>
              <View className="h-3" />
              <View style={styles.secondView}>
                <View className="bg-white p-5">
                  <TouchableOpacity
                    className="flex flex-row justify-between items-center rounded-lg bg-red-500 w-full h-15 p-5"
                    // onPress={() => navigation.navigate('Chat Screen')}
                  >
                    <TextComponent
                      className1="text-md text-white"
                      isSemiBold={true}>
                      CONTINUE TO PAYMENT
                    </TextComponent>
                    <TextComponent
                      className1="text-md text-white"
                      isSemiBold={true}>
                      Pay ₹400
                    </TextComponent>
                  </TouchableOpacity>
                  <TextComponent className1="text-sm mt-2">
                    Proceed to online and secure payment.
                  </TextComponent>
                </View>
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    width: getWidth('100%'),
    height: getHeight('100%'),
  },
  lottie: {
    width: getWidth('50%'),
    height: getHeight('50%'),
    resizeMode: 'cover',
  },
  dropContent: {
    marginTop: getHeight('1%'),
    width: getWidth('90%'),
    height: getHeight('7.5%'),
    borderRadius: 10,
    backgroundColor: Colors.cardColor,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    padding: 5,
  },
  firstView: {
    borderBottomColor: '#EBF4F3',
    borderBottomWidth: 2,
  },
  secondView: {
    borderTopWidth: 2,
    borderTopColor: '#EBF4F3',
  },
  mainView: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderBottomColor: '#EBF4F3',
    borderTopColor: '#EBF4F3',
  },
  box: {
    paddingHorizontal: getWidth('5%'),
    paddingVertical: getHeight('1%'),
    borderWidth: 1,
    borderColor: '#EBF4F3',
    borderRadius: 10,
  },
  wrapConent: {
    flexWrap: 'wrap',
  },
});
