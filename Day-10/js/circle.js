var topLeft = new Point(50, 50);
var rectSize = new Size(80, 80);

var rect = new Rectangle(topLeft, rectSize);

var path = new Path.Rectangle(rect, 100);

path.fillColor = 'blue';

   
console.log(rect);
console.log(rect.point); 
console.log(rect.size); 
rect.strokeColor = 'red';