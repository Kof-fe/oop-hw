// class Laptop {
//   brandName;
//   model;
//   cpu;
//   memory;
//   storage;
//   battery;
//   price;

//   constructor(brandName, model, cpu, memory, storage, price) {
//     this.brandName = brandName;
//     this.model = model;
//     this.cpu = cpu;
//     this.memory = memory;
//     this.storage = storage;
//     this.price = price;
//   }
//   getInfo() {
//     console.log(`
//     Laptop Brand: ${this.brandName}
//     Laptop Model: ${this.model}
//     Laptop CPU: ${this.cpu}
//     Laptop Memory: ${this.memory}
//     Laptop Storage: ${this.storage}
//     Laptop Price: $${this.price}
//     `);
//   }
// }

// const myLaptop = new Laptop(
//   "lenovo",
//   "Legion Pro 7i",
//   "13th Generation Intel Core",
//   "16GB DDR5",
//   "256GB SSD",
//   1499.99
// );

// myLaptop.getInfo();

// const myname = "koffe";
// const age = 17;
// const subject = "JS";
// const hobby = "listening to music";

// console.log(`I am ${myname} and I am ${age} years old.`);
// console.log(`I'm studying ${subject} and I like ${hobby}.`);

// class person{
//     name;
//     age;
//     gender;
//     weight;
//     height;
//     hobbies;
//     dob;
//     life

//     constructor(name, age, gender, weight, height, hobbies, dob, life){
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.weight = weight;
//         this.height = height;
//         this.hobbies = hobbies;
//         this.dob = dob;
//         this.life = life
//     }

//     isAdult(){
//         if(this.age >= 18){
//             return true;
//         }
//         return false;
//     }

//     introduce(){
//         return `
//             I'm ${this.name} and I'm ${this.age} years old now.
//             I was born in ${this.dob} and I love ${this.hobbies}.
//             Gender: ${this.gender}
//             Weight: ${this.weight} lb
//             Height: ${this.height} ft
//             And I'm ${this.life}.
//         `
//     }
// }
// const koffe = new person(
//     "koffe",
//     17,
//     "male",
//     110,
//     5.5,
//     ["musics", "codes", "puzzles"],
//     "Feb 18 06",
//     "non-Single"
//     );
// console.log(koffe);
// console.log("Adult test: " + koffe.isAdult());
// console.log(koffe.introduce());






// *Smart Phone HW

class Smartphone{

    app;        // use 'root' for initial
    memory;     // for detail usage
    wifi;       // use 'off' as default
    user;
    brand;
    model;
    os;
    rom;
    screen_size;
    battery_capacity;
    camera;
    cpu;
    ram;        // for information
   
    
    

    constructor(app, memory, wifi, user, brand, model, os, rom, screen_size, battery_capacity, camera, cpu, ram){
        this.app = app;
        this.memory = memory;
        this.wifi = wifi;
        this.user = user;
        this.brand = brand;
        this.model = model;
        this.os = os;
        this.rom = rom;
        this.screen_size = screen_size;
        this.battery_capacity = battery_capacity;
        this.camera = camera;
        this.cpu = cpu;
        this.ram = ram;
    }

    hello(){
        console.log(`
Hello, I am your device's assistant. Here are specifications for your phone...

User Name: ${this.user}
Device:    ${this.brand} ${this.model}
OS:        ${this.os}
ROM:       ${this.rom} GB
RAM:       ${this.ram} GB
CPU:       ${this.cpu}
Battery:   ${this.battery_capacity} mAh
Camera:    ${this.camera} MP
Screen:    ${this.screen_size} inches
        `);

     
    }
    

    charge(){
        let y = Math.floor(Math.random() * 101);
        if(y < 100){
            console.log(`Charging... ${y}%`);
        }else{
            console.log("Battery fully charged.");
        }
    }

    check_storage(){
        console.log(`Storage ${this.rom} GB available.`);
 
    }

    wifi_switch(key){
        this.wifi = key;
        if(this.wifi === "on"){
            console.log("Wifi online! update available...continue?");
        }else if(this.wifi === "off"){
            console.log("Wifi not availlable.");}
    }

    cam(){
        if(this.rom < 50){
            console.log(`Camera ready! Storage running out, ${this.rom} GB free...continue?`);
        }else{
            console.log(`Camera ready! ${this.rom} GB free.`);           
        }

        
    }

    install(appx){
    if(this.wifi === "on"){
        if(this.memory >= 1000 && this.rom >= 20){
            this.app.push(appx);
            this.memory = this.memory - 800;
            this.rom = this.rom - 25;
            console.log(`${appx} Installed`);
        }else{
            console.log("Not enough space...");
        }
    }else{
        console.log("[No Internet]");
    }
    }

    uninstall(){
        this.app.pop();
        this.memory = this.memory + 800;
        this.rom = this.rom + 25;
    }

    reset(){
        this.app.length = 1;
        this.memory = 8056;
        this.rom = 256;
        console.log("[Reset Complete]");
    }

    apps(){
        console.log("running apps...");
        for(let i=0; i<this.app.length; i++){
            console.log(`:${this.app[i]}`);
        }
    }
}

// You can change specifications
let koffe = new Smartphone(["root"], 8056, "off", "Koffe", "Techno", "Spark 10 Pro", "Android 13", 256, 6.8, 5000, 50, "Octa-core (2x2.0 GHz Cortex-A75 & 6x1.8 GHz Cortex-A55)", 8);

// *Functions
// hello()          // shows information
// charge()         // charge the phone
// wifi_switch(x)   // turn wifi on or off
// install(x)       // install apps
// uninstall()      // uninstall the last app you installed
// apps()           // check the apps you've installed
// check_storage()  // check storage
// reset()          // reset apps
// cam()            // run camera

koffe.hello();
