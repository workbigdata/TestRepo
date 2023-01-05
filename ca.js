var root_element = document.getElementById("body_content");

let title_header = "Read CA from client";

var header_container = document.createElement("p");

header_container.innerText = title_header;

// href
var pre_container = document.createElement("pre");
var pre_content1 = document.createElement("p");
var pre_content2 = document.createElement("p");
var pre_content3 = document.createElement("p");
var pre_content4 = document.createElement("p");
var pre_content5 = document.createElement("p");
var pre_content6 = document.createElement("p");
var pre_content7 = document.createElement("p");
var pre_content8 = document.createElement("p");
var pre_content9 = document.createElement("p");

pre_content1.innerText = "Href: " + window.location.href;
pre_content2.innerText = "Origin: " + window.location.origin;
pre_content3.innerText = "Protocol: " + window.location.protocol;
pre_content4.innerText = "Host: " + window.location.host;
pre_content5.innerText = "Host name: " + window.location.hostname;
pre_content6.innerText = "Port: " + window.location.port;
pre_content7.innerText = "Path name: " + window.location.pathname;
pre_content8.innerText = "Search: " + window.location.search;
pre_content9.innerText = "Hash: " + window.location.hash;

pre_container.appendChild(pre_content1);
pre_container.appendChild(pre_content2);
pre_container.appendChild(pre_content3);
pre_container.appendChild(pre_content4);
pre_container.appendChild(pre_content5);
pre_container.appendChild(pre_content6);
pre_container.appendChild(pre_content7);
pre_container.appendChild(pre_content8);
pre_container.appendChild(pre_content9);

// display all
root_element.appendChild(header_container);
root_element.appendChild(pre_container);