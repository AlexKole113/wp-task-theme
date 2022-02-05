const createCounterNumber = ({ visitors, imagesFromNumbers, containerCSSSelector }) => {
    const num = visitors.toString().padStart(6,'0');
    const htmlNum =  ([...num]).reduce( (acc, item) => acc + `<img src="${ imagesFromNumbers(item) }" alt="counter num" width="16" height="22" title="counter" />` , '' )
    document.querySelector(containerCSSSelector).innerHTML = htmlNum;
}

export default createCounterNumber;
