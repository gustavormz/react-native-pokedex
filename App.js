import * as React from 'react';
import 'react-native-gesture-handler';
import {
	NavigationContainer
} from '@react-navigation/native';
import {
	createStackNavigator
} from '@react-navigation/stack';
import {
	DefaultTheme,
	Provider as PaperProvider
} from 'react-native-paper';
import {
	createMaterialBottomTabNavigator
} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import SplashscreenView from './views/splashscreen';
import HomeView from './views/home';
import DetailView from './views/detail';
import TypeView from './views/type';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const TypeStackNavigator = () => (
	<Stack.Navigator
		screenOptions={{
			headerStyle: {
				backgroundColor: `red`,
			},
			headerTitleStyle: {
				color: `white`
			}
		}}>
		<Stack.Screen
			name={"Type"}
			component={TypeView}/>
		<Stack.Screen
			name={`Detail`}
			component={DetailView}/>
	</Stack.Navigator>
);

const HomeStackNavigator = () => (
	<Stack.Navigator
		screenOptions={{
			headerStyle: {
				backgroundColor: `red`,
			},
			headerTitleStyle: {
				color: `white`
			}
		}}
		headerMode={`screen`}>
		<Stack.Screen
			name={"Home"}
			component={HomeView}/>
		<Stack.Screen
			name={`Detail`}
			component={DetailView}/>
	</Stack.Navigator>
);

const TabNavigator = () => (
	<Tab.Navigator
		sceneAnimationEnabled={false}
		shifting={true}>
		<Stack.Screen
			name={"HomeStackNavigator"}
			component={HomeStackNavigator}
			options={{
				tabBarLabel: 'Home',
				tabBarIcon: ({ color }) => (
				  <MaterialCommunityIcons name="home" color={color} size={26} />
				)
			}}/>
		<Stack.Screen
			name={"TypeStackNavigator"}
			component={TypeStackNavigator}
			options={{
				tabBarLabel: 'Types',
				tabBarIcon: ({ color }) => (
				  <MaterialCommunityIcons name="card-search" color={color} size={26} />
				)
			}}/>
	</Tab.Navigator>
);

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: `#D62839`,
		accent: `#BA324F`,
		background: `white`,
		surface: `#175676`,
		text: `white`,
		disabled: `gray`,
		placeholder:`purple`,
		backdrop:`black`,
		onSurface: `#4BA3C3`,
		notification: `pink`
	}
};

const themeNavigator = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: `#D62839`,
		accent: `#BA324F`,
		background: `white`,
		surface: `white`,
		text: `white`,
		disabled: `gray`,
		placeholder:`purple`,
		backdrop:`black`,
		onSurface: `#4BA3C3`,
		notification: `pink`
	}
};

const App = () => (
	<PaperProvider theme={theme}>
		<NavigationContainer theme={themeNavigator}>
			<Stack.Navigator
				screenOptions={{
					headerShown: false
				}}>
				<Stack.Screen
					name={"Splashscreen"}
					component={SplashscreenView}/>
				<Stack.Screen
					name={"TabNavigator"}
					component={TabNavigator}/>
			</Stack.Navigator>
		</NavigationContainer>
	</PaperProvider>
);

export default App;
