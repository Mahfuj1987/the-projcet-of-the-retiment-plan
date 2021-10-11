const menu = [
{
    id: 1, 
    title: 'credit card',
    category: 'credit', 
    price: 15.99, 
    img:'./images/k3.jpg', 
    desc: `This is a butter milk pancakes and it is very sweetly and the finest one in the area. Any one want to make the taste of it are welcome to have to make the taste of the butter milk.`
},
{
    id: 2, 
    title: 'credit',
    category: 'credit', 
    price: 13.99, 
    img:'./images/k5.jpg', 
    desc: `This is a butter milk pancakes and it is very sweetly and the finest one in the area. Any one want to make the taste of it are welcome to have to make the taste of the butter milk.`
},
{
    id: 3, 
    title: 'debit',
    category: 'debit', 
    price: 11.99, 
    img:'./images/k1.jpg', 
    desc: `This is a butter milk pancakes and it is very sweetly and the finest one in the area. Any one want to make the taste of it are welcome to have to make the taste of the butter milk.`
},
{
    id: 4, 
    title: 'credit',
    category: 'debit', 
    price: 15.99, 
    img:'./images/k6.jpg', 
    desc: `This is a butter milk pancakes and it is very sweetly and the finest one in the area. Any one want to make the taste of it are welcome to have to make the taste of the butter milk.`
},
{
    id: 5, 
    title: 'debit card',
    category: 'debit', 
    price: 15.99, 
    img:'./images/k6.jpg', 
    desc: `This is a butter milk pancakes and it is very sweetly and the finest one in the area. Any one want to make the taste of it are welcome to have to make the taste of the butter milk.`
},
{
    id: 6, 
    title: 'credit card',
    category: 'american', 
    price: 15.99, 
    img:'./images/k5.jpg', 
    desc: `This is a butter milk pancakes and it is very sweetly and the finest one in the area. Any one want to make the taste of it are welcome to have to make the taste of the butter milk.`
},
{id: 7, 
title: 'credit card',
category: 'american', 
price: 15.99, 
img:'./images/k3.jpg', 
desc: `This is a butter milk pancakes and it is very sweetly and the finest one in the area. Any one want to make the taste of it are welcome to have to make the taste of the butter milk.`
},
{
id: 8, 
title: 'credit card',
category: 'american', 
price: 13.99, 
img:'./images/k5.jpg', 
desc: `This is a butter milk pancakes and it is very sweetly and the finest one in the area. Any one want to make the taste of it are welcome to have to make the taste of the butter milk.`
},
{
id: 9, 
title: 'credit card',
category: 'debit', 
price: 11.99, 
img:'./images/k1.jpg', 
desc: `This is a butter milk pancakes and it is very sweetly and the finest one in the area. Any one want to make the taste of it are welcome to have to make the taste of the butter milk.`
},
{
id: 10, 
title: 'credit card',
category: 'credit', 
price: 15.99, 
img:'./images/k6.jpg', 
desc: `This is a butter milk pancakes and it is very sweetly and the finest one in the area. Any one want to make the taste of it are welcome to have to make the taste of the butter milk.`
}, 
{id:11,
title:'debit card',
category:'debit',
price:18.88,
img:'./images/k2.jpg', 
desc: `This is the main card system of the core hundred and the gossip of the find of the fundamental approach and the assignment of the procastanation is the very bad of the maintain and the gloming burning of the sociaty na is the crew of the close is the main is the cursive is one kind of font which is used in the instead of the montez of the immensive of the brew and the gamic burninsh is the desierble`
},
];
const theMenuSection = document.querySelector('.the-menu-section');
const filterBtns = document.querySelectorAll('.filter-btn');
// load items
window.addEventListener('DOMContentLoaded', function(){
   displayMenuItems(menu);
});
// filter items
filterBtns.forEach(function(btn){
    btn.addEventListener('click',function(e){
      const category =  e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function(menuItems){
          return menuItems;
      });
      console.log(menuCategory)
    });
});


function displayMenuItems (menuItems){
    let displayMenu = menuItems.map(function(item){
        return ` <div class="the-menu-content">
        <img src=${item.img} alt=${item.title}>
        <div class="item-name-price">
            <h3>${item.title}</h3>
            <h3 class="price-right">${item.price}</h3>
            <span class="underline"></span>
        </div>
        <div class="menu-description">
            ${item.desc}
        </div>
    </div>`;
    })
    displayMenu = displayMenu.join('');
    theMenuSection.innerHTML = displayMenu;
}