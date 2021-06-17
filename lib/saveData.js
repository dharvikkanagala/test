const fs = require("fs");
  function saveData(path, result) {
    
    const jsondata = JSON.stringify(result)
    fs.writeFile(path,jsondata, (err) => {
        if (err){
            console.log(err);
        }
    })
}
      
module.exports=saveData;