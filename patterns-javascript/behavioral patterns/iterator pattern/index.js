class Iterator {
  constructor(elements) {
    this.index = 0;
    this.elements = elements;
  }

  next() {
    return this.elements[this.index++];
  }

  hasNextElement() {
    return this.index <= this.elements.length;
  }

  first() {
    this.index = 0;
    return this.next();
  }
}


function iterate() {
  const items = ["Yellow", "Green", "Blue"];
  const iter = new Iterator(items);
  for (let i = iter.first(); iter.hasNextElement(); i = iter.next()) {
    console.log(i);
  }
}

iterate();