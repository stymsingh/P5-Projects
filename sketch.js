var circles= [];

function setup(){
	createCanvas(640,360);

	while(circles.length < 400)
	//for(var i= 0; i<25;i++)
	{
		var circle = {
			 x:random(width),
		 	 y :random(height),
			 r :random(5,36)
		};

		var overlapping = false;
		var fillspace = 0;
		for (var j=0;j<circles.length;j++){
			var other = circles[j];
			var d = dist(circle.x, circle.y, other.x, other.y);
			if(d < circle.r + other.r)
			{
				//THEY ARE OVERLAPPING!
				overlapping = true;
				break;
			}
		}
		if(!overlapping){
			circles.push(circle);
		}
		fillspace++;

		if(fillspace > 5000)
		{
			break;
		}

	}
	for(var  i=0;i<circles.length;i++)
	{

		fill(255,0,150,100);
		noStroke();
		ellipse(circles[i].x,circles[i].y,circles[i].r*2,circles[i].r*2);
	}
}
function draw()
{

}