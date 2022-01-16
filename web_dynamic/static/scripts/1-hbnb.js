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












$(document).ready (function() {
  const dict = {};
  const $amenitiesCheck = $('input[type-checkbox]');
  const $selectedAmenities = $('div.amenities h4');
    
  $amenitiesCheck.click(function() {
    if ($(this).is(':checked')) {
      dict[$(this).data('id')] = $(this).data('name');
      $selectedAmenities.text(Object.values(dict).join(', '));
    } else if ($(this).is(':not(:checked)')) {
      delete dict[$(this).data('id')];
      $selectedAmenities.text(Object.values(dict).join(', '));
    }
  });
});