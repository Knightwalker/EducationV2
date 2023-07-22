var tracker = 0;
var callMe = function() {
    tracker++;
    if (tracker === 3) {
        return "loops!";
    } 
    return callMe("anytime");
}
callMe();