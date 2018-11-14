$(function(){
  console.log('scripts loaded');

  var myKey = config.MY_KEY;
  var url = 'https://newsapi.org/v2/everything?q=vegan&from=2018-10-14&sortBy=publishedAt&apiKey=' + myKey;
  var data = [];
  var html = '';
  var articles = [];

  $.ajax({
    type: 'GET',
    url: url,
    dataType: 'json',
    async: true,
    data: data,
    success: function(data){
      console.log(data);
      var articles = data.articles;
      articles.forEach(function(article){
        console.log(article.title);
        html += '<div class="latest-news flex">';
          html += '<img class="thumbnail" src="' + article.urlToImage + '">';
          html += '<div class="text">';
            html += '<a href="' + article.url + '" target="_blank">';
            html += '<h2 class="headline">' + article.title + '</h2>';
            html += '<h4 class="byline">by ' + article.author + ', <em>' + article.source.name + '</em></h4></a>';
          html += '</div>';
        html += '</div>';
      });
      $('#results').html(html);
    }
  });
});
