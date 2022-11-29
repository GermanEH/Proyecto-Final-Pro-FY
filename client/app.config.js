module.exports = ({ config }) => ({
  "name": config.name,
  "slug": "proyecto_final_pro-fy",
  "expo": {
    "android": {
      "googleServicesFile": "./google-services.json",
      "package": "com.proyecto_final_pro_fy",
      "versionCode": 1
    },
 /*    "ios": {
      "googleServicesFile": "./GoogleService-Info.plist",
      "bundleIdentifier": "com.henry.profy"
    }, */
    "plugins": ["@react-native-google-signin/google-signin"],
    "extra": {
      "eas": {
        "projectId": "62905aa0-c069-4f03-8a9d-456819649212"
      }
    },
  }
});