/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  StatusBar,
  ImageBackground,
  Linking,
  Pressable
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import TableOfShabat from './TableOfShabat';
import { styles } from './styles';
import Shabat from './Shabat';
import OneSignal from 'react-native-onesignal'; // Import package from node modules

export default class KnisatShabbat extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], show: false, date: new Date() };


    // Replace 'YOUR_ONESIGNAL_APP_ID' with your OneSignal App ID.
    OneSignal.init("43beed34-cb51-4035-af0f-ddc5f1149763", { kOSSettingsKeyAutoPrompt: false, kOSSettingsKeyInAppLaunchURL: false, kOSSettingsKeyInFocusDisplayOption: 2 });
    OneSignal.inFocusDisplaying(2); // Controls what should happen if a notification is received while the app is open. 2 means that the notification will go directly to the device's notification center.
  }

  async createShabats(newArray) {
    var newShabats = [];
    let max = newArray.length, min = 0;
    var BreakException = {};
    try {
      newArray.forEach(element => {
        if (this.state.date.getTime() < new Date(element.date.split('/')[2], element.date.split('/')[1] - 1, element.date.split('/')[0]).getTime()) {
          throw BreakException;// break;
        }
        min++;
      });
    }
    catch (e) {
      if (e !== BreakException) throw e;
    }
    if (min + 10 >= newArray.length)
      max = newArray.length
    else
      max = min + 10
    for (let index = min; index < max; index++) {
      newShabats.push(
        new Shabat(
          index,
          newArray[index].date,
          newArray[index].hebDate,
          newArray[index].parasha,
          newArray[index].Jerusalem_in,
          newArray[index].Jerusalem_out,
          newArray[index].Tel_Aviv_in,
          newArray[index].Tel_Aviv_out,
          newArray[index].Hayfa_in,
          newArray[index].Hayfa_out,
          newArray[index].Beer_Sheva_in,
          newArray[index].Beer_Sheva_out
        ),
      );
    }
    return newShabats;
  }
  async componentDidMount() {
    await this.getData();
  }
  async getData() {
    let db = require('./db.json')
    this.createShabats(db).then(newShabats => {
      this.setState({ data: newShabats });
    })
  }

  pickDate = (event, date) => {
    event.type === 'dismissed' ? (date = new Date()) : (date = date);
    this.setState({
      show: false,
      date,
    });
    this.getData();
  };

  render() {
    if (this.state.data.length > 0) {
      return (
        <View style={styles.container}>
          <StatusBar
            translucent={false}
            hidden={false}
            animated={true}
            barStyle="light-content"
            backgroundColor="#123"
          />
          <ImageBackground
            source={{
              uri: 'https://www.jewishmag.com/90mag/shabbatpoem/title.gif',
            }}
            imageStyle={{ opacity: 0.15 }}
            style={{ width: '100%', height: '100%' }}>
            <Text style={styles.title}>זמני כניסת שבתות ומועדים</Text>
            <Pressable
              onPress={() => {
                this.setState({ show: true });
              }}>
              <View
                style={{
                  paddingTop: 5,
                  justifyContent: 'center',
                  flexDirection: 'row',
                  paddingBottom: 10,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'normal',
                    fontFamily: 'ShmulikCLM',
                  }}>
                  בחר תאריך:{' '}
                  {(this.state.date.getDate() < 10
                    ? '0' + this.state.date.getDate()
                    : this.state.date.getDate()) +
                    '/' +
                    (this.state.date.getMonth() + 1 < 10
                      ? '0' + (this.state.date.getMonth() + 1)
                      : this.state.date.getMonth() + 1) +
                    '/' +
                    this.state.date.getFullYear()}
                </Text>
                {this.state.show && (
                  <DateTimePicker
                    value={this.state.date}
                    mode="date"
                    onChange={this.pickDate}
                    minimumDate={new Date()}
                    maximumDate={new Date(2021,8,10)}
                  />
                )}
              </View>
            </Pressable>
            <Text style={styles.header}>
              ניתן ללחוץ על פרשה לקבלת מידע לגביה
            </Text>
            <ScrollView
              indicatorStyle="black"
              showsVerticalScrollIndicator={false}
              style={{ flex: 1 }}>
              {this.state.data.map(shabat => {
                const dateOfShabat = new Date(shabat.date);
                return (
                  <View key={shabat._id}>
                    <View style={{ flex: 1 }}>
                      <TableOfShabat shabat={shabat} date={dateOfShabat} />
                    </View>
                  </View>
                );
              })}
            </ScrollView>
            <Text onPress={() => Linking.openURL('http://old.dat.gov.il/Pages/ShabathTimes.aspx')} style={styles.copyrights}>© כלל המידע נלקח מהאתר הממשלתי של המשרד לשירותי דת ©</Text>
          </ImageBackground>
        </View>
      );
    } else {
      return (
        <ImageBackground
          source={{
            uri: 'https://www.jewishmag.com/90mag/shabbatpoem/title.gif',
          }}
          imageStyle={{ opacity: 0.15 }}
          style={{ justifyContent: 'center', width: '100%', height: '100%' }}>
          <Text
            style={{
              fontFamily: 'ShmulikCLM',
              color: 'black',
              fontSize: 29,
              alignSelf: 'center',
            }}>
            הנתונים נטענים...
          </Text>
          <Text
            style={{
              fontFamily: 'ShmulikCLM',
              color: 'black',
              fontSize: 29,
              alignSelf: 'center',
              textDecorationLine: 'none',
            }}>
            שבת שלום!
          </Text>
        </ImageBackground>
      );
    }
  }
}
