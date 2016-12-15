var jsonfile = require('jsonfile');
var file='./server/json/news.json';
var request = require('request');
var shuffles=require('./provider/shuffleprovider.js');
var obj;
 
var newssites=[' https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=3e22f2fcc1344975ae2b2e69379e2a6e',
'https://newsapi.org/v1/articles?source=the-huffington-post&sortBy=top&apiKey=3e22f2fcc1344975ae2b2e69379e2a6e',
' https://newsapi.org/v1/articles?source=the-hindu&sortBy=top&apiKey=3e22f2fcc1344975ae2b2e69379e2a6e',
'https://newsapi.org/v1/articles?source=reuters&sortBy=top&apiKey=3e22f2fcc1344975ae2b2e69379e2a6e',
'https://newsapi.org/v1/articles?source=reddit-r-all&sortBy=top&apiKey=3e22f2fcc1344975ae2b2e69379e2a6e',
'https://newsapi.org/v1/articles?source=sky-news&sortBy=top&apiKey=3e22f2fcc1344975ae2b2e69379e2a6e',
'https://newsapi.org/v1/articles?source=mirror&sortBy=top&apiKey=3e22f2fcc1344975ae2b2e69379e2a6e',
'https://newsapi.org/v1/articles?source=metro&sortBy=top&apiKey=3e22f2fcc1344975ae2b2e69379e2a6e',
'https://newsapi.org/v1/articles?source=focus&sortBy=top&apiKey=3e22f2fcc1344975ae2b2e69379e2a6e',
'https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=3e22f2fcc1344975ae2b2e69379e2a6e',
'https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=3e22f2fcc1344975ae2b2e69379e2a6e',
'https://newsapi.org/v1/articles?source=associated-press&sortBy=top&apiKey=3e22f2fcc1344975ae2b2e69379e2a6e',
'https://newsapi.org/v1/articles?source=abc-news-au&sortBy=top&apiKey=3e22f2fcc1344975ae2b2e69379e2a6e'

]

var data=[];
var articles=[];

newssites.forEach(function(url)
{
request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {

    data.push(JSON.parse(body));

   for(let i=0;i<data.length;i++)
     {
       data[i].articles.forEach(function(array)
       {
            array.source=data[i].source
       }
       )

     articles=articles.concat(data[i].articles);
     }

     articles=shuffles.doShuffle(articles);

  jsonfile.writeFile(file,articles, function (err) {
  console.error(err)
   })
  }
})
})

