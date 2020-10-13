function collision(obg1, obg2){
 
    if(obg1.x - obg2.x < obg1.width/2 + obg2.width/2 && obg2.x - obg1.x < obg2.width/2 + obg2.width/2
      && obg1.y - obg2.y < obg1.height/2 + obg2.height/2 && obg2.y - obg1.y < obg2.height/2 + obg2.height/2  ){
  return true;
    }
  
    else{
  
      return false;
    }
  }