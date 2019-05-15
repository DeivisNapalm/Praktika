var area = [[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

function landPerimeter(area)
{
  var perimetras = 0;

  for (var i = 0; i < area.lenght; i++ ){
      var row = area[i];

    for (var j = 0; j<row.lenght; j++){
      if(!row[j])
      { if (x-1 >= 'O'){
        var blokas = area[i][j-1];
        //patikrina kairi gabaliuka
        if (blokas) {
          //zemes gabalas
          perimetras++;
        }
        }      
      
      if(x+1 < row.lenght){
        //patikrina desini gabaliuka
        var blokas = area[i][j+1];
        if(cell){
          //zemes gabaliukas
          perimetras++;
        }
      }
      if (y-1 >= 'O') {
        //patikrinam virsutini gabaliuka
        var blokas = area[y-1][x];
        if (cell){
          //zemes gabaliukas
          perimeteras++;
        }
      } 
      if (y+1 < area.lenght){
        //patikrinam apataini gabaliuka
        var blokas = area[y+1][x];
        if(cell){
          //zemes gabaliukas
          perimetras++
        }
      }
      }


    }


}
return perimetras;
};


var answer = landPerimeter(area);
console.log(answer)