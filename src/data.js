var i;

function getScore(){
    localStorage.setItem('highScore', score);
    //highScore.sort();
    var temp = localStorage.getItem('highScore');
    while(highScore[i]!=null && i<=10){
        i += 1;
    }
    /*
    if(i==10){
        while((localStorage.getItem('highScore'))>=highScore[i]){
            i -= 1;
        }
    }*/
    highScore[i]=temp;
    console.log(highScore);
}