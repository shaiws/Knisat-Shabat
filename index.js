/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from 'react-native';
import KnisatShabbat from './KnisatShabbat';
import { name as appName } from './app.json';
import { I18nManager } from "react-native";

I18nManager.forceRTL(true) // false for LTR direction

AppRegistry.registerComponent(appName, () => KnisatShabbat);
