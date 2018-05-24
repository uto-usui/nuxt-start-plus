/**
 * ページデータ
 * @type {{spW: number, tabW: number, pcW: number, widescreenW: number, fullHdW: number, scrollTop: number, scrollLeft: number, init(): void, transitionEnd: string, animationEnd: string}}
 */
const DATA = {

  domain: '',
  spW: 320,
  tabW: 610,
  pcW: 768,
  widescreenW: 1024,
  fullHdW: 1440,
  scrollTop: 0,
  scrollLeft: 0,

  init() {

    let self = this;

    self.domain = (window.location.protocol + '//' + window.location.hostname) || 'http://movie.star-ch.jp',

    self.winW = window.innerWidth;
    self.winH = window.innerHeight;
    self.isMini = self.winW < self.spW;
    self.isSp = self.spW <= self.winW && self.winW <= self.tabW;
    self.isTab = self.tabW <= self.winW && self.winW <= self.pcW;
    self.isPc = self.winW >= self.pcW && self.winW <= self.widescreenW;
    self.isWidescreen = self.winW >= self.widescreenW && self.winW <= self.fullHdW;
    self.isFullHd = self.winW >= self.fullHdW;

    self.isDesktop = self.winW >= self.pcW;

    let resize = () => {

      self.winW = window.innerWidth;
      self.winH = window.innerHeight;
      self.isMini = self.winW <= self.spW;
      self.isSp = self.spW <= self.winW && self.winW <= self.tabW;
      self.isTab = self.tabW <= self.winW && self.winW <= self.pcW;
      self.isPc = self.winW >= self.pcW;
      self.isWidescreen = self.winW >= self.widescreenW && self.winW <= self.fullHdW;
      self.isFullHd = self.winW >= self.fullHdW;

      self.isDesktop = self.winW >= self.pcW;

    };
    resize();
    window.addEventListener('resize', resize);

    let scroll = () => {

      self.scrollTop = window.pageYOffset;

    };
    scroll();
    window.addEventListener('scroll', scroll);

  },
  transitionEnd: 'oTransitionEnd mozTransitionEnd webkitTransitionEnd transitionend',
  animationEnd: 'webkitAnimationEnd oanimationend msAnimationEnd animationend'

};

export default DATA;
