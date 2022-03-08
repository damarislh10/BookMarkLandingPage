let btnSimple = document.getElementById("simpleBook");
let container = document.getElementById("container-par2");
let btnSpeedy = document.getElementById("speedy");
let btnEasy = document.getElementById("easy");
let imgLogo = document.querySelector(".img-logo");

let btnNavMobile = document.getElementById("menu-nav");
let containerNav = document.getElementById("container-mobile");

btnSimple.addEventListener("click", () => {
  btnSimple.style.borderBottom = "3px solid hsl(0, 94%, 66%)";
  btnSpeedy.style.borderBottom = "none";
  btnEasy.style.borderBottom = "none";

  btnSimple.style.fontWeight = "bold";
  btnSpeedy.style.fontWeight = "120";
  btnEasy.style.fontWeight = "120";

  btnSimple.style.paddingBottom = "6.5%";

  container.innerHTML = `
    <div class=" row-2">
      <div class="col s6">
        <div class="bg-f2">
        <img class="img-instruc img-simple" src="images/illustration-features-tab-1.svg" alt="">
      </div>
      </div>

      <div class="col s5 col-2">
        <h3>Bookmark in one click</h3>
        <p> Organize your bookmarks however you like. Our simple drag-and-drop interface 
          gives you complete control over how you manage your favourite sites.</p>
          <a class="waves-effect waves-light btn btn-simple btn-chrome">More Info</a>

        </div>
    </div>
    `;
});

btnSpeedy.addEventListener("click", () => {
  btnSpeedy.style.borderBottom = "3px solid hsl(0, 94%, 66%)";
  btnSimple.style.borderBottom = "none";
  btnEasy.style.borderBottom = "none";

  btnSpeedy.style.fontWeight = "bold";
  btnSimple.style.fontWeight = "120";
  btnEasy.style.fontWeight = "120";

  btnSpeedy.style.paddingBottom = "7.5%";

  container.innerHTML = `
    <div class=" row-2">
      <div class="col s6">
        <div class="bg-f2">
        <img class="img-instruc" src="images/illustration-features-tab-2.svg" alt="">
      </div>
      </div>

      <div class="col s5 col-2">
        <h3>Intelligent search</h3>
        <p>
        Our powerful search feature will help you find saved sites in no time at all. 
        No need to trawl through all of your bookmarks.</p>
          <a class="waves-effect waves-light btn btn-simple btn-chrome">More Info</a>

        </div>
    </div>
    `;
});

btnEasy.addEventListener("click", () => {
  btnEasy.style.borderBottom = "3px solid hsl(0, 94%, 66%)";
  btnSimple.style.borderBottom = "none";
  btnSpeedy.style.borderBottom = "none";

  btnEasy.style.fontWeight = "bold";
  btnSimple.style.fontWeight = "120";
  btnSpeedy.style.fontWeight = "120";

  btnEasy.style.paddingBottom = "9%";

  container.innerHTML = `
    <div class=" row-2">
      <div class="col s6">
        <div class="bg-f2">
        <img class="img-instruc" src="images/illustration-features-tab-3.svg" alt="">
      </div>
      </div>

      <div class="col s5 col-2">
        <h3>Share your bookmarks</h3>
        <p>
        Easily share your bookmarks and collections with others. Create a shareable 
        link that you can send at the click of a button.</p>
          <a  class="waves-effect waves-light btn btn-simple btn-chrome">More Info</a>

        </div>
    </div>
    `;
});

$(".pregunta").on("click", function () {
  // Si la pregunta en la que se hizo click NO está abierta.
  if (!$("#" + $(this).data("resp_id")).hasClass("resp_act")) {
    // Cierro la que esté abierta, si es que hay alguna
    $(".ico_resp").removeClass("ico_resp_act");
    $(".resp_act").css("height", 0);
    $(".resp_act").removeClass("resp_act");
    // Abro la pregunta en la que se hizo click
    $("#" + $(this).data("resp_id")).css(
      "height",
      $("#sp_" + $(this).data("resp_id")).height() + "px"
    );
    $("#" + $(this).data("resp_id")).addClass("resp_act");
    $("i", this).addClass("ico_resp_act");
    // Si no, si la pregunta ya está abierla
  } else {
    // La cierro
    $(".ico_resp").removeClass("ico_resp_act");
    $(".resp_act").css("height", 0);
    $(".resp_act").removeClass("resp_act");
  }
});

const menuMobile = () => {
  btnNavMobile.addEventListener("click", () => {
    imgLogo.style.display = "none";

    containerNav.innerHTML = `
 
    <div class="nav-wrapper container-nav" id="nave-mobile">
      <ul id="nav-mobile" class="nav-mobile">
      <img class="img-logo logo-mobile" src="images/logo-bookmark copy 2.svg" alt="logo">
      <button id="close-mobile"><img src="images/icon-close.svg" alt=""></button>  
      <hr class="line-hr">  
        <li class="li-nav li-mobile-1"><a href="#features">FEATURES</a></li>
        <li class="li-nav li-mobile-2"><a href="#">PRICING</a></li>
        <li class="li-nav li-mobile-3"><a href="#">CONTACT</a></li>
        <li class="li-nav li-mobile-4" id="login-2"><a href="#">LOGIN</a></li>

        <ul class="red-social red-soci-mobile text-lighten-4 right">
        <li class="li-social li-social-1"><img src="images/icon-facebook.svg" alt=""></li>
        <li class="li-social li-social-2"><img src="images/icon-twitter.svg" alt=""></li>
      </ul>
      </ul>

  </div>
 
    `;
    closeNavMobile();
  });
};

menuMobile();

const closeNavMobile = () => {
  let navContain = document.getElementById("container-mobile");
  let closeMobile = document.getElementById("close-mobile");

  closeMobile.addEventListener("click", () => {
    let containerFoMobile = document.getElementById("nave-mobile");
    containerFoMobile.style.display = "none";
    navContain.innerHTML = `
    <div class="nav-wrapper container-nav" id="nave-mobile">
    <img class="img-logo" src="images/logo-bookmark.svg" alt="logo">

    <button id="menu-nav"><a href="#nave-mobile"><img src="images/icon-hamburger.svg" alt=""></a></button>
    </div>
    `;
    location.reload();
  });
};

// fomulario
const enviadoDato = () => {
  const $form = document.getElementById("form");
  const $buttonEnv = document.getElementById("correo-env");
  $form.addEventListener("submit", handleSubmit);

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(this);
    $buttonEnv.setAttribute(
      "href",
      `mailto:newsletter@gmail.com?subject=${form.get(
        "email"
      )}&body="Enviado correctamente el correo"`
    );
    $buttonEnv.click();
  }
};

let contacto = document.getElementById("contact");
let validation = document.getElementById("validation");

contacto.addEventListener("click", () => {
  let email = document.getElementById("input-email").value;
  let iconError = document.getElementById("icon-error");
  let styleEmail = document.getElementById("input-email");

  if (email.includes("@" && ".")) {
    validation.style.display = "none";
    iconError.style.display = "none";
    styleEmail.style.border = "none";

    enviadoDato();
    
  } else if (email == " ") {
    styleEmail.style.border = " 2px solid hsl(0, 94%, 66%)";
    iconError.style.display = "block";
    iconError.style.position = "absolute";

    validation.innerHTML = "";
    validation.innerHTML = `
    <label id="response" for=""><span style="color: #fff; background-color: hsl(0, 94%, 66%);">Whoops, make sure it's an email</span></label>
    `;
  } else {
    styleEmail.style.border = " 2px solid hsl(0, 94%, 66%)";
    iconError.style.display = "block";
    iconError.style.position = "absolute";

    validation.innerHTML = "";
    validation.innerHTML = `
    <label id="response" for=""><span style="color: #fff; background-color: hsl(0, 94%, 66%);">Whoops, make sure it's an email</span></label>
    `;
  }
});
