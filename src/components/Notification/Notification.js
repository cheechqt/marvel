import { ROOT_MODAL } from "../../constants/root.js";

import imgCloseBlack from "./img/close-black.svg";
import classes from "./Notification.css";

class Notification {

  render() {
    ROOT_MODAL.innerHTML = `
      <div class="${classes.notification__container}">
        <span class="${classes.notification__text}">Data not found :(</span>
        <button class="btn bg-contain ${classes.notification__btn}"
          onclick="modal.innerHTML = ''"
          style="background-image: url(${imgCloseBlack})"
        ></button>
      </div>
    `
  }
}

export default new Notification();