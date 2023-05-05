const axios = require("axios");

async function getActivity(){
    
try{
   let response = await axios.get("https://www.boredapi.com/api/activity")
    console.log(`you could ${response.data.activity}`)
}

catch(error){
    console.log(`${error}`)
}
}
getActivity()
console.log("Why am I here")