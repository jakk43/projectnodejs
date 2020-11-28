$.get("nav", function (data) {
	$(".nav-placeholder").replaceWith(data);
});

function place1() {
	$.ajax({
		url: "https://tatapi.tourismthailand.org/tatapi/v5/attraction/P03000004",
		headers: {
			Authorization: "Bearer GqQmVELC0cHh9qrGNUDrl9KkZKQCWd9s6Yg1u9oUVbTqXKdXHWkl)9bjDd3gDQcFvTHPbQfsZlv3b)pqv)taLpW=====2",
		},
	}).done(function (data) {
		$(".place_name").append(place_name(data));
		$("#introduction").append(introduction(data));
		$(".attraction_types").append(attraction_types(data));
		$(".destination").append(destination(data));
		$(".district").append(district(data));
		$("#weekday_text").append(weekday_text(data));
		$("#weekday_text_time").append(weekday_text_time(data));
		$("#thumbnail_url").attr("src", thumbnail_url(data));
		$("#detail").append(detail(data));
		for (let i = 0; i < 3; i++) {
			if (web_picture_urls(data, i) != undefined) {
				$("#web_picture_urls_1_" + (i + 1)).attr("src", web_picture_urls(data, i));
			} else {
				$("#web_picture_urls_1_" + (i + 1)).attr("src", web_picture_urls(data, 0));
			}
		}
		if (facilities(data) != null) {
			$("#facilities").append("| สิ่งอำนวยความสะดวก : " + facilities(data));
		}
	});
}

function place2() {
	$.ajax({
		url: "https://tatapi.tourismthailand.org/tatapi/v5/attraction/P03000006",
		headers: {
			Authorization: "Bearer GqQmVELC0cHh9qrGNUDrl9KkZKQCWd9s6Yg1u9oUVbTqXKdXHWkl)9bjDd3gDQcFvTHPbQfsZlv3b)pqv)taLpW=====2",
		},
	}).done(function (data) {
		$(".place_name2").append(place_name(data));
		$("#introduction2").append(introduction(data));
		$(".attraction_types2").append(attraction_types(data));
		$(".destination2").append(destination(data));
		$(".district2").append(district(data));
		$("#weekday_text2").append(weekday_text(data));
		$("#weekday_text_time2").append(weekday_text_time(data));
		$("#thumbnail_url2").attr("src", thumbnail_url(data));
		$("#detail2").append(detail(data));
		for (let i = 0; i < 3; i++) {
			if (web_picture_urls(data, i) != undefined) {
				$("#web_picture_urls_2_" + (i + 1)).attr("src", web_picture_urls(data, i));
			} else {
				$("#web_picture_urls_2_" + (i + 1)).attr("src", web_picture_urls(data, 0));
			}
		}
		if (facilities(data) != null) {
			$("#facilities2").append("| สิ่งอำนวยความสะดวก : " + facilities(data));
		}
	});
}

function place3() {
	$.ajax({
		url: "https://tatapi.tourismthailand.org/tatapi/v5/attraction/P03000003",
		headers: {
			Authorization: "Bearer GqQmVELC0cHh9qrGNUDrl9KkZKQCWd9s6Yg1u9oUVbTqXKdXHWkl)9bjDd3gDQcFvTHPbQfsZlv3b)pqv)taLpW=====2",
		},
	}).done(function (data) {
		$(".place_name3").append(place_name(data));
		$("#introduction3").append(introduction(data));
		$(".attraction_types3").append(attraction_types(data));
		$(".destination3").append(destination(data));
		$(".district3").append(district(data));
		$("#weekday_text3").append(weekday_text(data));
		$("#weekday_text_time3").append(weekday_text_time(data));
		$("#thumbnail_url3").attr("src", thumbnail_url(data));
		$("#detail3").append(detail(data));
		for (let i = 0; i < 3; i++) {
			if (web_picture_urls(data, i) != undefined) {
				$("#web_picture_urls_3_" + (i + 1)).attr("src", web_picture_urls(data, i));
			} else {
				$("#web_picture_urls_3_" + (i + 1)).attr("src", web_picture_urls(data, 0));
			}
		}
		if (facilities(data) != null) {
			$("#facilities3").append("สิ่งอำนวยความสะดวก : " + facilities(data));
		}
	});
}

function place4() {
	$.ajax({
		url: "https://tatapi.tourismthailand.org/tatapi/v5/attraction/P03000008",
		headers: {
			Authorization: "Bearer GqQmVELC0cHh9qrGNUDrl9KkZKQCWd9s6Yg1u9oUVbTqXKdXHWkl)9bjDd3gDQcFvTHPbQfsZlv3b)pqv)taLpW=====2",
		},
	}).done(function (data) {
		$(".place_name4").append(place_name(data));
		$("#introduction4").append(introduction(data));
		$("#attraction_types4").append(attraction_types(data));
		$("#destination4").append(destination(data));
		$("#district4").append(district(data));
		$("#weekday_text4").append(weekday_text(data));
		$("#weekday_text_time4").append(weekday_text_time(data));
		$("#thumbnail_url4").attr("src", thumbnail_url(data));
		$("#detail").append(detail(data));
		// for (let i = 0; i < 3; i++) {
		// 	if (web_picture_urls(data, i) != undefined) {
		// 		$("#web_picture_urls_1_" + (i + 1)).attr("src", web_picture_urls(data, i));
		// 	} else {
		// 		$("#web_picture_urls_1_" + (i + 1)).attr("src", web_picture_urls(data, 0));
		// 	}
		// }
		if (facilities(data) != null) {
			$("#facilities4").append("สิ่งอำนวยความสะดวก : " + facilities(data));
		}
	});
}

function place5() {
	$.ajax({
		url: "https://tatapi.tourismthailand.org/tatapi/v5/attraction/P03000017",
		headers: {
			Authorization: "Bearer GqQmVELC0cHh9qrGNUDrl9KkZKQCWd9s6Yg1u9oUVbTqXKdXHWkl)9bjDd3gDQcFvTHPbQfsZlv3b)pqv)taLpW=====2",
		},
	}).done(function (data) {
		$(".place_name5").append(place_name(data));
		$("#introduction5").append(introduction(data));
		$("#attraction_types5").append(attraction_types(data));
		$("#destination5").append(destination(data));
		$("#district5").append(district(data));
		$("#weekday_text5").append(weekday_text(data));
		$("#weekday_text_time5").append(weekday_text_time(data));
		$("#thumbnail_url5").attr("src", thumbnail_url(data));
		$("#detail5").append(detail(data));
		if (facilities(data) != null) {
			$("#facilities5").append("สิ่งอำนวยความสะดวก : " + facilities(data));
		}
	});
}

function place6() {
	$.ajax({
		url: "https://tatapi.tourismthailand.org/tatapi/v5/attraction/P03000019",
		headers: {
			Authorization: "Bearer GqQmVELC0cHh9qrGNUDrl9KkZKQCWd9s6Yg1u9oUVbTqXKdXHWkl)9bjDd3gDQcFvTHPbQfsZlv3b)pqv)taLpW=====2",
		},
	}).done(function (data) {
		$(".place_name6").append(place_name(data));
		$("#introduction6").append(introduction(data));
		$("#attraction_types6").append(attraction_types(data));
		$("#destination6").append(destination(data));
		$("#district6").append(district(data));
		$("#weekday_text6").append(weekday_text(data));
		$("#weekday_text_time6").append(weekday_text_time(data));
		$("#thumbnail_url6").attr("src", thumbnail_url(data));
		$("#detail6").append(detail(data));
		if (facilities(data) != null) {
			$("#facilities6").append("สิ่งอำนวยความสะดวก : " + facilities(data));
		}
	});
}
$.when(place1(), place2(), place3()).done(function (place1_data, place2_data, place3_data) {});
$.when(place4(), place5(), place6()).done(function (place4_data, place5_data, place6_data) {});

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
