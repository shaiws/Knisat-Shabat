import React, { Component } from 'react';
import {
  ScrollView, Text, View, Linking,
  Pressable, SafeAreaView, Platform,
  StatusBar, ActivityIndicator,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import TableOfShabat from './TableOfShabat';
import { styles, COLORS } from './styles';
import Shabat from './Shabat';

export default class KnisatShabbat extends Component {
  constructor(props) {
    super(props);
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
    this.state = {
      data: [],
      show: false,
      date: new Date(),
      lastDate: null,
      loading: true,
    };
  }

  async componentDidMount() {
    await this.getData();
  }

  async getData() {
    this.setState({ loading: true });
    try {
      const res = await fetch(
        'https://data.gov.il/api/3/action/datastore_search?resource_id=cfe1dd76-a7f8-453a-aa42-88e5db30d567&limit=1095'
      );
      const json = await res.json();
      const shabats = await this.createShabats(json.result.records);
      this.setState({ data: shabats, loading: false });
    } catch (e) {
      this.setState({ loading: false });
    }
  }

  async createShabats(records) {
    records.sort((a, b) => parseInt(a._id) - parseInt(b._id));
    this.setState({ lastDate: new Date(records[records.length - 1].date) });

    const now = this.state.date.getTime();
    let min = 0;
    for (const el of records) {
      if (now > new Date(el.date).getTime() + 86400000) min++;
      else break;
    }
    const max = min + 10 >= records.length ? records.length : min + 11;

    return records.slice(min, max).map((el, i) =>
      new Shabat(
        min + i,
        el.date, el.heb_date, el.parasha,
        el.Jerusalem_in,  el.Jerusalem_out,
        el.TelAviv_in,    el.TelAviv_out,
        el.Hayfa_in,      el.Hayfa_out,
        el.BeerSheva_in,  el.BeerSheva_out,
      )
    );
  }

  pickDate = (event, date) => {
    if (event.type === 'dismissed' || !date) {
      if (Platform.OS === 'android') this.setState({ show: false });
      return;
    }
    this.setState({ date, show: Platform.OS === 'ios' }, () => {
      if (Platform.OS === 'android') {
        this.setState({ show: false });
        this.getData();
      }
    });
  };

  confirmDate = () => {
    this.setState({ show: false });
    this.getData();
  };

  formatDate(d) {
    const day   = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    return `${day}/${month}/${d.getFullYear()}`;
  }

  render() {
    const { data, show, date, lastDate, loading } = this.state;

    if (loading) {
      return (
        <View style={styles.loadingContainer}>
          <StatusBar barStyle="light-content" backgroundColor={COLORS.headerBg} />
          <Text style={styles.loadingEmoji}>🕍</Text>
          <ActivityIndicator size="large" color={COLORS.accent} style={{ marginBottom: 16 }} />
          <Text style={styles.loadingText}>הנתונים נטענים...</Text>
          <Text style={styles.loadingSubText}>שבת שלום!</Text>
        </View>
      );
    }

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={COLORS.headerBg} />

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerIcon}>🕯</Text>
          <Text style={styles.headerTitle}>זמני כניסת שבתות ומועדים</Text>
          <Text style={styles.headerSubtitle}>לחץ על פרשה לקבלת מידע בויקיפדיה</Text>
        </View>

        {/* Date picker pill */}
        <Pressable onPress={() => this.setState({ show: true })} style={styles.datePill}>
          <Text style={styles.datePillText}>📅 בחר תאריך: {this.formatDate(date)}</Text>
        </Pressable>

        {/* Date picker */}
        {show && (
          <View style={styles.datePickerWrapper}>
            <DateTimePicker
              value={date}
              mode="date"
              locale="he-IL"
              onChange={this.pickDate}
              minimumDate={new Date()}
              maximumDate={lastDate || undefined}
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              style={{ width: '100%', backgroundColor: COLORS.card }}
              themeVariant="dark"
            />
            {Platform.OS === 'ios' && (
              <Pressable style={styles.confirmButton} onPress={this.confirmDate}>
                <Text style={styles.confirmButtonText}>אישור</Text>
              </Pressable>
            )}
          </View>
        )}

        {/* List */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 12, paddingBottom: 20 }}
        >
          {data.map(shabat => (
            <TableOfShabat key={shabat._id} shabat={shabat} />
          ))}
        </ScrollView>

        {/* Footer */}
        <View style={styles.footer}>
          <Text
            onPress={() => Linking.openURL('http://old.dat.gov.il/Pages/ShabathTimes.aspx')}
            style={styles.copyrights}>
            © המידע נלקח מהאתר הממשלתי של המשרד לשירותי דת ©
          </Text>
        </View>

      </SafeAreaView>
    );
  }
}
