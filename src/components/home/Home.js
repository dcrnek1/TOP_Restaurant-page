import './home.css';

export default function home () {
    const content = document.createElement("div");
    content.textContent = 'Home content';
    content.classList.add("home");

    return content;
}