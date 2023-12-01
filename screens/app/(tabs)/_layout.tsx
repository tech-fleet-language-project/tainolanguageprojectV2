import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Link, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../../constants/Colors';
import TabOneScreen from './index';
import TabTwoScreen from './two';

const Tabs = createBottomTabNavigator();

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

	return (
    <NavigationContainer>
		<Tabs.Navigator
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
			}}
		>
      <Tabs.Screen
        name="index"
        component={TabOneScreen}
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => {
            return <TabBarIcon name="code" color={color} />;
          },
          headerRight: () => {
            return (
              <Link to={{screen: 'modal'}}>
                <Pressable>
                  {({ pressed }) => {
                    return (
                      <FontAwesome
                        name="info-circle"
												size={25}
												color={Colors[colorScheme ?? 'light'].text}
												style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
											/>
										);
									}}
								</Pressable>
              </Link>
            );
          },
        }}
      />
      <Tabs.Screen
        name="two"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => {
            return <TabBarIcon name="code" color={color} />;
          },
        }}
      />
    </Tabs.Navigator>
    </NavigationContainer>
  );
}
