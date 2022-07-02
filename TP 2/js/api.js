/** Mediante 3 funciones obtenemos los datos de la API, luego en el caso de getUsers() los datos
 * obtenidos son transformados mediante desestructuración según requisitos y mostrados por
 *  consola. En cuanto a getAlbums() la función recibe como parámetro el número de user y el nombre
 * de la función a utilizar para obtener datos.*/

console.log(`La función getUser(functionName)  puede recibir como parámetro:
  - promiseWay
  - asyncAwaitWay
  - callbackWay`);

console.log(`La función getAlbums(userNumber, functionName)  recibe como primer parámetro el número de usuario y como segundo parámetro:
  - promiseWay
  - asyncAwaitWay
  - callbackWay`);

const promiseWay = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const asyncAwaitWay = async (url) => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

const callbackWay = (url, callback) => {
  return fetch(url).then(callback);
};

const toJson = (response) => {
  return response.json().then((data) => data);
};

const getData = (functionName, url) => {
  if (functionName === promiseWay) {
    return promiseWay(url);
  } else if (functionName === asyncAwaitWay) {
    return asyncAwaitWay(url);
  } else if (functionName === callbackWay) {
    return callbackWay(url, toJson);
  }
};

const getUsers = async (functionName) => {
  const usersUrl = "https://jsonplaceholder.typicode.com/users";

  try {
    const usersData = await getData(functionName, usersUrl);

    console.log(transformUsers(usersData));
  } catch (error) {
    console.error("Algo salió mal");
  }
};

const transformUsers = (usersData) => {
  return usersData.map((user) => {
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

    return {
      address: { city, geo: { lng }, street, suite },
      company,
      email,
      id,
      name,
      username,
      website,
    };
  });
};

const getAlbums = async (userNumber, functionName) => {
  const albumsUrl =
    "https://jsonplaceholder.typicode.com/users/" + userNumber + "/albums";

  try {
    const albumsData = await getData(functionName, albumsUrl);
    return console.log(albumsData);
  } catch (error) {
    console.error("Algo salió mal");
  }
};
