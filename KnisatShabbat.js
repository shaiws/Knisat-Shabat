import React, { Component } from 'react';
import { ScrollView, Text, View, Alert, StatusBar, DatePickerAndroid, TouchableNativeFeedback, ImageBackground, BackHandler } from 'react-native';
import TableOfShabat from './TableOfShabat';
import { styles } from './styles';
import Shabat from './Shabat';
export default class KnisatShabbat extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], chosenDate: new Date()}
  }
  async createShabats(array) {
    let newShabats = []
    array.forEach(shabat => {
      newShabats.push(new Shabat(shabat._id, shabat.parasha, shabat.heb_day, shabat.heb_month, shabat.heb_year, shabat.date, shabat.Jerusalem_in, shabat.Jerusalem_out, shabat.Tel_Aviv_in, shabat.Tel_Aviv_out, shabat.Hayfa_in, shabat.Hayfa_out, shabat.Beer_Sheva_in, shabat.Beer_Sheva_out));
    });
    return newShabats
  }
  async componentDidMount() {
      await this.getData();
  }
  async getData() {
    await fetch('https://data.gov.il/api/action/datastore_search?resource_id=90925e82-7fa1-4d1f-a733-45ce870ca1a1')
      .then((response) => response.json())
      .then((responseJson) => responseJson.result.records)
      .then((ShabatsArray) => this.createShabats(ShabatsArray))
      .then((newShabats) => { this.setState({ data: newShabats }) })
      .catch(error => {
        if (error) {
          console.log(error);
          Alert.alert("אירעה שגיאה", "בדוק את הגישה לרשת.\nולאחר מכן נסה שוב.", [{ text: 'אישור', onPress: () => BackHandler.exitApp() }, { text: 'נסה שוב', onPress: () => this.getData() }])
        }
      })
      .done();

  }
  async pickDate() {
    try {
      const datePicker = DatePickerAndroid;
      await datePicker.open(
        {
          date: this.state.chosenDate,
          minDate: new Date(),
          maxDate: new Date(2019, 9, 1),
          mode: 'calendar'
        }
      ).then(date => {
        if (date.action !== DatePickerAndroid.dismissedAction) {
          this.setState({ chosenDate: new Date(date.year, date.month, date.day) })
        }
        else {
          this.setState({ chosenDate: new Date() })
        }
        this.setState({ counter: 0 })
      });
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
    }
  }

  render() {
    if (this.state.data.length > 0) {
      return (
        <View style={styles.container} >
          <StatusBar translucent={false} hidden={false} animated={true} barStyle="light-content" backgroundColor="#123" />
          <ImageBackground source={{ uri: 'https://www.jewishmag.com/90mag/shabbatpoem/title.gif' }} imageStyle={{ opacity: 0.15 }} style={{ width: '100%', height: '100%' }}>
            <Text style={styles.title}>זמני כניסת שבתות ומועדים</Text>
            <TouchableNativeFeedback onPress={() => this.pickDate()}>
              <View style={{
                paddingTop: 5,
                justifyContent: 'center',
                flexDirection: 'row',
                paddingBottom: 10
              }}>
                <Text style={{ color: 'black', fontWeight: 'normal', fontFamily: 'ShmulikCLM' }}>בחר תאריך: </Text>
                <Text style={{ color: 'black', textDecorationLine: 'underline' }}>
                  {(this.state.chosenDate.getDate() < 10 ? "0" + this.state.chosenDate.getDate() : this.state.chosenDate.getDate()) + "/" + (this.state.chosenDate.getMonth() + 1 < 10 ? "0" + (this.state.chosenDate.getMonth() + 1) : this.state.chosenDate.getMonth() + 1) + "/" + this.state.chosenDate.getFullYear()}
                </Text>
              </View>
            </TouchableNativeFeedback>
            <ScrollView indicatorStyle='black' showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
              {this.state.data.map((shabat) => {
                const dateOfShabat = new Date(shabat.date);
                const todatyDate = this.state.chosenDate;
                const dayInMilisec = 86400000;
                if (dateOfShabat.getTime() >= todatyDate.getTime() && todatyDate.getTime() + dayInMilisec * 31 >= dateOfShabat.getTime()) {
                  return (
                    <View key={shabat._id}>
                      <View style={{ flex: 1 }}>
                        <TableOfShabat shabat={shabat} date={dateOfShabat} />
                      </View>
                    </View>
                  );
                }
              }
              )}
            </ScrollView>
          </ImageBackground>
        </View>
      );

    }
    else {
      return (
        <ImageBackground source={{ uri: 'https://www.jewishmag.com/90mag/shabbatpoem/title.gif' }} imageStyle={{ opacity: 0.15 }} style={{ justifyContent: 'center', width: '100%', height: '100%' }}>
          <Text style={{ fontFamily: 'ShmulikCLM', color: 'black', fontSize: 29, alignSelf: 'center' }}>הנתונים נטענים...</Text>
          <Text style={{ fontFamily: 'ShmulikCLM', color: 'black', fontSize: 29, alignSelf: 'center', textDecorationLine: 'none' }}>שבת שלום!</Text>
        </ImageBackground>
      );
    }
  }
}