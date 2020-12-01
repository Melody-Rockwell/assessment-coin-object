let coin = {
  state: 0,
  flip: function () {
    /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    if (Math.random() < 0.5) {
      this.state = 1;
    } else {
      this.state = 0;
    }
  },
  toString: function () {
    if (this.state === 1) {
      return "Heads";
    } else {
      return "Tails";
    }
  },

  toHTML: function () {
    let image = document.createElement("img");

    if (this.state === 1) {
      image.src = "./images/quarter-front.jpg";
    } else {
      image.src = "./images/quarter-back.jpg";
    }
    return image;
  },
};

function display20Flips() {
  for (let i = 1; i <= 20; i++) {
    coin.flip();
    let li = document.createElement("li");
    li.innerHTML = coin.toString();
    document.body.append(li);
  }
}

function display20Image() {
  for (let i = 1; i <= 20; i++) {
    coin.flip();
    document.body.append(coin.toHTML());
  }
}
display20Flips();
display20Image();
