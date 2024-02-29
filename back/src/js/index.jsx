import { slide as Menu } from 'react-burger-menu'

class Example extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}

export default render();

// Popup
// const popup = document.querySelector(".popup");
// const closePopup = document.querySelector(".popup-close");

// if (popup) {
//   closePopup.addEventListener("click", () => {
//     popup.classList.add("hide-popup");
//   });

//   window.addEventListener("load", () => {
//     setTimeout(() => {
//       popup.classList.remove("hide-popup");
//     }, 1000);
//   });
// }
