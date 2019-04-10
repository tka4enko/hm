let objectCalc = {
  results: '',
  value: '',
  check: {
    add: false,
    substitute: false,
    multiply: false,
    divide: false,
    percent: false,
    squareroot: false,
    x2:false,
    x16: false
  },
  onChangeVariant: function (item) {
    const selectElement = document.getElementsByClassName(item);
    selectElement[0].addEventListener('change', event => {
      const val = event.target.value;
      let args = [];
      if (val === 'programmer') {
        args = [
          {
            className: 'x2',
            title: 'x2'
          },
          {
            className: 'x16',
            title: 'x16'
          },
          {
            className: 'equal',
            title: '='
          }
        ];
      }
      if (val === 'math') {
        args = [
          {
            className: 'percent',
            title: '%'
          },
          {
            className: 'squareroot',
            title: 'Square root'
          },
          {
            className: 'equal',
            title: '='
          }

        ];
      }
      if (val === 'standart') {
        args = [
          {
            className: 'add',
            title: '+'
          },
          {
            className: 'substitute',
            title: '-'
          },
          {
            className: 'multiply',
            title: '*'
          },
          {
            className: 'divide',
            title: '/'
          },
          {
            className: 'equal',
            title: '='
          }
        ];

      }
      this.createTemplate(args);
    });
  },
  actionOnOptions: function (el) {
    const clickElement = document.getElementsByClassName(el);
    clickElement[0].addEventListener('click', event => {
      const target = event.target;
      this[target.className]()
    });
  },
  onClick: function (el) {
    const clickElement = document.getElementsByClassName(el);
    clickElement[0].addEventListener('click', event => {
      const target = event.target;
      this.value += target.innerHTML;
      this.updateValue();
    });
  },
  init: function () {
    this.onChangeVariant('calc-select');
    this.actionOnOptions('calc-math');
    this.onClick('calc-list');
  },
  createTemplate: function (args) {
    let calcElemtnt = document.getElementsByClassName('calc-math')[0];
    calcElemtnt.innerHTML = '';
    args.map((item, index) => {
      let listItem = document.createElement("li");
      let newButton = document.createElement("a");
      listItem.appendChild(newButton);
      newButton.setAttribute('class', item.className);
      newButton.setAttribute('href', '#');
      let buttonContent = document.createTextNode(item.title);
      newButton.appendChild(buttonContent);
      calcElemtnt.appendChild(listItem);
    });
  },
  add: function () {
    this.check.add = true;
    this.mathResults();
    this.updateValue(this.results);
    return objectCalc;
  },
  substitute: function () {
    this.check.substitute = true;
    this.mathResults();
    this.updateValue(this.results);
    return objectCalc;
  },
  multiply: function () {
    this.check.multiply = true;
    this.mathResults();
    this.updateValue(this.results);
    return objectCalc;
  },
  divide: function () {
    this.check.divide = true;
    this.mathResults();
    this.updateValue(this.results);
    return objectCalc;
  },
  x2: function () {
    this.check.x2 = true;
    this.mathResults();
    this.updateValue(this.results);
    return objectCalc;
  },
  x16: function () {
    this.check.x16 = true;
    this.mathResults();
    this.updateValue(this.results);
    return objectCalc;
  },
  percent: function () {
    this.check.percent = true;
    this.mathResults();
    this.updateValue(this.results);
    return objectCalc;
  },
  squareroot: function () {
    this.check.squareroot = true;
    this.mathResults();
    this.updateValue(this.results);
    return objectCalc;
  },
  equal: function () {
    console.log(this.results);
    this.mathResults();
    document.getElementsByClassName('calc-item')[0].value = this.results;
    return objectCalc;
  },
  updateMathParams: function () {
    for (key in this.check) {
      this.check[key] = false;
    }
  },
  mathResults: function () {
    if (this.check.squareroot) {
      this.results = Math.sqrt(this.results ? this.results : this.value);
      this.updateMathParams();
      this.value = '';
    }
    if (this.check.x2) {
      this.results = parseInt(this.value, 10).toString(2);
      this.updateMathParams();
      this.value = '';
    }
    if (this.check.x16) {
      if (this.value < 10){
        this.results = 'value should be more 10';
      }else{
        this.results = parseInt(this.value, 10).toString(16);
      }
      this.updateMathParams();
      this.value = '';
    }
    if (this.results) {
      if (this.check.add && this.value) {
        this.results = parseInt(this.results) + parseInt(this.value);
        this.updateMathParams();
        this.value = '';
      }
      if (this.check.divide && this.value) {
        this.results = parseInt(this.results) / parseInt(this.value);
        this.updateMathParams();
        this.value = '';
      }
      if (this.check.multiply && this.value) {
        this.results = this.results * this.value;
        this.updateMathParams();
        this.value = '';
      }
      if (this.check.substitute) {
        this.results = this.results - this.value;
        this.updateMathParams();
        this.value = '';
        console.log(this);
      }
      if (this.check.percent) {
        this.results = ((this.value/100) * this.results).toFixed(2);
        this.updateMathParams();
        this.value = '';
        console.log(this);
      }
    } else {
      this.results = this.value;
      this.value = '';
    }
    this.updateValue(this.results);
  },
  reset: function () {
    this.results = '';
    this.value = '';
    this.updateValue();
    return objectCalc;
  },
  updateValue: function (result) {
    if (result === 0) {
      result = '0';
    }
    document.getElementsByClassName('calc-item')[0].value = result ? result : this.value;
  }
};

objectCalc.init();
