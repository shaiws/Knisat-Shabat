# כניסת שבת 🕯

An Android app that shows Shabbat candle-lighting and havdalah times for major Israeli cities, pulled live from the Israeli government's open data API.

Built with React Native.

---

## What it does

Every Friday you need to know two things: when Shabbat starts, and when it ends. This app gives you both — for Jerusalem, Tel Aviv, Haifa, and Beer Sheva — along with the weekly Torah portion and Jewish holiday info.

- Shows the next 10+ upcoming Shabbatot and holidays
- Candle-lighting (כניסה) and havdalah (יציאה) times per city
- Weekly parasha name — tap it to open the Wikipedia article
- Holidays labeled separately (Rosh Hashana, Yom Kippur, Pesach, Sukkot, Shavuot, etc.)
- Date picker to jump to any future Shabbat
- Hebrew and Gregorian dates shown together
- Data sourced from Israel's Ministry of Religious Services

---

## Screenshots

> Coming soon

---

## Stack

- **React Native 0.76** / React 18
- [`@react-native-community/datetimepicker`](https://github.com/react-native-datetimepicker/datetimepicker) for the date picker
- [data.gov.il](https://data.gov.il) open government API for Shabbat times
- Custom Hebrew font: ShmulikCLM

---

## Getting started

### Prerequisites

- Node.js 18+
- React Native environment set up ([guide](https://reactnative.dev/docs/environment-setup))
- Android Studio + emulator or physical device

### Install & run

```bash
git clone https://github.com/shaiws/Knisat-Shabat.git
cd Knisat-Shabat
npm install
npx react-native run-android
```

### Build release APK

```bash
cd android
./gradlew assembleRelease
```

Output: `android/app/build/outputs/apk/release/app-release.apk`

---

## Data source

All Shabbat and holiday times are fetched from Israel's official government open data portal:

> [https://data.gov.il](http://old.dat.gov.il/Pages/ShabathTimes.aspx)  
> © המשרד לשירותי דת

---

## Security

| Version | Vulnerabilities |
|---------|----------------|
| v1 (RN 0.65) | 36 (6 critical, 18 high) |
| v2 (RN 0.76) | **0** ✅ |

Upgraded from React Native 0.65 → 0.76.7 and React 17 → 18.3 to eliminate all known dependency vulnerabilities.

---

## License

MIT
