const bef = document.querySelector('.before');
const aft = document.querySelector('.after');
const rat = document.querySelector('.rateagain');
const sub = document.querySelector('.submit');
const dis1 = document.querySelector('.display1');
const dis2 = document.querySelector('.display2');
const sco = document.querySelectorAll('.score');
const actrat = document.getElementById("Rating");
sub.addEventListener('click', () => 
{
	bef.style.display = "none";
	aft.classList.remove("display2");
})
rat.addEventListener('click', () => 
{
	bef.style.display = "block";
	aft.classList.add("display2");
})
sco.forEach((score) => 
{
	score.addEventListener('click', () => 
	{
		actrat.innerHTML = score.innerHTML;
	})
})