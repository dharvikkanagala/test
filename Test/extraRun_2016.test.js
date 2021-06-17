const { test, expect } = require('@jest/globals')
const matches = require('../data/matches.json');
const deliveries= require('../data/deliveries.json')
const extraRuns = require("../utils/extraRun_2016");
const result = require('../results/extraRun2016.json')

// test('extraRun_2016', () => {
//      expect(extraRuns(Object.values (deliveries),Object.values(matches))).not.toBeUndefined
//   });

test('Correct result', () => {
     expect(extraRuns(Object.values(deliveries),Object.values(matches))).toStrictEqual(result)
  });

test('Checking Undefined result', () => {
     expect(extraRuns(Object.values(deliveries),Object.values(matches),)).not.toBeDefined
  });

  test('Checking Null result', () => {
    expect(extraRuns(Object.values(deliveries),Object.values(matches),)).not.toBeNull
 });
  
  const checkForUndefined=undefined
  test('passing undefined', () => {
   
    expect(extraRuns(checkForUndefined)).toBeFalsy();
 });

 const checkForNull = null;
 test('passing Null ', () => {
   expect(extraRuns(checkForNull)).toBeFalsy();
});

test('wrong result', () => {
    expect(extraRuns(Object.values(deliveries))).not.toStrictEqual(result)
 });

 test('Passing empty parameters', () => {
    expect(extraRuns()).toBeFalsy();
 });
 test("Passing string",()=>{
    expect(extraRuns("202222")).toBeFalsy
})