import { StyleSheet, Text, View } from 'react-native';
import coffees from './app/config/coffees';
import colors from './app/config/colors'
import CoffeeDetailsScreen from './app/screens/CoffeeDetailsScreen';
import HomeScreen from './app/screens/HomeScreen';

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: colors.dark}}>
        <HomeScreen />
        <CoffeeDetailsScreen coffee={coffees[4]}/>
    </View>
  );
}

const styles = StyleSheet.create({});
