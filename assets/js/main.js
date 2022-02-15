/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header")
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header")
  else header.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)

/*=============== SERVICES MODAL ===============*/
const scrollBox = document.querySelectorAll(".scrollBOx")
const modalViews = document.querySelectorAll(".work_modal"),
  modalBtns = document.querySelectorAll(".work__button"),
  modalClose = document.querySelectorAll(".work_modal-close")

var modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal")
}

modalBtns.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    modal(i)
    document.querySelector("body").style.overflow = "hidden"
  })
})

modalClose.forEach((mc) => {
  mc.addEventListener("click", () => {
    modalViews.forEach((mv) => {
      mv.classList.remove("active-modal")
      scrollBox.forEach((sb) => {
        sb.scrollTop = 0
      })
      document.querySelector("body").style.overflowY = "scroll"
    })
  })
})

function render(item) {
  let workCard = document.createElement("div")
  workCard.classList.add("work__card")
  workCard.setAttribute("data-ref", "item")
  let workImg = document.createElement("img")
  workImg.src = item.imgURL
  workImg.classList.add("work__img")
  let workTitle = document.createElement("h3")
  workTitle.classList.add("work__title")
  workTitle.textContent = item.name
  let h5 = document.createElement("h5")
  h5.textContent = item.type

  let workButton = document.createElement("a")
  workButton.classList.add("work__button")
  workButton.innerHTML = `See More <i class="bx bx-right-arrow-alt"></i>`

  let workModal = document.createElement("div")
  workModal.classList.add("work_modal")
  let workModalContent = document.createElement("div")
  workModalContent.classList.add("work_modal-content")
  let workModalClose = document.createElement("i")
  workModalClose.setAttribute("class", "bx bx-x work_modal-close")

  let workModalTitle = document.createElement("h3")
  workModalTitle.classList.add("work_modal-title")
  workModalTitle.textContent = item.name + " "

  let workA = document.createElement("a")
  workA.setAttribute("target", "_blank")
  workA.setAttribute("href", item.url)
  let redirect = document.createElement("img")
  redirect.src = "assets/img/export.png"
  redirect.width = 10
  redirect.alt = ""
  workA.append(redirect)
  workModalTitle.append(workA)

  let scrollBox = document.createElement("div")
  scrollBox.classList.add("scrollBOx")

  let workModalDescription = document.createElement("p")
  workModalDescription.classList.add("work_modal-description")
  workModalDescription.textContent = item.desc

  let stack = document.createElement("div")
  stack.classList.add("work__modal-heading")
  stack.textContent = "Stack"

  scrollBox.append(workModalDescription, stack)
  let workStack = document.createElement("div")
  workStack.classList.add("work__stack")

  let html = document.createElement("i")
  html.setAttribute("class", "bx bxl-html5 work__stack-icon html-icon")
  let css = document.createElement("i")
  css.setAttribute("class", "bx bxl-css3 work__stack-icon css-icon")
  let mongo = document.createElement("i")
  mongo.setAttribute("class", "bx bxs-leaf work__stack-icon mongo-icon")
  let javascript = document.createElement("i")
  javascript.setAttribute(
    "class",
    "bx bxl-javascript work__stack-icon javascript-icon"
  )
  let node = document.createElement("i")
  node.setAttribute("class", "bx bxl-nodejs work__stack-icon node-icon")
  let express = document.createElement("icon")
  express.setAttribute("class", "express-icon-2")
  express.textContent = "ex"

  let redux = document.createElement("i")
  redux.setAttribute("class", "bx bxl-redux work__stack-icon redux-icon")

  let bootstrap = document.createElement("i")
  bootstrap.setAttribute(
    "class",
    "bx bxl-bootstrap work__stack-icon bootstrap-icon"
  )

  let react = document.createElement("i")
  react.setAttribute("class", "bx bxl-react work__stack-icon react-icon")

  let tailwind = document.createElement("i")
  tailwind.setAttribute(
    "class",
    "bx bxl-tailwind-css work__stack-icon react-icon"
  )

  let dropbox = document.createElement("i")
  dropbox.setAttribute("class", "bx bxl-dropbox work__stack-icon dropbox-icon")

  let aws = document.createElement("i")
  aws.setAttribute("class", "bx bxl-aws work__stack-icon")

  let googleCloud = document.createElement("i")
  googleCloud.setAttribute(
    "class",
    "bx bxl-google-cloud work__stack-icon google-icon"
  )

  item.stack.forEach((icon) => {
    switch (icon) {
      case "html":
        workStack.append(html)
        break
      case "css":
        workStack.append(css)
        break
      case "javascript":
        workStack.append(javascript)
        break
      case "mongodb":
        workStack.append(mongo)
        break
      case "node":
        workStack.append(node)
        break
      case "react":
        workStack.append(react)
        break
      case "redux":
        workStack.append(redux)
        break
      case "bootstrap":
        workStack.append(bootstrap)
        break
      case "tailwind":
        workStack.append(tailwind)
        break
      case "aws":
        workStack.append(aws)
        break
      case "googleCloud":
        workStack.append(googleCloud)
        break
      case "dropbox":
        workStack.append(dropbox)
        break
      case "express":
        workStack.append(express)
        break
      default:
        break
    }
  })

  let workModalHeading = document.createElement("div")
  workModalHeading.classList.add("work__modal-heading")
  workModalHeading.textContent = "Features"

  let modalList = document.createElement("ul")
  modalList.classList.add("work__modal-list")

  item.features.forEach((feature) => {
    let workModalItem = document.createElement("li")
    workModalItem.classList.add("work__modal-item")

    let check = document.createElement("i")
    check.setAttribute("class", "bx bx-check work__modal-icon")

    let workModalInfo = document.createElement("p")
    workModalInfo.classList.add("work__modal-info")
    workModalInfo.textContent = feature

    workModalItem.append(check, workModalInfo)

    modalList.append(workModalItem)
  })

  let workModalHeading2 = document.createElement("div")
  workModalHeading2.classList.add("work__modal-heading")
  workModalHeading2.textContent = "Area of Responsibility"

  let modalList2 = document.createElement("ul")
  modalList2.classList.add("work__modal-list")

  item.responsibility.forEach((responsibilit) => {
    let workModalItem = document.createElement("li")
    workModalItem.classList.add("work__modal-item")

    let check = document.createElement("i")
    check.setAttribute("class", "bx bx-check work__modal-icon")

    let workModalInfo = document.createElement("p")
    workModalInfo.classList.add("work__modal-info")
    workModalInfo.textContent = responsibilit

    workModalItem.append(check, workModalInfo)

    modalList2.append(workModalItem)
  })

  let gitMain = document.createElement("div")
  gitMain.setAttribute(
    "style",
    "display: flex; align-items: center; margin-bottom: 2rem;"
  )

  let workModalHeading3 = document.createElement("span")
  workModalHeading3.classList.add("work__modal-heading")
  workModalHeading3.textContent = "Github Link"
  workModalHeading3.setAttribute("style", "margin-right: 15px")

  let span = document.createElement("span")

  let gitLink = document.createElement("a")
  gitLink.href = item.gitLink
  gitLink.classList.add("home__social-link")
  gitLink.target = "_blank"

  let repo = document.createElement("i")
  repo.setAttribute("class", "bx bx-git-repo-forked")

  gitLink.append(repo)

  span.append(gitLink)

  gitMain.append(workModalHeading3, span)

  let video = document.createElement("div")

  video.innerHTML = `<div style="padding-top: 56.25%; position: relative; overflow: hidden">
      <iframe
        frameborder="0"
        allowfullscreen=""
        scrolling="no"
        allow="autoplay;fullscreen"
        src="https://onelineplayer.com/player.html?autoplay=false&autopause=false&muted=false&loop=false&autopause=true&url=${item.video}%3Fraw%3D1&poster=&time=true&progressBar=true&overlay=true&muteButton=true&fullscreenButton=true&style=light&quality=auto&playButton=true"
        style="
          position: absolute;
          height: 100%;
          width: 100%;
          left: 0px;
          top: 0px;
        "
      ></iframe>
    </div>`

  scrollBox.append(
    workStack,
    workModalHeading,
    modalList,
    workModalHeading2,
    modalList2,
    gitMain,
    video
  )

  workModalContent.append(workModalClose, workModalTitle, scrollBox)

  workButton.addEventListener("click", () => {
    workModal.classList.add("active-modal")
    document.querySelector("body").style.overflow = "hidden"
  })

  workModalClose.addEventListener("click", () => {
    workModal.classList.remove("active-modal")
    document.querySelector("body").style.overflowY = "scroll"
  })

  workModal.append(workModalContent)

  workCard.append(workImg, workTitle, h5, workButton, workModal)
  return workCard
}

const container = document.querySelector('[data-ref="container"]')

const mixer = mixitup(container, {
  data: {
    uidKey: "_id",
  },
  render: {
    target: render,
  },
  selectors: {
    target: '[data-ref="item"]',
  },
})

async function renderData() {
  let response = await fetch("https://niteshkumarbaghel.herokuapp.com/projects")

  response = await response.json()

  let data = response

  document.getElementById("btn1").addEventListener("click", all)
  document.getElementById("btn2").addEventListener("click", big)
  document.getElementById("btn3").addEventListener("click", mini)

  function all() {
    mixer.dataset(data)
  }

  function big() {
    let items = data.filter((item) => {
      if (item.type === "Big Project") {
        return item
      }
    })
    mixer.dataset(items)
  }

  function mini() {
    let items = data.filter((item) => {
      if (item.type === "Mini Project") {
        return item
      }
    })
    mixer.dataset(items)
  }

  mixer.dataset(data)
}

renderData()

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
})

/* Link active work */

const linkwork = document.querySelectorAll(".work__item")

function activework() {
  linkwork.forEach((l) => l.classList.remove("active-work"))
  this.classList.add("active-work")
}

linkwork.forEach((l) => l.addEventListener("click", activework))

/*=============== SWIPER TESTIMONIAL ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]")

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id")

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link")
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link")
    }
  })
}
window.addEventListener("scroll", scrollActive)

/*=============== LIGHT DARK THEME ===============*/
const themeButton = document.getElementById("theme-button")
const lightTheme = "light-theme"
const iconTheme = "bx-sun"

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme")
const selectedIcon = localStorage.getItem("selected-icon")

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "dark" : "light"
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun"

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    lightTheme
  )
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  )
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the light / icon theme
  document.body.classList.toggle(lightTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme())
  localStorage.setItem("selected-icon", getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true
})

sr.reveal(".home__data")
sr.reveal(".home__handle", { delay: 700 })
sr.reveal(".home__social, .home__scroll", { delay: 900, origin: "bottom" })

function sendmail() {

  let name = document.getElementById("name")
  let email = document.getElementById("email")
  let message = document.getElementById("message")

  var templateParams = {
    name: name.value,
    email: email.value,
    message: message.value
  }

  emailjs
    .send(
      "service_1jk4zak",
      "template_pzavd1w",
      templateParams,
      "user_SNQszYvQjljZNGQjZZMi0"
    )
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text)
        alert("Success!")
      },
      function (error) {
        console.log("FAILED...", error)
        alert("Failed")
      }
    )
    name.innerText = ""
    email.innerText = ""
    message.innerText = ""

}
