const http = require("http");

const host = "localhost";
const port = 8000;

class User {
  constructor(id, firstName, lastName, age, country) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
  }
}

const users = JSON.stringify([
  new User("24250", "Gabriel", "Garay", 27, "Argentina"),
  new User("36465", "Rocio", "Boarotto", 22, "Francia"),
  new User("23352", "Ramiro", "Funes Mori", 32, "Argentina"),
  new User("74675", "Enzo", "Perez", 35, "Uruguay"),
  new User("12345", "Matias", "Suarez", 36, "Italia"),
]);

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");
  switch (req.url) {
    case "/usuarios":
      res.writeHead(200);
      res.end(users);
      break;
    default:
      res.writeHead(404);
      res.end(
        JSON.stringify({
          statusCode: 404,
          message:
            "La página que intenta cargar no es correcta o se encuentra fuera de servicio.",
        })
      );
  }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`El servidor se está ejecutando en http://${host}:${port}`);
});
