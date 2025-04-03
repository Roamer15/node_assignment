import {EventEmitter} from 'events'

const event = new EventEmitter()
const rate = 90

const overload = () => {
    console.log(`Your system is overloaded at ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`)
}

event.on('overload', overload)
setInterval(() => {
    if(rate>80){
        event.emit('overload')
    }
    else
    console.log(`System at normal rate: ${new Date()}`)
},1000)

