const yes = document.getElementById('YES');
const Bn = document.getElementById('no');

yes.addEventListener('click',() => {
    alert('Yes, you are right ❤️😘');
})
let temp = 150;
Bn.addEventListener('click', () => {
	temp += 200;
	yes.style.width = temp + 'px';
})
