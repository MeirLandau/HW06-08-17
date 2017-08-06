//Exercise 1
        function calculateTriangle(sideOne, sideTwo, sideThree) {
    var sidesLengthAverage= (sideOne + sideTwo + sideThree) / 3;
    var trianleCircumference= sideOne + sideTwo + sideThree ;
    var s= trianleCircumference / 2;
    var surfaceAuCarre=s*(s-sideOne)*(s-sideTwo)*(s-sideThree);
    var trianleArea=Math.sqrt(surfaceAuCarre);;
  
    return sidesLengthAverage +' ' +trianleCircumference +' ' +trianleArea ;
}
      



//Exercise 2


        function maximumResult(a,b,c){
            var op1 = (a+b)*c;
            var op2= (a*b)+c;

            if (op1>op2){
                console.log('('+a+'+'+b+')*'+c +'='+op1)
            }
            else {console.log('('+a+'*'+b+')+'+c+ '='+op2)}
        }
        maximumResult(3,-5,7);






//Execrcise 3

        function matchWinner(eq1int,eq1ext,eq2int,eq2ext){
            var nbrbuttotaleq1 = eq1int + eq1ext;
            var nbrbuttotaleq2 = eq2int + eq2ext;

            if (nbrbuttotaleq1>nbrbuttotaleq2){
                console.log(1);
            }
            else if (nbrbuttotaleq1<nbrbuttotaleq2){
                console.log(2);
            }
            else {
                if (eq1ext>eq2ext){console.log(1)}
                else if (eq1ext<eq2ext){console.log(2)}
                else {console.log(0)}
            }

        }
        matchWinner(10,10,10,10);
