			
				function k1(){
					//перевырка чи працюэ анымацыя
					if(handle) clearTimeout(handle);
					if(handle0) clearTimeout(handle0);

					var description = document.getElementById("description");
					description.innerHTML="Якщо підключити джерело між витоком і стоком у будь-якому порядку - струму не буде";
		
					dor = document.getElementById("box");

					document.getElementById("invisibleAll").style.visibility="visible";
					document.getElementById("invisible").style.visibility="hidden";
					document.getElementById("battery2L").style.visibility="hidden";
					document.getElementById("battery2LL").style.visibility="hidden";
					document.getElementById("fixContactRR").style.visibility="visible";
					document.getElementById("fixContactR").style.visibility="visible";
					document.getElementById("battery2R").style.visibility="hidden";
					document.getElementById("battery2RR").style.visibility="hidden";
					document.getElementById("battery22").style.visibility="visible";
					document.getElementById("battery2").style.visibility="visible";
					document.getElementById("invizU").style.visibility = "hidden";
					document.getElementById("invizA").style.visibility = "hidden";

					document.getElementById("batteryM1").style.visibility = "visible";
					document.getElementById("batteryP1").style.visibility = "visible";

					document.getElementById("batteryM2").style.visibility = "hidden";
					document.getElementById("batteryP2").style.visibility = "hidden";


					r();
}

function r()
{
					

	dor = document.getElementById("box1");
	var svg = document.getElementsByTagName('svg')[2];
	if(svg==null)
	{
		k01();
	}
	else
	{
		dor.removeChild(svg);
		k01();
	}
	
	//handle0 = setTimeout(k3,5000);
}


function k01(){

				var paper = new Raphael(document.getElementById("box1"), 670,600);


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
	var animation6 = Raphael.animation({cx:300, cy:500}, 865, animElectron3);

	mElectron1.animate(animation1);
	mElectron2.animate(animation2);
	mElectron3.animate(animation3);
	mElectron4.animate(animation4);
	mElectron5.animate(animation5);
	mElectron6.animate(animation6);

		function animElectron3() {
			var animation2 = Raphael.animation({cx:100, cy:400},400,animElectron2);
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
		