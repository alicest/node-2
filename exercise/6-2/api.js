var url = require("url");
module.exports = function(request, response) {
    var pathname = url.parse(request.url).pathname;
    if(pathname === "/api/tips/") {
        response.writeHead(200,{
            "Content-Type":"application/json; charset=utf-8"
        });
        
        
        
        
        
        
        
        
    }
};