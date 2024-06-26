document.addEventListener("DOMContentLoaded", function () {
  var navItems = document.querySelectorAll(".nav-item")
  navItems.forEach(function (item) {
    item.addEventListener("click", function () {
      if (!this.classList.contains("active")) {
        navItems.forEach(function (navItem) {
          navItem.classList.remove("active")
        })
      }
      this.classList.add("active")

      //id

      //   var clickedItemId = this.id
      //   window.history.pushState({}, "", "#" + clickedItemId)
      //   console.log("Clicked:", clickedItemId)
    })
  })
})

window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY
  var heroWrap = document.querySelector(".hero-wrap")
  // อัปเดตค่า background-position ตามการสครอลล์
  heroWrap.style.backgroundPosition = `50% ${0.5 * scrollPosition - 101.188}px`
})

document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("opacity-show")
        entry.target.classList.add("translateTop")
        entry.target.classList.add(`delay-${index + 1}`)
        return
      }
      // entry.target.classList.remove("square-transition")
    })
  })
  const show_item_circle = document.querySelectorAll(".container-list-item")
  show_item_circle.forEach((element) => observer.observe(element))

  const observerListnumber = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("list-number")
        entry.target.classList.add(`delay-${index + 1}`)
      }
    })
  })

  const list_number = document.querySelectorAll(".list-number")
  list_number.forEach((e) => observerListnumber.observe(e))

  const authorObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      console.log(entry , 'entry')
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-hide")
        entry.target.classList.remove("move-down")
      }
    })
  })
  const show_item_author = document.querySelectorAll(".author-container")
  show_item_author.forEach((element) => authorObserver.observe(element))

  // console.log(show_item_author, "show_item_author")
})

function addCommas(nStr) {
  nStr += ""
  x = nStr.split(".")
  x1 = x[0]
  x2 = x.length > 1 ? "." + x[1] : ""
  var rgx = /(\d+)(\d{3})/
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1" + "," + "$2")
  }
  return x1 + x2
}

function animateValue(element, start, end, duration) {
  let obj = document.getElementById(element)
  let startTimestamp = null
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp
    const progress = Math.min((timestamp - startTimestamp) / duration, 1)
    obj.innerHTML = addCommas(Math.floor(progress * (end - start) + start))
    if (progress < 1) {
      window.requestAnimationFrame(step)
    }
  }
  window.requestAnimationFrame(step)
}

document.addEventListener("DOMContentLoaded", function () {
  animateValue("active-reader", 0, 75678, 3000)
  animateValue("total-pages", 0, 3040, 3000)
  animateValue("cup", 0, 283, 3000)
  animateValue("fans", 0, 14500, 3000)
})
