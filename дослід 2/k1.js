			
				var rE=10;
				function k1(){
					var description = document.getElementById("description");
	description.innerHTML="Кристалічна гратка Ge. Показані лише валентні електрони.";

					//перевырка чи працюэ анымацыя
					if(handle) clearTimeout(handle);
					if(handle0) clearTimeout(handle0);
		
					var contein = document.getElementById("termometr");
					var termometr = document.getElementById('termom');
					if (termometr!=null) {
							contein.removeChild(termometr);
						}
						


					dor = document.getElementById("box");
					var svg = document.getElementsByTagName('svg')[1];
					if(svg==null){
						k01();
								}
					else{
					dor.removeChild(svg);
					k01();
						}
				}
				function k01()
				 {
				 	var radius = 70;
					var paper = new Raphael(document.getElementById("box"), 550,450);
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
					for(var i = 1; i <=3; i+=1) 
					{	
						for(var j=1;j<=3;j+=1)
						{	
							/* створення атома*/
							paper.circle(radius*2*i-radius+20, radius*2*j-radius+20, radius );
							paper.circle(radius*2*i-radius+20, radius*2*j-radius+20, 48);
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
					
				}
		