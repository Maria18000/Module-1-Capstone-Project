// menu

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  // document.body.style.overflow = 'auto';
}));

const speakerArray = [
  {
    image: 'images/speaker2.jpg',
    name: 'Maria Hussain',
    text: 'Owner and Founder',
    description: 'Maria Hussain is the owner of Ark Travellers. She has been travelling for 5 yaers and have been to more than 40 countries. She wanted to provide the opportunities to Pakistanis and give them the comfort they need during travelling by making the processes easy and providing splendid services',
  },
  {
    image: 'images/speaker1.jpg',
    name: 'Talha Hussain',
    text: 'Co-founder',
    description: 'Talha has a travelling experience of 4 years. He co-founded this company with Maria and also funded the projects. All the internation trips are also funded by Talha',
  },
  {
    image: 'images/speaker3.jpg',
    name: 'Beenish Khan',
    text: 'Manager',
    description: 'Beenish is the Manager of the groups. She takes care of the girls-only trips and make sure that they do not face any issues',
  },
  {
    image: 'images/speaker4.jpg',
    name: 'Javaria Bangash',
    text: 'HR Manager',
    description: 'Javaria is the HR manager of ARk Traveller. To enusure the safety of the clients, a monthly audit is done of every staff member including the CEO.',
  },
  {
    image: 'images/speaker5.jpg',
    name: 'Asma Iqbal',
    text: 'Chef',
    description: 'Asma has 10 years experience in cooking. We take her with every trip so our clients can eat the homemade food even at camping spots.',
  },
  {
    image: 'images/speaker6.jpg',
    name: 'Ali Khan',
    text: 'Guide',
    description: 'With 8 years experince in guiding, Ali Khan is the expert when it comes to exploring. He is very good tracker and knows teh history of places. He also entertains teh clients by adding humour to his words and is the heart of our team',
  },
];

const cardss = document.querySelector('.speaker-container');
speakerArray.forEach((c) => {
  const card = document.createElement('div');

  card.innerHTML = (`
  <div class="speaker-main">
  <div class="speaker-left">
  <img class = "speaker-image" src="${c.image}" alt=" Image ">
  </div>
<div class="speaker-right">
  <h2 class="heading"> ${c.name}</h2>
  <p class="text">${c.text}</p>
  <div class="speaker-divider-menu"></div>
  <p class="description">${c.description}</p>
</div>
</div>
  `);

  cardss.appendChild(card);
});
