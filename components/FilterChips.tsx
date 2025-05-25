import Colors from '@/constants/Colors';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface FilterChipsProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

export default function FilterChips({ categories, selected, onSelect }: FilterChipsProps) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          style={[
            styles.chip,
            selected === category && styles.selectedChip,
          ]}
          onPress={() => onSelect(category)}
        >
          <Text style={selected === category ? styles.selectedText : styles.text}>
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    flexDirection: 'row',
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    backgroundColor: '#eee',
    borderRadius: 20,
    marginRight: 8,
  },
  selectedChip: {
    backgroundColor: Colors.primary,
  },
  text: {
    color: '#333',
  },
  selectedText: {
    color: '#fff',
    fontWeight: '600',
  },
});