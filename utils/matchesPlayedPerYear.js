function matchesPlayedPerYear(matches) {
  if(matches && Array.isArray(matches)){
    const years=matches.map((iteam)=>{ return iteam.season })
const result=years.reduce((obj, val) => {
    obj[val] = (obj[val] || 0) + 1;
    return obj;
  }, {});
return result
}  
else{
  return false
}
}

  module.exports = matchesPlayedPerYear;