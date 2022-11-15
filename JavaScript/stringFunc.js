const name = 'Manish';
const greeting = 'Good Morning';
console.log(greeting +' '+name);

var html;
html = "<h1>this is heading</h1>"+
        "<p>this is para</p>";
console.log(html);

html = html.concat('This',' str2');
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html);
console.log(html[1]);
console.log(html.indexOf('h1'));
console.log(html.indexOf('hawfe'));
console.log(html.lastIndexOf('<'));
console.log(html.charAt('3'));
console.log(html.endsWith('p>'))
console.log(html.includes('this'))
console.log(html.includes('strsf'))
console.log(html.substring(0,6));
console.log(html.slice(-6));
console.log(html.slice(0,6));
console.log(html.split('>'))
console.log(html.replace('this','it'))

// For this you have to create 1 html file and give something(ex - <h1>) to body and integrate this using script tag then the content of body tag will be replaced by below code
let fruit1 = 'Orange';
let fruit2 = 'Apple';

let myHmtl=`Hello ${name}
            <h1> This is Data is added.</h1>
            <p>You Like ${fruit1} and ${fruit2}
            `;
document.body.innerHTML = myHmtl;