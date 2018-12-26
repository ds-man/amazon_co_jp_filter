// ==UserScript==
// @name Amazon.co.jpしか信用しないフィルタ
// @namespace none
// @version 1.0
// @description amazon.co.jpの出品のみ表示するようにします
// @author ds.man
// @match *://*.amazon.co.jp/s/*
// @exclude *://*.amazon.co.jp/s/*&emi=AN1VRQENFRJN5
// @grant none
// ==/UserScript==

var current_url = document.location;
var new_url = current_url + "&emi=AN1VRQENFRJN5";
location.replace(new_url);