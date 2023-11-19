const axios = require("axios");

async function getres() {
    try{
        const data = await axios("https://api.github.com/users/spaceKSRW");
       const val=data.data;
       console.log(val.bio)
    }
    catch(err){
         console.log("galat request");
    }
}
getres();
