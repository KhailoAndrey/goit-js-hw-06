const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector('.gallery');
console.log(list);
list.classList.add('image-flex');

const createImages = ({url, alt}) => {
  return `<li><img src=${url} alt=${alt} width=320></li>`;
};
const arrImages = images.map(createImages).join('');
list.insertAdjacentHTML('beforeend', arrImages);


// const createImageEl = ({url, alt}) => {
//   const listItem = document.createElement('li');
//   console.log(listItem);
//   const imageItem = document.createElement('img');
//   imageItem.src = url;
//   imageItem.alt = alt;
//   imageItem.width = 320;
//   listItem.append(imageItem);
//   return listItem;
// }

// const listImages = images.map(createImageEl);
// list.append(...listImages);


