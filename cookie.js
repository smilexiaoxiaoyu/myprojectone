var setCookie = function(key,value,expires){
	var date = new Date();
	date.setDate(date.getDate()+(expires||0));
	document.cookie = key+'='+value+'; expires='+date.toUTCString();
};

var getCookie = function(key){

	var cookies = document.cookie.split(';');
	
	for(var i=0;i<cookies.length;i++){
		var cookie = cookies[i].split('=');
		if(cookie[0].trim() == key){
			return cookie[1];
		}
	}
};
var remove = function(key){
	setCookie(key,'123',-1);
};