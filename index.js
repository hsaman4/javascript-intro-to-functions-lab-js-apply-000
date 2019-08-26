function shout (string) {
  return string.toUpperCase ()
}
function whisper (string) {
  return string.toLowerCase ()
}
function logShout (string) {
  string = "hello".toUpperCase();
  console.log(string)
}
function logWhisper (string) {
  string = "hello".toLowerCase();
  console.log (string)
}

function sayHiToGrandma (string) {
  // string = "hello"
  var gma = 'I can\'t hear you!';
  var prime = "YES INDEED!"
  if (string === "hello" && string.toLowerCase()){
    return gma 
  }
  else if (string === "HELLO" && string.toUpperCase()){
    return prime
  }
}
  
  
