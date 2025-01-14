// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
// import { StatusBar } from 'expo-status-bar';
// import { useEffect } from 'react';
// import 'react-native-reanimated';

// import { useColorScheme } from '@/hooks/useColorScheme';

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//   });

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }

//   return (
//     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         <Stack.Screen name="+not-found" />
//       </Stack>
//       <StatusBar style="auto" />
//     </ThemeProvider>
//   );
// }

import React, { useEffect, useState } from 'react';
import SplashScreen from './(tabs)/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from '../navigators/AuthNavigator';
import { StatusBar } from 'react-native';
import MainNavigator from '@/navigators/MainNavigator';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

const App = () => {
  //sử dụng useState để lưu thời gian 1.5 giây
  const [isShowSplash, setIsShowSplash] = useState(true);
  //muốn lưu liền thì dùng store redux toolkit
  const [accessToken, setAccessToken] = useState('');
  //Kiểm tra đăng nhập
  const {getItem, setItem} = useAsyncStorage('assetToken');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  //chạy 01 lần thì dùng useEffect không tham số []
  useEffect(() => {
    checkLogin();
  }, []);

  //Khu vực các hàm
  const checkLogin = async () => {
    const token = await getItem();
    console.log(token);
    //check token
    token && setAccessToken(token);
  };

  //dùng dấu ! để phủ định điều kiện
  //background nằm dưới thanh statusBar
  // Kiểm tra token nếu có thì trả về Main không thì trả về Auth
  return <>
    <StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'} />
    {
      isShowSplash ? (
        <SplashScreen />
      ) : (
        
        accessToken ? <MainNavigator /> : <AuthNavigator/>
      )
    }
  </>;
};

export default App;