import {model} from './model'
import './styles/style.css'

const $site = document.querySelector('#site')


model.forEach(block => {
    $site.insertAdjacentHTML('beforeend', block.toHTML())
})

