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
//   const getJson = () => {
//     const getData = () => {
//       return fetch(url);
//     };
//     getData().then((response) => response.json());
//   };
//   return getJson();
// };

const getData = (fuctionName, url) => {
  if (fuctionName === promiseWay) {
    return promiseWay(url);
  } else if (fuctionName === awaitAsyncWay) {
    return awaitAsyncWay(url);
  } else if (fuctionName === callbackWay) {
    return callbackWay(url);
  } else {
    console.log("Ingrese un nombre de función correcto");
  }
};

const getUsers = async (fuctionName) => {
  const usersUrl = "https://jsonplaceholder.typicode.com/users";

  const usersData = await getData(fuctionName, usersUrl);

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

const getAlbums = async (userNumber, fuctionName) => {
  const albumsUrl =
    "https://jsonplaceholder.typicode.com/users/" + userNumber + "/albums";

  const albumsData = await getData(fuctionName, albumsUrl);

  return console.log(albumsData);
};
