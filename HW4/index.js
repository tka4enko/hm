let objectCalc = {
  results: '',
  value: '',
  check: {
    add: false,
    substitute: false,
    multiply: false,
    divide: false,
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
          }
        ];

      }
      this.createTemplate(args);
    });
  },
  onClick: function (el) {
    const clickElement = document.getElementsByClassName(el);
    clickElement[0].addEventListener('click', event => {
     const target = event.target;
      this[target.className]()
    });
  },
  init: function () {
    this.onChangeVariant('calc-select');
    this.onClick('calc-math');
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
  x2: function () {
    console.log('x2 ok1111');
    this.check.x2 = true;
    this.updateValue();
    return objectCalc;
  },
  x16: function () {
    console.log('x16 ok1111');
    this.check.x16 = true;
    this.updateValue();
    return objectCalc;
  },
  percent: function () {
    console.log('percent ok1111');
    this.check.x16 = true;
    this.updateValue();
    return objectCalc;
  },
  squareroot: function () {
    console.log('squareroot ok1111');
    this.check.x16 = true;
    this.updateValue();
    return objectCalc;
  },
  add: function () {
    console.log('add ok1111');
    this.check.add = true;
    this.updateValue();
    return objectCalc;
  },
  substitute: function () {
    console.log('substitute ok1111');
    this.check.substitute = true;
    this.updateValue();
    this.updateValue();
    return objectCalc;
  },
  multiply: function () {
    console.log('multiply ok1111');
    this.check.multiply = true;
    this.updateValue();
    return objectCalc;
  },
  divide: function () {
    this.check.divide = true;
    console.log('divide ok1111');
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
