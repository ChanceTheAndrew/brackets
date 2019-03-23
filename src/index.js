module.exports = function check(str, bracketsConfig) {
  let array = str.split('');
  let bracket = bracketsConfig;
  for(let i=0;i<array.length;i++){
    
    for(let j=0; j<bracket.length; j++){
      if(array[i] === bracket[j][0] && array[i+1] === bracket[j][1]){
        array.splice(i,2);
        if (array.length==0){ 
            return true;
        }
        i=-1;
      }
    }
  }
  return false;
}