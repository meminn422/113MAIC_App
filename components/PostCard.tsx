import Colors from '@/constants/Colors';
import type { Post } from '@/types/post';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const router = useRouter();

  return (
    <TouchableOpacity
        style={styles.card}
        onPress={() => router.push(`/exchange/${post.id}` as const)}
        >
      <Text style={styles.title}>{post.title}</Text>
      <View style={styles.metaRow}>
        <Text style={styles.meta}>{post.date}</Text>
        <Text style={styles.meta}>{post.location} · {post.distance}m</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  meta: {
    fontSize: 13,
    color: Colors.subtext,
  },
});