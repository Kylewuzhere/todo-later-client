const api = {
  getTodos: async (accessToken) =>
    await fetch(`${process.env.REACT_APP_API_URL}/todos`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }),
  postTodos: async (accessToken, body) =>
    await fetch(`${process.env.REACT_APP_API_URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    }),
  updateTodos: async (id, body, accessToken) => {
    console.log(body);
    await fetch(`${process.env.REACT_APP_API_URL}/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    });
  },
  deleteTodos: async (id, accessToken) => {
    await fetch(`${process.env.REACT_APP_API_URL}/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
};

export default api;
