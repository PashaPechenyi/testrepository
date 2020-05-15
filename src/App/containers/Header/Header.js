import React, { Component } from "react";
import "./Header.scss";

const active_menuItems_forDesktop = [
  // обьект зависимостей пунтков меню и блоков кода html по селектору (parentsSelector)
  {
    parentsSelector: ".about",
    menuItem: "About Me",
  },
  {
    parentsSelector: ".relationships",
    menuItem: "Relationship",
  },
  {
    parentsSelector: ".requirements",
    menuItem: "Requirements",
  },
  {
    parentsSelector: ".users",
    menuItem: "Users",
  },
  {
    parentsSelector: ".signUp",
    menuItem: "Sign Up",
  },
];

const active_menuItems_forMobile = [
  {
    parentsSelector: ".about",
    menuItem: "About Me",
  },
  {
    parentsSelector: ".relationships",
    menuItem: "Relationships",
  },

  {
    parentsSelector: ".users",
    menuItem: "Users",
  },
  {
    parentsSelector: ".signUp",
    menuItem: "Sign Up",
  },
  {
    parentsSelector: ".requirements",
    menuItem: "Terms and Conditions",
  },
];

export class Header extends Component {
  componentWillMount() {
    window.addEventListener("scroll", this.scrollWrapper);
  }

  a = () => {};

  scrollWrapper() {
    makeMenuItemActive(active_menuItems_forDesktop, ".desktop_nav a"); //для меню пк
    makeMenuItemActive(active_menuItems_forMobile, ".headerForMobile>nav a"); // для меню планшетов и моб. устройств

    function makeMenuItemActive(active_menuItems, navSelector) {
      /* функция для добавления активного класса  "active_link" пунтку меню (по селектору- navSelector)
                если соответсвующий блок html находиться по центру окна */
      let centerX = document.documentElement.clientWidth / 2;
      let centerY = document.documentElement.clientHeight / 2;
      let elem = document.elementFromPoint(centerX, centerY);
      for (let { parentsSelector, menuItem } of active_menuItems) {
        if (!elem.closest(parentsSelector)) continue; // проверяем в каком из блоков находиться ел по центру окна
        let items = document.body.querySelectorAll(navSelector);
        for (let item of items) {
          if (
            item.textContent.toLowerCase().trim() ===
            menuItem.toLowerCase().trim()
          ) {
            item.classList.add("active_link");
          } else {
            item.classList.remove("active_link");
          }
        }
        break;
      }
    }
  }

  showMenu() {
    let menu = document.body.querySelector(".headerForMobile>nav");
    menu.classList.toggle("displayN");
    let opacity = document.body.querySelector(".opacity");
    opacity.classList.toggle("displayN");
    document.body.classList.toggle("htmlBody");
  }

  render() {
    return (
      <header className="header">
        <div className="container header_container">
          <div className="header_inner">
            <div className="logo">
              <img src={require("../../../images/logo.svg")} alt="logo" />
            </div>

            <nav className="desktop_nav">
              <ul>
                <li>
                  <a href="#about" className="active_link">
                    About me
                  </a>
                </li>
                <li>
                  <a href="#relationship">Relationship</a>
                </li>
                <li>
                  <a href="#signUp">Requirements</a>
                </li>
                <li>
                  <a href="#users">Users</a>
                </li>
                <li>
                  <a href="#signUp">Sign Up</a>
                </li>
              </ul>
            </nav>

            <div className="headerForMobile" onClick={this.showMenu}>
              <div className="icon_menu">
                <img
                  src={require("../../../images/menu icon.svg")}
                  alt="menu"
                />
              </div>

              <nav className="displayN">
                <ul>
                  <li>
                    <a href="about" className="active_link">
                      About Me
                    </a>
                  </li>
                  <li>
                    <a href="#relationship">Relationships</a>
                  </li>
                  <li>
                    <a href="#users">Users</a>
                  </li>
                  <li>
                    <a href="#signUp">Sign Up</a>
                  </li>
                  <li>
                    <a href="#signUp">Terms and Conditions</a>
                  </li>
                  <li>
                    <a href="#signUp">How it works</a>
                  </li>
                  <li>
                    <a href="#signUp">Partnerships</a>
                  </li>
                  <li>
                    <a href="#signUp">Help</a>
                  </li>
                  <li>
                    <a href="#signUp">Leave testimonial</a>
                  </li>
                  <li>
                    <a href="#signUp">Contact us</a>
                  </li>
                  <li>
                    <a href="#signUp">Articles</a>
                  </li>
                  <li>
                    <a href="#signUp">Our news</a>
                  </li>
                  <li>
                    <a href="#signUp">Testimonials</a>
                  </li>
                  <li>
                    <a href="#signUp">Licenses</a>
                  </li>
                  <li>
                    <a href="#signUp">Privacy Policy</a>
                  </li>
                </ul>
              </nav>

              <div className="opacity displayN"></div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
