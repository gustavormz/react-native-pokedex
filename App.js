import * as React from 'react';
import 'react-native-gesture-handler';
import {
	NavigationContainer
} from '@react-navigation/native';
import {
	createStackNavigator
} from '@react-navigation/stack';
import {
	Provider as PaperProvider
} from 'react-native-paper';

import SplashscreenView from './views/splashscreen';
import HomeView from './views/home';
import DetailView from './views/detail';

const Stack = createStackNavigator();

const HomeStackNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen
			name={"Home"}
			component={HomeView}/>
		<Stack.Screen
			name={`Detail`}
			component={DetailView}/>
	</Stack.Navigator>
);

const App = () => (
	<PaperProvider>
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
	</PaperProvider>
);

export default App;
