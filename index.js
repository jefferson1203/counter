	//document.getElementById("count-el").innerText = 5
	//let count = 5

	//console.log(count)

	//let myAge = 20

	//console.log(myAge)
    let saveElIncre = document.getElementById("save-el-incre")
	let saveElDecre = document.getElementById("save-el-decre")
	let countEl = document.getElementById("count-el")
	let count = 0
	let previous = 0

	
	function increment()
	{
		console.log("clicked")
		count = count + 1
		countEl.innerText = count
	}
	
	function decrement()
	{
		console.log("cliked")
		if (count > 0)
		count = count - 1
		countEl.innerText = count

	}

	function save() {

		let diff;  
	
		if (previous > count) {

			diff = previous - count
			let countstr = diff + " - "
			saveElDecre.textContent += countstr
		} else if (previous < count) {  

			diff = count - previous
			let countstr = diff + " - "
			saveElIncre.textContent += countstr
		}
	
		previous = count
		//console.log(diff);  
	}
	

	//save()
/*
let  welcomeEl = document.getElementById("welcome-el")
let Name = "bmouopda fotie"
let gretting = "welcome back"

welcomeEl.innerText = gretting + Name

welcomeEl.innerText += " 😎"
*/