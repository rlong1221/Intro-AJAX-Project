
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // Google Street View Image
    var street = $('#street').val();
    var city = $('#city').val();
    var address = street + ", " + city;

    var str = '<img class="bgimg" src="http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + '">';
    console.log(str);

    $greeting.text('So, you want to live at ' + address + '?');
    $('body').append(str);

    // New York Times AJAX request
    // 9a35467a80126078f3dcc84a11257def:2:72463603

    var nytKey = '9a35467a80126078f3dcc84a11257def:2:72463603';
    var nytRespFormat = 'json';
    var nytSearchTerms = city;
    var nytSort = '&sort=newest&'
    var nytAPI = 'http://api.nytimes.com/svc/search/v2/articlesearch.' + nytRespFormat + '?q=' + nytSearchTerms + nytSort + 
        '&api-key=' + nytKey;
    
    $.getJSON(nytAPI, function(data) {
        $nytHeaderElem.text('New York Times Articles About ' + city);
        articles = data.response.docs;
        for (var i = 0; i < articles.length; i++) {
            var article = articles[i];
            $nytElem.append('<li class="article"><a href="' + article.web_url + '">' + article.headline.main + '</a><p>' + 
                article.snippet + '</p></li>');
        }
        console.log("for loop");
    })

    return false;
};

$('#form-container').submit(loadData);


