import './style.css';
import img from './images/homejuice.jpg';
import clearDrink from './images/cleardrink.jpg';

const landingPage = (()=>{

    const content = document.querySelector('#content')

    const start = ()=> {
        displayHeader();
        displayContentBody();
        displayMenu();
    }

    // just displays header
    const displayHeader = ()=>{
        const header = document.createElement('div');
        header.classList.add('header')
        content.appendChild(header);

        const logo = document.createElement('div');
        logo.classList.add('logo')
        logo.textContent = 'Fresh-oFF-da-Juice';
        header.appendChild(logo);

        const home = document.createElement('div');
        home.classList.add('headerTab')
        home.id = 'home'
        home.textContent = 'Home';
        header.appendChild(home);

        const menu = document.createElement('div');
        menu.classList.add('headerTab')
        menu.id = 'menu'
        menu.textContent = 'Menu';
        header.appendChild(menu);

        const contact = document.createElement('div');
        contact.classList.add('headerTab')
        contact.id = 'contact'
        contact.textContent = 'Contact Us';
        header.appendChild(contact);
    }
    
    // landing page content
    const displayContentBody = ()=>{
        const pageBody = document.createElement('div')
        pageBody.id = 'pageBody'
        content.appendChild(pageBody);
        
        const conBody = document.createElement('div');
        conBody.id = 'conBody'
        pageBody.appendChild(conBody);
        

        const landingImg = document.createElement('div');
        landingImg.classList.add('landingImg');
        // const myImg = new Image();
        // myImg.src = img;
        conBody.appendChild(landingImg);

        const welcome = document.createElement('div');
        welcome.classList.add('welcome');
        
        welcome.textContent = 'Quench your Thirst with Fresh-oFF-da-Juice'
        conBody.appendChild(welcome);

        const welcome2 = document.createElement('div');
        welcome2.classList.add('welcome2');
        welcome2.textContent = 'Please your taste receptors'
        welcome.appendChild(welcome2);

        const genInfo = document.createElement('div');
        genInfo.classList.add('genInfo');
        conBody.appendChild(genInfo);

        const address = document.createElement('div');
        address.classList.add('info');
        address.setAttribute('style', 'white-space: pre;');
        address.textContent = 'Come for a visit at: \r\n'
        address.textContent += '3410 Sweet St \r\n'
        address.textContent += 'Brooklyn, NY 11219'
        
        genInfo.appendChild(address);
        
        const hours = document.createElement('div');
        hours.classList.add('info');
        hours.setAttribute('style', 'white-space: pre;');
        hours.textContent = 'Hours of Operation';
        hours.textContent = 'Mon - Fri : 10 AM - 8 PM \r\n'
        hours.textContent += 'Sat - Sun : 11 AM - 6 PM'
        genInfo.appendChild(hours);
    }

    

    const delCurrentPage = ()=>{
        if(document.contains(document.querySelector('#conBody'))) {
            document.querySelector('#conBody').remove();
        }
    }
    
    // const conBody = document.querySelector('#conBody');
    // const delCurrentPage = ()=>{
    //     if(document.contains(conBody)){
    //         conBody.remove();
    //     }
    // }

    
    const displayMenu = ()=> {
        const menuTab = document.querySelector('#menu');
        menuTab.addEventListener('click', ()=>{
            delCurrentPage();
            menuBody();
        })

        const menuBody = ()=> {
            const pageBody = document.querySelector('#pageBody');
            const menu = document.createElement('div');
            menu.id = 'menuBody'
            pageBody.appendChild(menu);

            const menuList = document.createElement('div');
            menuList.id = 'menuList'
            menu.appendChild(menuList);

            const menuLogo = document.createElement('h3');
            menuLogo.id = 'menuLogo'
            menuLogo.textContent = 'MENU'
            menuList.appendChild(menuLogo);

            const menuItems = document.createElement('div');
            menuItems.id = 'menuItems'
            menuList.appendChild(menuItems);


            const clearJuice = document.createElement('div');
            clearJuice.classList.add('drinks');
            clearJuice.id = 'clearJuice'
            // const drink1 = new Image();
            // drink1.src = clearDrink;
            clearJuice.textContent = 'Citrust Berry Blast - $5';
            menuItems.appendChild(clearJuice);


            const mangoJuice = document.createElement('div');
            mangoJuice.classList.add('drinks');
            mangoJuice.id = 'mangoJuice'
            mangoJuice.textContent = 'Mango Tango - $5';
            menuItems.appendChild(mangoJuice);


            const blueJuice = document.createElement('div');
            blueJuice.classList.add('drinks');
            blueJuice.id = 'blueJuice'
            blueJuice.textContent = 'Blueberry Faygo - $5';
            menuItems.appendChild(blueJuice);
            
        }
    }
    
    return{
        start,
    }
})();

landingPage.start();












// const homepage = (()=>{
//     const content = document.querySelector('#content');
//     const header = document.querySelector('#header');
//     const start = ()=>{
//         displayHeader();
//         homepage();
//     }
//     const homepage = ()=> {
//         const home = document.createElement('div');
//         home.classList.add('homepage');
//         const myImg = new Image();
//         myImg.src = img
//         home.appendChild(img);
//         content.appendChild(home);

//     }
//     const displayHeader = ()=>{
        
//         const header = document.createElement('div');
//         header.classList.add('header');
//         content.appendChild(header);
        
        

//         const headerTabs = ()=>{
//             const brandName = document.createElement('div');
//             brandName.textContent = 'Fresh-oFF-Da-Juice';
//             brandName.classList.add('brandName');
//             header.appendChild(brandName);

//             const home = document.createElement('div');
//             home.textContent = 'Home';
//             home.classList.add('headerTabs');
//             home.id = 'Home';
//             header.appendChild(home);

//             const menu = document.createElement('div');
//             menu.textContent = 'Menu';
//             menu.classList.add('headerTabs');
//             header.appendChild(menu);

            

//             const contact = document.createElement('div');
//             contact.textContent = 'Contact';
//             contact.classList.add('headerTabs');
//             header.appendChild(contact);
//         }
//         headerTabs();
//     }


//     return{
//         start,

//     }
// })();

// homepage.start();