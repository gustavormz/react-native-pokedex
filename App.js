import * as React from 'react';
import 'react-native-gesture-handler';
import {
	NavigationContainer
} from '@react-navigation/native';
import {
	createStackNavigator
} from '@react-navigation/stack';

import SplashscreenView from './views/splashscreen';
import HomeView from './views/home';

const Stack = createStackNavigator();

const HomeStackNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen
			name={"Home"}
			component={HomeView}/>
	</Stack.Navigator>
);

const App = () => (
	<NavigationContainer>
		<Stack.Navigator
			screenOptions={{
				headerShown: false
			}}>
			<Stack.Screen
				name={"Splashscreen"}
				component={SplashscreenView}/>
			<Stack.Screen
				name={"HomeStack"}
				component={HomeStackNavigator}/>
		</Stack.Navigator>
	</NavigationContainer>
);

export default App;
