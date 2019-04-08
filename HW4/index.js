let objectCalc = {
  results: '',
  value: '',
  check: {
    add: false,
    substitute: false,
    multiply: false,
    divide: false,
  },
  onChangeVariant: (item) => {
    const el = document.getElementsByClassName(item);
    console.log(el);
  },
  init: () => {
    const selectElement = document.getElementsByClassName('calc-select');
    console.log(selectElement);
    selectElement[0].addEventListener('change', event => {
      console.log(event);
    });
  },
  add: function () {
    this.check.add = true;
    this.updateValue();
    return objectCalc;
  },
  substitute: function () {
    this.check.substitute = true;
    this.updateValue();
    return objectCalc;
  },
  multiply: function () {
    this.check.multiply = true;
    this.updateValue();
    return objectCalc;
  },
  divide: function () {
    this.check.divide = true;
    this.updateValue();
    return objectCalc;
  },
  equal: function () {
    this.updateValue();
    console.log(this.results);
    document.getElementsByClassName('calc-item')[0].value = this.results;
    this.results = '';
    return objectCalc;
  },
  updateMathParams: function () {
    for (key in this.check) {
      this.check[key] = false;
    }
  },
  mathResults: function () {
    if (this.results) {
      if (this.check.add) {
        this.results = this.results + this.value;
      }
      if (this.check.divide) {
        this.results = this.results / this.value;
      }
      if (this.check.multiply) {
        this.results = this.results * this.value;
      }
      if (this.check.substitute) {
        this.results = this.results - this.value;
      }
    } else {
      this.results = this.value;
    }
    this.updateMathParams();
  },
  reset: function () {
    this.results = '';
    this.value = '';
    this.updateValue();
    return objectCalc;
  },
  updateValue: function () {
    document.getElementsByClassName('calc-item')[0].value = this.value;
  }
};

objectCalc.init();
