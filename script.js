import { container1 } from './container1.js'
import { container2 } from './container2.js'
import { container3 } from './container3.js'
import { container4 } from './container4.js'
import { head }  from './header.js'

fetch('data.json')
    .then(response => response.json())
    .then(data =>{
        //console.log(data)
        head(data)
        container1(data)
        container2(data)
        container3(data)
        container4(data)
})

