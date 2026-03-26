import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tokoservice.nota',
  appName: 'Nota Service HP',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    cleartext: true
  },
  android: {
    permissions: [
      "android.permission.READ_CONTACTS",
      "android.permission.WRITE_CONTACTS",
      "android.permission.CAMERA",
      "android.permission.BLUETOOTH",
      "android.permission.BLUETOOTH_ADMIN",
      "android.permission.BLUETOOTH_SCAN",
      "android.permission.BLUETOOTH_CONNECT",
      "android.permission.ACCESS_FINE_LOCATION"
    ]
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: '#667eea'
    },
    StatusBar: {
      style: 'LIGHT',
      backgroundColor: '#667eea'
    }
  }
};

export default config;
