class Animal{
    protected voice(sound: string): void {
        console.log(sound)
    }

    protected run(animal: string): void {
        console.log(`${animal} is running`)
    }
}

class Dog extends Animal{
    private sayGav(): void {
        this.voice('Гав');
    }

    public seeCat(): void {
        this.sayGav();
    }
}

class Cat extends Animal{
    public seeDog(){
        this.run('Cat');
    }
}

const redCat = new Cat();
redCat.seeDog();

const blackDog = new Dog();
blackDog.seeCat();