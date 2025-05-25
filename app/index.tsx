import FilterChips from '@/components/FilterChips';
import PostCard from '@/components/PostCard';
import Colors from '@/constants/Colors';
import type { Post } from '@/types/post';
import React, { useState } from 'react';
import { FlatList, StyleSheet, TextInput, View } from 'react-native';

const dummyPosts: Post[] = [
  { id: '1', title: '原味蛋塔', date: '2025/4/17', location: '台北大安', distance: 200, type: '甜點' },
  { id: '2', title: '紅蘿蔔', date: '2025/4/20', location: '台北信義', distance: 350, type: '蔬果' },
  { id: '3', title: '米餅', date: '2025/4/19', location: '新北永和', distance: 120, type: '零食' },
  { id: '4', title: '法國麵包', date: '2025/4/21', location: '台北中正', distance: 480, type: '麵包' },
];

const categories = ['全部', '蔬果', '零食', '甜點', '麵包'];

export default function HomeScreen() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');

  const filteredPosts = dummyPosts.filter(post => {
    const matchCategory = selectedCategory === '全部' || post.type === selectedCategory;
    const matchSearch = post.title.includes(search);
    return matchCategory && matchSearch;
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="搜尋..."
        value={search}
        onChangeText={setSearch}
      />

      <FilterChips
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <FlatList
        data={filteredPosts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <PostCard post={item} />}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 50,
    backgroundColor: Colors.background,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },
});
