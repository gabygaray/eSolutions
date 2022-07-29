export function getUser(email) {
  return fetch(`http://localhost:3333/users?q=${email}`).then((data) =>
    data.json()
  );
}

export function setUser(user) {
  return fetch("http://localhost:3333/users", {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
    method: "POST",
  }).then((data) => data.json());
}
