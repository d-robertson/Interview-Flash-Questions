function firstFactorialFunction(code){
  console.log('firstFactorialFunction hit');
  var code = code.code;
  console.log("------------");
  console.log(code);
  eval(code);
  //------------------------
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

  function FirstFactorialTest(num) { 

    var factorial = 1;

    for (var i = 1; i <= num; i++) {  
      
      factorial = factorial * i;
    }

    return factorial;
           
  }

  if(FirstFactorial(8) === FirstFactorialTest(8)){
    testObj.messages[0].passed = true;
    testObj.messages[0].message = 'factorial works. Passed!';
  } else {
    testObj.messages[0].message = 'factorial does not work properly. Fail!';
  }
  if(typeof FirstFactorial === 'function'){
    testObj.messages[1].passed = true;
    testObj.messages[1].message = 'is the proper function. Passed!';
  } else {
    testObj.messages[1].message = 'is not a function. Fail!';
  }

  if(testObj.messages[1].passed === true && testObj.messages[0].passed === true){
    testObj.total = true;
  }
}

module.exports = firstFactorialFunction;