const people = {
    salutation: 'Good Morning!',
    talk() {
        console.log(this.salutation)
    }
}
people.talk() // Chama o OBJ `people`  
const talk =  people.talk
talk()
const talkThePeople = people.talk.bind(people)
talkThePeople()