/**Se realizaron dos funciones, donde la primera limpia el codigo y sustituye el value de la prop que posee un array de objetos 
anidados momentaneamente para poder realizar correctamente el split y poder iterar sobre las diferentes props. 
En la segunda función se trabaja especificamente en aquel value que posea [], limpiando el string, y luego pusheando fragmentos 
de string que posean estructura de objeto para convertirlos en objetos literales.  */

const form = document.querySelector("#form");

const json = {};

const convertJson = (event) => {
  event.preventDefault();
  let text = event.target.text.value;

  const convertStrInArray = (arrString) => {
    let mapArr = arrString.slice(1, arrString.length - 1);

    let arrObject = [];
    let objAnidado = [];

    for (let i = 0; i <= mapArr.length; i++) {
      if (mapArr[i] == "{") {
        arrObject.push(mapArr.slice(i, mapArr.indexOf("}") + 1));
        mapArr = mapArr.replace(mapArr.slice(i, mapArr.indexOf("}") + 1), "");
      }
    }

    let arrObjectClean = arrObject.map((el) => el.replace(/[{}]/g, "").trim());

    for (let el of arrObjectClean) {
      let elObj = el.split(",");
      let object = {};

      for (let el of elObj) {
        let prop = el.split(":")[0].trim();
        let value = el.split(":")[1].trim();

        if (!isNaN(value)) {
          object[prop] = Number(value);
        } else {
          object[prop] = value;
        }
      }

      objAnidado.push(object);
    }
    return objAnidado;
  };

  const properties = text.slice(1, text.length - 1).replace(/['"]+/g, "");

  let arrStart = properties.indexOf("[");
  let arrEnd = properties.indexOf("]");

  let sliceText = properties.slice(arrStart, arrEnd + 1);
  let arrText = properties.replace(sliceText, "*").split(",");

  for (let el of arrText) {
    let prop = el.split(":")[0].trim();
    let value =
      el.split(":")[1].trim() == "*"
        ? sliceText.trim()
        : el.split(":")[1].trim();

    if (value == "null") {
      json[prop] = null;
    } else if (!isNaN(value)) {
      json[prop] = Number(value);
    } else if (value == "true" || value == "false") {
      json[prop] = Boolean(value);
    } else if (value.includes("[")) {
      json[prop] = convertStrInArray(value);
    } else {
      json[prop] = value;
    }
  }

  return (
    alert("JSON PARSEADO"), console.log(json), (event.target.text.value = "")
  );
};

form.addEventListener("submit", convertJson);
