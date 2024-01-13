const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const pictures = document.querySelector('.gallery');
const markup = images.map(imageTemplate).join('\n\n');
pictures.innerHTML = markup;

function imageTemplate(item) {
    const src = item.preview;
    const href = item.original;
    const alt = item.description;
    return `<li class = "gallery-item"><a class = "gallery-link" href = ${href} onclick="event.preventDefault()">
            <img class = "gallery-image" src = ${src} data-source = ${href} alt = ${alt} />
        </a>
    </li>`   
}

pictures.addEventListener("click", onImageClick);
function onImageClick(evt) {
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const source = evt.target.dataset.source;
  const alt = evt.target.getAttribute("alt");
  const instance = basicLightbox.create(`
  <div class = "modal">
  <img class = "modal-img" src = "${source}" alt = "${alt}"></img>
  </div>
  `,
    {
      closable: false,
      onShow: instance => {
        document.addEventListener("keydown", onEscapePress);
      },
      onClose: instance => {
        document.removeEventListener("keydown", onEscapePress);
      },
    }
)  ;
function onEscapePress(evt) {
  if (evt.code === "Escape") 
  instance.close();
}
instance.show();
}







// const result = imageTemplate({ 
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
//     description: "Hokkaido Flower",
// });
  
// console.log(result);


