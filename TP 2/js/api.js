const users = "https://jsonplaceholder.typicode.com/users";
const albums = "https://jsonplaceholder.typicode.com/users/1/albums";

const promiseWay = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      });
  });
};

const awaitAsyncWay = async (url) => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

// const callbackWay = (url) => {
//   return getJson();
// };

// const getData = () => {
//   return fetch(url);
// };

// const getJson = () => {
//   getData().then((response) => response.json());
// };

const getUsers = async (fuctionName) => {
  const usersUrl = "https://jsonplaceholder.typicode.com/users";

  const getData = () => {
    if (fuctionName === promiseWay) {
      return promiseWay(usersUrl);
    } else if (fuctionName === awaitAsyncWay) {
      return awaitAsyncWay(usersUrl);
    } else {
      console.log("Ingrese un nombre de función correcto");
    }
  };

  const usersData = await getData();

  return filterUsers(usersData);
};

const filterUsers = (usersData) => {
  let users = [];

  usersData.map((user) => {
    const {
      address: {
        city,
        geo: { lng },
        street,
        suite,
      },
      company,
      email,
      id,
      name,
      username,
      website,
    } = user;

    return users.push({
      address: { city, geo: { lng }, street, suite },
      company,
      email,
      id,
      name,
      username,
      website,
    });
  });

  return console.log(users);
};

// hazAlgo(function (resultado) {
//   hazAlgoMas(
//     resultado,
//     function (nuevoResultado) {
//       hazLaTerceraCosa(
//         nuevoResultado,
//         function (resultadoFinal) {
//           console.log("Obtenido el resultado final: " + resultadoFinal);
//         },
//         falloCallback
//       );
//     },
//     falloCallback
//   );
// }, falloCallback)
