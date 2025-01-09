export function container3(data){
    const background= document.createElement('div')
    background.classList.add('ocr-img','media__asset')
    const picture = document.createElement('picture')
    const backgroundimg = document.createElement('img')
    backgroundimg.src = data.navigation.backgroundone.src
    picture.appendChild(backgroundimg)
    background.appendChild(picture)
    document.getElementById('section-master__image1').appendChild(background)
   // console.log(background)

   const colMake = document.createElement('div')
   colMake.classList.add('col')
   const layout = document.createElement('div')
   layout.classList.add('layout','section-master__layout')
   const layoutCol = document.createElement('div')
   layoutCol.classList.add('layout-col')

   const sectionmaster = document.createElement('div')
   sectionmaster.classList.add('section-master__layout-header')

   const blockHeading = document.createElement('div')
   blockHeading.classList.add('block-heading')
   blockHeading.id='block-heading'

   sectionmaster.appendChild(blockHeading)
   layoutCol.appendChild(sectionmaster)
   layout.appendChild(layoutCol)
   colMake.appendChild(layout)
   document.getElementById('row').appendChild(colMake)


   const neutralHigh = document.createElement('div')
   neutralHigh.classList.add('fg--neutral-hightlight','block-heading__eyebrow','block-headibg--size')
   const tokentext = document.createElement('div')
   tokentext.classList.add('token-text-1')
   tokentext.textContent = data.navigation.rowtokenhead
   neutralHigh.appendChild(tokentext)
   //console.log(neutralHigh)
   document.getElementById('block-heading').appendChild(neutralHigh)


   const blockHeadingtitle = document.createElement('div')
   blockHeadingtitle.classList.add('block-heading__title')
   const 
   tokenText1= document.createElement('div')
   
   tokenText1.classList.add('token-text')
   const h2 = document.createElement('h2')
   h2.textContent = data.navigation.rowtokentext

   //console.log(h2)
   
   tokenText1.appendChild(h2)
   blockHeadingtitle.appendChild(tokenText1)
   document.getElementById('block-heading').appendChild(blockHeadingtitle)

   //console.log(blockHeadingtitle)
   

   const col = document.createElement('div')
   col.classList.add('col')
   const threeCard = document.createElement('div')
   threeCard.classList.add('three-up-cards','layout','layout--col-3')

   col.appendChild(threeCard)
   document.getElementById('slot').appendChild(col)
   data.navigation.cards.forEach(item=>{
        const card= document.createElement('div')
        card.classList.add('three-up-cards__card','layout__col')
        threeCard.appendChild(card)

        const cards= document.createElement('div')
        cards.classList.add('card')
        card.appendChild(cards)

        const mediacard = document.createElement('div')
        mediacard.classList.add('card__media')
        const contentCard = document.createElement('div')
        contentCard.classList.add('card__content')

        cards.appendChild(mediacard)
        cards.appendChild(contentCard)

        const mediaimage = document.createElement('div')
        mediaimage.classList.add('media','media--ratio-21-9','rounded-m','img-fluid')
        const ocrImage = document.createElement('div')
        ocrImage.classList.add('ocr-img','media__asset')
        const image = document.createElement('img')
        image.src=item.media
       // console.log(image)
       ocrImage.appendChild(image)
       mediaimage.appendChild(ocrImage)
       mediacard.appendChild(mediaimage)

       const blockfeature = document.createElement('div')
       blockfeature.classList.add('block-feature','d-flex','align-items-start')
       const blockSLim = document.createElement('div')
       blockSLim.classList.add('block-slim')

       contentCard.appendChild(blockfeature)
       contentCard.appendChild(blockSLim)

       const topblockfeature= document.createElement('div')
       topblockfeature.classList.add('block-feature__top','d-flex','flex-row','align-items-start')
       const titleblockfeature = document.createElement('div')
       titleblockfeature.classList.add('block-feature__title')
       const tokentext2 = document.createElement('div')
       tokentext2.classList.add('token-text')
       const h3= document.createElement('h3')
       const span = document.createElement('span')
       span.textContent = item.title

       h3.appendChild(span)
       tokentext2.appendChild(h3)
       titleblockfeature.appendChild(tokentext2)
       topblockfeature.appendChild(titleblockfeature)
       blockfeature.appendChild(topblockfeature)

       const bodyblockfeature= document.createElement('div')
       bodyblockfeature.classList.add('block-feacture__body','d-flex','d-flex-column','align-items-start')
       const baseblockfeature = document.createElement('div')
       baseblockfeature.classList.add('base','block-feature__paragraph')
       const tokentext3=document.createElement('div')
       tokentext3.classList.add('token-text')
       tokentext3.textContent = item.para
        
       baseblockfeature.appendChild(tokentext3)
       bodyblockfeature.appendChild(baseblockfeature)

       blockfeature.appendChild(bodyblockfeature)

       const actionSlim=document.createElement('div')
       actionSlim.classList.add('action','d-contents')
       const linkA = document.createElement('a')
       linkA.classList.add('link')
       actionSlim.appendChild(linkA)
       blockSLim.appendChild(actionSlim)

       const btnspan = document.createElement('span')
       const linkspan = document.createElement('span')
       btnspan.classList.add('btn','btn--icon-only','btn--sm')
       linkspan.classList.add('link__text')
       linkspan.textContent=item.more
       const glphspan= document.createElement('div')
       glphspan.classList.add('glph-prepend')
       btnspan.appendChild(glphspan)

       linkA.appendChild(btnspan)
       linkA.appendChild(linkspan)

   })

}