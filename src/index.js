import "./style.css";

const landingPage = (() => {
  const content = document.querySelector("#content");
  //const pageBody = document.querySelector('#pageBody');

  const start = () => {
    pageLayout();
    displayContentBody();
    //displayPageBody();
    homeTab();
    menuTab();
    contactUsTab();
  };

  // just displays header, content body, and footer
  const pageLayout = () => {
    const header = document.createElement("div");
    header.classList.add("header");
    content.appendChild(header);

    const pageBody = document.createElement("div");
    pageBody.id = "pageBody";
    content.appendChild(pageBody);

    const logo = document.createElement("div");
    logo.classList.add("logo");
    logo.textContent = "Fresh-oFF-da-Juice";
    logo.addEventListener("click", () => {
      delCurrentPage();
      displayContentBody();
    });
    header.appendChild(logo);

    const home = document.createElement("div");
    home.classList.add("headerTab");
    home.id = "Home";
    home.textContent = "Home";
    header.appendChild(home);

    const menu = document.createElement("div");
    menu.classList.add("headerTab");
    menu.id = "menu";
    menu.textContent = "Menu";
    header.appendChild(menu);

    const contact = document.createElement("div");
    contact.classList.add("headerTab");
    contact.id = "contact";
    contact.textContent = "Contact Us";
    header.appendChild(contact);

    const footer = document.createElement("div");
    footer.id = "footer";
    content.appendChild(footer);

    const footerTabs = document.createElement("div");
    footerTabs.classList.add("footerTabs");
    footer.appendChild(footerTabs);

    const fHome = document.createElement("h4");
    fHome.textContent = "Home";
    fHome.id = "fHome";
    //fHome.addEventListener('click', displayContentBody());
    footerTabs.appendChild(fHome);

    const fMenu = document.createElement("h4");
    fMenu.textContent = "Menu";
    fMenu.id = "fMenu";
    //fMenu.addEventListener('click', displayMenuBody());
    footerTabs.appendChild(fMenu);

    const fContact = document.createElement("h4");
    fContact.textContent = "Contact Us";
    fContact.id = "fContact";
    //fContact.addEventListener('click', contactUsTab());
    footerTabs.appendChild(fContact);

    const author = document.createElement("div");
    author.classList.add("footerTabs");
    footer.appendChild(author);

    const link = document.createElement("a");
    link.setAttribute("href", `https://github.com/aochil`);
    link.textContent = "By: Azizbek Ochilov";
    author.appendChild(link);

    const sources = document.createElement("div");
    sources.classList.add("footerTabs");
    footer.appendChild(sources);

    const photoSRC = document.createElement("h3");
    photoSRC.id = "pMedia";
    photoSRC.textContent = "All photos from Kindel Media from Pexels";
    sources.appendChild(photoSRC);
  };

  const homeTab = () => {
    const home = document.querySelectorAll("#Home, #fHome");
    home.forEach((el) =>
      el.addEventListener("click", () => {
        delCurrentPage();
        displayContentBody();
      })
    );
  };

  // landing page content
  const displayContentBody = () => {
    const pageBody = document.querySelector("#pageBody");
    const conBody = document.createElement("div");
    conBody.id = "conBody";
    conBody.classList.add("contentParent");
    pageBody.appendChild(conBody);

    const landingImg = document.createElement("div");
    landingImg.classList.add("landingImg");
    landingImg.addEventListener("click", () => {
      delCurrentPage();
      displayMenuBody();
    });
    conBody.appendChild(landingImg);

    const welcome = document.createElement("div");
    welcome.id = "welcome";

    welcome.textContent = "Quench your thirst with our freshly squeezed juice";
    conBody.appendChild(welcome);

    const welcome2 = document.createElement("div");
    welcome2.id = "welcome2";
    welcome2.textContent = "Please your taste buds!";
    welcome.appendChild(welcome2);

    const bullets = document.createElement("div");
    bullets.id = "bullets";
    bullets.setAttribute("style", "white-space: pre;");
    bullets.textContent = "Delicious \r\n";
    bullets.textContent += "Nutritious \r\n";
    bullets.textContent += "Ambitious";
    welcome2.appendChild(bullets);

    const checkMark = document.createElement("div");
    checkMark.classList.add("material-icons");
    checkMark.id = "check";
    checkMark.textContent = "done";
    welcome2.appendChild(checkMark);

    const checkMark1 = document.createElement("div");
    checkMark1.id = "check1";
    checkMark1.classList.add("material-icons");
    checkMark1.textContent = "done";
    welcome2.appendChild(checkMark1);

    const checkMark2 = document.createElement("div");
    checkMark2.id = "check2";
    checkMark2.classList.add("material-icons");
    checkMark2.textContent = "done";
    welcome2.appendChild(checkMark2);
  };

  const delCurrentPage = () => {
    if (document.contains(document.querySelector(".contentParent"))) {
      document.querySelector(".contentParent").remove();
    }
  };

  const menuTab = () => {
    const menuTab = document.querySelectorAll("#menu, #fMenu");
    menuTab.forEach((el) =>
      el.addEventListener("click", () => {
        delCurrentPage();
        displayMenuBody();
      })
    );
  };
  const displayMenuBody = () => {
    const pageBody = document.querySelector("#pageBody");
    const menu = document.createElement("div");
    menu.classList.add("contentParent");
    menu.id = "menuBody";
    pageBody.appendChild(menu);

    const menuList = document.createElement("div");
    menuList.id = "menuList";
    menu.appendChild(menuList);

    const menuLogo = document.createElement("h3");
    menuLogo.id = "menuLogo";
    menuLogo.textContent = "MENU";
    menuList.appendChild(menuLogo);

    const menuItems = document.createElement("div");
    menuItems.id = "menuItems";
    menuList.appendChild(menuItems);

    const clearJuice = document.createElement("div");
    clearJuice.classList.add("drinks");
    clearJuice.id = "clearJuice";
    clearJuice.textContent = "Citrus Berry - $5";
    menuItems.appendChild(clearJuice);

    const mangoJuice = document.createElement("div");
    mangoJuice.classList.add("drinks");
    mangoJuice.id = "mangoJuice";
    mangoJuice.textContent = "Mango Tango - $5";
    menuItems.appendChild(mangoJuice);

    const blueJuice = document.createElement("div");
    blueJuice.classList.add("drinks");
    blueJuice.id = "blueJuice";
    blueJuice.textContent = "Blueberry Faygo - $5";
    menuItems.appendChild(blueJuice);
  };

  const contactUsTab = () => {
    const contactTab = document.querySelectorAll("#contact, #fContact");
    contactTab.forEach((el) =>
      el.addEventListener("click", () => {
        delCurrentPage();
        displayContactPage();
      })
    );

    const displayContactPage = () => {
      const pageBody = document.querySelector("#pageBody");
      const contactBody = document.createElement("div");
      contactBody.id = "contactBody";
      contactBody.classList.add("contentParent");
      pageBody.appendChild(contactBody);

      const genInfo = document.createElement("div");
      genInfo.classList.add("genInfo");
      contactBody.appendChild(genInfo);

      const infoList = document.createElement("div");
      infoList.id = "infoList";
      genInfo.appendChild(infoList);

      const contactLogo = document.createElement("div");
      contactLogo.id = "contactLogo";
      contactLogo.textContent = "Reach us by:";
      infoList.appendChild(contactLogo);

      const phone = document.createElement("div");
      phone.id = "phone";
      phone.classList.add("infoList");
      phone.setAttribute("style", "white-space: pre;");
      phone.textContent = "Call us at: \r\n";
      phone.textContent += "(917)000-0000";
      infoList.appendChild(phone);

      const phoneIcon = document.createElement("div");
      phoneIcon.classList.add("material-icons");
      phoneIcon.id = "phoneIcon";
      phoneIcon.textContent = "phone";
      contactLogo.appendChild(phoneIcon);

      const locationIcon = document.createElement("div");
      locationIcon.classList.add("material-icons");
      locationIcon.id = "locationIcon";
      locationIcon.textContent = "place";
      contactLogo.appendChild(locationIcon);

      const emailIcon = document.createElement("div");
      emailIcon.classList.add("material-icons");
      emailIcon.id = "emailIcon";
      emailIcon.textContent = "email";
      contactLogo.appendChild(emailIcon);

      const address = document.createElement("div");
      address.id = "address";
      address.classList.add("infoList");
      address.setAttribute("style", "white-space: pre;");
      address.textContent = "3410 Sweet Ave \r\n";
      address.textContent += "Brooklyn, NY 11219 \r\n";
      address.textContent += "Open from 10 AM - 7 PM";
      infoList.appendChild(address);

      const email = document.createElement("div");
      email.id = "email";
      email.classList.add("infoList");
      email.setAttribute("style", "white-space: pre;");
      email.textContent = "E-Mail us at: \r\n";
      email.textContent += "freshoffdajuice@gmail.com";
      infoList.appendChild(email);
      // const address = document.createElement('div');
      // address.classList.add('info');
      // address.setAttribute('style', 'white-space: pre;');
      // address.textContent = 'Come for a visit at: \r\n'
      // address.textContent += '3410 Sweet St \r\n'
      // address.textContent += 'Brooklyn, NY 11219 \r\n'
      // address.textContent += 'Phone: (917)000-0000 \r\n'
      // address.textContent += 'Email: freshoffdajuice@gmail.com \r\n'

      // genInfo.appendChild(address);

      // const hours = document.createElement('div');
      // hours.classList.add('info');
      // hours.setAttribute('style', 'white-space: pre;');
      // hours.textContent = 'Hours of Operation';
      // hours.textContent = 'Mon - Fri : 10 AM - 8 PM \r\n'
      // hours.textContent += 'Sat - Sun : 11 AM - 6 PM'
      // genInfo.appendChild(hours);
    };
  };

  return {
    start,
  };
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