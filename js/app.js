var check=document.querySelector(".check");
check.addEventListener('click', language);

function language(){
	let lang=check.checked;
	if (lang==false){
		location.href="es/";
	}else{
		location.href="/"
	}
}

function jfk_map() {
	var popupWindow = window.open("../assets/img/jfk-map.png", "KN", "width=460,height=410");
	popupWindow.document.write("<img src='../assets/img/jfk-map.png' alt='Imagen'>");
}