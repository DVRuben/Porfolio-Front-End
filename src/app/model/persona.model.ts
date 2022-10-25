export class Persona {
    id: number;
    nombre: string;
    position: string;
    img: string;
    presentation: string;

    constructor(nombre: string, position: string, img: string, presentation: string){
        this.nombre = nombre;
        this.position = position;
        this.img = img;
        this.presentation = presentation;
    }
}