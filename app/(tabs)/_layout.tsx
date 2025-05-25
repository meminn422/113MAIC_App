import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

// ❌ 暫時註解：目前沒有 HapticTab 檔案
// import { HapticTab } from '@/components/HapticTab';

// ❌ 暫時註解：若沒有 IconSymbol.tsx 會報錯
// import { IconSymbol } from '@/components/ui/IconSymbol';

// ❌ 暫時註解：Tab 背景特效可之後加
// import TabBarBackground from '@/components/ui/TabBarBackground';

// ❌ 暫時註解：若 Colors 或主題 hook 尚未設定
// import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  // const colorScheme = useColorScheme(); // ❌ 暫時註解

  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,

        // tabBarButton: HapticTab,
        // tabBarBackground: TabBarBackground,

        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          // tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          // tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
