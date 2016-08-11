function isPalindromeFunction(code){
  console.log('isPalindromeFunction hit');
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
  var test1 = "anna";
  var test2 = "derek";

  if(isPalindrome(test1) === true){
    testObj.messages[1].passed = true;
    testObj.messages[1].message = 'properly checks if string is palindrome. Passed!';
  } else {
    testObj.messages[1].passed = false;
    testObj.messages[1].message = 'does not properly check if string is palindrome. Fail!';
  }

  if(isPalindrome(test2) === false){
    testObj.messages[1].passed = true;
    testObj.messages[1].message = 'properly checks if string is palindrome. Passed!';
  } else {
    testObj.messages[1].passed = false;
    testObj.messages[1].message = 'does not properly check if string is palindrome. Fail!';
  }

  if(typeof isPalindrome === "function"){
    testObj.messages[0].passed = true;
    testObj.messages[0].message = 'Is a function. Passed!'
  } else {
    testObj.messages[0].passed = false;
    testObj.messages[0].message = 'Is not a function. Fail!'
  }

  if(testObj.messages[1].passed === true && testObj.messages[0].passed === true){
    testObj.total = true;
  } else {
    testObj.total = false;
  }
  
  return testObj;
}

module.exports = isPalindromeFunction;