import { data } from './data.js'

const createSectionSeparator = () => {
  const hr = document.createElement('hr')
  hr.classList.add('section-separator')

  return hr
}

const createProductListSection = (keyword, products) => {

  const section = document.createElement('div')
  section.classList.add('product-list-section')

  const introText = document.createElement('p')
  introText.classList.add('intro-text')
  introText.innerText = `The best ${keyword} of 2023 include the following`
  section.appendChild(introText)

  const productList = document.createElement('ol')
  productList.classList.add('product-list')

  products.forEach((product) => {
    const li = document.createElement('li')
    li.classList.add('product-li')
    productList.appendChild(li)

    const a = document.createElement('a')
    a.classList.add('product-li-link')
    a.setAttribute('href', product.page_url)
    li.appendChild(a)

    const p = document.createElement('p')
    p.classList.add('product-li-text')
    a.appendChild(p)

    const productTitle = document.createElement('span')
    productTitle.classList.add('product-li-title')
    productTitle.innerText = `the ${product.title?.split(new RegExp(/[–-]/))[0]} |`
    p.appendChild(productTitle)

    const bestDealTag = document.createElement('span')
    bestDealTag.classList.add('product-li-best-deal-tag')
    bestDealTag.innerText = " Today's best deal "
    p.appendChild(bestDealTag)

    const amazonLink = document.createElement('span')
    amazonLink.classList.add('product-li-marketplace-name')
    amazonLink.innerText = "Amazon.com"
    p.appendChild(amazonLink)
  })
  section.appendChild(productList)

  return section
}

const createMoreRecommendationsSection = (keywords) => {

  const section = document.createElement('div')
  section.classList.add('more-recommendations-section')

  const sectionHeading = document.createElement('p')
  sectionHeading.classList.add('section-heading')
  sectionHeading.innerText = 'MORE RECOMMENDATIONS'
  section.appendChild(sectionHeading)

  const keywordsRow = document.createElement('div')
  keywordsRow.classList.add('keywords-row')
  section.appendChild(keywordsRow)

  keywords.forEach((keywordName) => {
    const keyword = document.createElement('a')
    keyword.classList.add('keyword')
    keyword.innerText = keywordName
    keyword.setAttribute("href", "#")
    keywordsRow.appendChild(keyword)
  })

  return section
}

const createInputSection = () => {

  const section = document.createElement('div')
  section.classList.add('input-section')

  const sectionHeading = document.createElement('p')
  sectionHeading.classList.add('section-heading')
  sectionHeading.innerText = 'INPUT YOUR OWN'
  section.appendChild(sectionHeading)

  const inputsContainer = document.createElement('div')
  inputsContainer.classList.add('inputs-container')
  section.appendChild(inputsContainer)

  const textField = document.createElement('input')
  textField.classList.add('text-field')
  textField.setAttribute('type', 'text')
  textField.setAttribute('placeholder', 'Type something...')
  inputsContainer.appendChild(textField)

  const searchBtn = document.createElement('button')
  searchBtn.classList.add('search-btn')
  searchBtn.innerText = 'Search'
  inputsContainer.appendChild(searchBtn)

  return section
}

const createProductsDiscoverBlock = (data) => {

  const productsDiscoverBlock = document.createElement('div')
  productsDiscoverBlock.classList.add('products-discover-block')

  const mainHeading = document.createElement('p')
  mainHeading.classList.add('main-heading')
  mainHeading.innerText = `Best ${data.keyword}`
  productsDiscoverBlock.appendChild(mainHeading)

  const productListSection = createProductListSection(data.keyword, data.products)
  productsDiscoverBlock.append(productListSection)

  productsDiscoverBlock.appendChild(createSectionSeparator())

  const moreRecommendationsSection = createMoreRecommendationsSection(data.relatedKeywords)
  productsDiscoverBlock.appendChild(moreRecommendationsSection)

  productsDiscoverBlock.appendChild(createSectionSeparator())

  const inputSection = createInputSection()
  productsDiscoverBlock.appendChild(inputSection)

  return productsDiscoverBlock
}

const createProductThumbnailSection = (product) => {

  const section = document.createElement('div')
  section.classList.add('product-thumbnail-section')

  const productImg = document.createElement('img')
  productImg.classList.add('product-img')
  productImg.setAttribute('src', product.img_small)
  section.appendChild(productImg)

  const productTitle = document.createElement('p')
  productTitle.classList.add('product-title')
  productTitle.innerText = product.title?.split(new RegExp(/[–-]/))[0]
  section.appendChild(productTitle)

  const productPrice = document.createElement('p')
  productPrice.classList.add('product-price')
  productPrice.innerText = `$${product.price}`
  section.appendChild(productPrice)

  return section
}

const createFeatureListSection = (features) => {

  const section = document.createElement('div')
  section.classList.add('feature-list-section')

  const featureList = document.createElement('ul')
  featureList.classList.add('feature-list')
  section.appendChild(featureList)

  features.forEach((feature) => {
    const li = document.createElement('li')
    li.classList.add('feature-li')
    featureList.appendChild(li)

    const p = document.createElement('p')
    p.classList.add('feature-li-text')
    p.innerText = feature?.split(new RegExp(/[–-]/))[0]
    li.appendChild(p)
  })

  return section
}

const createViewDealSection = (url) => {

  const section = document.createElement('div')
  section.classList.add('view-deal-section')

  const viewBtn = document.createElement('a')
  viewBtn.classList.add('view-btn')
  viewBtn.setAttribute('href', url)
  viewBtn.innerText = 'View Deal'
  section.appendChild(viewBtn)

  return section
}

const createProductDetailsBlock = (product) => {

  const productDetailsBlock = document.createElement('div')
  productDetailsBlock.classList.add('product-details-block')

  const productThumbnailSection = createProductThumbnailSection(product)
  productDetailsBlock.appendChild(productThumbnailSection)

  productDetailsBlock.appendChild(createSectionSeparator())

  const featureListSection = createFeatureListSection(product.pros)
  productDetailsBlock.appendChild(featureListSection)

  const viewDealSection = createViewDealSection(product.page_url)
  productDetailsBlock.appendChild(viewDealSection)

  return productDetailsBlock
}

const createAIWidget = (data) => {

  const AIWidget = document.createElement('div')
  AIWidget.classList.add('ai-widget')

  const productsDiscoverBlock = createProductsDiscoverBlock(data)
  AIWidget.appendChild(productsDiscoverBlock)

  const productDetailsBlock = createProductDetailsBlock(data.products[0])
  AIWidget.appendChild(productDetailsBlock)

  return AIWidget
}

const AIWidget = createAIWidget(data)
document.body.appendChild(AIWidget)

