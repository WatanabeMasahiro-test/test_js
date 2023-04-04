function process() {
	console.log("HELLO");
	document.getElementById('target').textContent = '文字がわり';
	document.getElementById('trigger_img').classList.add('changed');
}


document.getElementById('trigger_img').addEventListener('click', process);

alert("test");