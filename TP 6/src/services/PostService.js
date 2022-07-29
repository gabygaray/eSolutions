export function getPost(userId) {
  return fetch(`http://localhost:3333/users/${userId}/posts`).then((data) =>
    data.json()
  );
}

export function setPost(post) {
  const { userId } = post;

  return fetch(`http://localhost:3333/users/${userId}/posts`, {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
    method: "POST",
  }).then((data) => data.json());
}
