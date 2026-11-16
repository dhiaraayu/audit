function Utils(){this.baseUrl=null;this.assetUrl=null;this.arrayChunk=function(arr=[],size){var chunks=[];for(var i=0;i<arr.length;i+=size){var chunk=arr.slice(i,i+size);chunks.push(chunk);}
return chunks};this.setCookie=function(cname,cvalue,dateTime){var d=DateFormat.from(dateTime).proto
var expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";path=/";};this.getCookie=function(cname){var name=cname+"=";var decodedCookie=decodeURIComponent(document.cookie);var ca=decodedCookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1);}
if(c.indexOf(name)==0){return c.substring(name.length,c.length);}}
return"";};this.showNotifOnScroll=function(el,target){if($(el).html()){$(window).scroll(function(){if($(el).is(':visible')&&Utils.isInViewport($(el)[0])){$(target).show()}else{$(target).hide()}})}};this.isInViewport=function(element){var rect=element.getBoundingClientRect()
return rect.top<250}}