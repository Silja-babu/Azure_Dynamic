export function container5(data){
    const colEl = document.createElement('div')
    colEl.classList.add('col')
    const layoutEl = document.createElement('div')
    layoutEl.classList.add('layout','section-master__layout')
    const layoutCol = document.createElement('div')
    layoutCol.classList.add('layout__col')
    const layoutHead = document.createElement('div')
    layoutHead.classList.add('section-master__layout-header')
    const blockHead = document.createElement('div')
    blockHead.classList.add('block-heading')

    const fgNeutral = document.createElement('div')
    fgNeutral.classList.add('fg--neutral-highlight','block-heading__eyebrow')
    blockHead.appendChild(fgNeutral)
    const tokenText = document.createElement('div')
    tokenText.classList.add('token-text-1')
    fgNeutral.appendChild(tokenText)
    tokenText.textContent = data.products.service

    const blockTitle = document.createElement('div')
    blockTitle.classList.add('block-heading__title')
    blockHead.appendChild(blockTitle)
    const div = document.createElement('div')
    const h2=document.createElement('h2')
    h2.textContent = data.products.servicehead
    div.appendChild(h2)
    blockTitle.appendChild(div)
    //console.log(blockHead)
    document.getElementById('row-3').appendChild(colEl)
    colEl.appendChild(layoutEl)
    layoutEl.appendChild(layoutCol)
    layoutCol.appendChild(layoutHead)
    layoutHead.appendChild(blockHead)


    const col2El = document.createElement('div')
    col2El.classList.add('col')
    const tabpills = document.createElement('div')
    tabpills.classList.add('tabs-pill-bars','tabs')
    const Dcontents = document.createElement('div')
    Dcontents.classList.add('cmp-tabs','d-contents')
    const Gutters= document.createElement('div')
    Gutters.classList.add('pill-bar','no-gutters')
    const col3El = document.createElement('div')
    col3El.classList.add('col')
    col3El.id = 'pill-bar_pill-bar-products'
    const Taboverflow = document.createElement('div')
    Taboverflow.classList.add('tab-overflow')
    const tabWindow = document.createElement('div')
    tabWindow.classList.add('tab-window')
    const tabGroup = document.createElement('div')
    tabGroup.classList.add('tab-group')
    document.getElementById('slot-3').appendChild(col2El)
    col2El.appendChild(tabpills)
    tabpills.appendChild(Dcontents)

    Dcontents.appendChild(Gutters)
    Gutters.appendChild(col3El)
    col3El.appendChild(Taboverflow)
    Taboverflow.appendChild(tabWindow)
    tabWindow.appendChild(tabGroup)
    console.log(col2El)

    const Actionf = document.createElement('div')
    Actionf.classList.add('action','d-contents')
    col2El.appendChild(Actionf)
    const alinks = document.createElement('a')
    alinks.classList.add('link')
    const btn = document.createElement('span')
    const link = document.createElement('span')
    alinks.appendChild(btn)
    alinks.appendChild(link)
    Actionf.appendChild(alinks)
    link.classList.add('link__text')
    btn.classList.add('btn','btn--icon-only','btn--sm')
    link.textContent=data.products.aLink
    const glyphspan = document.createElement('span')
    glyphspan.classList.add('glph-prepend')
    btn.appendChild(glyphspan)
    data.products.servicelist.forEach((item,idx)=>{
        const buttonEl = document.createElement('button')
        buttonEl.classList.add('pill-bar__item')
        buttonEl.id=`pill-bar-solution_tab${idx}-tab`
        buttonEl.addEventListener('click',()=>{
            document.querySelectorAll('.pill-bar__item').forEach(button =>{
                button.classList.remove('active')
              })
              buttonEl.classList.add('active')
              document.querySelectorAll('.tab-panel').forEach(tabPanel=>{
                tabPanel.style.display='none'
              })
              const target = document.getElementById(`pill-bar-products_tab${idx}`)
              if(target){
                target.style.display='block'
              }
        })
        if(idx===0){
            buttonEl.classList.add('active')
        }
        tabGroup.appendChild(buttonEl)
        const spanpill = document.createElement('span')
        spanpill.classList.add('pill-bar__item__label')
        buttonEl.appendChild(spanpill)
        spanpill.textContent = item
    })

    const row2=document.createElement('div')
    row2.classList.add('row')
    Dcontents.appendChild(row2)

    const col4El = document.createElement('div')
    col4El.classList.add('col')
    const tabPanel = document.createElement('div')
    tabPanel.classList.add('tab-panel-group','margin-top')
    row2.appendChild(col4El)
    col4El.appendChild(tabPanel)


    data.products.kubernetes.forEach((items,idx2)=>{
        const tabpanelAll = document.createElement('div')
        tabpanelAll.classList.add('tab-panel')
        tabpanelAll.id=`pill-bar-products_tab${idx2}`
        tabPanel.appendChild(tabpanelAll)
        tabpanelAll.style.display='none'
        if(idx2===0){
            tabpanelAll.style.display='block'
        }
        //console.log(tabpanelAll)
            const divEl = document.createElement('div')
            const cardgrid = document.createElement('div')
            cardgrid.classList.add('card-grid','row')
            const cardPromo = document.createElement('div')
            cardPromo.classList.add('card-promo__card-promo','col-md-12','col-lg-6')
            tabpanelAll.appendChild(divEl)
            divEl.appendChild(cardgrid)
            cardgrid.appendChild(cardPromo)

            const gridCard = document.createElement('div')
            gridCard.classList.add('card-grid__cards','col-lg-18')

            cardgrid.appendChild(gridCard)

            const promoCard = document.createElement('div')
            promoCard.classList.add('card-promo','rounded-1','depth-4','theme-day')
            cardPromo.appendChild(promoCard)

            const promoImage = document.createElement('div')
            promoImage.classList.add('card-promo__image')
            const media = document.createElement('div')
            media.classList.add('media')
            promoCard.appendChild(promoImage)
            promoImage.appendChild(media)
            const mediaAsset = document.createElement('div')
            mediaAsset.classList.add('ocr-img','media__asset')
            media.appendChild(mediaAsset)
            const picture = document.createElement('picture')
            const image = document.createElement('img')
            
            mediaAsset.appendChild(picture)
            picture.appendChild(image)

            const promoContent = document.createElement('div')
            promoContent.classList.add('card-promo__fg-content')
            promoCard.appendChild(promoContent)

            const featureBlock = document.createElement('div')
            featureBlock.classList.add('block-feature','d-flex','align-items-start')
            const topFeature = document.createElement('div')
            topFeature.classList.add('block-feature__top','d-flex','flex-row')
            const headingFeature = document.createElement('div')
            headingFeature.classList.add('block-feature__headings','d-flex','flex-column')
            const titleFeature = document.createElement('div')
            titleFeature.classList.add('block-feature__title')
            const divs = document.createElement('div')
            const h3 = document.createElement('h3')
            divs.appendChild(h3)
            titleFeature.appendChild(divs)
            headingFeature.appendChild(titleFeature)
            topFeature.appendChild(headingFeature)
            featureBlock.appendChild(topFeature)
            promoContent.appendChild(featureBlock)

            const bodyFeature = document.createElement('div')
            bodyFeature.classList.add('block-feature__body','d-flex','flex-column')
            featureBlock.appendChild(bodyFeature)
            const base = document.createElement('div')
            base.classList.add('base','block-feature__paragraph')
            bodyFeature.appendChild(base)
            const dives = document.createElement('div')
            base.appendChild(dives)

            const footerFeature = document.createElement('div')
            footerFeature.classList.add('block-feature__footer')
            const slimBlock = document.createElement('div')
            slimBlock.classList.add('block-slim')
            bodyFeature.appendChild(footerFeature)
            footerFeature.appendChild(slimBlock)

            const buttonGroup = document.createElement('div')
            buttonGroup.classList.add('button-group')
            const a = document.createElement('a')
            a.classList.add('btn','btn--md')
            const span = document.createElement('span')
            span.classList.add('btn__text')
            slimBlock.appendChild(buttonGroup)
            buttonGroup.appendChild(a)
            a.appendChild(span)
            
                image.src=data.products.longPicture[idx2].image
                h3.textContent= data.products.longPicture[idx2].heading
                dives.textContent= data.products.longPicture[idx2].para
                span.textContent = data.products.longPicture[idx2].btn
            

            const layoutCol = document.createElement('div')
            layoutCol.classList.add('layout','layout--cols-3')
            gridCard.appendChild(layoutCol)
            items.forEach((subitems,idx3)=>{
                const layoutAllcol = document.createElement('div')
                layoutAllcol.classList.add('layout__col')
                //console.log(layoutAllcol)
                layoutCol.appendChild(layoutAllcol)
                const card = document.createElement('div')
                card.classList.add('card','rounded-1')
                const cardContent = document.createElement('div')
                cardContent.classList.add('card__content')
                const blocedFeature = document.createElement('div')
                blocedFeature.classList.add('block-feature')
                const badgeFeature =  document.createElement('div')
                badgeFeature.classList.add('block-feature__badge')
                const badge = document.createElement('div')
                badge.classList.add('badge','badge--size-s')
                const iconOcr = document.createElement('div')
                iconOcr.classList.add('ocr-icon','d-inline-flex')
                const ocrIMgage = document.createElement('div')
                ocrIMgage.classList.add('ocr-img','media__asset')
                const bagdeIMage = document.createElement('img')
                bagdeIMage.src= subitems.logo
                layoutAllcol.appendChild(card)
                card.appendChild(cardContent)
                cardContent.appendChild(blocedFeature)
                blocedFeature.appendChild(badgeFeature)
                badgeFeature.appendChild(badge)
                badge.appendChild(iconOcr)
                iconOcr.appendChild(ocrIMgage)
                ocrIMgage.appendChild(bagdeIMage)
                const blockBody = document.createElement('div')
                blocedFeature.appendChild(blockBody)
                blockBody.classList.add('block-feature__body','d-flex','flex-column')
                const headingFeature = document.createElement('div')
                headingFeature.classList.add('block-feature__headings','d-flex','flex-column')
                const titleBLock = document.createElement('div')
                titleBLock.classList.add('block-feature__title')
                const diver = document.createElement('div')
                const h4 = document.createElement('h4')
                const Dblock = document.createElement('span')
                Dblock.classList.add('d-block','h5')
                Dblock.textContent = subitems.head
                h4.appendChild(Dblock)
                diver.appendChild(h4)
                titleBLock.appendChild(diver)
                headingFeature.appendChild(titleBLock)
                blockBody.appendChild(headingFeature)


                const baseBody = document.createElement('div')
                baseBody.classList.add('base','block-feature__paragraph')
                const bodyDi = document.createElement('div')
                bodyDi.textContent=subitems.graph
                blockBody.appendChild(baseBody)
                baseBody.appendChild(bodyDi)
                

                const SilmedBody = document.createElement('div')
                SilmedBody.classList.add('block-slim')
                cardContent.appendChild(SilmedBody)
                const ActionD = document.createElement('div')
                ActionD.classList.add('action','d-contents')
                const aLink = document.createElement('a')
                aLink.classList.add('link','link-inline')
                const spanText = document.createElement('span')
                spanText.classList.add('link__text')
                spanText.textContent=subitems.link
                aLink.appendChild(spanText)
                ActionD.appendChild(aLink)
                SilmedBody.appendChild(ActionD)
            })
    })
}
