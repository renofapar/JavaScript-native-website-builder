import image from './assets/image/7826.jpg'
import {TitleBlock, ImageBlock, ColumnsBlock, TextBlock} from './classes/Blocks'

const text = 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. То обеспечивает рукопись что текст своих проектах заглавных? Бросил, переписывается.'

export const model = [

  new TitleBlock('Конструктор сайтов на JavaScript', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(176,231,3,1) 35%, rgba(0,212,255,1) 100%)',
      color: '#fff',
      padding: '1.5rem',
      'text-align': 'center'
    } 
  }),

  new ImageBlock(image, {
    styles: {
      display: 'flex',
      'justify-content': 'center',
      padding: '15px'
    },
    imagesStyles: {
      width: '500px',
      height: 'auto'
    },
    alt: 'alt image'
  }),

  new ColumnsBlock( [
    'Приложение на чистом JavaScripts',
    'Принципы SOLID(Надеюсь пойму)',
    'Очень надеюсь, что мне хватит сил на изучение JS',
  ], {
    styles: {
      background: '#eee',
      padding: '2rem',

    }
  }),

  new TextBlock(text, {
    styles: {
      padding: '10px',
      'font-size': '16px',
      'font-weight': 'bold'
    }
  })

]