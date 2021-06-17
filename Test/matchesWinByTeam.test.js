const { test, expect } = require('@jest/globals')
const matches = require('../data/matches.json');
const deliveries= require('../data/deliveries.json')
const matchesWinByTeam = require("../utils/matchesWinByTeam");
const result = require('../results/matchesWinByTeam.json')
test('Correct result', () => {
     expect(matchesWinByTeam(Object.values(matches))).toStrictEqual(result)
  });

test('Checking Undefined result', () => {
     expect(matchesWinByTeam(Object.values(matches))).not.toBeDefined
  });

  test('Checking Null result', () => {
    expect(matchesWinByTeam(Object.values(matches))).not.toBeNull
 });
  
  const checkForUndefined=undefined
  test('passing undefined', () => {
   
    expect(matchesWinByTeam(checkForUndefined)).toBeFalsy();
 });

 const checkForNull = null;
 test('passing Null ', () => {
   expect(matchesWinByTeam(checkForNull)).toBeFalsy();
});

test('wrong result', () => {
    expect(matchesWinByTeam(Object.values(deliveries))).not.toStrictEqual(result)
 });

 test('Passing empty parameters', () => {
    expect(matchesWinByTeam()).toBeFalsy();
 });
 test("Passing string",()=>{
    expect(matchesWinByTeam("202222")).toBeFalsy
})