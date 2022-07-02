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

const awaitAsyncWay = async (url) => {
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

// Proceso
const getData = (fuctionName, url) => {
  if (fuctionName === promiseWay) {
    return promiseWay(url);
  } else if (fuctionName === awaitAsyncWay) {
    return awaitAsyncWay(url);
  } else if (fuctionName === callbackWay) {
    return callbackWay(url, toJson);
  }
};

const getUsers = async (fuctionName) => {
  const usersUrl = "https://jsonplaceholder.typicode.com/users";

  try {
    const usersData = await getData(fuctionName, usersUrl);

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

const getAlbums = async (userNumber, fuctionName) => {
  const albumsUrl =
    "https://jsonplaceholder.typicode.com/users/" + userNumber + "/albums";

  try {
    const albumsData = await getData(fuctionName, albumsUrl);
    return console.log(albumsData);
  } catch (error) {
    console.error("Algo salió mal");
  }
};
