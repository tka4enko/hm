let objectCalc = {
    results:'',
    value:'',
    check:{
        add:false,
        substitute:false,
        multiply:false,
        divide:false,
    },
    zero:function() {
        objectCalc.value = 0;
        this.mathResults();
        this.updateValue();
        return objectCalc;
    },
    one:function() {
        objectCalc.value = 1;
        this.mathResults();
        this.updateValue();
        return objectCalc;
    },
    two:function() {
        objectCalc.value = 2;
        this.mathResults();
        this.updateValue();
        return objectCalc;
    },
    three:function(){
        objectCalc.value = 3;
        this.mathResults();
        this.updateValue();
        return objectCalc;
    },

    four:function() {
        objectCalc.value = 4;
        this.mathResults();
        this.updateValue();
        return objectCalc;
    },

    five:function(){
        objectCalc.value = 5;
        this.mathResults();
        this.updateValue();
        return objectCalc;
    },

    six:function() {
        objectCalc.value = 6;
        this.mathResults();
        this.updateValue();
        return objectCalc;
    },

    seven:function(){
        objectCalc.value = 7;
        this.mathResults();
        this.updateValue();
        return objectCalc;
    },

    eight:function() {
        objectCalc.value = 8;
        this.mathResults();
        this.updateValue();
        return objectCalc;
    },

    nine:function() {
        objectCalc.value = 9;
        this.mathResults();
        this.updateValue();
        return objectCalc;
    },

    add:function() {
        this.check.add = true;
        this.updateValue();
        return objectCalc;
    },
    substitute:function() {
        this.check.substitute = true;
        this.updateValue();
        return objectCalc;
    },
    multiply:function() {
        this.check.multiply = true;
        this.updateValue();
        return objectCalc;
    },

    divide:function() {
        this.check.divide =  true;
        this.updateValue();
        return objectCalc;
    },
    equal:function() {
        this.updateValue();
        console.log(this.results);
        document.getElementsByClassName('calc-item')[0].value = this.results;
        this.results = '';
        return objectCalc;
    },
    updateMathParams:function(){
        for (key in this.check ){
            this.check[key] = false;
        }
    },
    mathResults:function(){
        if (this.results){
            if (this.check.add){
                this.results = this.results + this.value;
            }
            if (this.check.divide){
                this.results = this.results /this.value;
            }
            if (this.check.multiply){
                this.results = this.results * this.value;
            }
            if (this.check.substitute){
                this.results = this.results - this.value;
            }
        }else{
            this.results = this.value;
        }
        this.updateMathParams();
    },
    reset:function() {
        this.results = '';
        this.value = '';
        this.updateValue();
        return objectCalc;
    },
    updateValue:function () {
        document.getElementsByClassName('calc-item')[0].value = this.value;
    }
};


// console.log(six().substitute().five().equal());
// // почему если передать objectCalc как параметр в функции то не находит методы в объекте
function zero(){
    objectCalc.results = 0;
    return objectCalc;
}
function one(){
    objectCalc.results = 1;
    return objectCalc;
}
function two(){
    objectCalc.results = 2;
    return objectCalc;
}
function three(){
    objectCalc.results = 3;
    return objectCalc;
}
function four(){
    objectCalc.results = 4;
    return objectCalc;
}
function five(){
    objectCalc.results = 5;
    return objectCalc;
}
function six(){
    objectCalc.results = 6;
    return objectCalc;
}
function seven(){
    objectCalc.results = 7;
    return objectCalc;
}
function eight(){
    objectCalc.results = 8;
    return objectCalc;
}
function nine(){
    objectCalc.results = 9;
    return objectCalc;
}