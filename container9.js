export function container9(data){
    const Ocrimage = document.createElement('div')
    Ocrimage.classList.add('ocr-img','media__asset')
    document.getElementById('section2').appendChild(Ocrimage)
    const picture = document.createElement('picture')
    const image = document.createElement('img')
    image.src=data.customer.image
    Ocrimage.appendChild(picture)
    picture.appendChild(image)

    const colEl = document.createElement('div')
    colEl.classList.add('col')
    const layoutEl = document.createElement('div')
    layoutEl.classList.add('layout','section-master__layout')
    const layoutCol = document.createElement('div')
    layoutCol.classList.add('layout__col')
    const sectionMaster = document.createElement('div')
    sectionMaster.classList.add('section-master__layout-header')
    const blockHeading = document.createElement('div')
    blockHeading.classList.add('block-heading')

    document.getElementById('row-4').appendChild(colEl)
    colEl.appendChild(layoutEl)
    layoutEl.appendChild(layoutCol)
    layoutCol.appendChild(sectionMaster)
    sectionMaster.appendChild(blockHeading)

    const fgnetural = document.createElement('div')
    fgnetural.classList.add('fg--neutral-highlight','block-heading__eyebrow')
    const div = document.createElement('div')
    div.textContent=data.customer.subhead
    blockHeading.appendChild(fgnetural)
    fgnetural.appendChild(div)
    //console.log(blockHeading)
    //console.log(fgnetural)

    const blockTitle = document.createElement('div')
    blockTitle.classList.add('block-heading__title')
    const div2 = document.createElement('div')
    const h2 = document.createElement('h2')
    h2.textContent= data.customer.head
    blockHeading.appendChild(blockTitle)
    blockTitle.appendChild(div2)
    div2.appendChild(h2)

    const col2El = document.createElement('div')
    col2El.classList.add('col')
    document.getElementById('slot-5').appendChild(col2El)


    const carousel = document.createElement('div')
    col2El.appendChild(carousel)
    carousel.classList.add('carousel')
    const carouselEl = document.createElement('div')
    carouselEl.classList.add('carousel','carousel__indicator-media')
    const carouselSection = document.createElement('section')
    carouselSection.classList.add('carousel__section')
    const carouselControl = document.createElement('div')
    carouselControl.classList.add('carousel__controls','carousel__container')
    const carouselIndicators = document.createElement('ol')
    carouselIndicators.classList.add('carousel__indicators')
    carousel.appendChild(carouselEl)
    carouselEl.appendChild(carouselSection)
    carouselSection.appendChild(carouselControl)
    carouselControl.appendChild(carouselIndicators)
    data.customer.customerlist.forEach((item,idx)=>{
        const li = document.createElement('li')
        carouselIndicators.appendChild(li)
        const indicatorItem = document.createElement('a')
        indicatorItem.classList.add('carousel__indicators-item')
        const carouselMedia = document.createElement('div')
        carouselMedia.classList.add('carousel__indicators-item--container','carousel__indicators-type--media')
        
        carouselMedia.addEventListener('click',()=>{
            document.querySelectorAll('.indicator').forEach(button=>{
                button.classList.remove('active')
            })
            mediaIndicators.classList.add('active')
            document.querySelectorAll('.carousel__slide').forEach(panel=>{
                panel.style.display='none'
            })
            const targets = document.getElementById(`slide${idx}`)
            if(targets){
                targets.style.display='block'
                targets.scrollIntoView({
                    behavior:'smooth'
                })
            }
        })
        const itemMedia = document.createElement('div')
        itemMedia.classList.add('carousel__indicators-item__media')
        carouselMedia.appendChild(itemMedia)
        const mediaratio = document.createElement('div')
        mediaratio.classList.add('media','media--ration-21-9')
        const mediaAsset = document.createElement('div')
        mediaAsset.classList.add('ocr-img','media__asset')
        const Imagehp = document.createElement('img')
        Imagehp.src=item

        
        li.appendChild(indicatorItem)
        indicatorItem.appendChild(carouselMedia)
        itemMedia.appendChild(mediaratio)
        mediaratio.appendChild(mediaAsset)
        mediaAsset.appendChild(Imagehp)

        const mediaIndicators = document.createElement('div')
        mediaIndicators.classList.add('indicator')
        carouselMedia.appendChild(mediaIndicators)
        mediaIndicators.classList.remove('active')
    })
    const carouselWindow= document.createElement('div')
    carouselWindow.classList.add('carousel__window','hide-scrollbar')
    const carouselContainer = document.createElement('div')
    carouselContainer.classList.add('carousel__container','layout','layout--overflow')
    carouselSection.appendChild(carouselWindow)
    carouselWindow.appendChild(carouselContainer)
    data.customer.movelist.forEach((items,idx1)=>{
        const slider = document.createElement('div')
        slider.classList.add('carousel__slide','layout__col')
        slider.id=`slide${idx1}`
        carouselContainer.appendChild(slider)
        const card = document.createElement('div')
        card.classList.add('testimonial-card')
        slider.appendChild(card)
        //scrolling

        const cardMedia = document.createElement('div')
        cardMedia.classList.add('testimonial-card__media','order-md-1','col-6','col-md-6','col-lg-12')
        card.appendChild(cardMedia)
        const mediabefore = document.createElement('div')
        mediabefore.classList.add('media')
        const mediaAsset = document.createElement('div')
        mediaAsset.classList.add('ocr-img','media__asset')
        const imageshp2 = document.createElement('img')
        imageshp2.src = items.image
        cardMedia.appendChild(mediabefore)
        mediabefore.appendChild(mediaAsset)
        mediaAsset.appendChild(imageshp2)

        const cardCOntent = document.createElement('div')
        cardCOntent.classList.add('testimonial-card__content','col-6','col-md-6','col-lg-12')
        card.appendChild(cardCOntent)

        const cardBody = document.createElement('div')
        cardBody.classList.add('testimonial-card__body')
        cardCOntent.appendChild(cardBody)

        const cardQuote = document.createElement('div')
        cardQuote.classList.add('testimonial-card__quote')
        cardBody.appendChild(cardQuote)
        const mediaContent = document.createElement('div')
        mediaContent.classList.add('testimonial-card__content-media')
        cardQuote.appendChild(mediaContent)
        const insidemedia = document.createElement('div')
        insidemedia.classList.add('media')
        mediaContent.appendChild(insidemedia)
        const ocrIMage1 = document.createElement('div')
        ocrIMage1.classList.add('ocr-img','media__asset')
        insidemedia.appendChild(ocrIMage1)
        const imagehp2 = document.createElement('img')
        imagehp2.src=items.media
        ocrIMage1.appendChild(imagehp2)

        const div3 = document.createElement('div')
        cardQuote.appendChild(div3)
        const h4 = document.createElement('div')
        h4.classList.add('d-block','h4')
        h4.textContent=items.head
        div3.appendChild(h4)

        const cardFooter = document.createElement('div')
        cardFooter.classList.add('testimonial-card__footer')
        cardBody.appendChild(cardFooter)
        const productsCard = document.createElement('div')
        productsCard.classList.add('testimonial-card__products')
        cardFooter.appendChild(productsCard)

        const label = document.createElement('div')
        label.classList.add('label')
        productsCard.appendChild(label)
        const h3 = document.createElement('h3')
        const h6 = document.createElement('span')
        h6.classList.add('d-block','h6')
        h6.textContent=items.products
        label.appendChild(h3)
        h3.appendChild(h6)

        const blockSlim = document.createElement('div')
        blockSlim.classList.add('block-slim')
        productsCard.appendChild(blockSlim)

        const ul = document.createElement('ul')
        ul.classList.add('block-items-list')
        blockSlim.appendChild(ul)
        const blockitems = document.createElement('li')
        blockitems.classList.add('block-items-list__item')
        ul.appendChild(blockitems)
        
        data.customer.github.forEach((itemm,idx2)=>{
            const listItem = document.createElement('div')
            listItem.classList.add('list-item')
            const inner = document.createElement('div')
            inner.classList.add('list-item__inner','d-flex')
            const leading = document.createElement('div')
            leading.classList.add('list-item__leading')
            inner.appendChild(leading)
            const dinline = document.createElement('div')
            dinline.classList.add('ocr-icon','d-inline-flex')
            const mediaAAset = document.createElement('div')
            mediaAAset.classList.add('ocr-img','media__asset')
            const image23 = document.createElement('img')
            image23.src = itemm.image
            blockSlim.appendChild(listItem)
            listItem.appendChild(inner)
            inner.appendChild(leading)
            leading.appendChild(dinline)
            dinline.appendChild(mediaAAset)
            mediaAAset.appendChild(image23)
            

            const itemContent = document.createElement('div')
            itemContent.classList.add('list-item__content','flex-grow-1','d-flex','flex-column')
            inner.appendChild(itemContent)
            const base = document.createElement('div')
            base.classList.add('fg--base-strong','label','list-item__content-title')
            const mb0 = document.createElement('div')
            mb0.classList.add('mb-0')
            const div5 = document.createElement('div')
            const a = document.createElement('a')
            a.classList.add('ms-rte-link')
            a.textContent=itemm.git
            itemContent.appendChild(base)
            base.appendChild(mb0)
            mb0.appendChild(div5)
            div5.appendChild(a)
        })



        const div4 = document.createElement('div')
        cardFooter.appendChild(div4)
        const groupBUtoon = document.createElement('div')
        groupBUtoon.classList.add('button-group')
        div4.appendChild(groupBUtoon)
        const btn = document.createElement('a')
        btn.classList.add('btn')
        groupBUtoon.appendChild(btn)
        const btnText = document.createElement('span')
        btnText.classList.add('btn__text')
        btn.appendChild(btnText)
        btnText.textContent=items.btn

        
    })
    const ActionD = document.createElement('div')
    col2El.appendChild(ActionD)
    ActionD.classList.add('action','d-contents')
   
    
    const linkA = document.createElement('a')
    linkA.classList.add('link')
    ActionD.appendChild(linkA)
    const spanBtn = document.createElement('span')
    spanBtn.classList.add('btn','btn--icon-only','btn--sm')
    linkA.appendChild(spanBtn)

    const glphBtn = document.createElement('span')
    glphBtn.classList.add('glph-prepend')
    spanBtn.appendChild(glphBtn)

    const linkText = document.createElement('div')
    linkText.classList.add('link__text')
    linkText.textContent = data.customer.btn
    linkA.appendChild(linkText)
}
