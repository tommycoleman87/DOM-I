const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

//NAV content
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


let navA = document.querySelectorAll('a');


navA[0].textContent = siteContent['nav']['nav-item-1'];
navA[0].style.color = 'green';
navA[1].textContent = siteContent['nav']['nav-item-2'];
navA[1].style.color = 'green';
navA[2].textContent = siteContent['nav']['nav-item-3'];
navA[2].style.color = 'green';
navA[3].textContent = siteContent['nav']['nav-item-4'];
navA[3].style.color = 'green';
navA[4].textContent = siteContent['nav']['nav-item-5'];
navA[4].style.color = 'green';
navA[5].textContent = siteContent['nav']['nav-item-6'];
navA[5].style.color = 'green';
//CTA content
let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

let cta = document.querySelector('.cta-text');

ctaBtn = cta.querySelector('button');
ctaBtn.textContent = siteContent['cta']['button'];

ctaHeader = cta.querySelector('h1');
ctaHeader.textContent = siteContent['cta']['h1'];
//top content
let topContent = document.querySelector('.top-content');

let topHeaders = topContent.querySelectorAll('h4');
let topPara = topContent.querySelectorAll('p');

topHeaders[0].textContent = siteContent['main-content']['features-h4'];
topPara[0].textContent = siteContent['main-content']['features-content'];

topHeaders[1].textContent = siteContent['main-content']['about-h4'];
topPara[1].textContent = siteContent['main-content']['about-content'];

//Middle image
let middleImg = document.querySelector('.middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

//Bottom Content
let btmContent = document.querySelector('.bottom-content');

let btmHeaders = btmContent.querySelectorAll('h4');
let btmPara = btmContent.querySelectorAll('p');

btmHeaders[0].textContent = siteContent['main-content']['services-h4'];
btmPara[0].textContent = siteContent['main-content']['services-content'];

btmHeaders[1].textContent = siteContent['main-content']['product-h4'];
btmPara[1].textContent = siteContent['main-content']['product-content'];

btmHeaders[2].textContent = siteContent['main-content']['vision-h4'];
btmPara[2].textContent = siteContent['main-content']['vision-content'];

//Contact
let contact = document.querySelector('.contact');

let contactHeader = contact.querySelector('h4');
let contactPara = contact.querySelectorAll('p');

contactHeader.textContent = siteContent['contact']['contact-h4'];
contactPara[0].textContent = siteContent['contact']['address'];
contactPara[1].textContent = siteContent['contact']['phone'];
contactPara[2].textContent = siteContent['contact']['email'];

//Footer
let footer = document.querySelector('footer');
let footerPara = footer.querySelector('p');

footerPara.textContent = siteContent['footer']['copyright'];





