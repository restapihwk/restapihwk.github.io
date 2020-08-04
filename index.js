let urlEnding = "all"
function getCountries(){
	let input = document.querySelector('input')
	if(input.value != "" && typeof input.value == "string"){
	   urlEnding = "name/" + input.value; 
	}
	else {
		urlEnding = "all";
	}
	fetch(`https://restcountries.eu/rest/v2/${urlEnding}`)
		.then(r => {r.json().then(function(data) {
			document.querySelector('tbody').remove()
			let tbody = document.createElement('tbody')
			document.querySelector('table').append(tbody)
	  		data.forEach((e) => {
	  			let tr = document.createElement('tr')
	  			let td1 = document.createElement('td')
	  			let td2 = document.createElement('td')
	  			let td3 = document.createElement('td')
	  			let td4 = document.createElement('td')
	  			let td5 = document.createElement('td')
	  			let td6 = document.createElement('td')

				let img = document.createElement('img')

				let name = document.createTextNode(e.name);
	  			if (name.length >= 25) {
	  				name = e.name.slice(0,25) + " ..."
	  			}
	  			
	  			let area = document.createTextNode(e.area + " km2")
	  			let imgSrc = e.flag;

	  			img.setAttribute('src', imgSrc);
	  			img.style.width = "35px";

	  			let population = document.createTextNode(e.population)

	  			let borders = document.createTextNode(e.borders)

	  			let alpha = document.createTextNode(e.alpha3Code)

	  			tbody.append(tr)
	  			tr.append(td1)
	  			tr.append(td2)
	  			tr.append(td3)
	  			tr.append(td4)
	  			tr.append(td5)
	  			tr.append(td6)

	  			td1.append(name)
	  			td2.append(area)
	  			td3.append(img)
	  			td4.append(population)
	  			td5.append(borders)
	  			td6.append(alpha)
		    })
		  })
		;})
		.catch(err => {
			console.log("A51a51a5")
			document.write("---" ,err, "--- ", "\n Invalid request please try another one ")
		});
}
getCountries()
// https://restcountries.eu/rest/v2/all