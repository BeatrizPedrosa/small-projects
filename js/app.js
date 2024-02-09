//HEX
if (window.location.href.includes("ColorFlipper")) {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
    const btn = document.getElementById('btn')
    const color = document.querySelector(".color")
    const textColor = document.querySelector('.color')

    window.addEventListener('DOMContentLoaded',function(){
        textColor.style.color = '#F1F5F8'
    })

    btn.addEventListener('click', function(){
    let hexColor = '#'
    for (let i = 0; i < 6; i++ ){
        hexColor += hex[getRandomNumber()]
    }
    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor
    document.body.style.color = hexColor
    textColor.style.color = hexColor
    })

    function getRandomNumber(){
        return Math.floor(Math.random()*hex.length);
    }
}

//COUNT
else if (window.location.href.includes("Counter")) {
    let count = 0

    const value = document.querySelector('#value')
    const btns = document.querySelectorAll(".btn-counter")
    
    btns.forEach(function(btn){
        btn.addEventListener('click', function(e){
            const styles = e.currentTarget.classList
            if (styles.contains("decrease")){
                count--
            }
            else if (styles.contains("increase")){
                count++
            }
            else{
                count = 0
            }
            if (count > 0) {
                value.style.color = "green"
            }
            if (count < 0) {
                value.style.color = "red"
            }
            if (count === 0) {
                value.style.color = "#222"
            }
            value.textContent = count
        })
    })
}

//REVIEWS
else if (window.location.href.includes("Reviews")) {
    const reviews = [
        {
          id: 1,
          name: 'susan smith',
          job: 'web developer',
          img: 'https://www.course-api.com/images/people/person-1.jpeg',
          text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        },
        {
          id: 2,
          name: 'anna johnson',
          job: 'web designer',
          img: 'https://www.course-api.com/images/people/person-2.jpeg',
          text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
        },
        {
          id: 3,
          name: 'peter jones',
          job: 'intern',
          img: 'https://www.course-api.com/images/people/person-4.jpeg',
          text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
        },
        {
          id: 4,
          name: 'bill anderson',
          job: 'the boss',
          img: 'https://www.course-api.com/images/people/person-3.jpeg',
          text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
        },
      ]
    
    const img=document.getElementById('person-img')
    const author=document.getElementById('author')
    const job=document.getElementById('job')
    const info=document.getElementById('info')
    
    const prevBtn = document.querySelector('.prev-btn')
    const nextBtn = document.querySelector('.next-btn')
    const randomBtn = document.querySelector('.random-btn')
    
    let currentItem = 0
    let oldNumber = null
    
    window.addEventListener('DOMContentLoaded',function(){
        ShowPerson()
    })
    
    function ShowPerson(){
        const item = reviews[currentItem]
        img.src = item.img
        author.textContent = item.name
        job.textContent = item.job
        info.textContent = item.text
    }
    
    nextBtn.addEventListener('click',function(){
        currentItem++
        if (currentItem > reviews.length-1){
            currentItem = 0
        }
        ShowPerson()
    })
    
    prevBtn.addEventListener('click',function(){
        currentItem--
        if (currentItem < 0){
            currentItem = reviews.length-1
        }ShowPerson()
    })
    
    randomBtn.addEventListener('click',function(){
        currentItem=getRandomNumber()
        ShowPerson()
    })
    
    function getRandomNumber(){
        let newNumber = Math.floor(Math.random()*reviews.length)
        while (newNumber === oldNumber) {
            newNumber = Math.floor(Math.random()*reviews.length)
        }
        oldNumber = newNumber
        return newNumber
    }
}

//MODAL
else if (window.location.href.includes("Modal")) {
    const openModal = document.querySelector('.modal-btn')
    const closeModal = document.querySelector('.closeModal-btn')
    const modalOverlay = document.querySelector('.modal-overlay')

    openModal.addEventListener('click', function(){
        modalOverlay.classList.toggle('open-modal')
    })

    closeModal.addEventListener('click',function(){
        modalOverlay.classList.remove('open-modal')
    })
}

//QUESTIONS
else if (window.location.href.includes("Questions")) {
    const questions = document.querySelectorAll('.question')
    questions.forEach(function(question){
        const btn = question.querySelector('.question-btn')
        btn.addEventListener('click',function(){
            questions.forEach(function(item){
                if (item !== question){
                    item.classList.remove('show-text')
                }
            })
            question.classList.toggle('show-text')
        })
    })
}

//MENU
else if (window.location.href.includes("Menu")) {
    const menu = [
        {
            id: 1,
            title: "buttermilk pancakes",
            category: "breakfast",
            price: 15.99,
            img: "/imgs/item-1.jpeg",
            desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        },
        {
            id: 2,
            title: "diner double",
            category: "lunch",
            price: 13.99,
            img: "/imgs/item-2.jpeg",
            desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
        },
        {
            id: 3,
            title: "godzilla milkshake",
            category: "shakes",
            price: 6.99,
            img: "/imgs/item-3.jpeg",
            desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
        },
        {
            id: 4,
            title: "country delight",
            category: "breakfast",
            price: 20.99,
            img: "/imgs/item-4.jpeg",
            desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
        },
        {
            id: 5,
            title: "egg attack",
            category: "lunch",
            price: 22.99,
            img: "/imgs/item-5.jpeg",
            desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
        },
        {
            id: 6,
            title: "oreo dream",
            category: "shakes",
            price: 18.99,
            img: "/imgs/item-6.jpeg",
            desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
        },
        {
            id: 7,
            title: "bacon overflow",
            category: "breakfast",
            price: 8.99,
            img: "/imgs/item-7.jpeg",
            desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
        },
        {
            id: 8,
            title: "american classic",
            category: "lunch",
            price: 12.99,
            img: "/imgs/item-8.jpeg",
            desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
        },
        {
            id: 9,
            title: "quarantine buddy",
            category: "shakes",
            price: 16.99,
            img: "/imgs/item-9.jpeg",
            desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
        },
        {
            id: 10,
            title: "steak dinner",
            category: "dinner",
            price: 52.99,
            img: "/imgs/item-10.jpeg",
            desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
        }
    ]
    
    const SectionCenter = document.querySelector('.section-center')
    const btnContainer = document.querySelector('.btn-container')
    
    window.addEventListener('DOMContentLoaded',function(){
        displayMenuItems(menu)
        displayMenuButtons()
    })
    

    function displayMenuItems(menuItems){
        let displayMenu = menuItems.map(function(item){
            
            return `
            <article class="menu-item">
                    <img src="${item.img}" alt=${item.title} class="photo" />
                    <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">$${item.price}</h4>
                    </header>
                    <p class="item-text">${item.desc}</p>
                    </div>
                </article>
            `
        })
        displayMenu = displayMenu.join("")
        SectionCenter.innerHTML = displayMenu
    }

    function displayMenuButtons(){
        const categories = menu.reduce(function(values,item){
            if(!values.includes(item.category)){
                values.push(item.category)    
            }
            return values
        },['all'])
        const categoryBtn = categories.map(function(category){
            return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
        }).join("")
        
        btnContainer.innerHTML = categoryBtn
        const filterBtns = document.querySelectorAll('.filter-btn')
        filterBtns.forEach(function(btn){
            btn.addEventListener('click',function(e){
                const category = e.currentTarget.dataset.id
                const menuCategory = menu.filter(function(menuItem){
                    if (menuItem.category === category) {
                        return menuItem
                    }
                    
                })
                if (category === 'all'){
                    displayMenuItems(menu)   
                } else {
                    displayMenuItems(menuCategory)
                }
                
            })
        })
    }
}

//VIDEO
else if (window.location.href.includes("Video")) {
    const btn = document.querySelector(".switch-btn")
    const video = document.querySelector(".video-container")

    btn.addEventListener('click',function(){
        if(!btn.classList.contains('slide')){
            btn.classList.add('slide')
            video.pause()
        }
        else {
            btn.classList.remove('slide')
            video.play()
        }
    })

    const preloader = document.querySelector(".preloader")
    window.addEventListener('load',function(){
        preloader.classList.add('hide-preloader')
    })
}