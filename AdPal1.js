/***********************************

> 应用名称：AdPal

[rewrite_local]
# > AdPal☆Pro
^https:\/\/tcb-api\.tencentcloudapi\.com\/web url script-response-body https://raw.githubusercontent.com/lost1lk/qua/refs/heads/main/AdPal1.js
[mitm] 

hostname=tcb-api.tencentcloudapi.com

***********************************/

console.log('$response',$response);


console.log('body',$response.body);


var obj = JSON.parse($response.body); 

if(obj.data){
  if(obj.data.response_data){
    if(obj.data.response_data.indexOf("pro")!= -1){
      obj.data.response_data= "{\"end\":4079388085330,\"pro\":true}"
    }
  }
}

$done({ body: JSON.stringify(obj) });
