let activeH3

document.addEventListener("click", e => {
  if (e.target.matches("h3")) {
    activeH3 = e.target
    derouleImages()
  }
  if (e.target.matches("h3.active+div img")) {
    // console.log("click on visible image")
    enrouleImages()
  }

})

function derouleImages(){
  if (activeH3 != null) {
    const allH3 = [...document.querySelectorAll("h3")]
    const index = allH3.indexOf(activeH3)

    document.querySelectorAll("h3").forEach(elem => {
      elem.classList.remove("active")
    })
    activeH3.classList.add("active")
  }
}

function enrouleImages() {
  if (activeH3 != null) {
    activeH3.classList.remove("active")
  }
}


