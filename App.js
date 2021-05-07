import * as React from 'react';
import 'react-native-gesture-handler';
import {
	NavigationContainer
} from '@react-navigation/native';
import {
	createStackNavigator
} from '@react-navigation/stack';

import SplashscreenView from './views/splashscreen';

const Stack = createStackNavigator();

const App = () => (
	<NavigationContainer>
		<Stack.Navigator
			screenOptions={{
				headerShown: false
			}}>
			<Stack.Screen
				name={"Splashscreen"}
				component={SplashscreenView}/>
		</Stack.Navigator>
	</NavigationContainer>
);

export default App;
