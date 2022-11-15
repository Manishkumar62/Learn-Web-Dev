var n = document.links.length;
console.log("No. of links = "+n)
for (let i = 0; i < n ; i++) {
    let b = document.links[i].href
    if(b.includes('google')){
        console.log(b)
    }  
    if(b.includes('facebook')){
        console.log(b)
    }  
}
var n = document.images.length;
console.log("No. of images = "+n)
for (let i = 0; i < n ; i++) {
    let b = document.images[i].alt
    if(b.includes('Img')){
        console.log("alt of image "+(i+1)+" is "+b)
    } 
}
var n = document.scripts.length;
console.log("No. of script tag included in this html = "+n)
for (let i = 0; i < n ; i++) {
    let b = document.scripts[i].src
    if(b.includes('js')){
        console.log("src of script tag "+b)
    } 
}
console.log("The title of this html is " + document.title)
