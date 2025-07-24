import React from 'react';
import { Platform, SafeAreaView, StatusBar } from 'react-native';

export default function CustomReactSafeAreaView({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}
    >
      {children}
    </SafeAreaView>
  );
}
