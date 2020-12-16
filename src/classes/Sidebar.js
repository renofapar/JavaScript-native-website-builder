import {block} from '../utils'
import {TextBlock, TitleBlock} from '../classes/Blocks'

export class Sidebar {
  constructor(selector, updateCallback) {
    this.$el = document.querySelector(selector)
    this.update = updateCallback

    this.init()
    
  }

  init() {
    this.$el.insertAdjacentHTML('afterbegin', this.template)
    this.$el.addEventListener('submit', this.addPrevDef.bind(this))
  }

  get template() {
    return block('sitebar')
  }

  addPrevDef(event) {
    event.preventDefault()

    const type = event.target.name

    const value = event.target.value.value 

    const styles = event.target.styles.value

    const newBlock = type === 'text' 
    ? new TextBlock(value, {styles})
    : new TitleBlock(value, {styles})
    this.update(newBlock)

    event.target.value.value = ''
    event.target.styles.value = ''
  }
}

