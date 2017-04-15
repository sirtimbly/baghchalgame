/// <reference path='../typings/tsd.d.ts' />

'use strict'

import VueComponent from 'vue-class-component'

import GameBoard from './components/GameBoard'

require('./App.css')

@VueComponent({
  template: require('./App.html'),
  components: {
    Hello
  }
})
export default class {
}
