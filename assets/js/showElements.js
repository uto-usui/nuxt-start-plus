/**
 *
 */
class showElements {

  constructor(targets, option, callbackIn) {

    this.targets = [...document.querySelectorAll(targets)];
    this.windowH = window.innerHeight;
    this.scrollY = 0;
    this.offsetTop = [];
    this.height = [];
    this.show = [];
    this.value = [];
    this.offset = option.offset || 100;
    this.backDisable = option.back === false;

    this.callbackIn = typeof callbackIn === 'function' ? callbackIn : () => {};

    this.getItem();
    this.init();

    return this;

  }


  init() {

    window.addEventListener('scroll', () => {

      this.scrollY = window.pageYOffset;
      this.check();

    });

    this.check();

  }

  getItem() {

    this.targets.forEach((el, i) => {

        let rect = el.getBoundingClientRect();

      this.offsetTop[i] = rect.top;
      this.height[i] = el.offsetHeight;

    });

  }

  check() {

    this.targets.forEach((el, i) => {

      if (this.backDisable) {

        this.show[i] = (this.scrollY + this.windowH > this.offsetTop[i] + this.offset);

      } else {

        this.show[i] = (this.scrollY + this.windowH > this.offsetTop[i] + this.offset) && (this.scrollY < this.offsetTop[i] - this.offset + this.height[i]);

      }

      this.value[i] = this.scrollY + this.windowH - this.offsetTop[i] - this.offset;

      if (this.show[i]) {

        el.classList.add('is-show');
        this.callbackIn.call(this, el, i);

      } else {

        el.classList.remove('is-show');

      }

    });

  }

}

export default showElements;
