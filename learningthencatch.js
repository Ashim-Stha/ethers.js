const axios = require("axios");

let response = axios
  .get("https://www.boredapi.com/api/activity")
  //console.log(`you could ${response.data.activity}`)
  //above clg will fail because api takes time and instead of waiting get req clg code is executed

  .then((response) => {
    console.log(`you could ${response.data.activity}`);
  })

  .catch((error) => {
    console.log(`ERROR:${error}`);
  });

console.log("Why am I here?");

//intead of then and catch w can use async and await
//since async dosent have methods for error we can include async function inside try and catch
