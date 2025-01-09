export function head(data){
        const img = document.createElement("img")
        img.src = data.head.microsofticon
        img.onload = function(){
            document.getElementById("micrologo").appendChild(img)   
        }
        const explore = document.createElement("li")
        explore.classList.add("single-link","nav-menu")
        const a = document.createElement("a")
        a.classList.add("nav-link")
        a.id="shellmenu"
        a.textContent=data.head.menulist
        explore.appendChild(a)
        //console.log(a)
        //console.log(explore)
        document.getElementById("list-first").appendChild(explore)
                
        data.head.menulistArrow.forEach((item,idx)=>{
            const nestedmenu = document.createElement("li")
            const div = document.createElement("div")
            const menubutton = document.createElement("button")
            menubutton.textContent = item
            nestedmenu.classList.add("nested-menu","nav-menu")
            div.classList.add("micro-menu","nav-menu")
            menubutton.classList ="m-menu_68"
            div.appendChild(menubutton)
            nestedmenu.appendChild(div)
            document.getElementById("list-first").appendChild(nestedmenu)
            menubutton.addEventListener('click', () => {

                //console.log(`${item} is clicked`);
                let existing = menubutton.querySelector('.boxCreate')
                
                if(!existing){
                    const boxCreate = document.createElement("ul")
                    const boxliCreate = document.createElement('li')
                    boxCreate.classList.add("boxCreate")
                    boxCreate.classList.add("boxliCreate")
                    boxCreate.appendChild(boxliCreate)
                    menubutton.appendChild(boxCreate)
                    boxliCreate.textContent=`${data.head.Products[idx]}`
                }
                existing.classList.toggle('hidden')

            });           
        })
       

        const formAction = document.createElement('form')
        formAction.classList.add("c-search")
        formAction.id="searchForm"
        const buttonEl = document.createElement('button')
        buttonEl.classList.add('c-glyph')
        buttonEl.id="search"
        const spanSearch = document.createElement('span')
        spanSearch.textContent=data.head.search
        buttonEl.appendChild(spanSearch)
        formAction.appendChild(buttonEl)
        //console.log(formAction)
        document.getElementById("search-action").appendChild(formAction)

        
        const learnDiv = document.createElement('div')
        learnDiv.classList.add('left-menu')
        
        const learnNav = document.createElement('nav')
        learnNav.id="microsoft-menu"
        
        const learnUl = document.createElement('ul')
        learnUl.classList.add('paddle-items')
        learnNav.appendChild(learnUl)
        learnDiv.appendChild(learnNav)
        
        data.head.learn.forEach(item=>{
            const learnLi = document.createElement('li')
            learnLi.classList.add("left-menu-item")
           // console.log(learnLi)
            learnUl.appendChild(learnLi)
            const learnA = document.createElement('a')
            learnA.classList.add("left-nav-link")
            
            learnA.id=`l-shellmenu`
            
            learnA.textContent=item
            learnLi.appendChild(learnA)
            
            
        })
        //console.log(learnDiv)
        document.getElementById("search-action").appendChild(learnDiv)
    }

