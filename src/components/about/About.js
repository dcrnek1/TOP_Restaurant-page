import './about.css';

export default function about () {
    const content = document.createElement("div");
    content.textContent = 'About content';
    content.classList.add("about");

    return content;
}