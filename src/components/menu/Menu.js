import './menu.css';

export default function menu () {
    const content = document.createElement("div");
    content.textContent = 'Menu content';
    content.classList.add("menu");

    return content;
}