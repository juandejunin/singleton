
/* El patrón de diseño Singleton (instancia única) está diseñado para restringir la creación de objetos pertenecientes
a una clase o el valor de un tipo a un único objeto. Su intención consiste en garantizar que una clase sólo tenga una
instancia y proporcionar un punto de acceso global a ella. No se encarga de la creación de objetos en sí,
 sino que se enfoca en la restricción en la creación de un objeto. */

//crear una clase que se llame singleton
class Singleton{
//crear un constructor 
    constructor(){
        //Evaluar si instance existe, en caso que si retornar instance en caso que no crearlo
        console.log('entrando al constructor')
        if(Singleton.instance){
            console.log('ya existe')
            return Singleton.instance
        }
        //relacionarlo a si mismo
        console.log('no existe y se crea')
        Singleton.instance = this
    }

}

const singleton = new Singleton()
const singleton2 = new Singleton()