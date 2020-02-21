///INHERITANCE///
//class Progrise{
//    constructor(name, ability){
//    this.name=name;
//    this.ability=ability;
//    }
//
//    create(color){
//        console.log(`${this.name}'s color is ${color}`);
//    }
//
//}

//class Progrise2 extends Progrise {
//    constructor(name, ability, ability2){
//        super(name, ability);
//        this.ability2 = ability2;
//    }
//
//    attack(whatdoes){
//        console.log(`${this.name}'s final attack is a ${whatdoes}.`)
//    }
//
//}

//let p1 = new Progrise ("Rising Hopper", "Jump");
//let q1 = new Progrise2 ("Shooting Wolf", "Bullet")


//p1.create("Yellow");
//q1.attack("Rider Shoot")
/////////////////

///POLYMORPHISM///

//p1 = q1;
//p1.create("BLUE");

/////////////////

///ERRORHANDLING///
try{
    let y = 5/0;
}catch(e){
    console.log("Dividing by 0 is undefined/")
}finally{
    console.log("this block will always execute.")
}

//////////////////