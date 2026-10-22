import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaProvider>
      {showSplash ? <SplashScreen /> : <HomeScreen />}
    </SafeAreaProvider>
  );
}