const fetchData= require('./fetchData')
const matchesPlayedPerYear = require("../utils/matchesPlayedPerYear");
const matchesWinByTeam = require("../utils/matchesWinByTeam");
const extraRun2016 = require("../utils/extraRun_2016");
const bestEconomy2015 = require("../utils/bestEconomy2015");
const config=require('../config/config')
const matchPath='./data/matches.csv'
const deliverPath='./data/deliveries.csv'
 async function main() {
    const fetch=fetchData(matchPath,deliverPath)
    const data = await fetch;
    [matchData,deliverData]=data
    let result1 = matchesPlayedPerYear(matchData);
    let result2 = matchesWinByTeam(matchData);
    let result3 = extraRun2016(deliverData,matchData);
    let result4 = bestEconomy2015(deliverData,matchData); 
    config(result1,result2,result3,result4) 
  return data
  };

  module.exports=main