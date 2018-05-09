const Home = xtag.create('x-home', class extends XTagElement {

  name() {
    return 'Home page';
  }

  'main::template(true)' () {
    return `<h2>I am the ${this.name()}</h2>
            <span>I was created by x-tag</span>`
  }

  'heroselector::template' () {
    return `heroselector`
  }

});
