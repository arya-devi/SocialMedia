// -----------------------sidebar-----------------------

const menuItem =document.querySelectorAll('.menu-item')
const messageNotifications = document.querySelector('#message-notifications')
const messages = document.querySelector('.messages')
const message = messages.querySelectorAll('.message')
const messageSearch = document.querySelector('#message-search')
const theme = document.querySelector('#theme')
const customizeTheme = document.querySelector('.customize-theme')
const card = document.querySelector('.card')
const fontSize = document.querySelectorAll('.choose-size span')
var root = document.querySelector(':root')
const themeColor = document.querySelectorAll('.choose-color span')
const chooseBg = document.querySelectorAll('.choose-bg div')


 

// -----------------remove active class from all item-------------------

const changeActiveItem = () => {
    menuItem.forEach(item => {
        item.classList.remove('active')
    })
}

// ---------------add active class for click menuitem-----------------------

menuItem.forEach(item => {
    item.addEventListener('click' , () => {
        changeActiveItem()
        item.classList.add('active')
        // if(item.id != 'notifications'){
        //     document.querySelector('.notifications-popup').
        //     style.display = 'none'
        // }else {
        //     document.querySelector('.notifications-popup').
        //     style.display = 'block'
        //     document.querySelector('#notifications .notification-count')
        //     .style.display = 'none'
        // }
        if(item.id==='notifications'){
            document.querySelector('.notifications-popup').
            style.display = 'block'
            document.querySelector('#notifications .notification-count')
            .style.display = 'none'
        }else{
            document.querySelector('.notifications-popup').
            style.display = 'none'
        }
    })
})
//---------------end---------------

// ----------------message-------------------

messageNotifications.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)'
    messageNotifications.querySelector('.notification-count')
    .style.display = 'none'
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 2000)
})
// -------------------end od message-------------------------

// -------------------find message------------------------

 const searchMessage = () => {
    const val = messageSearch.value.toLowerCase()
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase()
        if(name.indexOf(val) != -1 ){
            user.style.display ='flex'
        }else{
            user.style.display = 'none'
        }
    })
 }

 messageSearch.addEventListener('keyup',searchMessage)

//  -------------------end of ind message--------------------

// ------------theme customization--------------------

const openThemeModel = () => {
    customizeTheme.style.display ='grid'
}
const closeThemeModel = (e) => {
    if(e.target.classList.contains('customize-theme')){
        customizeTheme.style.display = 'none'
    }
}

theme.addEventListener('click',openThemeModel)
customizeTheme.addEventListener('click' , closeThemeModel)

// -------------------------font size---------------------

// ------------remove active from fontSize span-------------------

const removeSizeSelector = () => {
    fontSize.forEach(size => {
        size.classList.remove('active')
    })
}

fontSize.forEach(size => {
    size.addEventListener('click' , () => {
        removeSizeSelector()
        let fontSize;
        size.classList.toggle('active')

    if(size.classList.contains('font-size-1')){
        fontSize = '12px'
        // root.style.setProperty('----sticky-top-left','5.4rem')
        // root.style.setProperty('----sticky-top-right','5.4rem')
    }else if(size.classList.contains('font-size-2')){
        fontSize = '13px'
        // root.style.setProperty('----sticky-top-left','5.4rem')
        // root.style.setProperty('----sticky-top-right','-7rem')
    }else if(size.classList.contains('font-size-3')){
        fontSize = '14px'
        // root.style.setProperty('----sticky-top-left','-2rem')
        // root.style.setProperty('----sticky-top-right','-17rem')
    }else if(size.classList.contains('font-size-4')){
        fontSize = '15px'
        // root.style.setProperty('----sticky-top-left','-5rem')
        // root.style.setProperty('----sticky-top-right','-25rem')
    }else if(size.classList.contains('font-size-5')){
        fontSize = '16px'
        // root.style.setProperty('----sticky-top-left','-12rem')
        // root.style.setProperty('----sticky-top-right','-35rem')
    }
    //change font size of the root html element
    document.querySelector('html').style.fontSize = fontSize
    })
})
// ---------------theme color change-----------------------

// -------remove active--------

const changeActiveColorClass = () =>{
    themeColor.forEach(colorPicker =>{
        colorPicker.classList.remove('active')
    })
}

themeColor.forEach(color =>{
    color.addEventListener('click' ,() =>{
        let primary;
        let secondary;
        let theme;
        changeActiveColorClass()
        if(color.classList.contains('color-1')){
            primaryColor = 'rgba(26, 113, 137)';
            secondaryColor = 'rgb(110, 184, 197)';
            colorTheme = 'rgb(159, 182, 186)';
        }else if(color.classList.contains('color-2')){
            primaryColor = 'rgba(230, 209, 76)';
            secondaryColor = 'rgb(222, 213, 156)';
            colorTheme = 'rgb(229, 224, 190)';
        }else if(color.classList.contains('color-3')){
            primaryColor = 'rgba(230, 76, 97)';
            secondaryColor = 'rgb(229, 135, 147)';
            colorTheme = 'rgb(244, 194, 201)';
        }else if(color.classList.contains('color-4')){
            primaryColor = 'rgba(76, 230, 158)';
            secondaryColor = 'rgb(163, 227, 197)';
            colorTheme = 'rgb(201, 244, 224)';
        }else if(color.classList.contains('color-5')){
            primaryColor = 'rgba(107, 76, 230)';
            secondaryColor = 'rgb(172, 161, 217)';
            colorTheme = 'rgb(205, 195, 244)';
        }
        color.classList.add('active')
        root.style.setProperty('--color-primary' ,primaryColor)
        root.style.setProperty('--color-secondary' ,secondaryColor)
        root.style.setProperty('--color-light' ,colorTheme)
    })
})

// -------remove active--------

const changeActiveColor = () =>{
    chooseBg.forEach(colorBg =>{
        colorBg.classList.remove('active')
    })
}

chooseBg.forEach(background =>{
    background.addEventListener('click' ,() =>{
        let bg;
        let text;
        changeActiveColor()
        if(background.classList.contains('bg-1')){
            bgColor = 'rgba(255, 255, 255, 1)';
            textColor = 'rgba(0,0,0)';
        }else if(background.classList.contains('bg-2')){
            bgColor = 'hsl( 252 , 30% , 17%)';
            textColor = 'rgba(0,0,0)';
        }else if(background.classList.contains('bg-3')){
            bgColor = 'rgba(0,0,0)';
           textColor = 'rgba(255, 255, 255, 1)';
        }
        background.classList.add('active')
        root.style.setProperty('--color-light' ,bgColor)
        // root.style.setProperty('--color-dark' ,textColor)
    })
})

