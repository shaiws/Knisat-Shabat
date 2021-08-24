/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from 'react-native';
import KnisatShabbat from './KnisatShabbat';
import { name as appName } from './app.json';
import { I18nManager } from "react-native";
import OneSignal from "react-native-onesignal";

I18nManager.forceRTL(true) // false for LTR direction

OneSignal.setAppId("MY-APP-ID");

AppRegistry.registerComponent(appName, () => KnisatShabbat);
