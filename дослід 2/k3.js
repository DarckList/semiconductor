				
			function k03()
			{
				var radius = 70;
				var paper = new Raphael(document.getElementById("box"), 550,550);
				for(var i = 0, k =1; i < 3; i+=1,  k+=2) 
					{
						for(var j=0;j<6;j+=1)
						{	
							/*створення ковалентних ліній*/
							/* по горизонталі*/
				paper.path("M"+(20+j*radius)+","+(radius*k+10)+"Q"+((20+j*radius+radius)-(20+radius)/2)+","+(radius*k-10)+" "+(20+j*radius+radius)+","+(radius*k+10));
				paper.path("M"+(20+j*radius)+","+(radius*k+25)+"Q"+((20+j*radius+radius)-(20+radius)/2)+","+(radius*k+50)+" "+(20+j*radius+radius)+","+(radius*k+25));
				/* по вертикалі*/
				paper.path("M"+(radius*k+10)+","+(20+j*radius)+"Q"+(radius*k-10)+","+((20+j*radius+radius)-(20+radius)/2)+" "+(radius*k+10)+","+(20+j*radius+radius));
				paper.path("M"+(radius*k+25)+","+(20+j*radius)+"Q"+(radius*k+50)+","+((20+j*radius+radius)-(20+radius)/2)+" "+(radius*k+25)+","+(20+j*radius+radius));
						}
					}
					/*створення атома галія та електрона*/
				for(var i = 1; i <=3; i+=1) 
					{	
						for(var j=1;j<=3;j+=1)
						{	
							if(i==2 && j==2){
								var geCircle = paper.circle(radius*2*i-radius+20, radius*2*j-radius+20, 20).attr({'fill':'rgb(130, 130, 130)'});
								var geText = paper.text(radius*2*i-radius+20, radius*2*j-radius+20, 'Ge').attr({'font-size': 25});
							}
							/*  атома гелію*/
							paper.circle(radius*2*i-radius+20, radius*2*j-radius+20, 20).attr({'fill':'rgb(130, 130, 130)'});
							paper.text(radius*2*i-radius+20, radius*2*j-radius+20, 'Ge').attr({'font-size': 25});
							
							/*створення електронів гелію*/
							/*по вертикалы*/
							paper.circle(20,2*radius*i-radius+30, rE).attr({'fill':'blue'});
							paper.text(20,2*radius*i-radius+28, '-').attr({'font-size':35});

							paper.circle(20,2*radius*i-radius+10, rE).attr({'fill':'blue'});
							paper.text(20,2*radius*i-radius+7, '-').attr({'font-size':35});

							paper.circle(2*radius*j+20, 2*radius*i-radius+10, rE).attr({'fill':'blue'});
							paper.text(2*radius*j+20, 2*radius*i-radius+7, '-').attr({'font-size':35});

							paper.circle(2*radius*j+20, 2*radius*i-radius+30, rE).attr({'fill':'blue'});
							paper.text(2*radius*j+20, 2*radius*i-radius+27, '-').attr({'font-size':35});
							/*по горизонталі*/


							paper.circle(2*radius*i-radius+30,20, rE).attr({'fill':'blue'});
							paper.text(2*radius*i-radius+30,17, '-').attr({'font-size':35});

							
							paper.circle(2*radius*i-radius+10,20, rE).attr({'fill':'blue'});
							paper.text(2*radius*i-radius+10,17, '-').attr({'font-size':35});

							paper.circle(2*radius*i-radius+10, 2*radius*j+20, rE).attr({'fill':'blue'});
							paper.text(2*radius*i-radius+10, 2*radius*j+17, '-').attr({'font-size':35});

							paper.circle(2*radius*i-radius+30, 2*radius*j+20, rE).attr({'fill':'blue'});
							paper.text(2*radius*i-radius+30, 2*radius*j+17, '-').attr({'font-size':35});
						}
					}
					/*создание атома галія */
					var corX =radius*2*2-radius+20;
					var corY =radius*2*2-radius+20;
					var t = 2000;
					
					var geAnimation = Raphael.animation({ cx:-radius, cy:350 }, t, "easeInOut");
					var geTextAnimation = Raphael.animation({x:-radius, y: 350},t, "easeInOut"); 
				
					var gaCircle = paper.circle(8*radius,radius,20).attr({'fill':'rgb(183, 79, 0)'}).animate({cx:corX, cy: corY},t);
					var gaText = paper.text(8*radius,radius,'Ga').attr({'font-size': 25}).animate({x:corX, y:corY},t);
					var gaTextAnimate = Raphael.animation({x:corX, y:corY},0, renameGa);
					gaText.animate(gaTextAnimate.delay(t+700));

					function renameGa(){
						gaText.remove();
						var gaText1 = paper.text(corX,corY,'Ga-').attr({'font-size': 20});
					}
					
					geCircle.animate(geAnimation.delay(t-350));
					geText.animate(geTextAnimation.delay(t-350));




					//створення circle дірки
					var holeAnimation0 = Raphael.animation({cx:2*radius*2+20, cy:2*radius*2-radius+10}, 1);
					var holeAnimation1 = Raphael.animation({cx:2*radius*3+20, cy:2*radius*2-radius+10}, 1);
					var holeAnimation2 = Raphael.animation({cx:2*radius*3+20, cy:2*radius*3-radius+30}, 1); 
					var holeAnimation3 = Raphael.animation({cx:2*radius*2-radius+30, cy:2*radius*3+20}, 1); 
					var holeAnimation4 = Raphael.animation({cx:2*radius*1-radius+10, cy:2*radius*2+20}, 1); 
					var holeAnimation5= Raphael.animation({cx:2*radius*1+20, cy:2*radius*1-radius+10}, 1); 
					var holeAnimation6 = Raphael.animation({cx:2*radius*2-radius+30, cy:2*radius*1+20}, 1);
					var hole= paper.circle(-4,-4 , rE).attr({'fill':'white'});
					var tHole = 700;
					hole.animate(holeAnimation0.delay(t+tHole*0));
					hole.animate(holeAnimation1.delay(t+tHole*1));
					hole.animate(holeAnimation2.delay(t+tHole*2));
					hole.animate(holeAnimation3.delay(t+tHole*3));
					hole.animate(holeAnimation4.delay(t+tHole*4));
					hole.animate(holeAnimation5.delay(t+tHole*5));
					hole.animate(holeAnimation6.delay(t+tHole*6));

					//створення text дірки
					var tHoleAnimation0 = Raphael.animation({x:2*radius*2+20, y:2*radius*2-radius+10}, 1);
					var tHoleAnimation1 = Raphael.animation({x:2*radius*3+20, y:2*radius*2-radius+10}, 1);
					var tHoleAnimation2 = Raphael.animation({x:2*radius*3+20, y:2*radius*3-radius+30}, 1); 
					var tHoleAnimation3 = Raphael.animation({x:2*radius*2-radius+30, y:2*radius*3+20}, 1); 
					var tHoleAnimation4 = Raphael.animation({x:2*radius*1-radius+10, y:2*radius*2+20}, 1); 
					var tHoleAnimation5= Raphael.animation({x:2*radius*1+20, y:2*radius*1-radius+10}, 1); 
					var tHoleAnimation6 = Raphael.animation({x:2*radius*2-radius+30, y:2*radius*1+20}, 1);
					var holeText = paper.text(-4,-4 , '+').attr({'font-size': 35});

					holeText.animate(tHoleAnimation0.delay(t+tHole*0));
					holeText.animate(tHoleAnimation1.delay(t+tHole*1));
					holeText.animate(tHoleAnimation2.delay(t+tHole*2));
					holeText.animate(tHoleAnimation3.delay(t+tHole*3));
					holeText.animate(tHoleAnimation4.delay(t+tHole*4));
					holeText.animate(tHoleAnimation5.delay(t+tHole*5));
					holeText.animate(tHoleAnimation6.delay(t+tHole*6));
}

function timer3 ()
{	if(handle) clearTimeout(handle);
	if(handle0) clearTimeout(handle0);

	var description = document.getElementById("description");
	description.innerHTML="Утворення матеріалу з p-типом домішкової провідності.<br>При додавання Ga з'являється дірка.";

	//запуск створення та анімування svg
	handle = setTimeout(k3,1);
}
function k3()
				{
					var contein = document.getElementById("termometr");
					contein.innerHTML = '<div id="termom"></div>';
					
					var dor = document.getElementById("box");
					var svg = document.getElementsByTagName('svg')[1];
					

					
					if(svg==null)
					{
						k03();
					}
					else
					{
						
						dor.removeChild(svg);
						k03();
					}

					handle0 =setTimeout(k3,7000);
				}