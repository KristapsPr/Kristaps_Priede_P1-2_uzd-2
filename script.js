const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menu-button");
const sideMenu = document.getElementById("side-menu");
const navButtons = document.querySelectorAll(".nav-btn");
const pages = document.querySelectorAll(".page");

menuBtn.addEventListener("click", () => {
  sideMenu.classList.toggle("visible");
});

navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-section");

    pages.forEach(page => {
      page.classList.toggle("active", page.id === target);
    });

    sideMenu.classList.remove("visible");
  });
});

const hitCounterElement = document.getElementById("hit-counter");
const namespace = "mana-majaslapa";
const key = "apmeklejumi";
const url = `https://api.countapi.xyz/hit/${namespace}/${key}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    if (hitCounterElement) {
      hitCounterElement.textContent = data.value;
    }
  })
  .catch(error => {
    console.error("Neizdevās ielādēt apmeklējumu skaitu:", error);
    if (hitCounterElement) {
      hitCounterElement.textContent = "nav dati";
    }
  });

const profileImageURL = "https://i.imgur.com/5qH6F3G.jpeg";
const imageBox = document.getElementById("profile-image-box");

if (imageBox) {
  const img = document.createElement("img");
  img.src = profileImageURL;
  img.alt = "Mans attēls";
  img.className = "profile-img";
  imageBox.appendChild(img);
}

const interests = [
  {
    name: "Riteņbraukšana",
    image: "https://cdn.discordapp.com/attachments/1156863746120097874/1384434599018500168/Snapchat-1644752588.jpg?ex=68526ab1&is=68511931&hm=8ab4f43fed52110c8b45e0ce83abd5d532dc51e3575671378b10c4e6a8a955b5&",
    description: "Man patīk braukt ar riteni gan pa pilsētu, gan dabā. Tas ir labs veids, kā uzturēt formu un izbaudīt dabu."
  },
  {
    name: "Spēles",
    image: "https://cdn.discordapp.com/attachments/1156863746120097874/1384434100810682461/20250605_155821.jpg?ex=68526a3b&is=685118bb&hm=073cb6ae5ac2c0d5af3f7ef5ca74c77903b49c0f41c4bfc01b8c1ecf24f36613&", 
    description: "Spēlēju dažādas videospēles un galda spēles brīvajā laikā. Īpaši patīk multiplayer spēles ar draugiem."
  },
  {
    name: "Sports",
    image: "https://cdn.discordapp.com/attachments/1156863746120097874/1384433559732748351/Snapchat-510803833.jpg?ex=685269ba&is=6851183a&hm=7323e1e96d844639bb6a85ae00a09673871c7ce8723aed02763828fedebc15ca&",
    description: "Izbaudu sekot līdzi un skatīties dažādus sporta veidus kā arī dažbrīd pats nodarbojos ar sportu."
  }
];

const interestGrid = document.querySelector('.interest-grid');
if (interestGrid) {
  interestGrid.innerHTML = '';

  interests.forEach(interest => {
    const interestItem = document.createElement('div');
    interestItem.className = 'interest-item';

    interestItem.innerHTML = `
      <img src="${interest.image}" alt="${interest.name}" onerror="this.src='https://via.placeholder.com/300x200?text=${encodeURIComponent(interest.name)}'">
      <h3>${interest.name}</h3>
      <p class="interest-description">${interest.description}</p>
    `;

    interestGrid.appendChild(interestItem);
  });
}

const galleryImages = [
  "https://cdn.discordapp.com/attachments/1156863746120097874/1384423068859891752/Snapchat-946344648.jpg?ex=68525ff4&is=68510e74&hm=af2f2a8c517973d71f060d261181401214c5475cd21e18c3dfa956ceeb08dade&",
  "https://cdn.discordapp.com/attachments/1156863746120097874/1384423068448981023/IMG-20250525-WA0021.jpg?ex=68525ff4&is=68510e74&hm=40f40c65143ee5f14c07ee523a9b5a738854360215b74befe4550de98b7bdf4c&", 
  "https://cdn.discordapp.com/attachments/1156863746120097874/1384423068184875018/IMG-20250525-WA0062.jpg?ex=68525ff4&is=68510e74&hm=7472792a4aea9138b0f953ba0fde5a4f778fb222b58f896515826adbf406230e&",
  "https://cdn.discordapp.com/attachments/1156863746120097874/1384423062640001177/20250605_164213.jpg?ex=68525ff3&is=68510e73&hm=84bf3f618f4fbc77ed07ce4ce023b8cffca93568e15b97fc5a1d805dcdd6492a&",
  "https://cdn.discordapp.com/attachments/1156863746120097874/1384423913127411833/Snapchat-1681593239.jpg?ex=685260be&is=68510f3e&hm=ecf6e28298cbe1115e7f4b9a107ae636e927ade613e7a9dfcbd3afa851e23720&",
  "https://cdn.discordapp.com/attachments/1156863746120097874/1384423912632221826/20250610_1632030.jpg?ex=685260be&is=68510f3e&hm=e89a24782f2d34be546af5dd84fc95aa7f50ebc7b4761f56cf08286ebd40f60c&"
];

const galleryContainer = document.getElementById("gallery-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

if (galleryContainer) {
  galleryImages.forEach((imageUrl, index) => {
    const galleryItem = document.createElement("div");
    galleryItem.className = "gallery-item";

    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = `Galerijas attēls ${index + 1}`;

    img.onerror = () => {
      img.src = "https://via.placeholder.com/200x150?text=Attēls+nav+pieejams";
    };

    galleryItem.appendChild(img);
    galleryContainer.appendChild(galleryItem);
  });
}

if (prevBtn && nextBtn && galleryContainer) {
  prevBtn.addEventListener("click", () => {
    galleryContainer.scrollBy({ left: -320, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    galleryContainer.scrollBy({ left: 320, behavior: "smooth" });
  });
}