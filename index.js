let mainCountries = [];
let favorites = [];
let urlEnding = "all"
setTimeout(function () {document.querySelector('.notif').remove()}, 4000)

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
			document.querySelector('thead').remove()

			let tbody = document.createElement('tbody')
			let thead = document.createElement('thead')
			let trUp = document.createElement('tr')

			let th1 = document.createElement('th')
	  		let th2 = document.createElement('th')
	  		let th3 = document.createElement('th')
	  		let th4 = document.createElement('th')
	 		let th5 = document.createElement('th')	 			
	 		let th6 = document.createElement('th')
	 		let th7 = document.createElement('th')

			document.querySelector('table').append(thead)
			document.querySelector('table').append(tbody)
			

			let nameUp = document.createTextNode('Name')
			let areaUp = document.createTextNode('Area')
			let flagUp = document.createTextNode('Flag')
			let populationUp = document.createTextNode('Population')
			let bordersUp = document.createTextNode('Borders')
			let alphaUp = document.createTextNode('Alpha Code')
			let favUp = document.createTextNode('Add to Favorite')

			thead.append(trUp)
			trUp.append(th1)
			trUp.append(th2)
			trUp.append(th3)
			trUp.append(th4)
			trUp.append(th5)
			trUp.append(th6)
			trUp.append(th7)

			th1.append(nameUp)
			th2.append(areaUp)
			th3.append(flagUp)
			th4.append(populationUp)
			th5.append(bordersUp)
			th6.append(alphaUp)
			th7.append(favUp)


			let id = 0;

	  		data.forEach((e) => {
	  			let tr = document.createElement('tr')

	  			let td1 = document.createElement('td')
	  			let td2 = document.createElement('td')
	  			let td3 = document.createElement('td')
	  			let td4 = document.createElement('td')
	  			let td5 = document.createElement('td')
	  			let td6 = document.createElement('td')
	  			let td7 = document.createElement('td')

				let img = document.createElement('img')

				let name = document.createTextNode(e.name);
	  			if (name.length >= 25) {
	  				name = e.name.slice(0,25) + " ..."
	  			}
	  			td1.setAttribute('onclick', "getFullInfo(this)")
	  			
	  			let area = document.createTextNode(e.area + " km2")
	  			let imgSrc = e.flag;

	  			img.setAttribute('src', imgSrc);
	  			img.style.width = "35px";

	  			let population = document.createTextNode(e.population)
	  			let borders = document.createTextNode(e.borders)
	  			let add = document.createTextNode('♥')
	  			if(e.borders.length >= 9) {
	  				borders = document.createTextNode(e.borders.slice(0,9)+" ...")
	  			}
	  			else if(window.innerWidth < 480) {
	  				borders = document.createTextNode(e.borders.slice(0,3)+" ...")
	  				add = document.createTextNode(e.capital)
	  			}
	  			

	  			let alpha = document.createTextNode(e.alpha3Code)
	  			
	  			
	  			tbody.append(tr)
	  			tr.append(td1)
	  			tr.append(td2)
	  			tr.append(td3)
	  			tr.append(td4)
	  			tr.append(td5)
	  			tr.append(td6)
	  			tr.append(td7)

	  			td1.append(name)
	  			td2.append(area)
	  			td3.append(img)
	  			td4.append(population)
	  			td5.append(borders)
	  			td6.append(alpha)
	  			td7.append(add)

	  			td7.setAttribute('onclick', `addToFav(${id})`)
	  			id += 1;

	  			let tmpObject = new Object();
	  			tmpObject.name = e.name;
	  			tmpObject.area = e.area;
	  			tmpObject.img = e.flag;
	  			tmpObject.population = e.population;
	  			tmpObject.borders = e.borders;
	  			tmpObject.alpha = e.alpha3Code;
	  			tmpObject.capital = e.capital;
	  			mainCountries.push(tmpObject)
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
function getFullInfo(elem) {
	let urlFull = elem.innerText;
	fetch(`https://restcountries.eu/rest/v2/name/${urlFull}`)
		.then(r => {r.json().then(function(data) {
			document.querySelector('tbody').remove()
			document.querySelector('thead').remove()
			
			let thead = document.createElement('thead')
			let tbody = document.createElement('tbody')
			

			document.querySelector('table').append(tbody)
			document.querySelector('table').append(thead)

			let trUp = document.createElement('tr')
			let th1 = document.createElement('th')
	  		let th2 = document.createElement('th')
	  		let th3 = document.createElement('th')
	  		let th4 = document.createElement('th')
	 		let th5 = document.createElement('th')	 			
	 		let th6 = document.createElement('th')
	 		let th7 = document.createElement('th')
	 		let th8 = document.createElement('th')	 			
	 		let th9 = document.createElement('th')

	 		let nameUp = document.createTextNode('Name')
			let areaUp = document.createTextNode('Area')
			let flagUp = document.createTextNode('Flag')
			let populationUp = document.createTextNode('Population')
			let regionUp = document.createTextNode('Region')
			let subregionUp = document.createTextNode('Subegion')
			let capitalUp = document.createTextNode('Capital')
			let timezonesUp = document.createTextNode('Timezones')
			let nativeNameUp = document.createTextNode('Native Name')

			thead.append(trUp)
			trUp.append(th1)
			trUp.append(th2)
			trUp.append(th3)
			trUp.append(th4)
			trUp.append(th5)
			trUp.append(th6)
			trUp.append(th7)
			trUp.append(th8)
			trUp.append(th9)

			th1.append(nameUp)
			th2.append(areaUp)
			th3.append(flagUp)
			th4.append(populationUp)
			th5.append(regionUp)
	  		th6.append(subregionUp)
	  		th7.append(capitalUp)
	  		th8.append(timezonesUp)
	  		th9.append(nativeNameUp)


	  		data.forEach((e) => {
	  			let tr = document.createElement('tr')
	  			

	  			let td1 = document.createElement('td')
	  			let td2 = document.createElement('td')
	  			let td3 = document.createElement('td')
	  			let td4 = document.createElement('td')
	  			let td5 = document.createElement('td')
	  			let td6 = document.createElement('td')
	  			let td7 = document.createElement('td')
	  			let td8 = document.createElement('td')
	  			let td9 = document.createElement('td')


				let img = document.createElement('img')

				let name = document.createTextNode(e.name);
	  			if (name.length >= 25) {
	  				name = e.name.slice(0,25) + " ..."
	  			}
	  			td1.setAttribute('onclick', "getFullInfo(this)")
	  			
	  			let area = document.createTextNode(e.area + " km2")
	  			let imgSrc = e.flag;

	  			img.setAttribute('src', imgSrc);
	  			img.style.width = "35px";

	  			let population = document.createTextNode(e.population)

	  			let region = document.createTextNode(e.region)
	  			let subRegion = document.createTextNode(e.subregion)

	  			if(window.innerWidth < 480) {
	  				region = document.createTextNode(e.borders.slice(0,3)+" ...")
	  				subRegion = document.createTextNode(e.alpha3Code)
	  			}
	  			let nativeName = document.createTextNode(e.nativeName)

	  			let capital = document.createTextNode(e.capital)

	  			let timezones = document.createTextNode(e.timezones)

	  			tbody.append(tr)
	  			tr.append(td1)
	  			tr.append(td2)
	  			tr.append(td3)
	  			tr.append(td4)
	  			tr.append(td5)
	  			tr.append(td6)
	  			tr.append(td7)		
	  			tr.append(td8)
	  			tr.append(td9)

	  			td1.append(name)
	  			td2.append(area)
	  			td3.append(img)
	  			td4.append(population)
	  			td5.append(region)
	  			td6.append(subRegion)
	  			td7.append(capital)
	  			td8.append(timezones)
	  			td9.append(nativeName)
	  			// region, timezones, nativeName, capital ,subReg
		    })
		  })
		;})
		.catch(err => {
			console.log("A51a51a5")
			document.write("---" ,err, "--- ", "\n Invalid request please try another one ")
		});
}
function addToFav (numId) {

	favList = localStorage.getItem("getFavs");
	favorites = JSON.parse(favList);

	favorites.push(mainCountries[numId])

	favJsoned = JSON.stringify(favorites);
	localStorage.setItem("getFavs", favJsoned);

}
function favoriteRender () {
			let favId = 0;
			favList = localStorage.getItem("getFavs");
			favorites = JSON.parse(favList);

			document.querySelector('tbody').remove()
			document.querySelector('thead').remove()

			let tbody = document.createElement('tbody')
			let thead = document.createElement('thead')
			let trUp = document.createElement('tr')

			let th1 = document.createElement('th')
	  		let th2 = document.createElement('th')
	  		let th3 = document.createElement('th')
	  		let th4 = document.createElement('th')
	 		let th5 = document.createElement('th')	 			
	 		let th6 = document.createElement('th')
	 		let th7 = document.createElement('th')
			document.querySelector('table').append(thead)
			document.querySelector('table').append(tbody)
			

			let nameUp = document.createTextNode('Name')
			let areaUp = document.createTextNode('Area')
			let flagUp = document.createTextNode('Flag')
			let populationUp = document.createTextNode('Population')
			let bordersUp = document.createTextNode('Borders')
			let alphaUp = document.createTextNode('Alpha Code')
			let delUp = document.createTextNode('Delete')

			thead.append(trUp)
			trUp.append(th1)
			trUp.append(th2)
			trUp.append(th3)
			trUp.append(th4)
			trUp.append(th5)
			trUp.append(th6)
			trUp.append(th7)

			th1.append(nameUp)
			th2.append(areaUp)
			th3.append(flagUp)
			th4.append(populationUp)
			th5.append(bordersUp)
			th6.append(alphaUp)
			th7.append(delUp)

	  		favorites.forEach((e) => {
	  			let tr = document.createElement('tr')

	  			let td1 = document.createElement('td')
	  			let td2 = document.createElement('td')
	  			let td3 = document.createElement('td')
	  			let td4 = document.createElement('td')
	  			let td5 = document.createElement('td')
	  			let td6 = document.createElement('td')
	  			let td7 = document.createElement('td')

				let img = document.createElement('img')
				let delImg = document.createElement('img')

				let name = document.createTextNode(e.name);
	  			if (name.length >= 25) {
	  				name = e.name.slice(0,25) + " ..."
	  			}
	  			td1.setAttribute('onclick', "getFullInfo(this)")
	  			
	  			let area = document.createTextNode(e.area + " km2")
	  			let imgSrc = e.img;
	  			img.setAttribute('src', imgSrc);
	  			delImg.setAttribute('src', 'img/delete.svg')
	  			img.style.width = "35px";
	  			delImg.style.width = '35px'

	  			let population = document.createTextNode(e.population)
	  			let borders = document.createTextNode(e.borders)
	  			let deltxt = document.createTextNode("Delete This \n From Favorite")

	  			td7.setAttribute('onclick', `delFromFavorite(${favId})`)
	  			favId += 1;

	  			if(e.borders.length >= 9) {
	  				borders = document.createTextNode(e.borders.slice(0,9)+" ...")
	  			}
	  			else if(window.innerWidth < 480) {
	  				deltxt = e.capital;
	  				borders = document.createTextNode(e.borders.slice(0,3)+" ...")
	  			}
	  			
	  			let alpha = document.createTextNode(e.alpha)


	  			tbody.append(tr)
	  			tr.append(td1)
	  			tr.append(td2)
	  			tr.append(td3)
	  			tr.append(td4)
	  			tr.append(td5)
	  			tr.append(td6)
	  			tr.append(td7)

	  			td1.append(name)
	  			td2.append(area)
	  			td3.append(img)
	  			td4.append(population)
	  			td5.append(borders)
	  			td6.append(alpha)
	  			td7.append(delImg)

});}
function delFromFavorite (idDel) {
	favList = localStorage.getItem("getFavs");
	favorites = JSON.parse(favList);

	favorites.splice(idDel, 1)

	favJsoned = JSON.stringify(favorites);
	localStorage.setItem("getFavs", favJsoned);

	favoriteRender()
}