import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#588b76',
        headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#ffffff',
        },
      }}
    >
      <Tabs.Screen
        name="index"  // Profile tab first
        options={{
          title: 'Profile',
          tabBarIcon: () => (
            <AntDesign name="profile" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="lost-pets"  // Lost Pets tab second
        options={{
          title: 'Lost Pets',
          tabBarIcon: () => (
            <MaterialIcons name="pets" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="found-pets"  // Found Pets tab third
        options={{
          title: 'Found Pets',
          tabBarIcon: () => (
            <MaterialIcons name="pets" size={24} color="black" />
          ),
        }}
      />
	   <Tabs.Screen
        name="post-pet"  // New Post tab
        options={{
          title: 'Post Pet',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="add-circle" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"  // Messages tab last
        options={{
          title: 'Messages',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="message-star" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}


