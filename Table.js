<!DOCTYPE html>
<html>
<head>
<title>Garren's HW</title>
</head>
<body>

<h1>Garren Koller</h1>

<script>
var multiplicationTable = prompt("What number do you want the multiplication table to show?");

//anything multiplied by 0 is 0
var mt0 = "<tr><td>0 * "+multiplicationTable+ " = 0</td></tr>";		//0 * number = 0

//table
var mt1 = "<tr><td>1 * " + multiplicationTable + "=" + multiplicationTable * 1 +"</td></tr>"; //table entries
var mt2 = "<tr><td>2 * " + multiplicationTable + "=" + multiplicationTable * 2 +"</td></tr>";
var mt3 = "<tr><td>3 * " + multiplicationTable + "=" + multiplicationTable * 3 +"</td></tr>";
var mt4 = "<tr><td>4 * " + multiplicationTable + "=" + multiplicationTable * 4 +"</td></tr>";
var mt5 = "<tr><td>5 * " + multiplicationTable + "=" + multiplicationTable * 5 +"</td></tr>";
var mt6 = "<tr><td>6 * " + multiplicationTable + "=" + multiplicationTable * 6 +"</td></tr>";
var mt7 = "<tr><td>7 * " + multiplicationTable + "=" + multiplicationTable * 7 +"</td></tr>";
var mt8 = "<tr><td>8 * " + multiplicationTable + "=" + multiplicationTable * 8 +"</td></tr>";
var mt9 = "<tr><td>9 * " + multiplicationTable + "=" + multiplicationTable * 9 +"</td></tr>";
var mt10 = "<tr><td>10 * " + multiplicationTable + "=" + multiplicationTable * 10 +"</td></tr>";
var mt11 = "<tr><td>11 * " + multiplicationTable + "=" + multiplicationTable * 11 +"</td></tr>";
var mt12 = "<tr><td>12 * " + multiplicationTable + "=" + multiplicationTable * 12 +"</td></tr>";
var mt13 = "<tr><td>13 * " + multiplicationTable + "=" + multiplicationTable * 13 +"</td></tr>";
var mt14 = "<tr><td>14 * " + multiplicationTable + "=" + multiplicationTable * 14 +"</td></tr>";
var mt15 = "<tr><td>15 * " + multiplicationTable + "=" + multiplicationTable * 15 +"</td></tr>";
var mt16 = "<tr><td>16 * " + multiplicationTable + "=" + multiplicationTable * 16 +"</td></tr>";

var table = "<table>" + mt0 + mt1 + mt2 + mt3 + mt4 + mt5 + mt6 + mt7 + mt8 + mt9 + mt10 + mt11 + mt12 + mt13 + mt14 + mt15 + mt16 + "</table>";
//table display
</script>
<h1><script>document.write(table)</script></h1>
<script>console.log(table)</script>


<h1><button onclick="myFunction()">Quiz</button></h1> 
<script>
function myFunction(){ 
var a1 = prompt("7 * "+ multiplicationTable +" ="); 	 //prompt for quiz
var correct_anwser = multiplicationTable * 7;
var result = "<p>blank</p>";
if (correct_anwser == al) {
result = "<p>Correct!</p>";
}
else {
result = "<p>WRONG!!!</p>";
document.write(result);
console.log(result);
}

}
</script>
</body>

</html>
