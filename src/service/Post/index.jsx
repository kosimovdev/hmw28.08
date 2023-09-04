import api from "../axios";

const postApi = {
  getPost: async () => api.get("/posts"),
  getOneItem: async (id) => api.get(`/posts/${id}`),
};

export default postApi;
 