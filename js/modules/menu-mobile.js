import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(menuButton, menulist, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menulist = document.querySelector(menulist);
    this.activeClass = "active";

    if (events === undefined) this.events = ["click", "touchstart"];
    else this.events = events;

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(e) {
    e.preventDefault();
    this.menulist.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(this.menulist, this.events, () => {
      this.menulist.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((e) =>
      this.menuButton.addEventListener(e, this.openMenu)
    );
  }

  init() {
    if (this.menuButton && this.menulist) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
