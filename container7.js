export function container7(data){
    const interactiveDemo = document.createElement('div')
    interactiveDemo.classList.add('interactive-demo__header')
    document.getElementById('interactive-demo').appendChild(interactiveDemo)
    const interactiveTab = document.createElement('div')
    interactiveTab.classList.add('interactive-demo__tab')
    document.getElementById('interactive-demo').appendChild(interactiveTab)

    const container = document.createElement('div')
    container.classList.add('container')
    const row = document.createElement('row')
    row.classList.add('row')
    const col = document.createElement('div')
    col.classList.add('col')
    const headingblock = document.createElement('div')
    headingblock.classList.add('block-heading')

    const fgnetural = document.createElement('div')
    fgnetural.classList.add('fg--neutral-highlight','block-heading__eyebrow')
    headingblock.appendChild(fgnetural)

    const titleblockheading = document.createElement('div')
    titleblockheading.classList.add('block-heading__title')
    headingblock.appendChild(titleblockheading)

    const div= document.createElement('div')
    fgnetural.appendChild(div)
    div.textContent = data.transform.resorceHead
    //console.log(fgnetural)
    interactiveDemo.appendChild(container)
    container.appendChild(row)
    row.appendChild(col)
    col.appendChild(headingblock)
    

    const div2 = document.createElement('div')
    const h2 = document.createElement('h2')
    div2.appendChild(h2)
    h2.textContent= data.transform.mainHead
    titleblockheading.appendChild(div2)
    //console.log(titleblockheading)

    const interactiveImage = document.createElement('div')
    interactiveImage.classList.add('interactive-demo__bg-image')
    const mediaAsset = document.createElement('div')
    mediaAsset.classList.add('ocr-img','media__asset')
    const picture = document.createElement('picture')
    const image = document.createElement('img')
    image.src = data.transform.backgroundimage
    interactiveTab.appendChild(interactiveImage)
    interactiveImage.appendChild(mediaAsset)
    mediaAsset.appendChild(picture)
    picture.appendChild(image)
    console.log(interactiveTab)

    const tabsWrapper = document.createElement('div')
    tabsWrapper.classList.add('tabs-wrapper')
    interactiveTab.appendChild(tabsWrapper)
    const cmptabs = document.createElement('div')
    cmptabs.classList.add('cmp-tabs','tabs')
    const sliderTab = document.createElement('div')
    sliderTab.classList.add('tabs__slider')
    const overFlow = document.createElement('div')
    overFlow.classList.add('tab-overflow')
    const tabWindow = document.createElement('div')
    tabWindow.classList.add('tab-window')
    const Dflex = document.createElement('div')
    Dflex.classList.add('d-flex','flex-column')
    const tabPanel = document.createElement('div')
    tabPanel.classList.add('tab-group')
    tabsWrapper.appendChild(cmptabs)
    cmptabs.appendChild(sliderTab)
    sliderTab.appendChild(overFlow)
    overFlow.appendChild(tabWindow)
    tabWindow.appendChild(Dflex)
    Dflex.appendChild(tabPanel)
    data.transform.professional.forEach((item,idx)=>{
        const tab = document.createElement('a')
        tab.classList.add('tab')
        tabPanel.appendChild(tab)
        const tabItem = document.createElement('div')
        tabItem.classList.add('tab__item')
        const itemContent = document.createElement('div')
        itemContent.classList.add('tabs__tab-item--content')
        
        const indicator = document.createElement('span')
        indicator.classList.add('indicator')
        tabItem.appendChild(itemContent)
        tabItem.appendChild(indicator)

        const itemLIst = document.createElement('div')
        itemLIst.classList.add('list-item')
        const div3 = document.createElement('div')
        const spanblock = document.createElement('span')
        spanblock.classList.add('d-block','h6')
        spanblock.textContent = item
        div3.appendChild(spanblock)
        itemLIst.appendChild(div3)
        itemContent.appendChild(itemLIst)
        tab.appendChild(tabItem)
        tab.addEventListener('click',()=>{
            document.querySelectorAll('.indicator').forEach(button=>{
                button.classList.remove('active')
            })
            indicator.classList.add('active')
            document.querySelectorAll('.tab-panel').forEach(panel=>{
                panel.style.display='none'
            })
            const target=document.getElementById(`tab-panel${idx}`)
            if(target){
                target.style.display='block'
            }
        })
    })

    const panelGroup = document.createElement('div')
    panelGroup.classList.add('tab-panel-group','w-100')
    cmptabs.appendChild(panelGroup)
    data.transform.listprofessionals.forEach((items,idx)=>{
        const tabPanel = document.createElement('div')
        tabPanel.classList.add('tab-panel')
        tabPanel.id = `tab-panel${idx}`
        panelGroup.appendChild(tabPanel)
        tabPanel.style.display='none'
        if(idx===0){
            tabPanel.style.display='block'
        }
        const reImageine = document.createElement('div')
        reImageine.classList.add('reimagine-grid')
        const div4 = document.createElement('div')
        const blockFeacture = document.createElement('div')
        blockFeacture.classList.add('block-feature','d-flex')

        const topFeature = document.createElement('div')
        topFeature.classList.add('block-feature__top','d-flex','flex-row')
        const headingFeature = document.createElement('div')
        headingFeature.classList.add('block-feature__heading','d-flex','flex-column')
        const titleFeature = document.createElement('div')
        titleFeature.classList.add('block-feature__title')
        const div5 = document.createElement('div')
        const h3 = document.createElement('h3')
        const Dblock = document.createElement('span')
        Dblock.classList.add('d-block','h4')
        Dblock.textContent = items.head
        //console.log(Dblock)
        tabPanel.appendChild(reImageine)
        reImageine.appendChild(div4)
        div4.appendChild(blockFeacture)
        blockFeacture.appendChild(topFeature)
        topFeature.appendChild(headingFeature)
        headingFeature.appendChild(titleFeature)
        titleFeature.appendChild(div5)
        div5.appendChild(h3)
        h3.appendChild(Dblock)


        const bodyFeature = document.createElement('div')
        bodyFeature.classList.add('block-feature__body','d-flex','flex-column')
        blockFeacture.appendChild(bodyFeature)
        const footerFeature = document.createElement('div')
        footerFeature.classList.add('block-feature__footer')
        const slimBlock = document.createElement('div')
        slimBlock.classList.add('block-slim')
        const Action = document.createElement('div')
        Action.classList.add('action','d-contents')
        const link = document.createElement('a')
        link.classList.add('link')
        const btnspan = document.createElement('span')
        btnspan.classList.add('btn','btn--icon-only','btn--sm')
        const glphPrepend = document.createElement('div')
        glphPrepend.classList.add('glph-prepend')
        link.appendChild(btnspan)
        btnspan.appendChild(glphPrepend)
        const linkText = document.createElement('div')
        linkText.classList.add('link__text')
        linkText.textContent=items.btn
        link.appendChild(linkText)
        bodyFeature.appendChild(footerFeature)
        footerFeature.appendChild(slimBlock)
        slimBlock.appendChild(Action)
        Action.appendChild(link)

        const media = document.createElement('div')
        media.classList.add('media','media--highlight')
        div4.appendChild(media)
        const Ocrimag = document.createElement('div')
        Ocrimag.classList.add('ocr-img','media__asset')
        const imagelink = document.createElement('img')
        imagelink.src = items.media
        media.appendChild(Ocrimag)
        Ocrimag.appendChild(imagelink)

    })

}