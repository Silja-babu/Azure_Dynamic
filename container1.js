export function container1(data){
    const mediaAsset = document.createElement('div')
    mediaAsset.classList.add("oct-img","media__asset")
    const Picture = document.createElement('picture')
    const AzureImage = document.createElement('img')
    AzureImage.classList.add('desktop')
    AzureImage.src = data.banner.Desktop.src
    Picture.appendChild(AzureImage)
    mediaAsset.appendChild(Picture)
    AzureImage.onload = function(){
        document.getElementById("section-master__image").appendChild(mediaAsset)
    }
    const Row = document.createElement('div')
    Row.classList.add("row")
    const Col = document.createElement('div')
    Col.classList.add("col")
    const Layout = document.createElement('div')
    Layout.classList.add("layout", "section-master__layout","section-master--layout-col-2")
    const layoutCol = document.createElement('div')
    layoutCol.classList.add("layout__col")
    const sectionMasterLayout = document.createElement('div')
    sectionMasterLayout.classList.add("section-master__layout-header")
    const BlockHeader = document.createElement('div')
    BlockHeader.classList.add("block-header")
    BlockHeader.id="block-header"
    sectionMasterLayout.appendChild(BlockHeader)
    layoutCol.appendChild(sectionMasterLayout)
    Layout.appendChild(layoutCol)
    Col.appendChild(Layout)
    Row.appendChild(Col)
    document.getElementById("container1").appendChild(Row)
    //console.log(Row)

    const rowSection = document.createElement('div')
    rowSection.classList.add("row","row-section")
    const Col2 = document.createElement('div')
    Col2.classList.add('col')
    rowSection.appendChild(Col2)
    document.getElementById("container1").appendChild(rowSection)


    const BlockHeadingEyebrow = document.createElement('div')
    BlockHeadingEyebrow.classList.add("fg--neutral-highlight","block-heading__eyebrow")
    BlockHeadingEyebrow.id="block-heading__eyebrow"
    const BlockHeadingtitle = document.createElement('div')
    BlockHeadingtitle.classList.add("block-heading__title")
    BlockHeadingtitle.id="block-heading__title"
    const BlockHeadingParagraph = document.createElement('div')
    BlockHeadingParagraph.classList.add("block-heading__paragraph")
    BlockHeadingParagraph.id="block-heading__paragraph"
    const BlockHeadingbtn = document.createElement('div')
    BlockHeadingbtn.classList.add("parsyn" ,"block-heading__slot")
    BlockHeadingbtn.id="block-heading__slot"
    document.getElementById("block-header").appendChild(BlockHeadingEyebrow)
    document.getElementById("block-header").appendChild(BlockHeadingtitle)
    document.getElementById("block-header").appendChild(BlockHeadingParagraph)
    document.getElementById("block-header").appendChild(BlockHeadingbtn)


    const tokenText = document.createElement('div')
    tokenText.classList.add("token-text")
    tokenText.textContent=data.banner.Innovation
    document.getElementById("block-heading__eyebrow").appendChild(tokenText)
    
    const tokenText1 = document.createElement('div')
    tokenText1.classList.add("token-text")
    const heading1 = document.createElement('h1')
    document.getElementById("block-heading__title").appendChild(tokenText1)
    tokenText1.appendChild(heading1)
    heading1.textContent = data.banner.aijourney

    const tokenText2 = document.createElement('div')
    tokenText2.classList.add("token-text")
    const Spantoken = document.createElement('span')
    document.getElementById('block-heading__paragraph').appendChild(tokenText2)
    tokenText2.appendChild(Spantoken)
    Spantoken.textContent = data.banner.parablock
    //console.log(tokenText2)

    const Slot = document.createElement('div')
    Slot.classList.add("parsyn", "block-heading__slot")
    const buttonGroup = document.createElement('div')
    buttonGroup.classList.add("button-group")
    buttonGroup.id="button-group"
    document.getElementById('block-heading__slot').appendChild(Slot)
    Slot.appendChild(buttonGroup)
    
    const btn = document.createElement('a')
    btn.classList.add("btn")

    const btn2 = document.createElement('a')
    btn2.classList.add("btn","btn--secondary")
     
    document.getElementById('button-group').appendChild(btn)
    document.getElementById('button-group').appendChild(btn2)

    btn.textContent = data.banner.btn
    btn2.textContent = data.banner.btnsecondary
}
