
	var num =0;
	var ampers =0;
	var number = document.getElementById("inNumber");
	var outAmper = document.getElementById("outNumber");
	var handle;	
	var handle0;

	




function timer3 ()
{
	var description = document.getElementById("description");
	description.innerHTML="Під дією поля затвори електрони області р будуть притягуватися до затвора, а дірки - відштовхуватимуться. І при напрузі 2В утворюється тонкий канал, по якому можуть пройти електрони від витока до стока.";

	document.getElementById("invisibleAll").style.visibility="visible";
	document.getElementById("invisible").style.visibility="visible";
	document.getElementById("battery2L").style.visibility="hidden";
	document.getElementById("battery2LL").style.visibility="hidden";
	document.getElementById("fixContactRR").style.visibility="hidden";
	document.getElementById("fixContactR").style.visibility="hidden";
	document.getElementById("battery2R").style.visibility="hidden";
	document.getElementById("battery2RR").style.visibility="hidden";
	document.getElementById("battery22").style.visibility="visible";
	document.getElementById("battery2").style.visibility="visible";
	document.getElementById("invizU").style.visibility = "visible";
	document.getElementById("invizA").style.visibility = "visible";

	document.getElementById("batteryM1").style.visibility = "visible";
	document.getElementById("batteryP1").style.visibility = "visible";

	document.getElementById("batteryM2").style.visibility = "hidden";
	document.getElementById("batteryP2").style.visibility = "hidden";
	if(handle) clearTimeout(handle);
	if(handle0) clearTimeout(handle0);
	handle = setTimeout(k3,1);
}

function k3()
{
					

	dor = document.getElementById("box1");
	var svg = document.getElementsByTagName('svg')[2];
	if(svg==null)
	{
		k03();
	}
	else
	{
		dor.removeChild(svg);
		k03();
	}
	
	//handle0 = setTimeout(k3,5000);
}

function k03 ()
{
	var paper = new Raphael(document.getElementById("box1"), 670,600);
	var r=5;
	var corX=335;
	var corY=425;
	var tanim=400;
	

	var anim1 = Raphael.animation({cx:corX, cy:corY},tanim);
	var anim2 = Raphael.animation({cx:corX+15, cy:corY},tanim);
	var anim3 = Raphael.animation({cx:corX+30, cy:corY},tanim);

	var anim4 = Raphael.animation({cx:corX, cy:corY+15},tanim);
	var anim5 = Raphael.animation({cx:corX+15, cy:corY+15},tanim);
	var anim6 = Raphael.animation({cx:corX+30, cy:corY+15},tanim);

	var anim7 = Raphael.animation({cx:corX, cy:corY+30},tanim);
	var anim8 = Raphael.animation({cx:corX+15, cy:corY+30},tanim);
	var anim9 = Raphael.animation({cx:corX+30, cy:corY+30},tanim);

	var anim10 = Raphael.animation({cx:corX, cy:corY+45},tanim);
	var anim11 = Raphael.animation({cx:corX+15, cy:corY+45},tanim);
	var anim12 = Raphael.animation({cx:corX+30, cy:corY+45},tanim);

	var anim13 = Raphael.animation({cx:corX, cy:corY+60},tanim);
	var anim14 = Raphael.animation({cx:corX+15, cy:corY+60},tanim);
	var anim15 = Raphael.animation({cx:corX+30, cy:corY+60},tanim);

	var anim16 = Raphael.animation({cx:corX, cy:corY+75},tanim);
	var anim17 = Raphael.animation({cx:corX+15, cy:corY+75},tanim);
	var anim18 = Raphael.animation({cx:corX+30, cy:corY+75},tanim);



	var electron1 = paper.circle(corX,corY+10, r).attr({'fill':'blue'});
	var electron5 = paper.circle(corX+5,corY+40, r).attr({'fill':'blue'});
	var electron4 = paper.circle(corX+30,corY+33, r).attr({'fill':'blue'});

	var electron8 = paper.circle(corX+20,corY+85, r).attr({'fill':'blue'});
	var electron10 = paper.circle(corX+50,corY+90, r).attr({'fill':'blue'});
	var electron13 = paper.circle(corX+1,corY+115, r).attr({'fill':'blue'});

	var electron17 = paper.circle(corX+27,corY+144, r).attr({'fill':'blue'});
	var electron6 = paper.circle(corX+10,corY+53, r).attr({'fill':'blue'});
	var electron11 = paper.circle(corX+1,corY+99, r).attr({'fill':'blue'});

	var electron15 = paper.circle(corX+40,corY+131, r).attr({'fill':'blue'});
	var electron7 = paper.circle(corX+25,corY+75, r).attr({'fill':'blue'});
	var electron2= paper.circle(corX+23,corY+14, r).attr({'fill':'blue'});

	var electron18 = paper.circle(corX+5,corY+155, r).attr({'fill':'blue'});
	var electron16 = paper.circle(corX+49,corY+138, r).attr({'fill':'blue'});
	var electron9 = paper.circle(corX+1,corY+87, r).attr({'fill':'blue'});

	var electron3 = paper.circle(corX+12,corY+23, r).attr({'fill':'blue'});
	var electron12 = paper.circle(corX+35,corY+112, r).attr({'fill':'blue'});
	var electron14 = paper.circle(corX+25,corY+130, r).attr({'fill':'blue'});

	





animElectron0();
	function animElectron0() {
	var proCircle = paper.circle(305,35, 5).attr({'fill':'blue'});
	var animation1 = Raphael.animation({cx:100, cy:35}, 200,animElectron1);
	proCircle.animate(animation1);
		function animElectron1() {
			var animation2 = Raphael.animation({cx:100, cy:400},400,animElectron01);
		proCircle.animate(animation2);

		function animElectron01(){
			proCircle.remove();
			animElectron0();
		}
		}
	}



	animElectron2();	
	function animElectron2(){
		var mElectron1 = paper.circle(100,420, 5).attr({'fill':'blue'});
		var mElectron2 = paper.circle(100,420, 5).attr({'fill':'blue'});
		var mElectron3 = paper.circle(100,420, 5).attr({'fill':'blue'});
		var mElectron4 = paper.circle(100,420, 5).attr({'fill':'blue'});
		var mElectron5 = paper.circle(100,420, 5).attr({'fill':'blue'});
		var mElectron6 = paper.circle(100,420, 5).attr({'fill':'blue'});
		
	var animation1 = Raphael.animation({cx:315, cy:425}, 400);
	var animation2 = Raphael.animation({cx:314, cy:440}, 560);
	var animation3 = Raphael.animation({cx:312, cy:455}, 460);
	var animation4 = Raphael.animation({cx:309, cy:470}, 650);
	var animation5 = Raphael.animation({cx:304, cy:485}, 765);
	var animation6 = Raphael.animation({cx:300, cy:500}, 865, animElectron02);
	


	mElectron1.animate(animation1);
	mElectron2.animate(animation2);
	mElectron3.animate(animation3);
	mElectron4.animate(animation4);
	mElectron5.animate(animation5);
	mElectron6.animate(animation6);






		function animElectron02() {
			var animation1 = Raphael.animation({cx:560, cy:425}, 1565,animElectron02k);
			var animation2 = Raphael.animation({cx:560, cy:440}, 1565);
			var animation3 = Raphael.animation({cx:560, cy:455}, 1565);
			var animation4 = Raphael.animation({cx:560, cy:470}, 1565);
			var animation5 = Raphael.animation({cx:560, cy:485}, 1565);
			var animation6 = Raphael.animation({cx:560, cy:500}, 1565);

			
			if (num>=2) mElectron1.animate(animation1);
			if(num>=3) mElectron2.animate(animation2);
			if(num>=4) mElectron3.animate(animation3);
			if(num>=5) mElectron4.animate(animation4);
			if(num>=6) {mElectron5.animate(animation5); 
						mElectron6.animate(animation6); }




			function animElectron02k() {
			var animation = Raphael.animation({cx:560, cy:155}, 500, animElectron002);
			var animation1 = Raphael.animation({cx:560, cy:155},500);
			
			if(num<2) animElectron002();
			if (num>=2) mElectron1.animate(animation);
			if(num>=3) mElectron2.animate(animation1);
			if(num>=4) mElectron3.animate(animation1);
			if(num>=5) mElectron4.animate(animation1);
			if(num>=6) {mElectron5.animate(animation1); 
						mElectron6.animate(animation1); }
			
			
			function animElectron002(){
				var animationK = Raphael.animation({cx:560, cy:105}, 1, animElectron0002);
				var animationK1 = Raphael.animation({cx:560, cy:105},1);
				if(num<2) animElectron002();
			if (num>=2) mElectron1.animate(animationK);
			if(num>=3) mElectron2.animate(animationK1);
			if(num>=4) mElectron3.animate(animationK1);
			if(num>=5) mElectron4.animate(animationK1);
			if(num>=6) {mElectron5.animate(animationK1); 
						mElectron6.animate(animationK1); }
			

			function animElectron0002(){
				var animationK = Raphael.animation({cx:560, cy:35}, 300, animElectron0002);
				var animationK1 = Raphael.animation({cx:560, cy:35},300);
				if(num<2) animElectron002();
			if (num>=2) mElectron1.animate(animationK);
			if(num>=3) mElectron2.animate(animationK1);
			if(num>=4) mElectron3.animate(animationK1);
			if(num>=5) mElectron4.animate(animationK1);
			if(num>=6) {mElectron5.animate(animationK1); 
						mElectron6.animate(animationK1); }
				
				
				function animElectron0002(){
				
				var animationK = Raphael.animation({cx:370, cy:35}, 500, animElectron0002);
				var animationK1 = Raphael.animation({cx:370, cy:35},500);
				if(num<2) animElectron002();
			if (num>=2) mElectron1.animate(animationK);
			if(num>=3) mElectron2.animate(animationK1);
			if(num>=4) mElectron3.animate(animationK1);
			if(num>=5) mElectron4.animate(animationK1);
			if(num>=6) {mElectron5.animate(animationK1); 
						mElectron6.animate(animationK1); }
				
				function animElectron0002(){
				
				mElectron1.remove();
				mElectron2.remove();
				mElectron3.remove();
				mElectron4.remove();
				mElectron5.remove();
				mElectron6.remove();
				animElectron2();
			}

			}
			}
			}
		}
	}
}




	if (num>=1) 
	{
		for(var i=0; i<6; i++)
		{
			paper.circle(320+i*14,405, 5).attr({'fill':'blue'});
		}
	}
	if(num>=1)
	{
		paper.text(316, 215, '+').attr({ 'font-size':"30px"});
		paper.text(290, 212, '-').attr({'font-size':"30px"});
		electron1.animate(anim1);
		electron2.animate(anim2);
		electron3.animate(anim3);
	}
	if(num>=2)
	{
		electron4.animate(anim4);
		electron5.animate(anim5);
		electron6.animate(anim6);
	}
	if(num>=3)
	{
		electron7.animate(anim7);
		electron8.animate(anim8);
		electron9.animate(anim9);
		
	}
	if(num>=4)
	{	electron10.animate(anim10);
		electron11.animate(anim11);
		electron12.animate(anim12);
	}
	if(num>=5)
	{
		electron13.animate(anim13);
		electron14.animate(anim14);
		electron15.animate(anim15);
		
	}

	if(num>=6)
	{
		electron16.animate(anim16);
		electron17.animate(anim17);
		electron18.animate(anim18);
		
	}

	





}



	function pluss()
{	
		if(number.innerHTML=="6")
	{
		number.innerHTML ="6";
	}
	else{
		num = parseInt(number.innerHTML)+1;
		number.innerHTML=num;
		outFunc();
	}
}

function mines()
{	
		if(number.innerHTML=="0")
	{
		number.innerHTML ="0";
	}
	else{
		num = parseInt(number.innerHTML)-1;
		number.innerHTML=num;
		outFunc();
	}
}

function outFunc()
{
	switch(num){
			case 0:
			ampers=0;
			k3();
			break;
			case 1:
			ampers=0;
			k3();
			break;
			case 2:
			ampers=1;
			k3();
			break;
			case 3:
			k3();
			ampers=3;
			break;
			case 4:
			k3();
			ampers=9;
			break;
			case 5:
			k3();
			ampers=27;
			break;
			case 6:
			k3();
			ampers=81;
			break;
		}
		outAmper.innerHTML = ampers;
}