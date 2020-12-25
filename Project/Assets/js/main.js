var counter=1;
setInterval(function() {
	if (counter>=5)
		counter=0;
	counter++;
	document.querySelector('#r'+counter).checked = true;
}, 3000);

var t=document.querySelector('.navigation-manual');
t.onclick=function(e) {
	var str=e.target.className;
	counter=+str[str.length-1];
}

window.onscroll=function() {
	if (document.querySelector('body').scrollTop > 70 || document.documentElement.scrollTop > 70) {
		document.querySelector('.moveTop').style.opacity="1";
		document.querySelector('.moveTop').style.transition="opacity linear 0.4s";
	}
	else {
		document.querySelector('.moveTop').style.opacity="0";
		document.querySelector('.moveTop').style.transition="opacity linear 0.4s";
	}
}