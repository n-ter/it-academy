class electricalAppliance {
    constructor(name, switchOn, wh, size){
        this.name = name
        this.switchOn = switchOn || false
        this.wh = wh
        this.size = size
    }
    getName(){
        return this.name
    }
    getSwitchOn(){
        return this.switchOn
    }
    getWH(){
        return this.wh
    }
    getSize(){
        return this.size
    }
}

const applianceFactory = {
    makeAppliance : (name, switchOn, wh, size) => new electricalAppliance(name, switchOn, wh, size)
}

const tv = applianceFactory.makeAppliance('телевизор', false, 100, 'middle')
const kettle = applianceFactory.makeAppliance('чайник', false, 2000, 'little')
const fridge = applianceFactory.makeAppliance('холодильник', true, 700, 'big')


let consumesPerDay = function (appliance, h){
    console.log(appliance.getName(), "потребляет в день: " , (appliance.getWH() * h),"W")
}

consumesPerDay(tv, 5)
consumesPerDay(kettle, 0.3)
consumesPerDay(fridge, 24)
