module.exports = function check(str, bracketsConfig) {

    var i=0;

    function bracketsConfig_id(str) {
        for (key in bracketsConfig){
            if(str==bracketsConfig[key][0]||str==bracketsConfig[key][1]){
                return bracketsConfig[key];
            }
        }
        return false;
    }

    while (str!=""){
        var buff=bracketsConfig_id(str[i]);

        if (buff){
            if (str[i]==buff[0]){
                if(str.length<i+2){
                    return false;
                }
                i++;
            }
            else{
                if(i>0){
                   if(buff[0]==str[i-1]){
                       if(1<=i) {
                           i--;
                           str = str.substr(0, i) + str.substr(i+2);

                       }
                       else {
                           str="";
                       }
                   }else return false;
                }
                else return false;
            }
        }else return false;

    }
    return true;
// your solution
}
