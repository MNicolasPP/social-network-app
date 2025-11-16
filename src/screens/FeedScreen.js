import React, { useEffect, useState } from "react";
import { View, FlatList, RefreshControl, Text, TouchableOpacity } from "react-native";
import { getRecentPosts } from "../utils/posts";
import PostCard from "./components/PostCard";

export default function FeedScreen({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadPosts = async () => {
    setLoading(true);
    const data = await getRecentPosts();
    setPosts(data);
    setLoading(false);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      
      <TouchableOpacity
        style={{
          backgroundColor: "#007AFF",
          padding: 14,
          margin: 12,
          borderRadius: 10,
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("CreatePost")}
      >
        <Text style={{ color: "#fff", fontSize: 16 }}>Crear nuevo post</Text>
      </TouchableOpacity>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PostCard post={item} />}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={loadPosts} />
        }
      />
    </View>
  );
}
