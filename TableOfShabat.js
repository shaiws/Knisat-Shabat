import React from 'react';
import { Text, View, Linking, Alert } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { styles } from './styles';
export default class TableOfShabat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['', 'כניסה', 'יציאה',],
      tableTitle: ['ירושלים', 'תל אביב', 'חיפה', 'באר שבע'],
      tableData: [
        [this.props.shabat.Jerusalem_in, this.props.shabat.Jerusalem_out],
        [this.props.shabat.Tel_Aviv_in, this.props.shabat.Tel_Aviv_out],
        [this.props.shabat.Hayfa_in, this.props.shabat.Hayfa_out],
        [this.props.shabat.Beer_Sheva_in, this.props.shabat.Beer_Sheva_out]
      ]
    }
  }
  getPreviousDay(date) {
    var curDay = date.split('/')[0];
    var curMonth = date.split('/')[1];
    var curYear = date.split('/')[2];
    var preDay = '';
    var preMonth = '';
    var preYear = '';
    if (curDay === '01') {
      if (curMonth === '01') {
        preYear = parseInt(curYear) - 1;
        preMonth = '12';
        preDay = '31';
      }
      else if (curMonth === '03') {
        preDay = '28';
        preMonth = '02';
        preYear = curYear;
      }
      else if (parseInt(curMonth) % 2 == 0) {
        preDay = '31';
        // if (parseInt(curMonth) - 1 < 10)
        //   preMonth = '0' + (parseInt(curMonth) - 1);
        // else
        //   preMonth = parseInt(curMonth) - 1;
        preYear = curYear;
      }
      else {
        preDay = '30';
        preMonth = `0${curMonth - 1}`;
        preYear = curYear;

      }
    }
    else {
      preDay = (parseInt(curDay) - 1) < 10 ? '0' + (parseInt(curDay) - 1) : (parseInt(curDay) - 1);
      preMonth = (parseInt(curMonth)) < 10 ? '0' + parseInt(curMonth) : parseInt(curMonth);
      //  preMonth = parseInt(curMonth);
      preYear = curYear;
    }
    return (`${preDay}/${preMonth}/${preYear}`)
  }
  render() {
    return (
      <View
        key={this.props.shabat._id}
        style={{
          margin: 5,
          flex: 1,
          alignSelf: 'stretch',
          flexDirection: 'column',
        }}>
        <View style={{ flex: 1, alignSelf: 'stretch', paddingBottom: 5 }}>
          <Text
            onPress={() =>
              this.props.shabat.parasha.includes('פרשת')
                ? Linking.openURL(
                  'https://he.wikipedia.org/wiki/' +
                  this.props.shabat.parasha.replace(' ', '_'),
                )
                : Alert.alert('ניתן לקבל מידע רק עבור פרשות')
            }
            style={styles.ParashaTitle}>
            {this.props.shabat.parasha}
          </Text>
        </View>
        <View style={styles.hebText}>
          <Text style={styles.date}>{this.getPreviousDay(this.props.shabat.date)} - {this.props.shabat.date}
          </Text>
        </View>
        <View style={styles.hebText}>
          <Text style={styles.HebDate}>{this.props.shabat.hebDate}</Text>
        </View>
        <View style={styles.tableContainer}>
          <Table borderStyle={{ borderWidth: 1 }}>
            <Row data={this.state.tableHead} flexArr={[1, 1, 1]} style={styles.tableHead} textStyle={styles.tableHeaderText} />
            <TableWrapper style={styles.tableWrapper}>
              <Col data={this.state.tableTitle} style={styles.tableTitle} heightArr={[28, 28, 28, 28]} textStyle={styles.tableTitleText} />
              <Rows data={this.state.tableData} flexArr={[1, 1]} style={styles.tableRow} textStyle={styles.tableText} />
            </TableWrapper>
          </Table>
        </View>
      </View>
    );
  }
}
