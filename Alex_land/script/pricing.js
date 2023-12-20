// Pricing

const pricingBox = document.querySelector('.pricing__box');
const pricingItem = pricingBox.querySelectorAll('.pricing__item');

let pricingView = pricingBox.querySelector('.pricing__view');
let pricingViewTitle = pricingView.querySelector('.pricing__view-title');
let pricingViewInfo = pricingView.querySelector('.pricing__view-info');
let pricingViewImg = pricingView.querySelector('.pricing__view-img');

setPricingViewText(pricingBox);


pricingItem.forEach(element => {
    element.addEventListener('click', function (e) {
        searchOpenItem(pricingItem, element);
    });
});

function searchOpenItem(pricingItem, clickElem) {
    pricingItem.forEach(element => {
        let clickItemDetail = clickElem.querySelector('.pricing__details');
        let elementDetail = element.querySelector('.pricing__details');
        if (!clickItemDetail.getAttributeNames().includes('open')) {
            if (element != clickElem && elementDetail.getAttributeNames().includes('open')) {
                elementDetail.removeAttribute('open');
                pricingViewImg.src = clickItemDetail.getAttribute('data-img');
                setPricingViewText(clickElem);
            }

        } else {
            if (clickElem != pricingItem[pricingItem.length - 1]) {
                const nextEl = clickElem.nextElementSibling;
                let nextItem = nextEl.querySelector('.pricing__details');
                nextItem.setAttribute('open', '');
                setPricingViewText(nextEl);
            } else {
                let nextItem = pricingItem[0].querySelector('.pricing__details');
                nextItem.setAttribute('open', '');
                setPricingViewText(pricingItem[0]);
            }


        }
    });

}

function setPricingViewText(item) {
    const pricingItem = item.querySelector('.pricing__details');
    pricingViewImg.src = pricingItem.getAttribute('data-img');
    pricingViewTitle.textContent = pricingItem.getAttribute('data-title');
    pricingViewInfo.textContent = pricingItem.getAttribute('data-info');
}


