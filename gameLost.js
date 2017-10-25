function gameLost (){
    this.setup = function(){
    colorMode(RGB);
    }
    
    
    this.draw = function (){
    background(255,0,0);
    textSize(40);
    textAlign(CENTER);
    fill(255);
    text("GAME OVER, BETTER LUCK NEXT TIME", width / 2, height / 2);
}
    

}
