import './style.css';

const landingPage = (()=>{

    const content = document.querySelector('#content')
    //const pageBody = document.querySelector('#pageBody');

    const start = ()=> {
        pageLayout();
        displayContentBody();
        //displayPageBody();
        homeTab();
        menuTab();
        contactUsTab();

    }

    // just displays header, content body, and footer
    const pageLayout = ()=>{
        const header = document.createElement('div');
        header.classList.add('header')
        content.appendChild(header);

        const pageBody = document.createElement('div');
        pageBody.id = ('pageBody')
        content.appendChild(pageBody)

        const logo = document.createElement('div');
        logo.classList.add('logo')
        logo.textContent = 'Fresh-oFF-da-Juice';
        header.appendChild(logo);

        const home = document.createElement('div');
        home.classList.add('headerTab')
        home.id = 'Home'
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

        const footer = document.createElement('div')
        footer.id = 'footer'
        content.appendChild(footer)

        const footerTabs =  document.createElement('div')
        footerTabs.classList.add('footerTabs')
        footer.appendChild(footerTabs)

        const fHome = document.createElement('h4');
        fHome.textContent = 'Home';
        fHome.id = 'fHome';
        //fHome.addEventListener('click', displayContentBody());
        footerTabs.appendChild(fHome);

        const fMenu = document.createElement('h4');
        fMenu.textContent = 'Menu';
        fMenu.id = 'fMenu'
        //fMenu.addEventListener('click', displayMenuBody());
        footerTabs.appendChild(fMenu);

        const fContact = document.createElement('h4');
        fContact.textContent = 'Contact Us';
        fContact.id = 'fContact';
        //fContact.addEventListener('click', contactUsTab());
        footerTabs.appendChild(fContact);

        const author = document.createElement('div')
        author.classList.add('footerTabs')
        footer.appendChild(author)

        const link = document.createElement('a');
        link.setAttribute('href', `https://github.com/aochil`);
        link.textContent = 'By: Azizbek Ochilov';
        author.appendChild(link)

        const sources = document.createElement('div')
        sources.classList.add('footerTabs')
        footer.appendChild(sources)

        const photoSRC = document.createElement('h3');
        photoSRC.id = 'pMedia';
        photoSRC.textContent = 'All photos from Kindel Media from Pexels'
        sources.appendChild(photoSRC)
    }
    
    const homeTab = ()=>{
        const home = document.querySelectorAll('#Home, #fHome');
        home.forEach(el => el.addEventListener('click', ()=>{
            delCurrentPage();
            displayContentBody();
        }))
    }

    
    // landing page content
    const displayContentBody = ()=>{

        const pageBody = document.querySelector('#pageBody');
        const conBody = document.createElement('div');
        conBody.id = 'conBody'
        conBody.classList.add('contentParent')
        pageBody.appendChild(conBody);
        

        const landingImg = document.createElement('div');
        landingImg.classList.add('landingImg');
        conBody.appendChild(landingImg);

        const welcome = document.createElement('div');
        welcome.classList.add('welcome');
        
        welcome.textContent = 'Quench your Thirst with Fresh-oFF-da-Juice'
        conBody.appendChild(welcome);

        const welcome2 = document.createElement('div');
        welcome2.classList.add('welcome2');
        welcome2.textContent = 'Please your taste receptors'
        welcome.appendChild(welcome2);

    }
    
    const delCurrentPage = ()=>{
        if(document.contains(document.querySelector('.contentParent'))){
            document.querySelector('.contentParent').remove();
        }
    }
    
    const menuTab = ()=> {
        const menuTab = document.querySelectorAll('#menu, #fMenu');
        menuTab.forEach(el => el.addEventListener('click', ()=>{
            delCurrentPage();
            displayMenuBody();
        }))

        const displayMenuBody = ()=> {
            const pageBody = document.querySelector('#pageBody');
            const menu = document.createElement('div');
            menu.classList.add('contentParent')
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
        const contactUsTab = ()=>{
            const contactTab = document.querySelectorAll('#contact, #fContact');
            contactTab.forEach(el => el.addEventListener('click', ()=>{
                delCurrentPage();
                displayContactPage();
            }))

            const displayContactPage = ()=>{
                const pageBody = document.querySelector('#pageBody');
                const contactBody = document.createElement('div');
                contactBody.id = 'contactBody';
                contactBody.classList.add('contentParent')
                pageBody.appendChild(contactBody);

                const genInfo = document.createElement('div');
                genInfo.classList.add('genInfo');
                contactBody.appendChild(genInfo);

                const address = document.createElement('div');
                address.classList.add('info');
                address.setAttribute('style', 'white-space: pre;');
                address.textContent = 'Come for a visit at: \r\n'
                address.textContent += '3410 Sweet St \r\n'
                address.textContent += 'Brooklyn, NY 11219 \r\n'
                address.textContent += 'Phone: (917)000-0000 \r\n'
                address.textContent += 'Email: freshoffdajuice@gmail.com \r\n'
                
                genInfo.appendChild(address);
                
                const hours = document.createElement('div');
                hours.classList.add('info');
                hours.setAttribute('style', 'white-space: pre;');
                hours.textContent = 'Hours of Operation';
                hours.textContent = 'Mon - Fri : 10 AM - 8 PM \r\n'
                hours.textContent += 'Sat - Sun : 11 AM - 6 PM'
                genInfo.appendChild(hours);
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