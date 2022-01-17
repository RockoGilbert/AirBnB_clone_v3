$(document).ready(rock);

const HOST = '0.0.0.0';

function rock () {
  const $amenityCheck = {};
  $('input[type=checkbox]').change(function() {
    if ($(this).is(':checked')) {
      amenityCheck[$(this).attr('data-name')] = $(this).attr('data-id');
    } else if ($(this).is(':not(:checked)')) {
      delete amenityCheck[$(this).attr('data-name')];
    }
    const names = Object.keys(amenityCheck);
    $('.amenities h4').text(names.sort().join(', '));
  });


apiStatus();
}

function apiStatus () {
  const API_URL = 'http://${HOST}:5001/api/v1/status/`';
  $.get(API_URL, (data, testStatus) => {
    if (textStatus === 'success' && data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
}
