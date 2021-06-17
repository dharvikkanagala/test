const { test, expect } = require('@jest/globals')
const matches = require('../data/matches.json');
const deliveries= require('../data/deliveries.json')
const matchesPlayedPerYear = require("../utils/matchesPlayedPerYear");
const result = require('../results/matchesPlayedPerYear.json')
test('Correct result', () => {
     expect(matchesPlayedPerYear(Object.values(matches))).toStrictEqual(result)
  });

test('Checking Undefined result', () => {
     expect(matchesPlayedPerYear(Object.values(matches))).not.toBeDefined
  });

  test('Checking Null result', () => {
    expect(matchesPlayedPerYear(Object.values(matches))).not.toBeNull
 });
  
  const checkForUndefined=undefined
  test('passing undefined', () => {
   
    expect(matchesPlayedPerYear(checkForUndefined)).toBeFalsy();
 });

 const checkForNull = null;
 test('passing Null ', () => {
   expect(matchesPlayedPerYear(checkForNull)).toBeFalsy();
});

test('wrong result', () => {
    expect(matchesPlayedPerYear(Object.values(deliveries))).not.toStrictEqual(result)
 });

 test('Passing empty parameters', () => {
    expect(matchesPlayedPerYear()).toBeFalsy();
 });
 test("Passing string",()=>{
    expect(matchesPlayedPerYear("202222")).toBeFalsy
})