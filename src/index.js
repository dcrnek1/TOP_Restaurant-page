import './style.css';
import menu from './components/menu/Menu.js';
import about from './components/about/About.js';
import home from './components/home/Home.js';

class Content {
    constructor () {
        if (!Content.instance) {
            this.content = document.querySelector("#content");
            Content.instance = this;
        }
        return Content.instance;
    }

    load (page) {
        this.content.textContent = '';
        this.content.appendChild(page === "home" ? home() : page === "menu" ? menu() : page === "about" ? about() : home());
    }
};

const DOMactions = (() => {
    //initialize home content
    const content = new Content();
    content.load("home");

    document.querySelector("nav").addEventListener("click", (e) => {
        console.log(e.target.id === "home");
        content.load(e.target.id);
    });
})();