function extraRun_2016(delivers, matches) {
  if(matches && delivers && (Array.isArray(matches)&& Array.isArray(delivers)) ){
    const matchSeason= matches.filter((item) => item.season == 2016)
    const matchId = matchSeason.map((item)=>item.id)
    const deliveries = delivers.filter((item) =>matchId.includes(item.match_id))
    const team= deliveries.map((item)=> item.bowling_team)
    
    let teams = Array.from(new Set(team)); 

      let result={}
    for(let i of teams){
      let eachTeam =deliveries.filter((item)=>item.bowling_team==i )
      let  eachTeamRuns= eachTeam.map((item)=> item.extra_runs)
      
      const sumOfRuns=eachTeamRuns.reduce((sum, val) => {
        sum+=parseInt(val);
        return sum;
      }, 0);
      result[i]=sumOfRuns
    
  }
 return result
}
else{
  return false
}
  }      
  module.exports = extraRun_2016;
  