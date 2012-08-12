function booyah(){
	var arr = document.getElementsByClassName('summary');
	for(i=0;i<arr.length;i++){
		arr[i].style.display="none";
	}		
	document.body.getElementsByClassName('headerrow-summary')[0].style.display="none";
};
if( window != window.top) {
	booyah();
} else{
	console.log("doing nothing");
}
// you can bookmark this below javascript url as it is, instead of the extension, and this way it will only run when you click on the bookmark
// javascript:(function booyah(){var doc=document.getElementById('gadget-11781').contentDocument;var arr = doc.getElementsByClassName('summary');for(i=0;i<arr.length;i++){arr[i].style.display="none";}doc.getElementsByClassName('headerrow-summary')[0].style.display="none";})();
