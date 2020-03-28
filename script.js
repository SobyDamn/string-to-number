function convertToNumber() {
    var stringVal = document.getElementById("uniqueStrings").value;
    document.getElementById("uniqueNumbers").value = uniqueNumIDGenerator(stringVal)
}
function convertToString() {
    var numVal = document.getElementById("uniqueNumbers").value;
    document.getElementById("uniqueStrings").value = uniqueStrIDGenerator(numVal)
}
//remove all special character from string including spacebar
function removeSpecialCharFromStr() {
    var stringVal = document.getElementById("uniqueStrings").value;
    document.getElementById("uniqueStrings").value = stringVal.replace(/[^a-zA-Z0-9]/g, "");
}
//keep only numbers
function removeSpecialCharFromNum() {
    var numVal = document.getElementById("uniqueNumbers").value;
    document.getElementById("uniqueNumbers").value = numVal.replace(/[^0-9]/g, "");
}
//unique number from string
function uniqueNumIDGenerator(string) {
    var uniqueNum='';
    var uniqueString='';
    for (var i=0;i<string.length;i=i+10) {
        var stringPart = string.slice(i,i+10)
        var uidPart = (parseInt(stringPart, 36)).toString();
        uniqueNum +=uidPart
        uniqueString += (parseInt(stringPart, 36)).toString(36)
    }
    return uniqueNum;
  }
  //unique string from a number
  function uniqueStrIDGenerator(number) {
    var uniqueStr='';
    for (var i=0;i<number.length;i=i+16) {
        var numPart = number.slice(i,i+16)
        var uidPart = (parseInt(numPart)).toString(36);
        uniqueStr +=uidPart
    }
    return uniqueStr;
  }