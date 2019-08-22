import React from 'react';
import { Text, View } from 'react-native';
import { styles } from "./styles";
export default class TableOfShabat extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View key={this.props.shabat._id} style={{ margin: 5, flex: 1, alignSelf: 'stretch', flexDirection: 'column' }}>
                <View style={{ flex: 1, alignSelf: 'stretch', paddingBottom: 5 }}>
                    <Text style={styles.ParashaTitle}>{
                        this.props.shabat.parasha}</Text>
                </View>
                <View style={{ flex: 1, alignSelf: 'stretch' }}>
                    <Text style={styles.date}>{(this.props.date.getDate() < 10 ? "0" + this.props.date.getDate() : this.props.date.getDate()) + "/" + (this.props.date.getMonth() + 1 < 10 ? "0" + (this.props.date.getMonth() + 1) : this.props.date.getMonth() + 1) + "/" + this.props.date.getFullYear()}</Text>
                </View>
                <View style={{ flex: 1, alignSelf: 'stretch' }}>
                    <Text style={styles.HebDate}>{this.props.shabat.heb_day} {this.props.shabat.heb_month} {this.props.shabat.heb_year}</Text>
                </View>
                <View style={styles.rowView}>
                    <View style={styles.columnView}>
                        <Text style={styles.header}> </Text>
                        <View style={{ width: '100%', height: 1, backgroundColor: 'lightblue' }} />
                        <Text style={styles.city}>ירושלים</Text>
                        <View style={{ width: '100%', height: 1, backgroundColor: 'lightblue' }} />
                        <Text style={styles.city}>תל אביב</Text>
                        <View style={{ width: '100%', height: 1, backgroundColor: 'lightblue' }} />
                        <Text style={styles.city}>חיפה</Text>
                        <View style={{ width: '100%', height: 1, backgroundColor: 'lightblue' }} />
                        <Text style={styles.city}>באר שבע</Text>
                    </View>
                    <View style={{ width: 1, height: '100%', backgroundColor: 'lightblue' }} />
                    <View style={styles.columnView}>
                        <Text style={styles.header}>כניסה</Text>
                        <View style={{ width: '100%', height: 1, backgroundColor: 'lightblue' }} />
                        <Text style={styles.text}> {this.props.shabat.Jerusalem_in.slice(0, 5)} </Text>
                        <View style={{ width: '100%', height: 1, backgroundColor: 'lightblue' }} />
                        <Text style={styles.text}> {this.props.shabat.Tel_Aviv_in.slice(0, 5)} </Text>
                        <View style={{ width: '100%', height: 1, backgroundColor: 'lightblue' }} />
                        <Text style={styles.text}> {this.props.shabat.Hayfa_in.slice(0, 5)} </Text>
                        <View style={{ width: '100%', height: 1, backgroundColor: 'lightblue' }} />
                        <Text style={styles.text}> {this.props.shabat.Beer_Sheva_in.slice(0, 5)} </Text>
                    </View>
                    <View style={{ width: 1, height: '100%', backgroundColor: 'lightblue' }} />
                    <View style={styles.columnView}>
                        <Text style={styles.header}>יציאה</Text>
                        <View style={{ width: '100%', height: 1, backgroundColor: 'lightblue' }} />
                        <Text style={styles.text}> {this.props.shabat.Jerusalem_out.slice(0, 5)} </Text>
                        <View style={{ width: '100%', height: 1, backgroundColor: 'lightblue' }} />
                        <Text style={styles.text}> {this.props.shabat.Tel_Aviv_out.slice(0, 5)} </Text>
                        <View style={{ width: '100%', height: 1, backgroundColor: 'lightblue' }} />
                        <Text style={styles.text}> {this.props.shabat.Hayfa_out.slice(0, 5)} </Text>
                        <View style={{ width: '100%', height: 1, backgroundColor: 'lightblue' }} />
                        <Text style={styles.text}> {this.props.shabat.Beer_Sheva_out.slice(0, 5)} </Text>
                    </View>
                </View>
            </View>
        );
    }
}