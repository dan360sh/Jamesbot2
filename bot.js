const https = require('https');
const http = require('http');
const fs = require('fs');
const ACCESS_TOKEN = "ab0fa41f76b82962c161ebf5a86e94c405159405111217aaa8363b960033ad530687207cb35ee0c5ce61b";
var METHOD_NAME = "groups.invite";//"friends.add";
var  PARAMETERS = "group_id=31333866&user_id=443496175";//"user_id=147983777";
var inquiry  =  "https://api.vk.com/method/"+METHOD_NAME+"?"+PARAMETERS+"&access_token="+ACCESS_TOKEN+"&v=5.69";

	https.get(inquiry, (res)=>{ 
      res.setEncoding('utf-8');
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
         
         console.log(rawData);
	  });
	}); 
	http.createServer((req,res)=>{
        res.end('hello');
}).listen(3000, ()=>console.log('Сервер работает')) 
