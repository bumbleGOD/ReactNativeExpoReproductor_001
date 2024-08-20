import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Navigation';
import GlobalStyles from './assets/styles/GlobalStyles';

// componentes
import RegisterView from './app/auth/RegisterView';

export function App () {
  return (
    <View style={GlobalStyles.container}>
      <Navigation></Navigation>
      {/* <RegisterView></RegisterView> */}
    </View>
  );
}

export default App