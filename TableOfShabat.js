import React from 'react';
import { Text, View, Linking, Alert, TouchableOpacity } from 'react-native';
import { styles, COLORS } from './styles';

const CITIES = [
  { key: 'Jerusalem', label: 'ירושלים' },
  { key: 'TelAviv',   label: 'תל אביב' },
  { key: 'Hayfa',     label: 'חיפה'    },
  { key: 'BeerSheva', label: 'באר שבע' },
];

export default class TableOfShabat extends React.Component {
  isHoliday() {
    return this.props.shabat.parasha.includes('חג:');
  }

  openLink() {
    const { parasha } = this.props.shabat;
    if (parasha.includes('פרשת')) {
      const name = parasha.replace('פרשת ', '');
      Linking.openURL('https://he.wikipedia.org/wiki/פרשת_' + encodeURIComponent(name));
    } else {
      Alert.alert('מידע', 'ניתן לקבל מידע רק עבור פרשות השבוע');
    }
  }

  render() {
    const { shabat } = this.props;
    const isHoliday = this.isHoliday();
    const canLink = shabat.parasha.includes('פרשת');

    return (
      <View style={[styles.card, isHoliday ? styles.cardHoliday : styles.cardShabbat]}>

        {/* Card Header */}
        <View style={[styles.cardHeader, isHoliday ? styles.cardHeaderHoliday : styles.cardHeaderShabbat]}>
          <TouchableOpacity onPress={() => this.openLink()} activeOpacity={canLink ? 0.6 : 1}>
            <View style={styles.parashaRow}>
              <Text style={styles.parashaEmoji}>{isHoliday ? '🕍' : '📖'}</Text>
              <Text style={[
                styles.parashaTitle,
                isHoliday && styles.holidayTitle,
                !canLink && styles.noLink,
              ]}>
                {shabat.parasha}
              </Text>
            </View>
          </TouchableOpacity>

          <View style={styles.datesRow}>
            <Text style={styles.gregDate}>{shabat.prevDate} – {shabat.date}</Text>
            <Text style={styles.dateSep}>·</Text>
            <Text style={styles.hebDate}>{shabat.hebDate}</Text>
          </View>
        </View>

        {/* Times Grid */}
        <View style={styles.timesGrid}>
          {/* Header row */}
          <View style={styles.timesHeaderRow}>
            <View style={styles.timesHeaderSpacer} />
            <View style={styles.timesHeaderCell}>
              <Text style={styles.timesHeaderIn}>🕯 כניסה</Text>
            </View>
            <View style={styles.timesHeaderCell}>
              <Text style={styles.timesHeaderOut}>✨ יציאה</Text>
            </View>
          </View>

          <View style={styles.timesDivider} />

          {/* City rows */}
          {CITIES.map((city, idx) => (
            <View key={city.key} style={[styles.timesRow, idx % 2 === 1 && styles.timesRowAlt]}>
              <Text style={styles.cityName}>{city.label}</Text>
              <View style={styles.timeCell}>
                <Text style={styles.timeIn}>{shabat[city.key + '_in']}</Text>
              </View>
              <View style={styles.timeCell}>
                <Text style={styles.timeOut}>{shabat[city.key + '_out']}</Text>
              </View>
            </View>
          ))}
        </View>

      </View>
    );
  }
}
