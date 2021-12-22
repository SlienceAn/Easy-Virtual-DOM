import createElement from "./createElement.js";
import render from '../src/render.js'
import mount from "./mount.js";
const vRootApp = createElement('div', {
    attrs: {
        id: 'root'
    },
    children: [
        createElement('img', {
            attrs: {
                src: 'http://placekitten.com/200/300',
            },
            children: [
                createElement('div', {
                    attrs: {
                        class: 'nav'
                    }
                })
            ]
        })
    ]
})
const rootApp = render(vRootApp)
console.log(vRootApp)
console.log(rootApp)
mount(rootApp, document.getElementById('rootApp'))