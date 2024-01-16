import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.asteroid.app',
  appName: 'Asteroid',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
