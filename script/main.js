var startX = null;
var deltaX = null;
var swipeTreshold = 50; //how big swipe should be
document.querySelector('.viewport').addEventListener('touchstart',function(e){
	startX= e.targetTouches[0].pageX; //records the start of the touch event

	this.addEventListener('touchmove',function(e){
		deltaX = e.targetTouches[0].pageX - startX; //records the distance moved
		if(Math.abs(deltaX)>=swipeTreshold) {	//this is swipe tresh hold
			//positive = right-swipe
			if(deltaX>0) {
				$('#myPage').carousel("prev"); //jQuery of bootstrap carousel prev
			} else {
				//negative = left-swipe
				$('#myPage').carousel("next"); //jQuery of bootstrap carousel next
			}
		}
		e.preventDefault();
		e.stopPropagation();
	},false);
},false);