/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  ImageBackground,
  Linking,
  Pressable,
  SafeAreaView,
  Platform
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import TableOfShabat from './TableOfShabat';
import { styles } from './styles';
import Shabat from './Shabat';

export default class KnisatShabbat extends Component {
  constructor(props) {
    super(props);
    Text.defaultProps = Text.defaultProps || {};
    // Ignore dynamic type scaling on iOS
    Text.defaultProps.allowFontScaling = false;
    this.state = { data: [], show: false, date: new Date(), lastDate: null };
  }

  async createShabats(newArray) {
    newArray.sort((a, b) => parseInt(a["_id"]) - parseInt(b["_id"]));
    var newShabats = [];
    this.setState({ lastDate: new Date(newArray[newArray.length - 1].date) })
    let max = newArray.length, min = 0;
    var BreakException = {};
    try {
      newArray.forEach(element => {
        if (this.state.date.getTime() > new Date(element.date).getTime() + (1 * 24 * 60 * 60 * 1000)) {
          min++;
        }
      });
    }
    catch (e) {
      if (e !== BreakException) throw e;
    }
    if (min + 10 >= newArray.length)
      max = newArray.length
    else
      max = min + 11

    for (let index = min; index < max; index++) {
      newShabats.push(
        new Shabat(
          index,
          newArray[index].date,
          newArray[index].heb_date,
          newArray[index].parasha,
          newArray[index].Jerusalem_in,
          newArray[index].Jerusalem_out,
          newArray[index].TelAviv_in,
          newArray[index].TelAviv_out,
          newArray[index].Hayfa_in,
          newArray[index].Hayfa_out,
          newArray[index].BeerSheva_in,
          newArray[index].BeerSheva_out
        ),
      );
    }
    return newShabats;
  }
  async componentDidMount() {
    await this.getData();
  }
  async getData() {

    fetch('https://data.gov.il/api/3/action/datastore_search?resource_id=cfe1dd76-a7f8-453a-aa42-88e5db30d567&limit=1095')
      .then(response => response.json())
      .then(data => this.createShabats(data.result.records))
      .then(newShabats => this.setState({ data: newShabats }));
  }

  pickDate = (event, date) => {
    event.type === 'dismissed' ? (date = new Date()) : (date = date);
    this.setState({
      date: date,
    });
    this.getData();
  };

  render() {
    if (this.state.data.length > 0) {
      return (
        <SafeAreaView style={styles.container}>
          <ImageBackground
            source={{
              uri: 'https://www.jewishmag.com/90mag/shabbatpoem/title.gif',
            }}
            imageStyle={{ opacity: 0.15 }}
            style={{ width: '100%', height: '100%' ,backgroundColor:'white'}}>
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
              </View>
            </Pressable>
            {this.state.show && (
              <View style={{ flex: 1 }}>
                <DateTimePicker
                  value={this.state.date}
                  mode="date"
                  locale="he-IL"
                  onChange={Platform.OS === 'ios' ? this.pickDate : () => { this.pickDate; this.setState({ show: false }) }}
                  minimumDate={new Date()}
                  maximumDate={this.state.lastDate}
                  display={Platform.OS === 'ios' ? "spinner" : "default"}
                  style={{ width: '100%', backgroundColor: "white", alignSelf: 'center' }}
                />
                {Platform.OS === 'ios' && <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => this.setState({ show: false })}>
                  <Text style={styles.textStyle}>אישור</Text>
                </Pressable>}
              </View>

            )
            }
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
        </SafeAreaView>
      );
    } else {
      return (
        <ImageBackground
          source={{
            uri: 'https://www.jewishmag.com/90mag/shabbatpoem/title.gif',
          }}
          imageStyle={{ opacity: 0.15 }}
          style={{ justifyContent: 'center', width: '100%', height: '100%', backgroundColor:'white' }}>
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
