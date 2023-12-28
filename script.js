data
 =[{
    'img1':'assets/Landingpage.png',
    'img2':'assets/register-page.png',
    'title':'Web E-commerce',
    'subtitle': 'Zenit',
    'desc':"Lorem ipsum dolorsit amet consectetur adipisicing elit, Quo accusantium exercitationem dicta, quia enim doloribus eveniet nam veritatis pariatur velit temporibus dignissimos eligendi sunt? Mollitia nemo quaerat reiciendis maxime"
}, {
    'img1':'assets/Landingpage.png',
    'img2':'assets/register-page.png',
    'title':'Web E-commerce',
    'subtitle': 'Zenit',
    'desc':"Lorem ipsum dolorsit amet consectetur adipisicing elit, Quo accusantium exercitationem dicta, quia enim doloribus eveniet nam veritatis pariatur velit temporibus dignissimos eligendi sunt? Mollitia nemo quaerat reiciendis maxime"
}]

var cntainer = document.querySelector('.contaner-project')

data.forEach(element => {
    container.innerHTML +=
    ` <div class="project">
    <div class="img-project">
        <img src="`+element.img1+`" alt="">
        <img src="${element.img2}" alt="">
    </div>
    <div class="desc-project">
        <h1>${element.title}</h1>
        <h2>${element.subtitle}</h2>
        <p>${element.desc}</p>
    </div>
    <button class="read-more">Read More</button>
</div>`

});

