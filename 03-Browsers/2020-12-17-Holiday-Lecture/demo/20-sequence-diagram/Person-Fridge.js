/* person example without fridge, lamp and bag implementation*/
class Person {

    constructor(name){
        this.name = name
    }

    eat(fridge, food){

        fridge.open();
        fridge.lamp.turnOn();
        fridge.get(item);
        fridge.close();
        fridge.lamp.turnOff();
        console.log(`I just ate that: ${food}`);
        return;
    }

    putItemIntoFridge(fridge, bag){

        const item = bag.getItem(someItem);
        fridge.open();
        fridge.lamp.turnOn();
        fridge.insert(item);
        fridge.close();
        fridge.lamp.turnOff();
        console.log(`The ${item} is now inside the fridge.`);

        return;
    }
}
