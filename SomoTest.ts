function getRandomHtmlDocument() {
  const rdnDirection = 'https://en.wikipedia.org/wiki/Special:Random';
  
  return fetch(rdnDirection)
    .then(response => response.text())
    .then(data => data);
}

function parseRegex(re, str){
  return re.exec(str)[1];
}

function findTitle(htmlString){
  const re = /<title>(.+)<\/title>/;  
  return parseRegex(re, htmlString);
}

function findCategoriesInsideStr(htmlString){
  // The idea is to use a regex to get everything after "wgCategories" and from that parse an array or operate with the result as it is
  const re = /"wgCategories":\[([\D\d\s]*)"],/;
  return parseRegex(re, htmlString);
}

getRandomHtmlDocument().then(strHtml => {
  console.log(findTitle(strHtml));
  console.log(findCategoriesInsideStr(strHtml));
});
