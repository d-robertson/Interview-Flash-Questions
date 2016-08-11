function addFunctionTest(code){
  console.log('addFunctionTest hit');
  var code = code.code;
  console.log("------------");
  console.log(code);
  eval(code);
  console.log(add(1,2));
  console.log(typeof add);
  //------------------------
  testObj = {
    add: false,
    type: false,
    total: false
  }
  if(add(1,1) === 2){
    testObj.add = true;
    testObj.addMessage = "Added Two numbers. Success!!"
  } else {
    testObj.addMessage = "Added two numbers. Fail!!"
  }

  if(typeof add === "function"){
    testObj.type = true;
    testObj.typeMessage = "Is a function. Success!!"
  } else {
    testObj.typeMessage = "Need to write a function. Fail!!"
  }

  if(testObj.add === true && testObj.type === true){
    testObj.total = true;
  }
  return testObj;
}

module.exports = addFunctionTest;

