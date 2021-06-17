function bestEconomies2015(delivers, matches) {
  if(matches && delivers && (Array.isArray(matches)&& Array.isArray(delivers)) ){
        const matchSeasons= matches.filter((item) =>{
          return item.season == 2015} )
      const matchId = matchSeasons.map((item)=>{
         return item.id
       })
      const deliveries = delivers.filter((item) =>
      matchId.includes(item.match_id))
      let bowler= deliveries.map((item)=>{return item.bowler})
      let bowlers= new Set(bowler.sort())
          let overs=[]
          overs=countBalls(bowler)
        
          let result={};
          let balls=0
          for(let i of bowlers){
            let eachBowler =deliveries.filter((item)=>item.bowler==i )
            let eachBowlerRuns = eachBowler.map((item)=> item.total_runs)
            let runs = countRuns(eachBowlerRuns)
            let over =overs[balls]/6
            let economy =runs/over
               balls++
           result[i]=economy
          }

        const sortedResult = Object.fromEntries(
          Object.entries(result).sort(([,a],[,b]) => a-b)
        );
        const slicedResult = Object.fromEntries(
          Object.entries(sortedResult).slice(0, 10)
        )      
   return slicedResult

      function countBalls(balls) {
            let bowlerName = [],
              ballsCount = [],prev;
              balls.sort()
            for (let i = 0; i < balls.length; i++) {
              if (balls[i] !== prev) {
                bowlerName.push(balls[i]);
                ballsCount.push(1);
              } else {
                ballsCount[ballsCount.length - 1]++;
              }
              prev = balls[i];
            }
               return ballsCount   
          }
   
    function countRuns(eachBowlerRuns)
        {
          let sum=0
          for(let i of eachBowlerRuns){
             sum =sum+parseInt(i)
          }
          return sum
        }
    
        }
        
        
  else{
          return false
      }
  }
  module.exports = bestEconomies2015;
  