var UserAuth = require('./Auth.js');

var auth = new UserAuth({
  'username': 'accdeikortuy',
  'password': 'youcrackedit'
});
var result = auth.authenticate();
if (result['status']) {
  console.log('Authentication success');
} else {
  console.log('Authentication failed');
}

hackAlgorithmToFindUsername(result['encrypted']);

function hackAlgorithmToFindUsername(encrypterPass) {
  // complete the hack to find the username for any encrypted password from authorizer.js.
  throw new Error("Missing hack to find username");
Myarray=(encrypterPass.split("").sort());
var currentchar = null;
var Mycnt = 0;
var finalResult = new Array(Myarray.length);
for (var i = 0; i <= Myarray.length; i++) {
if (Myarray[i] != currentchar) {
    if (Mycnt > 0) {
                    var strcount=Mycnt/2;
                      for(j=0;j<strcount;j++){
                          finalResult.push(currentchar);
                          
                      }
                    }
                    
                    
 currentchar = Myarray[i];
 Mycnt = 1;
 } else {
 Mycnt++;
}
}
console.log('User Name :',finalResult.join(''));
 //console.log(finalResult);
  
}
