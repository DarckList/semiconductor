				
			var color = rgb(252, 92, 55);
			function k02()
			{
				var description = document.getElementById("description");
	description.innerHTML="Утворення матеріалу з n-типом домішкової провідності.<br>Поява P вибиває Ge та з'являється один зайвий електрон.";

				var radius = 70;
				var paper = new Raphael(document.getElementById("box"), 550,550);
				for(var i = 0, k =1; i < 3; i+=1,  k+=2) 
					{
						for(var j=0;j<6;j+=1)
						{	
							/*створення ковалентних ліній*/
							/*створення по горизонталі*/
				paper.path("M"+(20+j*radius)+","+(radius*k+10)+"Q"+((20+j*radius+radius)-(20+radius)/2)+","+(radius*k-10)+" "+(20+j*radius+radius)+","+(radius*k+10));
				paper.path("M"+(20+j*radius)+","+(radius*k+25)+"Q"+((20+j*radius+radius)-(20+radius)/2)+","+(radius*k+50)+" "+(20+j*radius+radius)+","+(radius*k+25));
				/*створення по вертикалі*/
				paper.path("M"+(radius*k+10)+","+(20+j*radius)+"Q"+(radius*k-10)+","+((20+j*radius+radius)-(20+radius)/2)+" "+(radius*k+10)+","+(20+j*radius+radius));
				paper.path("M"+(radius*k+25)+","+(20+j*radius)+"Q"+(radius*k+50)+","+((20+j*radius+radius)-(20+radius)/2)+" "+(radius*k+25)+","+(20+j*radius+radius));
						}
					}
					/*створення атома та електрона*/
				for(var i = 1; i <=3; i+=1) 
					{	
						for(var j=1;j<=3;j+=1)
						{	
							if(i==2 && j==2){
								var geCircle = paper.circle(radius*2*i-radius+20, radius*2*j-radius+20, 20).attr({'fill':'rgb(130, 130, 130)'});
								var geText = paper.text(radius*2*i-radius+20, radius*2*j-radius+20, 'Ge').attr({'font-size': 25});
							}
							/* створення атома*/
							paper.circle(radius*2*i-radius+20, radius*2*j-radius+20, 20).attr({'fill':'rgb(130, 130, 130)'});
							paper.text(radius*2*i-radius+20, radius*2*j-radius+20, 'Ge').attr({'font-size': 25});
							
							/*створення електронів*/
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
					/*создание фосфора*/
					var corX =radius*2*2-radius+20;
					var corY =radius*2*2-radius+20;
					var t = 2000;
					var cAnimation = Raphael.animation({ cx:-radius, cy:350 }, t, "easeInOut");
					var tAnimation = Raphael.animation({x:-radius, y: 350},t, "easeInOut");
					var eAnimation = Raphael.animation({cx:radius*4+20-0.25*radius, cy: radius*4-1.5*radius},1,visibCircle );//приход
					var eAnimationWent = Raphael.animation({cx:550, cy: radius*4-1.5*radius},1000);
					var lAnimation = Raphael.animation({path:"M"+corX+" "+corY+" L "+(radius*4+20-0.25*radius)+" "+(radius*4-1.5*radius
						)},0, showLine); 
					var lAnimationDelet = Raphael.animation({path:"M"+corX+" "+corY+" L "+(radius*4+20-0.25*radius)+" "+(radius*4-1.5*radius
						)},0, deletLine);  
					var pElectronTextAnimate = Raphael.animation({x:radius*4+20-0.25*radius, y: radius*4-1.5*radius-3},1, visibText);
					var pTextAnimate = Raphael.animation({x:radius*4+20-0.25*radius, y: radius*4-1.5*radius-3},1, renameP);
					var pElectronTextAnimateWent = Raphael.animation({x:550, y: radius*4-1.5*radius-3},1000);
					var pLine = paper.path("M"+corX+" "+corY+" L "+(radius*4+20-0.25*radius)+" "+(radius*4-1.5*radius));
					var pCircle = paper.circle(8*radius,radius,20).attr({'fill':'yellow'}).animate({cx:corX, cy: corY},t);
					var pText = paper.text(8*radius,radius,'P').attr({'font-size': 25}).animate({x:corX, y:corY},t);
					var pElectron = paper.circle(radius*4+20-0.25*radius, radius*4-1.5*radius, rE).attr({'fill':'blue'});
					var pElectronText = paper.text(radius*4+20-0.25*radius, radius*4-1.5*radius,'-').attr({'font-size': 35});
					
					pLine.hide();
					pElectron.hide();
					pElectronText.hide();

					geCircle.animate(cAnimation.delay(t-350));
					geText.animate(tAnimation.delay(t-350));
					
					pElectron.animate(eAnimation.delay(t));
					pElectronText.animate(pElectronTextAnimate.delay(t));
					pLine.animate(lAnimation.delay(t));

					pText.animate(pTextAnimate.delay(t+400));

					pLine.animate(lAnimationDelet.delay(t+400));
					pElectron.animate(eAnimationWent.delay(t+400));
					pElectronText.animate(pElectronTextAnimateWent.delay(t+400));


					function visibCircle(){
						pElectron.show();
					}

					function visibText(){
						pElectronText.show();
					}

					function showLine(){
						pLine.show();
					}

						function deletLine(){
						pLine.remove();
					}

					function renameP(){
						pText.remove();
						var pText1 = paper.text(8*radius,radius,'P+').attr({'font-size': 25}).animate({x:corX, y:corY},1);
					}
		}			


var handle;	
var handle0;
function timer2 ()
{	
	if(handle) clearTimeout(handle);
	if(handle0) clearTimeout(handle0);
		handle = setTimeout(k2,1);
}

function k2()
				{
					var contein = document.getElementById("termometr");
					var termometr = document.getElementById('termom');
					if (termometr!=null) {
							contein.removeChild(termometr);
						}

					dor = document.getElementById("box");
					var svg = document.getElementsByTagName('svg')[1];
					
					

					if(svg==null)
					{
						k02();
					}
					else
					{
						dor.removeChild(svg);
						k02();
					}
					
					handle0 = setTimeout(k2,4500);
				}