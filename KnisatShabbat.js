import React, { Component } from 'react';
import { ScrollView, Text, View, Alert, StatusBar, TouchableNativeFeedback, ImageBackground, BackHandler } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import TableOfShabat from './TableOfShabat';
import { styles } from './styles';
import Shabat from './Shabat';
import HTMLParser from 'fast-html-parser';
export default class KnisatShabbat extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], show:false,date: new Date()}
  }
  async createShabats(newArray) {
    var newShabats = []
    for (let index = 1; index < newArray.length ; index++) {
      newShabats.push(new Shabat(index,
        newArray[index].childNodes[0].childNodes[0].rawText,
        newArray[index].childNodes[1].childNodes[0].rawText,
        newArray[index].childNodes[2].childNodes[0].rawText,
        newArray[index].childNodes[3].childNodes[0].rawText,
        newArray[index].childNodes[4].childNodes[0].rawText,
        newArray[index].childNodes[5].childNodes[0].rawText,
        newArray[index].childNodes[6].childNodes[0].rawText,
        newArray[index].childNodes[7].childNodes[0].rawText,
        newArray[index].childNodes[8].childNodes[0].rawText,
        newArray[index].childNodes[9].childNodes[0].rawText,
        newArray[index].childNodes[10].childNodes[0].rawText));
      
    }
  return newShabats
  }
  async componentDidMount() {
      await this.getData();
  }
  async getData() {
      var details = {
        'MSOWebPartPage_PostbackSource':'',
'MSOTlPn_SelectedWpId':'',
'MSOTlPn_View':'0',
'MSOTlPn_ShowSettings':'False',
'MSOGallery_SelectedLibrary':'',
'MSOGallery_FilterString':'',
'MSOTlPn_Button':'none',
'__EVENTTARGET':'ctl00$m$g_72394dd3_98c8_4826_afe3_015e10b8c6a8$btnSearchWPQ6',
'__EVENTARGUMENT':'',
'__REQUESTDIGEST':'0x183936B10E2ED2F34C4A1AFAA76E9CB5E07E0B9E9D70E8B6BDCF88E6035A4F8A512CF2B9DDD2F4D46F19D899B9B97C6C7DEBADB41896EE1D1038DF1783ADBF3C,03 Oct 2019 18:15:41 -0000',
'MSOSPWebPartManager_DisplayModeName':'Browse',
'MSOSPWebPartManager_ExitingDesignMode':'false',
'MSOWebPartPage_Shared':'',
'MSOLayout_LayoutChanges':'',
'MSOLayout_InDesignMode':'',
'_wpSelected':'',
'_wzSelected':'',
'MSOSPWebPartManager_OldDisplayModeName':'Browse',
'MSOSPWebPartManager_StartWebPartEditingName':'false',
'MSOSPWebPartManager_EndWebPartEditing':'false',
'UrlReferrer':'',
'__VIEWSTATE':'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WQLrA2RkAg8PZBYCAgEPFgIfAwUc15PXnNeSINec16rXldeb158g15TXotee15XXk2QCEQ8PFgIeCEZvbnRTaXplZGQWBmYPDxYCHwNlFg4eBWNsYXNzBQ9hY2Nlc3NCaWdCdG5JbWceC29ubW91c2VvdmVyBSV0aGlzLmNsYXNzTmFtZT0nYWNjZXNzQmlnQnRuSW1nT3Zlcic7Hgpvbm1vdXNlb3V0BSF0aGlzLmNsYXNzTmFtZT0nYWNjZXNzQmlnQnRuSW1nJzseBXRpdGxlBRHXlNeS15PXnCDXpNeV16DXmB4DYWx0BRHXlNeS15PXnCDXpNeV16DXmB4Gb25ibHVyBSF0aGlzLmNsYXNzTmFtZT0nYWNjZXNzQmlnQnRuSW1nJzseB29uZm9jdXMFJXRoaXMuY2xhc3NOYW1lPSdhY2Nlc3NCaWdCdG5JbWdPdmVyJztkAgEPDxYCHwNlFg4fFAUSYWNjZXNzTm9ybWFsQnRuSW1nHxUFKHRoaXMuY2xhc3NOYW1lPSdhY2Nlc3NOb3JtYWxCdG5JbWdPdmVyJzsfFgUkdGhpcy5jbGFzc05hbWU9J2FjY2Vzc05vcm1hbEJ0bkltZyc7HxcFJ9eU16bXkiDXkteV15PXnCDXpNeV16DXmCDXodeY16DXk9eo15jXmR8YBSfXlNem15Ig15LXldeT15wg16TXldeg15gg16HXmNeg15PXqNeY15kfGQUkdGhpcy5jbGFzc05hbWU9J2FjY2Vzc05vcm1hbEJ0bkltZyc7HxoFKHRoaXMuY2xhc3NOYW1lPSdhY2Nlc3NOb3JtYWxCdG5JbWdPdmVyJztkAgIPDxYCHwNlFg4fFAUSYWNjZXNzTGl0dGxlQnRuSW1nHxUFKHRoaXMuY2xhc3NOYW1lPSdhY2Nlc3NMaXR0bGVCdG5JbWdPdmVyJzsfFgUkdGhpcy5jbGFzc05hbWU9J2FjY2Vzc0xpdHRsZUJ0bkltZyc7HxkFJHRoaXMuY2xhc3NOYW1lPSdhY2Nlc3NMaXR0bGVCdG5JbWcnOx8aBSh0aGlzLmNsYXNzTmFtZT0nYWNjZXNzTGl0dGxlQnRuSW1nT3Zlcic7HxgFEdeU16fXmNefINek15XXoNeYHxcFEdeU16fXmNefINek15XXoNeYZAITDw8WAh8DBQ3Xntek16og15DXqteoFgQfFAULU2l0ZU1hcFRleHQeBGhyZWYFEy9QYWdlcy9TaXRlTWFwLmFzcHhkAhUPDxYCHwMFCNi52LHYqNmKFgQfFAUPYWNjZXNzTGlua1N0eWxlHxtlZAIjD2QWAgICD2QWBgIHD2QWAgIBDxYCHwALKwQBZAIJDw8WAh8IaGQWAgIBDxYCHwALKwQBZAINDw8WAh8IaGQWAgIBDxYCHwALKwQBZBgBBTRjdGwwMCRtJGdfMjFjNTViYzFfOGVjYl80M2ZhXzgyYzdfMWQwNWFkMzY5YWNmJGN0bDAyDw9kZmTdzRtGsr1w01NHFfHW+mvlxh459w==',
'__VIEWSTATEGENERATOR':'BAB98CB3',
'__EVENTVALIDATION':'/wEWUALPqqidCQLU2bObDgL25q7yBgLXu5isAgKV+v+kBQKJ+v+kBQKI+oenBQKK+v+kBQKI+oOnBQKP+oOnBQKJ+r+nBQKP+t+kBQKL+rOnBQKJ+oenBQKJ+rOnBQKM+r+nBQKJ+renBQKO+r+nBQKJ+ounBQKM+v+kBQKL+renBQKO+o+nBQKL+v+kBQKL+r+nBQKO+oOnBQKK+punBQKK+t+kBQKP+tOkBQKK+ounBQKL+t+kBQKP+renBQKI+r+nBQKK+r+nBQKK+oOnBQKK+o+nBQKK+rOnBQKJ+tOkBQKI+v+kBQKL+ounBQKP+r+nBQKO+tOkBQKL+punBQKS+v+kBQKO+renBQKP+oenBQKO+ounBQKI+o+nBQKK+oenBQKL+o+nBQKd+v+kBQKP+punBQKP+rOnBQKJ+o+nBQKO+oenBQKM+rOnBQKP+ounBQKO+rOnBQKL+tOkBQKI+rOnBQKI+tOkBQKJ+t+kBQKO+punBQKJ+oOnBQKI+t+kBQKO+t+kBQKO+v+kBQKI+punBQKJ+punBQKK+tOkBQKI+renBQKP+v+kBQKK+renBQKI+ounBQKP+o+nBQKL+oenBQKL+oOnBQLawJsjAsWXsbwEAof+w6ILApr8j+MBvThbjPVn/neSgHIiPVEp7yTbL2Y=',
'SearchFreeText':'חפש',
'ctl00$m$g_72394dd3_98c8_4826_afe3_015e10b8c6a8$ddlParashaName':'0',
'ctl00$m$g_72394dd3_98c8_4826_afe3_015e10b8c6a8$dtcFromGovXEventDate$dtcFromGovXEventDateDate':this.state.date.getDate()+'/'+(this.state.date.getMonth()+1)+'/'+this.state.date.getFullYear(),
'ctl00$m$g_72394dd3_98c8_4826_afe3_015e10b8c6a8$dtcToGovXEventDate$dtcToGovXEventDateDate':'',
'_wpcmWpid':'',
'wpcmVal':''
      };
    
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
      await fetch('http://old.dat.gov.il/Pages/ShabathTimes.aspx', {
        method: 'POST',
        headers: {
          'Accept': 'application/text',
          'Content-Type': 'application/x-www-form-urlencoded',
          'DNT':'1'
        },
        body: formBody
          })
      .then(response => response.text())
      .then(text => HTMLParser.parse(text).querySelectorAll('#810beab8-f814-494b-91a0-4a18b67cbafa_1'))
      .then(element => this.createShabats(element[0].childNodes))
      .then((newShabats) => { this.setState({ data: newShabats }) })
      .catch(error => {

          Alert.alert("אירעה שגיאה", "בדוק את הגישה לרשת.\nולאחר מכן נסה שוב.", [{ text: 'אישור', onPress: () => BackHandler.exitApp() }, { text: 'נסה שוב', onPress: () => this.getData() }])
        
      })
    }
 
    pickDate= (event, date) => {
      event.type === 'dismissed'? date = new Date(): date= date;
      this.setState({
        show: false,
        date,
      });
      this.getData();
    }

  render() {        
    if (this.state.data.length > 0) {
      return (
        <View style={styles.container} >
          <StatusBar translucent={false} hidden={false} animated={true} barStyle="light-content" backgroundColor="#123" />
          <ImageBackground source={{ uri: 'https://www.jewishmag.com/90mag/shabbatpoem/title.gif' }} imageStyle={{ opacity: 0.15 }} style={{ width: '100%', height: '100%' }}>
            <Text style={styles.title}>זמני כניסת שבתות ומועדים</Text>
            <TouchableNativeFeedback onPress={() => {this.setState({show:true})}}>
              <View style={{
                paddingTop: 5,
                justifyContent: 'center',
                flexDirection: 'row',
                paddingBottom: 10
              }}>
                <Text style={{ color: 'black', fontWeight: 'normal', fontFamily: 'ShmulikCLM' }}>בחר תאריך: </Text>
                <Text style={{ color: 'black', textDecorationLine: 'underline' }}>
                  {(this.state.date.getDate() < 10 ? "0" + this.state.date.getDate() : this.state.date.getDate()) + "/" + (this.state.date.getMonth() + 1 < 10 ? "0" + (this.state.date.getMonth() + 1) : this.state.date.getMonth() + 1) + "/" + this.state.date.getFullYear()}
                </Text>
                {this.state.show && 
                <DateTimePicker 
                value={this.state.date}
                mode='date'
                onChange={this.pickDate}
                minimumDate= {new Date(2013,4,5)}/>}
              </View>
            </TouchableNativeFeedback>
            <ScrollView indicatorStyle='black' showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
              {this.state.data.map((shabat) => {
                const dateOfShabat = new Date(shabat.date);
                  return (
                    <View key={shabat._id}>
                      <View style={{ flex: 1 }}>
                        <TableOfShabat shabat={shabat} date={dateOfShabat} />
                      </View>
                    </View>
                  );
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