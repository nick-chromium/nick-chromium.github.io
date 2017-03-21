// JS file for csp-neterror-subframe.js

document.getElementById('meta-tags').innerText = document.head.innerHTML;


var i = document.createElement('iframe');
i.src = 'https://invalid.hostname.example.com/';
document.body.append(i);
