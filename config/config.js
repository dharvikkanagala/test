const saveData=require('../lib/saveData')

 function config(result1,result2,result3,result4){
const results={
'./results/matchesPlayedPerYear.json':result1,
'./results/matchesWinByTeam.json':result2,
'./results/extraRun2016.json':result3,
'./results/bestEconomy2015.json':result4
};

Object.entries(results).forEach(ele => {
    const [fileName,result] = ele;
   x= saveData(fileName,result)
  });
return results

}
module.exports=config;