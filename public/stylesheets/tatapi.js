function place1() {
    $.ajax({
      url: "https://tatapi.tourismthailand.org/tatapi/v5/attraction/P03000056",
      headers: {
        "Authorization": "Bearer GqQmVELC0cHh9qrGNUDrl9KkZKQCWd9s6Yg1u9oUVbTqXKdXHWkl)9bjDd3gDQcFvTHPbQfsZlv3b)pqv)taLpW=====2"
      }
    }).done(function (data) {
      $("#place_name").append(place_name(data));
      $("#introduction").append(introduction(data));
      $("#thumbnail_url").attr('src', thumbnail_url(data));

    });
  }
  function place2() {
    $.ajax({
      url: "https://tatapi.tourismthailand.org/tatapi/v5/attraction/P03000001",
      headers: {
        "Authorization": "Bearer GqQmVELC0cHh9qrGNUDrl9KkZKQCWd9s6Yg1u9oUVbTqXKdXHWkl)9bjDd3gDQcFvTHPbQfsZlv3b)pqv)taLpW=====2"
      }
    }).done(function (data) {
      $("#place_name2").append(place_name(data));
      $("#introduction2").append(introduction(data));
      $("#thumbnail_url2").attr('src', thumbnail_url(data));

    });
  }
  function place3() {
    $.ajax({
      url: "https://tatapi.tourismthailand.org/tatapi/v5/attraction/P03000041",
      headers: {
        "Authorization": "Bearer GqQmVELC0cHh9qrGNUDrl9KkZKQCWd9s6Yg1u9oUVbTqXKdXHWkl)9bjDd3gDQcFvTHPbQfsZlv3b)pqv)taLpW=====2"
      }
    }).done(function (data) {
      $("#place_name3").append(place_name(data));
      $("#introduction3").append(introduction(data));
      $("#thumbnail_url3").attr('src', thumbnail_url(data));

    });
  }

  // line2


  function place4() {
    $.ajax({
      url: "https://tatapi.tourismthailand.org/tatapi/v5/attraction/P03000056",
      headers: {
        "Authorization": "Bearer GqQmVELC0cHh9qrGNUDrl9KkZKQCWd9s6Yg1u9oUVbTqXKdXHWkl)9bjDd3gDQcFvTHPbQfsZlv3b)pqv)taLpW=====2"
      }
    }).done(function (data) {
      $("#place_name4").append(place_name(data));
      $("#introduction4").append(introduction(data));
      $("#thumbnail_url4").attr('src', thumbnail_url(data));

    });
  }
  function place5() {
    $.ajax({
      url: "https://tatapi.tourismthailand.org/tatapi/v5/attraction/P03000001",
      headers: {
        "Authorization": "Bearer GqQmVELC0cHh9qrGNUDrl9KkZKQCWd9s6Yg1u9oUVbTqXKdXHWkl)9bjDd3gDQcFvTHPbQfsZlv3b)pqv)taLpW=====2"
      }
    }).done(function (data) {
      $("#place_name5").append(place_name(data));
      $("#introduction5").append(introduction(data));
      $("#thumbnail_url5").attr('src', thumbnail_url(data));

    });
  }
  function place6() {
    $.ajax({
      url: "https://tatapi.tourismthailand.org/tatapi/v5/attraction/P03000041",
      headers: {
        "Authorization": "Bearer GqQmVELC0cHh9qrGNUDrl9KkZKQCWd9s6Yg1u9oUVbTqXKdXHWkl)9bjDd3gDQcFvTHPbQfsZlv3b)pqv)taLpW=====2"
      }
    }).done(function (data) {
      $("#place_name6").append(place_name(data));
      $("#introduction6").append(introduction(data));
      $("#thumbnail_url6").attr('src', thumbnail_url(data));

    });
  }






  $.when(place1(), place2(),place3(),place4(), place5(),place6()).done(function 
  (place1_data, place2_data,place3_data,place4_data, place5_data,place6_data) {
  });





  function place_name(data) {
    return data.result.place_name
  }

  function introduction(data) {
    return data.result.place_information.introduction
  }

  function thumbnail_url(data) {
    return data.result.thumbnail_url
  }