console.log('hello here');

const rootSection = document.getElementById('root');
const request_url = 'https://api.darksky.net/forecast/5b1d55c550f3af2278ba172397eeb94c/37.8267,-122.4233';

fetch(request_url)
.then((response)=>response.json())
.then(data=>{
	const list = document.createElement('ul');
	const dailyData = data.daily.data;
	dailyData.forEach((element)=>{
		const listItem = document.createElement('li');
		listItem.innerHTML = element.summary;
		list.appendChild(listItem);
		rootSection.appendChild(list);
	});
})
.catch(err=>console.error(err));