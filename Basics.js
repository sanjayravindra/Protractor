
//To print the values in console

console.log("hello world")
var a= 10;
console.log(a)

//Condition Statements
if(a==10)
	{
	console.log("Condition is true")
	}
else
	{
	console.log("condition is false")
	}

//For loop

for (var i = 1; i <=10; i=i+2) {
	console.log(i)
}

//While-loop

var j=1;
while(j<5)
	{
	console.log(j)
	j++;
	}

//do-while

var k =10;
do
	{
	console.log(k)
	}
while(k<8)
	
	
//	JavaScript declaring Functions
	
	function sample(a,b)
{
	return a+b;
	}

sample(1,2);


var a=4;
var b= ["hello","world","4","goodbye"];

console.log(b.length+ "is the size of the array");
for(var i=0;i<b.length;i++)
{
console.log(b[i]);
}

var c= new Array();

c[0]= "goodbye";
c[1]="4";
c[2]="world";
c[3]="hello";
c[4]="bad";
//length - 1 will be the maximum index
console.log(c.length+ "is the size of the array called C");

for(var i=0;i<c.length;i++)
{
console.log(c[i]);
}
console.log("Print the array numbers in reverse");
for(var j=c.length-1;j>=0;j--)
{
console.log(c[j]);
}

var name ="Sanjay"; // String literal declaration

console.log(name.charAt(3));

var newname=name.concat("Ravindra");
console.log(newname);

console.log(name.indexOf("j"));

console.log(name.slice(1, 4));
//starting index is inclusive - ending index is exclusive

console.log(name.toUpperCase());

var name ="Sanjay ";

console.log(name.trim());

var name2=new String("Sanjay");  // string object declaration
console.log(name2);