// 3. Polymorphism and Interfaces:
// Define an interface Playable with a method play(). Create classes Music and Movie that implement the Playable interface and provide their own implementation of the play() method. Then, create a function that takes an array of objects implementing the Playable interface and invokes the play() method on each object. This demonstrates the concept of polymorphism, where different classes can be treated interchangeably based on their shared interface.

class Playable {
    constructor(sound) {
        this.sound = sound
    }
    play() {
        return `Playable ${this.sound} is playing.`
    }
}

class Music extends Playable {
    constructor(sound) {
        super(sound)
    }
    play() {
        return `Music ${this.sound} is playing.`
    }
}

sound1 = new Playable('Soft music');
console.log(sound1.play());


sound2 = new Music('Rock music');
console.log(sound2.play());