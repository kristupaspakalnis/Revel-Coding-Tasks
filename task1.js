a = {
  "key1": 1,
  "key2":{
    "key3":1,
    "key4":{
      "key5":1
    }
}

var level = 1;
obwdepth = new Object();
function print_dpth_v2(object){
    var key;
    if(Object.keys(object).length != 0){
    for(key in object){
    console.log(key + " " + level)
        if(typeof object[key] == 'object'){
          obwdepth = object[key];
        }
    }
    level++;
    delete obwdepth[key];
    print_dpth_v2(obwdepth);
    }
}

print_dpth_v2(a);
