function myFunction(num) {
    return num-1
  }
  
  let num = 10
  num = myFunction(num)
  num = myFunction(num)

  /*
  What is the value of num at the end of the program? Why?
  Since both line 6 & 7 are calling the myFunction from line 1 and 
  inside the myFunction parameter is 'num', which is 10 - following from line 5 declaration. 

  Once 10 passes in the parameter, the code will execute inside the curly braces. 
  The execution of the code will take away one and return a number. 
  The function is called twice, so the operation is done twice. 

  Expected: 8

  Result: 8
  */