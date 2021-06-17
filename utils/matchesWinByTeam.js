function matchesPlayedPerYear(matches) {
  if(matches && Array.isArray(matches)){
      const years=matches.map((iteam)=>{return iteam.season})

      let uniqueYears = Array.from(new Set(years)); 
      let result={}
      for(let i=0;i<uniqueYears.length;i++){
        const each_season=matches.filter((iteam)=>{
          return iteam.season===uniqueYears[i]
      })
      const winner=each_season.map((iteam)=>{return iteam.winner})
      const winner_count=winner.reduce((obj, val) => {
        obj[val] = (obj[val] || 0) + 1;
        return obj;
      }, {});
   result[uniqueYears[i]]=winner_count
    }
return result
  }
  else{
    return false
  }
  }

  module.exports = matchesPlayedPerYear;