document.title = "Grid Images"

const body = document.body
const div = document.createElement("div")
div.classList.add("container")


const div1 = document.createElement("div")
div1.classList.add("card1")

const div2 = document.createElement("div")
div2.classList.add("card2")

const div3 = document.createElement("div")
div3.classList.add("card3")

const div4 = document.createElement("div")
div4.classList.add("card4")

const div5 = document.createElement("div")
div5.classList.add("card5")

const div6 = document.createElement("div")
div6.classList.add("card6")

const img1 = document.createElement("img")
img1.setAttribute("src", "https://img.freepik.com/premium-photo/artist-man-with-paint-splash-her-head-creativity-3d-rendering_691560-3441.jpg")

const img2 = document.createElement("img")
img2.setAttribute("src", "https://img.freepik.com/premium-photo/painting-woman-with-feathers-her-head_867653-7.jpg?size=626&ext=jpg&ga=GA1.1.916383691.1684271260&semt=ais")

const img3 = document.createElement("img")
img3.setAttribute("src", "https://img.freepik.com/premium-photo/woman-s-face-is-made-up-geometric-shapes-cyberpunk-colorful-fractalism-cubism_834088-1.jpg?size=626&ext=jpg")

const img4 = document.createElement("img")
img4.setAttribute("src", "https://img.freepik.com/premium-photo/black-smiling-girl-modern-rainbow-art-style-ai-generated-image_532963-7293.jpg?size=626&ext=jpg&ga=GA1.1.916383691.1684271260&semt=ais")

const img5 = document.createElement("img")
img5.setAttribute("src", "https://img.freepik.com/free-photo/beautiful-vintage-collage-composition_23-2149479775.jpg?size=626&ext=jpg&ga=GA1.1.916383691.1684271260&semt=ais")

const img6 = document.createElement("img")
img6.setAttribute("src", "https://img.freepik.com/premium-photo/black-person-face-with-braids-white-forest-background_816702-46.jpg?size=626&ext=jpg&ga=GA1.1.916383691.1684271260&semt=ais")

body.append(div)
div.append(div1, div2, div3, div4, div5, div6)

div1.append(img1)
div2.append(img2)
div3.append(img3)
div4.append(img4)
div5.append(img5)
div6.append(img6) 