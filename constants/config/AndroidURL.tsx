import { Platform } from "react-native";



export const BASE_URL = Platform.OS === 'android' ? 'http://10.0.2.2:9099' : 'http://localhost:9099';
