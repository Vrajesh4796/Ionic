import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'TodoList',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    GoogleAuth:{
      scopes: ["profile", "email"],
      serverClietId: "1019514389247-ee99aavp30cfedrve3b61uos72poqrvs.apps.googleusercontent.com",
      forceCodeForRefreshToken: true
    }
  }
};

export default config;

