interface Radio{
    switchRadios(trigger:boolean): void 
}

interface Battery{
    checkBatteryStatus(): void
}

interface RadioWithBattery extends Radio{
    checkBatteryStatus(): void
}

class Car implements Radio {
    switchRadios(trigger:boolean) {

    }
}

class Cellphone implements RadioWithBattery {
    switchRadios(trigger:boolean) {
        
    }
    checkBatteryStatus() {

    }
}