$.getJSON('http://0.0.0.0:5001/api/v1/status/', function (data, textStatus) {
  if (data.status === 'OK') {
    $('DIV#api_status').addClass('available');
  }
});