// src/screens/components/PostCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PostCard({ post }) {

  // Formateo rápido de fecha
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-MX", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <View style={styles.card}>

      {/* Username */}
      <Text style={styles.username}>@{post.username}</Text>

      {/* Content */}
      <Text style={styles.content}>{post.content}</Text>

      {/* Fecha */}
      <Text style={styles.time}>{formatDate(post.created_at)}</Text>

      {/* Likes */}
      <Text style={styles.likes}>
        ❤️ {post.likes.length} likes
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#111",
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#222",
  },
  username: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 8,
  },
  content: {
    color: "#ddd",
    fontSize: 16,
    marginBottom: 12,
  },
  time: {
    color: "#777",
    fontSize: 12,
  },
  likes: {
    color: "#ff4d4d",
    fontSize: 14,
    marginTop: 6,
    fontWeight: "600",
  },
});
