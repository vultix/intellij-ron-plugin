var Email={send:function(e){return new Promise(function(n,t){e.nocache=Math.floor(1e6*Math.random()+1),e.Action="Send";var o=JSON.stringify(e);Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?",o,function(e){n(e)})})},ajaxPost:function(e,n,t){var o=Email.createCORSRequest("POST",e);o.setRequestHeader("Content-type","application/x-www-form-urlencoded"),o.onload=function(){null!=t&&t(o.responseText)},o.send(n)},ajax:function(e,n){var t=Email.createCORSRequest("GET",e);t.onload=function(){null!=n&&n(t.responseText)},t.send()},createCORSRequest:function(e,n){var t=new XMLHttpRequest;return"withCredentials"in t?t.open(e,n,!0):"undefined"!=typeof XDomainRequest?(t=new XDomainRequest).open(e,n):t=null,t}};
//# sourceMappingURL=scripts.373b22382d2c0765d880.js.map