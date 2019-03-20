let objectCalc = {
    results:'',
    zero:function() {
        objectCalc.results += "0";
        this.updateValue();
        return objectCalc;
    },
    one:function() {
        objectCalc.results += "1";
        this.updateValue();
        return objectCalc;
    },
    two:function() {
        objectCalc.results += "2";
        this.updateValue();
        return objectCalc;
    },

    three:function(){
        objectCalc.results += "3";
        this.updateValue();
        return objectCalc;
    },

    four:function() {
        objectCalc.results += "4";
        this.updateValue();
        return objectCalc;
    },

    five:function(){
        objectCalc.results += "5";
        this.updateValue();
        return objectCalc;
    },

    six:function() {
        objectCalc.results += "6";
        this.updateValue();
        return objectCalc;
    },

    seven:function(){
        objectCalc.results += "7";
        this.updateValue();
        return objectCalc;
    },

    eight:function() {
        objectCalc.results += "8";
        this.updateValue();
        return objectCalc;
    },

    nine:function() {
        objectCalc.results += "9";
        this.updateValue();
        return objectCalc;
    },

    add:function() {
        objectCalc.results += "+";
        this.updateValue();
        return objectCalc;
    },
    substitute:function() {
        objectCalc.results += "-";
        this.updateValue();
        return objectCalc;
    },
    multiply:function() {
        objectCalc.results += "*";
        this.updateValue();
        return objectCalc;
    },

    divide:function() {
        objectCalc.results += "/";
        this.updateValue();
        return objectCalc;
    },
    equal:function() {
        objectCalc.results = eval(this.results);
        this.updateValue();
        objectCalc.results = '';
        return objectCalc;
    },
    reset:function() {

        objectCalc.results = '';
        this.updateValue();
        return objectCalc;
    },
    updateValue:function () {
        document.getElementsByClassName('calc-item')[0].value = this.results;
    }
};


// console.log(six().substitute().five().equal());
// // почему если передать objectCalc как параметр в функции то не находит методы в объекте
function zero(){
    objectCalc.results += "0";
    return objectCalc;
}
function one(){
    objectCalc.results += "1";
    return objectCalc;
}
function two(){
    objectCalc.results += "2";
    return objectCalc;
}
function three(){
    objectCalc.results += "3";
    return objectCalc;
}
function four(){
    objectCalc.results += "4";
    return objectCalc;
}
function five(){
    objectCalc.results += "5";
    return objectCalc;
}
function six(){
    objectCalc.results += "6";
    return objectCalc;
}
function seven(){
    objectCalc.results += "7";
    return objectCalc;
}
function eight(){
    objectCalc.results += "8";
    return objectCalc;
}
function nine(){
    objectCalc.results += "9";
    return objectCalc;
}