import { IMG_STANDARD_XLARGE } from "../../constants/api.js";
import { ROOT_MODAL } from "../../constants/root";
import { getDataApi } from "../../utils/getDataApi";
import Notification from "../Notification"

import imgCloseWhite from "./img/close-black.svg"
import classes from "./Characters.css";

class Characters {

  renderContent(data) {
    let htmlContent = "";
    data.forEach(({ name, thumbnail: { path, extension } }) => {
      const imgSrc = path + '/' + IMG_STANDARD_XLARGE + '.' + extension;
      htmlContent += `
      <li class="${classes.characters__item}">
      <img class="img-contain ${classes.characters__img}" src="${imgSrc}" alt="char">
      <span class="${classes.characters__name}">${name}</span>
      </li>
    `;
    })


    ROOT_MODAL.innerHTML = `
    <div class="${classes.characters__container}">
        <ul class="${classes.characters__list}">
          ${htmlContent}
        </ul>
       <button class="btn bg-contain ${classes.characters__close}"
          onclick="modal.innerHTML = ''"
          style="background-image: url(${imgCloseWhite})"
        ></button>
    </div>

    `
  }

  async render(uri) {
    const data = await getDataApi.getData(uri);
    data.length ? this.renderContent(data) : Notification.render()
    // console.log(data);
    // console.log(imgCloseWhite);
  }
}

export default new Characters();