module.exports.getToday = function(){
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();
  if (dd < 10) { dd = '0' + dd;}
  if (mm < 10) { mm = '0' + mm; }
  return dd + '/' + mm + '/' + yyyy;
}

module.exports.getTime = function(zone){
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var suffix = ' AM';
  if(h > 12){
    h -= 12;
    suffix = ' PM';
  }
  var time = h+':'+m+suffix;
  return time;
}
