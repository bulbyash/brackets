module.exports = function check(str, bracketsConfig) {
  var arr = [];
  var st = [];
  var result;

  //feed array
  for (var i = 0; i < bracketsConfig.length; i++) {
      for (var j = 0; j < 2; j++)
    arr.push(bracketsConfig[i][j]);
  }

  for (var i = 0; i < str.length; i++) {
      st.push(str[i]);
  }

  for (var i = 0; i < st.length; i++) {
      for (var k = 0; k < arr.length; k = k + 2) {
          if (st[i] == arr[k] && st[i+1] == arr[k+1]) {
              st.splice(i, 2);
              i = 0;
              k=-2;
          }
      }
  }

  if (st.length ==0) {
      result = true
  } else {
    result = false;
  }

  return result;
}