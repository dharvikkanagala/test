const matchPath='./data/matches.csv'
const deliverPath='./data/deliveries.csv'
const fetchData=require('../lib/fetchData')
const config = require('../config/config')
const saveData = require('../lib/saveData')
const main= require('../lib/main')
const result= require('../data/matches.json')
const result1= require('../data/deliveries.json')
const prob1= require('../results/matchesPlayedPerYear.json')
const prob2 = require('../results/matchesWinByTeam.json')
const prob3= require('../results/extraRun2016.json')
const prob4 = require('../results/bestEconomy2015.json')

test('Checking result with match.csv main()', async () => {
    const data = await main();
    expect(data[0]).toStrictEqual(result);
  });


  const results={
    './results/matchesPlayedPerYear.json':prob1,
    './results/matchesWinByTeam.json':prob2,
    './results/extraRun2016.json':prob3,
    './results/bestEconomy2015.json':prob4
    };
  test(' checking config', () => {
    
    const data= config(prob1,prob2,prob3,prob4)
    expect(Object.keys(data)).toStrictEqual(Object.keys(results))
  });

  test('config save data', () => {
    
    const data= saveData('./results',results)
    expect(data).toBeFalsy()
  });



test('Checking result with match.csv in fetchData', async () => {
    const data = await fetchData(matchPath,deliverPath);
    expect(data[0]).toStrictEqual(result);
  });

  test('Checking result with deliver.csv in fetchData', async () => {
    const data = await fetchData(matchPath,deliverPath);
    expect(data[1]).toStrictEqual(result1);
  });