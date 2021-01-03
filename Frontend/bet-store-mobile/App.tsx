import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import FlashMessage from 'react-native-flash-message';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import store from './src/store';
  import { LogBox } from 'react-native';
import * as Permissions  from 'expo-permissions';

export default function App() {
  //const [statusCam, setstatusCam] = useState(false);
  //const [media, setmedia] = useState(false)

  // useEffect(() => {
  //   const _checkPermissions = async () => {
  //     const { status } = await Permissions.askAsync(Permissions.CAMERA);
  //     setstatusCam(status=='granted');
  //     // take permission for Gallery, aka CameraRoll
  //     const statusMedila= await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
  //     setmedia(statusMedila.status=='granted');
  //   };
  // }, [])
  

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  // Ignore log notification by message:
  //LogBox.ignoreLogs(['The global "__expo" and "Expo" objects will be removed in SDK 41. Learn more about how to fix this warning: https://expo.fyi/deprecated-globals']);
  //console.disableYellowBox = true;

  // Ignore all log notifications:
  LogBox.ignoreAllLogs();

  //if(statusCam)

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store = {store}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />

          <FlashMessage position="top" />
        </SafeAreaProvider>
      </Provider>
    );
  }
}
