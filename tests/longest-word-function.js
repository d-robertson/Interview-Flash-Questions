function longestWordFunction(code){
  console.log('longestWordFunction hit');
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

  var sentence = "hello my name is derek and i like kittens";

  function LongestWordTest(sen) { 

    var arr = sen.match(/[a-z0-9]+/gi);

    var sorted = arr.sort(function(a, b) {
      return b.length - a.length;
    });

    return sorted[0];
           
  }

  if(LongestWord(sentence) === LongestWordTest(sentence)){
    testObj.messages[0].passed = true;
    testObj.messages[0].message = 'found the longest word good job. Passed!';
  } else {
    testObj.messages[0].message = 'does not find the longest word. Fail!';
  }
  if(typeof LongestWord === 'function'){
    testObj.messages[1].passed = true;
    testObj.messages[1].message = 'is the proper function. Passed!';
  } else {
    testObj.messages[1].message = 'is not a function. Fail!';
  }

  if(testObj.messages[1].passed === true && testObj.messages[0].passed === true){
    testObj.total = true;
  }

}

module.exports = longestWordFunction;