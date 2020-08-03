function urlSlug(title) {
    return title.split(/[\W\s]/).filter(word=>word!="").map(word=>word.toLowerCase()).join("-");
}
 
console.log(urlSlug(" Winter Is   Coming") );