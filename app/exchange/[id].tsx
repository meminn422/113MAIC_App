// app/exchange/[id].tsx
import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function ExchangeDetail() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>貼文 ID：{id}</Text>
    </View>
  );
}
