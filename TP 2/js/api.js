const users = "https://jsonplaceholder.typicode.com/users";
const albums = "https://jsonplaceholder.typicode.com/users/1/albums";

const promiseWay = (url) => {
  new Promise((resolve, reject) => {
    resolve(
      fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data))
    );
  });
};

// promiseWay(users);

const awaitAsyncWay = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return console.log(data);
};

// awaitAsyncWay(users);

const getUsers = (fuctionName) => {
  const usersUrl = "https://jsonplaceholder.typicode.com/users";
  let data = [];

  if (fuctionName === promiseWay) {
    return (data = promiseWay(usersUrl));
  } else if (fuctionName === awaitAsyncWay) {
    return (data = awaitAsyncWay(usersUrl));
  } else {
    console.log("Ingrese un nombre de función correcto");
  }

  const [] = data;

  console.log(data);
};

getUsers(awaitAsyncWay);

// const callbackWay = () => {
//     const response = fetch(url)
// };

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
// }, falloCallback);
