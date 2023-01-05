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

let l_href = "Href: " + window.location.href;
let l_origin = "Origin: " + window.location.origin;
let l_protocol = "Protocol: " + window.location.protocol;
let l_host = "Host: " + window.location.host;
let l_hostname = "Host name: " + window.location.hostname;
let l_port = "Port: " + window.location.port;
let l_pathname = "Path name: " + window.location.pathname;
let l_search = "Search: " +  window.location.search;
let l_hash = "Hash: " + window.location.hash;

pre_content1.innerText = l_href;
pre_content2.innerText = l_origin;
pre_content3.innerText = l_protocol;
pre_content4.innerText = l_host;
pre_content5.innerText = l_hostname;
pre_content6.innerText = l_port;
pre_content7.innerText = l_pathname;
pre_content8.innerText = l_search;
pre_content9.innerText = l_hash;
pre_container.appendChild(pre_content1);
pre_container.appendChild(pre_content2);
pre_container.appendChild(pre_content3);
pre_container.appendChild(pre_content4);
pre_container.appendChild(pre_content5);
pre_container.appendChild(pre_content6);
pre_container.appendChild(pre_content7);
pre_container.appendChild(pre_content8);
pre_container.appendChild(pre_content9);


console.log(12);
// display all
root_element.appendChild(header_container);
root_element.appendChild(pre_container);

console.log(browser.webRequest.getSecurityInfo());



