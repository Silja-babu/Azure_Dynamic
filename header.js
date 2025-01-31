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
            menubutton.addEventListener('click',()=>{
                console.log(`${item} is clicked`);
                    const exist = menubutton.querySelector('.f-multi-column')
                    if(exist){
                        menubutton.removeChild(exist)
                        menubutton.classList.remove('unset')
    
                    }else{
                        const multiul = document.createElement('ul')
                        multiul.classList.add('f-multi-column')
                        menubutton.appendChild(multiul)
                        console.log(menubutton)
                        menubutton.classList.add('unset')
                        const productlist = data.head.Products
                        productlist.forEach(mainitems=>{
                            mainitems.forEach((subitem,idx)=>{
                                const jsNav = document.createElement('li')
                                jsNav.classList.add("js-nav-menu")
                                multiul.appendChild(jsNav)
                                subitem.forEach(items=>{
                                    const lispan = document.createElement('span')
                                    lispan.classList.add('uhf-nav-span')
                                    lispan.textContent=items
                                    jsNav.appendChild(lispan)
                                })
                            
                        })
                        
                        })  
                            
                    }
            })
                    
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



    /**
     * data.head.Products.forEach(mainitems=>{
                menubutton.addEventListener('click', () => {

                console.log(`${item} is clicked`);
                const exist = menubutton.querySelector('.f-multi-column')
                if(exist){
                    menubutton.removeChild(exist)
                    menubutton.classList.remove('unset')

                }else{
                    const multicolum = document.createElement('ul')
                    multicolum.classList.add('f-multi-column')
                    menubutton.appendChild(multicolum)
                    menubutton.classList.add('unset')
                    multicolum.innerHTML=''
                    data.head.Products.forEach((subitem,idx)=>{
                        const jsNav = document.createElement('li')
                        jsNav.classList.add("js-nav-menu")
                        multicolum.appendChild(jsNav)
                        subitem.forEach(items=>{
                            const lispan = document.createElement('span')
                            lispan.classList.add('uhf-nav-span')
                            lispan.textContent=items
                            jsNav.appendChild(lispan)
                        })
                    
                })
                }

            });
            })  
     */