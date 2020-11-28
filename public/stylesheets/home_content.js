$.get("nav", function (data) {
	$(".nav-placeholder").replaceWith(data);
});

function place1() {
	var myplace = ['P03000004', "P03000006", "P03000003", "P03000008", "P03000019", "P03000020"];
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
			for (let k = 0; k < 3; k++) {
				let count = String(Number(i + 1)) + String(Number(k + 1))
				if (web_picture_urls(data, count) != undefined) {
					$("#web_picture_urls_" + count).attr("src", web_picture_urls(data, k));
				} else {
					$("#web_picture_urls_" + count).attr("src", web_picture_urls(data, 0));
				}
			}
			if (facilities(data) != null) {
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

function web_picture_urls(data, img) {
	return data.result.web_picture_urls[img];
}

function weekday_text(data) {
	return (data.result.opening_hours.weekday_text.day1.day + "<br>" + data.result.opening_hours.weekday_text.day2.day + "<br>" + data.result.opening_hours.weekday_text.day3.day + "<br>" + data.result.opening_hours.weekday_text.day4.day + "<br>" + data.result.opening_hours.weekday_text.day5.day + "<br>" + data.result.opening_hours.weekday_text.day6.day + "<br>" + data.result.opening_hours.weekday_text.day7.day);
}

function weekday_text_time(data) {
	return (data.result.opening_hours.weekday_text.day1.time + "<br>" + data.result.opening_hours.weekday_text.day2.time + "<br>" + data.result.opening_hours.weekday_text.day3.time + "<br>" + data.result.opening_hours.weekday_text.day4.time + "<br>" + data.result.opening_hours.weekday_text.day5.time + "<br>" + data.result.opening_hours.weekday_text.day6.time + "<br>" + data.result.opening_hours.weekday_text.day7.time);
}