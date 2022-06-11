const nav_links = document.querySelectorAll('.nav_link');

nav_links.forEach(link => {
    let section = link.href.split('#')[1];
    if(section == 'header')
        section = 'home';
    link.textContent = section;
})


// Show Menu 

const nav_menu = document.querySelector('#nav_menu');
const nav_toggle = document.querySelector('#nav_toggle');
const nav_close = document.querySelector('#nav_close');

if(nav_toggle)
    nav_toggle.addEventListener('click', () => {
        nav_menu.classList.add('show_menu');
    });

if(nav_close)
    nav_close.addEventListener('click', () => {
        nav_menu.classList.remove('show_menu');
    });

nav_menu.addEventListener('click', e => {
    if(e.target.classList.contains('nav_link'))
        nav_menu.classList.remove('show_menu');
}); 


// Header Bg Toggle 

const header = document.querySelector('#header');

let toggle_header_bg = function(){
    if(this.scrollY >= 50)
        header.classList.add('scroll_header');
    else 
        header.classList.remove("scroll_header");
}

window.addEventListener('scroll', toggle_header_bg);


// Popular Section Swiper 

let swiper = new Swiper(".popular_container", {
    loop: true, 
    spaceBetween: 24, 
    slidesPerView: 'auto',
    grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
    breakpoints: {
          768: {
            slidesPerView: 3,
          },
          1024: {
            spaceBetween: 48,
          },
    },
});


// Mixitup Init 

let mixer = mixitup('.featured_content', {
    selectors: {
        target: '.featured_card'
    },
    animation: {
        duration: 300
    }
});

const link_featured_items = document.querySelectorAll('.featured_item');

function active_featured() {
    link_featured_items.forEach(link => {
        link.classList.remove('active_featured');
    });
    this.classList.add('active_featured');
}

link_featured_items.forEach(link => {
    link.addEventListener('click', active_featured);
});


// Show Scroll Up Button 

const scroll_up = document.querySelector('#scroll_up');

let show_scroll_up = function() {
    if(this.scrollY >= 350){
        scroll_up.classList.add('show_scroll_up');
    } else {
        scroll_up.classList.remove('show_scroll_up');
    }
}

window.addEventListener('scroll', show_scroll_up);


// Active Menu Link Scroll

const sections = document.querySelectorAll('section[id]');

let scroll_active = function() {
    let scroll_y = this.pageYOffset;
    
    sections.forEach(section => {
        const section_id = section.getAttribute('id'),
              section_top = section.offsetTop - 58,
              section_height = section.offsetHeight;
        let link = document.querySelector(`.nav_menu a[href='#${section_id}']`);
        
        if(link){
            if(scroll_y >= section_top && scroll_y <= (section_top + section_height))
                link.classList.add('active_link');
            else 
                link.classList.remove('active_link');
        }
    });
}

window.addEventListener('scroll', scroll_active);
window.addEventListener('load', scroll_active);



// Scroll Reveal Animation 

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal(`.home_title, .popular_container, .features_img, .featured_filters`)
sr.reveal(`.home_subtitle`, {delay:500})
sr.reveal(`.home_elec`, {delay:600})
sr.reveal(`.home_img`, {delay:800})
sr.reveal(`.home_car_data`, {delay:900, interval: 100, origin: 'bottom'})
sr.reveal(`.home_button`, {delay:1000, origin: 'bottom'})
sr.reveal(`.about_group, .offer_data`, {origin: 'left'})
sr.reveal(`.about_data, .offer_img`, {origin: 'right'})
sr.reveal(`.features_map`, {delay: 600, origin: 'bottom'})
sr.reveal(`.features_card`, {interval: 300})
sr.reveal(`.featured_card, .logos_content, .footer_content`, {interval: 100})
