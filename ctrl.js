class Controls {
  constructor() {
    this.ahead = false;
    this.right = false;
    this.left = false;
    this.back = false;

    this.#addKeyboardListeners();
  }

  #addKeyboardListeners() {
    document.onkeydown = (event) => {
      switch (event.key) {
        case "a":
          this.left = true;
          break;
        case "d":
          this.right = true;
          break;
        case "w":
          this.ahead = true;
          break;
        case "s":
          this.back = true;
          break;
      }
      console.table(this);
    };

    document.onkeyup = (event) => {
      switch (event.key) {
        case "a":
          this.left = false;
          break;
        case "d":
          this.right = false;
          break;
        case "w":
          this.ahead = false;
          break;
        case "s":
          this.back = false;
          break;
      }
      console.table(this);
    };
  }
}
