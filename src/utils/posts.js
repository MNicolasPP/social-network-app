import authService from "./auth";

const API_BASE_URL = "https://tec-social-network.onrender.com/api";

// GET posts recientes
export async function getRecentPosts() {
  try {
    const response = await authService.authenticatedRequest(
      "/posts?page=1&limit=20",
      "GET"
    );

    return Array.isArray(response) ? response : [];
  } catch (error) {
    console.log("Error getRecentPosts:", error);
    throw error;
  }
}

// CREAR un post
export async function createPost(content, image) {
  try {
    const response = await authService.authenticatedRequest(
      "/posts",
      "POST",
      { content, image }
    );
    return response;
  } catch (error) {
    console.log("Error createPost:", error);
    throw error;
  }
}
