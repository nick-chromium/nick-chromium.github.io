// JS file for csp-neterror-subframe.js

document.addEventListener("DOMContentLoaded", (e) => {
    document.getElementById('meta-tags').innerText = document.head.innerHTML;
    var i = document.createElement('iframe');
    i.sandbox = '';
    i.src = 'https://invalid.hostname.example.com/';
    document.body.append(i);
});
