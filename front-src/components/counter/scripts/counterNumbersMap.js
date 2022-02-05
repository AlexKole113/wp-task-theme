const counterNumbersMap = (num) => {
    const numsMap = new Map([
        ['0', `https://alex-kole.com/test/0.jpg`],
        ['1', `https://alex-kole.com/test/1.jpg`]
        // 2,3,4,5,6,7,8,9 - need SVG
    ])
    return numsMap.get(num);
}
export default counterNumbersMap;
