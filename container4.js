export function container4(data){
   const colEl = document.createElement('div')
   colEl.classList.add('col')

   document.getElementById('row-2').appendChild(colEl)

   const layoutEl = document.createElement('div')
   layoutEl.classList.add('layout','section-master__layout')
   const layoutcolEl = document.createElement('div')
   layoutcolEl.classList.add('layout__col')
    
   const layoutHeader = document.createElement('div')
   layoutHeader.classList.add('section-master__layout-header')

   const blockHeading = document.createElement('div')
   blockHeading.classList.add('block-heading','animation','animation--effect-2-scroll','block-heading--size-m','effect-on')

   const fgneural = document.createElement('div')
   fgneural.classList.add('fg--neutral','highlight','block-heading__eyebrow')
   blockHeading.appendChild(fgneural)

   const titleBlock = document.createElement('div')
   titleBlock.classList.add('block-heading__title')
   blockHeading.appendChild(titleBlock)

   const tokentext2 = document.createElement('div')
   tokentext2.classList.add('token-text-1')
   fgneural.appendChild(tokentext2)
   tokentext2.textContent = data.solution.blockHead
   //console.log(blockHeading)

   const divtitle = document.createElement('div')
   titleBlock.appendChild(divtitle)
   const h2title = document.createElement('h2')
   divtitle.appendChild(h2title)
   h2title.textContent = data.solution.blockTitle

   colEl.appendChild(layoutEl)
   layoutEl.appendChild(layoutcolEl)
   layoutcolEl.appendChild(layoutHeader)
   layoutHeader.appendChild(blockHeading)
   //console.log(colEl)


   const col2 = document.createElement('div')
   col2.classList.add('col')
   document.getElementById('slot-2').appendChild(col2)

   const pillBars = document.createElement('div')
   pillBars.classList.add('tabs-pill-bar','tabs','animation','animation--effect-2-scroll')
   col2.appendChild(pillBars)



   const Action = document.createElement('div')
   Action.classList.add('action','d-contents')
   col2.appendChild(Action)

   const link = document.createElement('a')
   link.classList.add('link')
   Action.appendChild(link)
   const btnspan = document.createElement('span')
   const lintspan = document.createElement('span')
   link.appendChild(btnspan)
   link.appendChild(lintspan)
   btnspan.classList.add('btn','btn--icon-only','btn--sm')
   lintspan.classList.add('link__text')

   const glphspan = document.createElement('span')
   btnspan.appendChild(glphspan)
   glphspan.classList.add('glph-prepend')
   lintspan.textContent = data.solution.view


   const Dcontent = document.createElement('div')
   Dcontent.classList.add('cmp-tabs','d-contents')
   pillBars.appendChild(Dcontent)

   const barpill = document.createElement('div')
   const rowpill = document.createElement('div')
   Dcontent.appendChild(barpill)
   Dcontent.appendChild(rowpill)
   barpill.classList.add('pill-bar')
   rowpill.classList.add('row')

   const col3 =document.createElement('div')
   col3.classList.add('col')
   const taboverflow = document.createElement('div')
   taboverflow.classList.add('tab-overflow')
   const tabwindow = document.createElement('div')
   tabwindow.classList.add('tab-window')
   const tabgroup = document.createElement('div')
   tabgroup.classList.add('tab-group')
   barpill.appendChild(col3)
   col3.appendChild(taboverflow)
   taboverflow.appendChild(tabwindow)
   tabwindow.appendChild(tabgroup)
  // console.log(barpill)

  data.solution.tabOverflow.forEach((item,idx)=>{
     const buttonEl = document.createElement('button')
     buttonEl.classList.add('pill-bar__item')
     buttonEl.id=`pill-bar-solution_tab${idx}-tab`
     //console.log(buttonEl)
     buttonEl.addEventListener('click',()=>{
       document.querySelectorAll('.pill-bar__item').forEach(button =>{
         button.classList.remove('active')
       })
       buttonEl.classList.add('active')
       const alltabpanels = document.querySelectorAll('.tab-panel')
       alltabpanels.forEach(panel=>{
        panel.style.display='none'
       })
       const corresponding = document.querySelectorAll(`#tabpanel-${idx}`);
      if (corresponding.length >0) {
          corresponding[0].style.display = 'block';
      } 

     })
     if(idx===0){
      buttonEl.classList.add('active')
     }
    
     tabgroup.appendChild(buttonEl)
     const spanpill = document.createElement('span')
     spanpill.classList.add('pill-bar__item__label')
     buttonEl.appendChild(spanpill)
     spanpill.textContent = item
  })
  
  const col4 = document.createElement('div')
  col4.classList.add('col')
  const panelgroup = document.createElement('div')
  panelgroup.classList.add('tab-panel-group')
  rowpill.appendChild(col4)
  col4.appendChild(panelgroup)

  data.solution.feature.forEach((item,idx)=>{
    const tabpanel = document.createElement('div')
    tabpanel.classList.add('tab-panel')
    tabpanel.id=`tabpanel-${idx}`
    panelgroup.appendChild(tabpanel)
   // console.log(tabpanel)
    const div = document.createElement('div')
    const animation = document.createElement('div')
    animation.classList.add('accordion','animation')
    const ocrVertical = document.createElement('div')
    ocrVertical.classList.add('ocr-accordion','accordion-verical')
    const height = document.createElement('div')
    height.classList.add('height')
    const accordion = document.createElement('ul')
    accordion.classList.add('accordion')
    height.appendChild(accordion)
    ocrVertical.appendChild(height)
    animation.appendChild(ocrVertical)
    div.appendChild(animation)
    tabpanel.appendChild(div)
    tabpanel.style.display='none'
    if(idx===0){
      tabpanel.style.display='block'
    }
    
   item.forEach((subitem,idx2)=>{
      const li =document.createElement('li')
      li.classList.add('ocr-accordion-item')
      accordion.appendChild(li)
       
      const indicator = document.createElement('span')
      indicator.classList.add('indicator','indicator--shape-pill')
      li.appendChild(indicator)
      const ocraccordion = document.createElement('div')
      ocraccordion.classList.add('ocr-accordion-item__content')
      li.appendChild(ocraccordion)

      const buttonGroup = document.createElement('div')
      buttonGroup.classList.add('button-group','button-group--stacked')
      const collapse = document.createElement('div')
      collapse.classList.add('collapse')
      ocraccordion.appendChild(buttonGroup)
      ocraccordion.appendChild(collapse)

      const ocrbutton = document.createElement('button')
      ocrbutton.classList.add('ocr-accordion-item__header','btn-collapse')
      const h3 = document.createElement('h3')
      h3.classList.add('h5')
      const div = document.createElement('div')
      div.textContent=subitem.title
      ocrbutton.addEventListener('click',()=>{
         document.querySelectorAll('.indicator').forEach(button=>{
          button.classList.remove('active')
          
         })
         document.querySelectorAll('.collapse').forEach(button=>{
          button.classList.remove('show')
         })
         document.querySelectorAll('.btn-collapse').forEach(button=>{
          button.classList.remove('btn-reverse')
         })
         indicator.classList.add('active')
         collapse.classList.add('show')
         ocrbutton.classList.add('btn-reverse')

      })
      if(idx2===0||idx2===5||idx2===8||idx2===12||idx2===15){
        indicator.classList.add('active')
        collapse.classList.add('show')
        ocrbutton.classList.add('btn-reverse')
      }
      
      buttonGroup.appendChild(ocrbutton)
      ocrbutton.appendChild(h3)
      h3.appendChild(div)
      
      const ocrbody = document.createElement('div')
      ocrbody.classList.add('ocr-accordion-item__body')
      const div1 = document.createElement('div')
      ocrbody.appendChild(div1)
      const div2 = document.createElement('div')
      div1.appendChild(div2)

      div2.textContent = subitem.para
      collapse.appendChild(ocrbody)

      const div3 = document.createElement('div')
      ocrbody.appendChild(div3)

      const actionD = document.createElement('div')
      actionD.classList.add('action','d-contents')
       
      div3.appendChild(actionD)

      const linka = document.createElement('a')
      linka.classList.add('link','link-inline')
      const linnkspan = document.createElement('span')
      linnkspan.classList.add('link__text')
      linnkspan.textContent=subitem.link
      linka.appendChild(linnkspan)
      actionD.appendChild(linka)

      const media = document.createElement('div')
      media.classList.add('media','media--pos-middle-middle')
      div3.appendChild(media)

      const ocrimag = document.createElement('div')
      ocrimag.classList.add('ocr-img','media__asset','rounded-1')
      const picture = document.createElement('picture')
      const img = document.createElement('img')
      img.src=subitem.media
      media.appendChild(ocrimag)
      ocrimag.appendChild(picture)
      picture.appendChild(img)

      const mediaslot =document.createElement('div')
      media.appendChild(mediaslot)
      mediaslot.classList.add('media__slot')
      const actioncontent = document.createElement('div')
      actioncontent.classList.add('action','d-contents')
      const btna = document.createElement('a')
      btna.classList.add('btn','btn--icon','btn--icon-only')
      const ocrdiv = document.createElement('div')
      ocrdiv.classList.add('ocr-icon','d-inline-flex')
      const glphyspan = document.createElement('span')
      glphyspan.classList.add('glyph-prepend','glyph-prepend-play-solid')
      ocrdiv.appendChild(glphyspan)
      btna.appendChild(ocrdiv)
      actioncontent.appendChild(btna)
      mediaslot.appendChild(actioncontent)



       

   })

  })

}