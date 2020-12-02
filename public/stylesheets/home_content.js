$.get("nav", function (data) {
	$(".nav-placeholder").replaceWith(data);
});
$.get("select", function (data) {
	$(".inlineFormCustomSelectProvince").replaceWith(data);
});
var myplace = ["P03000004", "P03000006", "P03000001", "P03000008", "P03000019", "P03000020", "P03000041", "P03000045", "P03000052" ];

function place1() {
	for (let i = 0; i < myplace.length; i++) {
		$.ajax({
			url: "https://tatapi.tourismthailand.org/tatapi/v5/attraction/" + myplace[i] + "",
			headers: {
				Authorization: "Bearer GqQmVELC0cHh9qrGNUDrl9KkZKQCWd9s6Yg1u9oUVbTqXKdXHWkl)9bjDd3gDQcFvTHPbQfsZlv3b)pqv)taLpW=====2",
			},
		}).done(function (data) {
			$(".place_name" + (i + 1)).append(place_name(data));
			$("#introduction" + (i + 1)).append(introduction(data));
			$(".attraction_types" + (i + 1)).append(attraction_types(data));
			$(".destination" + (i + 1)).append(destination(data));
			$(".district" + (i + 1)).append(district(data));
			$("#weekday_text" + (i + 1)).append(weekday_text(data));
			$("#weekday_text_time" + (i + 1)).append(weekday_text_time(data));
			$("#thumbnail_url" + (i + 1)).attr("src", thumbnail_url(data));
			$("#detail" + (i + 1)).append(detail(data));
			//   $("#latitude" + (i + 1)).append(latitude(data));
			//   $("#longitude" + (i + 1)).append(longitude(data));
			if ( !empty((latitude(data) && longitude(data)))) {
				initMap(latitude(data), longitude(data), "map" + (i + 1));
			}
			console.log(place_name(data));
			console.log(latitude(data));
			console.log(longitude(data));
			console.log("-------");
			for (let k = 0; k < 3; k++) {
				let count = String(Number(i + 1)) + String(Number(k + 1));
				if (web_picture_urls(data, count) != undefined) {
					$("#web_picture_urls_" + count).attr("src", web_picture_urls(data, k));
				} else {
					$("#web_picture_urls_" + count).attr("src", web_picture_urls(data, 0));
				}
			}
			if ( !empty(facilities(data)) ) {
				$("#facilities" + (i + 1)).append("| สิ่งอำนวยความสะดวก : " + facilities(data));
			}
		});
	}
}
$.when(place1()).done(function (place1_data) {});

function place_name(data) {
	return data.result.place_name;
}

function introduction(data) {
	return data.result.place_information.introduction;
}

function detail(data) {
	return data.result.place_information.detail;
}

function attraction_types(data) {
	return data.result.place_information.attraction_types[0].description;
}

function thumbnail_url(data) {
	return data.result.thumbnail_url;
}

function destination(data) {
	return data.result.destination;
}

function facilities(data) {
	return data.result.facilities[0].description;
}

function district(data) {
	return data.result.location.district;
}

function latitude(data) {
	return data.result.latitude;
}

function longitude(data) {
	return data.result.longitude;
}

function web_picture_urls(data, img) {
	return data.result.web_picture_urls[img];
}

function weekday_text(data) {
	return (data.result.opening_hours.weekday_text.day1.day + "<br>" + data.result.opening_hours.weekday_text.day2.day + "<br>" + data.result.opening_hours.weekday_text.day3.day + "<br>" + data.result.opening_hours.weekday_text.day4.day + "<br>" + data.result.opening_hours.weekday_text.day5.day + "<br>" + data.result.opening_hours.weekday_text.day6.day + "<br>" + data.result.opening_hours.weekday_text.day7.day);
}

function weekday_text_time(data) {
	return (data.result.opening_hours.weekday_text.day1.time + "<br>" + data.result.opening_hours.weekday_text.day2.time + "<br>" + data.result.opening_hours.weekday_text.day3.time + "<br>" + data.result.opening_hours.weekday_text.day4.time + "<br>" + data.result.opening_hours.weekday_text.day5.time + "<br>" + data.result.opening_hours.weekday_text.day6.time + "<br>" + data.result.opening_hours.weekday_text.day7.time);
}

function initMap(a, b, c) {
	const uluru = {
		lat: a,
		lng: b
	};
	const map = new google.maps.Map(document.getElementById(c), {
		zoom: 15,
		center: uluru,
	});
	const marker = new google.maps.Marker({
		position: uluru,
		map: map,
	});
}



  function show_search(){
	var e = document.getElementById("inlineFormCustomSelectProvince");
	var showmyprovince = e.options[e.selectedIndex].value;

	function createNode(element) {
		return document.createElement(element)
	  }
	
	  function append(parent, el) {
		return parent.appendChild(el)
	  }
	  const ul = document.getElementById('show')

  fetch('https://tatapi.tourismthailand.org/tatapi/v5/places/search?provinceName='+showmyprovince+'&categories=ATTRACTION', {
	  method: "GET",
	  headers: {
		"Authorization": "Bearer GqQmVELC0cHh9qrGNUDrl9KkZKQCWd9s6Yg1u9oUVbTqXKdXHWkl)9bjDd3gDQcFvTHPbQfsZlv3b)pqv)taLpW=====2"
	  }
	})
	.then(response => response.json())
	.then(function (data) {
	  console.log(data)
	  let shows = data.result;
	  return shows.map(function (show) {
		let li = createNode('li')
		let img = createNode('img')
		let span = createNode('span')
		// let p = createNode('p')
		let hr=createNode('hr')
		img.src = show.thumbnail_url
		span.innerHTML = "&nbsp;&nbsp;&nbsp;"+`${show.place_name}` +" | "+`${show.category_description}`
		console.log(img.src)

		
		if(!empty(show.thumbnail_url)){
		append(li, img)
		append(li, span )
		append(li, hr)
		append(ul, li)
		}
	  })
	}).catch(function (error) {
	  console.log(error)
	})
  }



  function empty(e) {
	switch (e) {
	  case "":
	  case 0:
	  case "0":
	  case null:
	  case false:
	  case typeof(e) == "undefined":
		return true;
	  default:
		return false;
	}
  }
  function refreshPage(){
    window.location.reload();
} 