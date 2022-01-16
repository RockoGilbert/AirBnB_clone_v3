$.getJSON('http://0.0.0.0:5001/api/v1/status/', function (data, textStatus) {
  if (data.status === 'OK') {
    $('#api_status').addClass('available');
  }
$(function() {
  const $amenitiesCheck = {};
  $('input[type=checkbox]').change(function() {
    if ($(this).is(':checked')) {
      const key = $(this).attr('data-id');
      const value = $(this).attr('data-name');
      $amenitiesCheck[key]= value;
    }
    if (!$(this).is(':checked')) {
      delete amenitiesCheck[$(this).attr('data-id')];
    }
    const list = [];
    for (const name in amenitiesCheck) {
      list.push(amenitiesCheck[name]);
    }
    $('div.amenities h4').text(list.join(', '));
  });
});
