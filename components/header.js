import React from 'react';
import {
	Appbar,
	DefaultTheme
} from 'react-native-paper';
import {
	View,
	StyleSheet
} from 'react-native';

import Logo from './icon/logo';

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

const Header = ({ scene, previous, navigation }) => {
  const { options } = scene.descriptor;
  const title =
	options.headerTitle !== undefined
	  ? options.headerTitle
	  : options.title !== undefined
	  ? options.title
	  : scene.route.name;

  return (
	<Appbar.Header theme={{ colors: { primary: theme.colors.surface } }}>
		{ previous && (
			<Appbar.BackAction
				onPress={navigation.pop}
				color={theme.colors.primary} />
		)}
	  <Appbar.Content
		title={
			<View style={{ height: 100 }}>
				<Logo />
			</View>
		}
	  />
	</Appbar.Header>
  );
};

export default Header;
