$(document).ready(rock);

function rock () {
  const $amenityCheck = {};
  $('input[type=checkbox]').change(function() {
    if ($(this).is(':checked')) {
      amenityCheck[$(this).attr('data-name')] = $(this).attr('data-id');
    } else if ($(this).is(':not(:checked)')) {
      delete amenityCheck[$(this).attr('data-name')];
    }
    const names = Object.keys(amenityObj);
    $('.amenities h4').text(names.sort().join(', '));
  });
}