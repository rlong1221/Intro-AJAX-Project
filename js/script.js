
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    var address = $('#street').val() + ", " + $('#city').val();
    var str = '<img class="bgimg" src="http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + '">';
    console.log(str);

    $greeting.text('So, you want to live at ' + address + '?');
    $('body').append(str);

    return false;
};

$('#form-container').submit(loadData);


