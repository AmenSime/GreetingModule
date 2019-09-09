
module.export= function User(name){

    var displayName = function(greeting){
    console.log(greeting+' '+name);
    }
    return displayName;
    }
   

