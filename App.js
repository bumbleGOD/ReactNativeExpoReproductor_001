import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GlobalStyles from './assets/styles/GlobalStyles';

// componentes
import Navigation from './Navigation';
import IndexView from './app/IndexView';

// componentes
import RegisterView from './app/auth/RegisterView';

export function App () {
  return (
    <View style={GlobalStyles.container}>
      <Navigation></Navigation>
      {/* <RegisterView></RegisterView> */}
      {/* <IndexView></IndexView> */}
    </View>
  );
}

export default App