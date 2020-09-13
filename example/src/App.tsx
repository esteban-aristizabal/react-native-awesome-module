import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import KushkiReactNative from '@epas1117/react-native-awesome-module';

export default function App() {
  React.useEffect(() => {
    KushkiReactNative.requestToken();
  }, []);

  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
