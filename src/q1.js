function myFunction(num1, num2) {
    return num1+num2
  }
  
  const result = myFunction(5,5)

  /*
  What is the value of result after calling this function? Why?
  On line one, the function is declared as myFunction followed by two parameters, 
  in this case, num1 and num2. In between the two curly braces, there is a block of code. 
  Inside it, two of the parameters from line one are passed in to perform the calculation. 
   
  On line five, the variable is declared and named as the result. It's calling the myFunction 
  from line 1, and it has the two numbers in the parameters, which are both 5. 
  The two numbers will pass on the two parameters in line 1, which will
  execute the code on line 2.

  I expect the result to be 10.

  After running the code with node, my prediction is correct.
  */