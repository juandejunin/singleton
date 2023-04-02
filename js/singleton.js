
/* El patrón de diseño Singleton (instancia única) está diseñado para restringir la creación de objetos pertenecientes
a una clase o el valor de un tipo a un único objeto. Su intención consiste en garantizar que una clase sólo tenga una
instancia y proporcionar un punto de acceso global a ella. No se encarga de la creación de objetos en sí,
 sino que se enfoca en la restricción en la creación de un objeto. */

//crear una clase que se llame singleton
class Singleton {
    //crear un constructor 
    constructor() {
        //Evaluar si instance existe, en caso que si retornar instance en caso que no crearlo
        console.log('entrando al constructor')
        if (Singleton.instance) {
            console.log('ya existe')
            return Singleton.instance
        }
        //relacionarlo a si mismo
        console.log('no existe y se crea')
        Singleton.instance = this
    }

}

class WeekDays {
    daysEs = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
    daysEn = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sanday"]

    constructor(lang) {
        this.lang = lang

        if (WeekDays.instance) {
            return WeekDays.instance
        }
        WeekDays.instance = this
    }

    getDays(){
        return this.lang === "es" ? this.daysEs : this.daysEn
         }
}

const weekDays = new WeekDays("en")
const weekDays2 = new WeekDays()

console.log(weekDays.getDays())