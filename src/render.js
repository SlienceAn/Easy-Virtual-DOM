//根據tagName使用document.createElement來建立實際的 DOM 物件，並且將attrs 一個一個setAttribute到實際的DOM元素上；
//最後再將 `children` 遞迴丟入 `renderElem` 函數中，將所有小孩的實際 DOM object 都建立好並 `appendChild` 到上層的實際 DOM 物件上，
//最後將完整的 real DOM object 回傳出去。
const renderElem = ({ tagName, attrs, children }) => {
    const elem = document.createElement(tagName)
    for (const [k, v] of Object.entries(attrs)) {
        console.log("k=", k)
        console.log("v=", v)
        elem.setAttribute(k, v)
    }
    for (const child of children) {
        console.log("child=", child)
        elem.appendChild(renderElem(child))
    }
    return elem;

}
//利用 `document.createTextNode` 來產生純 string 的元素，稍微修改
const render = (vNode) => {
    if (typeof vNode === 'string') {
        return document.createTextNode(vNode)
    }
    return renderElem(vNode)
}
export default render;