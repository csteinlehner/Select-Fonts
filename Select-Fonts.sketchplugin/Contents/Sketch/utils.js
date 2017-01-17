function is_group(layer) {
  return [layer isMemberOfClass:[MSLayerGroup class]] || [layer isMemberOfClass:[MSArtboardGroup class]]
}
function searchNameFor(text, searchString) {
  if(text.indexOf(searchString) > 0){
    //log("searchNameFor: found!!!!!!!!!!!");
    return true;
  } else {
    //log("searchNameFor: ffalse");
    return false;
  }
}
function splitString(targetString,Seperator){
  var res = targetString.split(Seperator);
  var resultsLength =res.length;
  if(resultsLength>0){
    return res;
  } else{
    return false;
    console.log("error");
  }
}
// nur als idee - macht kein sinn so
function replaceString(oldString,newString){
  var str =oldString;
  str=replace(newString);
  return str;
}
