

$.get("nav", function(data){
  $(".nav-placeholder").replaceWith(data);
});




function place1() {
  $.ajax({
    url: "https://tatapi.tourismthailand.org/tatapi/v5/attraction/P03000017",
    headers: {
      Authorization:
        "Bearer GqQmVELC0cHh9qrGNUDrl9KkZKQCWd9s6Yg1u9oUVbTqXKdXHWkl)9bjDd3gDQcFvTHPbQfsZlv3b)pqv)taLpW=====2",
    },
  }).done(function (data) {
    $(".place_name").append(place_name(data));
    $("#introduction").append(introduction(data));
    $("#attraction_types").append(attraction_types(data));
    $("#destination").append(destination(data));
    $("#update_date").append(update_date(data));
    $("#thumbnail_url").attr("src", thumbnail_url(data));
    $("#detail").append(detail(data));
    for (let i = 0; i < 3; i++) {
      if(web_picture_urls(data,i)!==undefined){
        $("#web_picture_urls_"+(i+1)).attr("src", web_picture_urls(data,i));
      }else {
        $("#web_picture_urls_"+(i+1)).attr("src", web_picture_urls(data,(0)));
      }
      
    }

    console.log(web_picture_urls(data,1))




  });
}
function place2() {
  $.ajax({
    url: "https://tatapi.tourismthailand.org/tatapi/v5/attraction/P03000001",
    headers: {
      Authorization:
        "Bearer GqQmVELC0cHh9qrGNUDrl9KkZKQCWd9s6Yg1u9oUVbTqXKdXHWkl)9bjDd3gDQcFvTHPbQfsZlv3b)pqv)taLpW=====2",
    },
  }).done(function (data) {
    $("#place_name2").append(place_name(data));
    $("#introduction2").append(introduction(data));
    $("#attraction_types2").append(attraction_types(data));
    $("#destination2").append(destination(data));
    $("#update_date2").append(update_date(data));
    $("#thumbnail_url2").attr("src", thumbnail_url(data));
    // $("#detail2").append(detail(data));
    // $("#web_picture_urls_1").attr("src", web_picture_urls(data,0));
    // $("#web_picture_urls_2").attr("src", web_picture_urls(data,1));
    // $("#web_picture_urls_3").attr("src", web_picture_urls(data,2));
  });
}
function place3() {
  $.ajax({
    url: "https://tatapi.tourismthailand.org/tatapi/v5/attraction/P03000041",
    headers: {
      Authorization:
        "Bearer GqQmVELC0cHh9qrGNUDrl9KkZKQCWd9s6Yg1u9oUVbTqXKdXHWkl)9bjDd3gDQcFvTHPbQfsZlv3b)pqv)taLpW=====2",
    },
  }).done(function (data) {
    $(".place_name3").append(place_name(data));
    $("#introduction3").append(introduction(data));
    $("#detail3").append(detail(data));
    $("#attraction_types3").append(attraction_types(data));
    $("#destination3").append(destination(data));
    $("#update_date3").append(update_date(data));
    $("#thumbnail_url3").attr("src", thumbnail_url(data));
  });
}

$.when(place1(), place2(), place3()).done(function (
  place1_data,
  place2_data,
  place3_data
) {});

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
function update_date(data) {
  return data.result.update_date;
}
function web_picture_urls(data, img) {
  return data.result.web_picture_urls[img]; 

}



