var check=document.querySelector(".check");
check.addEventListener('click', language);

function language(){
	let lang=check.checked;
	if (lang==false){
		location.href="en/";
	}else{
		location.href="/"
	}
}