import { container1 } from './container1.js'
import { container2 } from './container2.js'
import { container3 } from './container3.js'
import { container4 } from './container4.js'
import { container5 } from './container5.js'
import { container6 } from './container6.js'
import { container7 } from './container7.js'
import { container8 } from './container8.js'
import { container9 } from './container9.js'
import { container10 } from './container10.js'
import { container11 } from './container11.js'
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
        container5(data)
        container6(data)
        container7(data)
        container8(data)
        container9(data)
        container10(data)
        container11(data)
})

