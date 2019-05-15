var match = ["3:1","2:2","0:1","3:3","2:1","0:2","1:0","0:0","2:3","1:1"];

const n = 10 // how many matches are played

var suma = 0;

function howMuchPoints(match)
{
  for(var i = 0; i < 10; i++)
  {
    var x = match[i].charAt(0);
    var y = match[i].charAt(2);
    if(x > y)
    {
      suma+=3;
    }
    else if (x < y)
    {
      suma+=0;
    }
    else if (x === y)
    {
      suma+=1;
    }
  }
  return suma;
} 

const answer = howMuchPoints(match);

console.log(answer);
