document.addEventListener("click", e => {
  let cible
  if (e.target.matches("h3")) {
    cible = e.target
  }
  // if (e.target.matches("h3.active+div img")) {
  //   console.log("click on visible image")
  //   const image = e.target
  //   console.log(image)
  //   const parentH3 = image.closest('h3.active')
  //   console.log(parentH3)
  // }
  if (cible != null) {
    const allH3 = [...document.querySelectorAll("h3")]
    const index = allH3.indexOf(cible)

    document.querySelectorAll("h3").forEach(elem => {
      elem.classList.remove("active")
    })
    cible.classList.add("active")
  }
})
