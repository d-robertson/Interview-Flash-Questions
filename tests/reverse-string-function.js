function reverseStringFunction(code){
  console.log('reverse string test hit');
  var code = code.code;
  console.log("------------");
  console.log(code);
  eval(code);

  //------------------------
  
  function FirstReverseTest(str) { 

    return str.split('').reverse().join('');           
  }

  var string = "hello world"


  testObj = {
    total: false,
    messages: [
      {
        passed: false,
        message: ''
      },
      {
        passed: false,
        message: ''
      }
    ]
  }

  if(FirstReverse(string) === FirstReverseTest(string)){
    testObj.messages[0].passed = true;
    testObj.messages[0].message = 'reversed the string. Passed!';
  } else {
    testObj.messages[0].message = 'does not reverse string. Fail!';
  }
  if(typeof FirstReverse === 'function'){
    testObj.messages[1].passed = true;
    testObj.messages[1].message = 'is the proper function. Passed!';
  } else {
    testObj.messages[1].message = 'is not a function. Fail!';
  }

  if(testObj.messages[1].passed === true && testObj.messages[0].passed === true){
    testObj.total = true;
  }

  return testObj;
}

module.exports = reverseStringFunction;