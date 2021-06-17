const { test, expect } = require('@jest/globals')
const matches = require('../data/matches.json');
const deliveries= require('../data/deliveries.json')
const bestEconomy = require("../utils/bestEconomy2015");
const result = require('../results/bestEconomy2015.json')

;

test('Correct result', () => {
     expect(bestEconomy(Object.values(deliveries),Object.values(matches))).toStrictEqual(result)
  });

test('Checking Undefined result', () => {
     expect(bestEconomy(Object.values(deliveries),Object.values(matches),)).not.toBeDefined
  });

  test('Checking Null result', () => {
    expect(bestEconomy(Object.values(deliveries),Object.values(matches),)).not.toBeNull
 });
  
  const checkForUndefined=undefined
  test('passing undefined', () => {
   
    expect(bestEconomy(checkForUndefined)).toBeFalsy();
 });

 const checkForNull = null;
 test('passing Null ', () => {
   expect(bestEconomy(checkForNull)).toBeFalsy();
});

test('wrong result', () => {
    expect(bestEconomy(Object.values(deliveries))).not.toStrictEqual(result)
 });

 test('Passing empty parameters', () => {
    expect(bestEconomy()).toBeFalsy();
 });
 test("Passing string",()=>{
    expect(bestEconomy("202222")).toBeFalsy
})