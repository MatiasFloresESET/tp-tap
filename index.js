class Instrumento {
  constructor (dbl){
    this.dbl = dbl;
  } 
  getDecibeles(){
    return this.dbl;
  } 
}
class Guitarra extends Instrumento{
  constructor(){
    super(15);
  }
  getNombre (){
    return this.nombre;
  }
}
class Bateria extends Instrumento{
  constructor(){
    super(20);
  }
  getNombre (){
    return this.nombre;
  }
}
  class Bajo extends Instrumento{
    constructor(){
      super(10);
    }  
    getNombre (){
    return this.nombre;
  }
  }
  class Teclado extends Instrumento{
    constructor(){
      super(20);
  }
    getNombre (){
    return this.nombre;
  }
}
const generos = {
  MASCULINO : "Masculino",
  FEMENINO : "Femenino",
  NOBINARIO : "NoBinario",
}
class Persona{
  constructor(nombre, apellido, edad,id){
    this.nombre = nombre;
    this.apellido = apellido;
    this.nombreCompleto = nombre + " " +apellido;
    this.edad = edad;
    this.id =  id;
  }  
  getNombre(){
    return this.nombre;
  }
  getApellido (){
    return this.Apellido;
  }
  getNombreYApellido(){
    return this.nombreCompleto;
  }
  getEdad (){
    return this.edad;
  }
  getGenero (){
    return this.genero;
  }
  }
////////     Organizador y Musico
class Organizador extends Persona{
 constructor(nombre, apellido, edad, id, genero){
   super(nombre, apellido, edad, id, genero);  
  }
}
class Musico extends Persona{
   constructor(nombre, apellido, edad, id, instrumento, genero){
    super(nombre, apellido,edad, id, genero)
    this.instrumento=instrumento;
   }
  getInstrumento(){
    return this.instrumento;
  }
  ///// cambiar instrumento////
  setNuevoInstrumento(instrumento){
    this.instrumento = instrumento;
  }
  getDecibelesQProducen() {
    return this.instrumento.getDecibeles();
  }
}
//instacia de los  instrumentos
let guitarra1 = new Guitarra();
let guitarra2 = new Guitarra();
let bajo1 = new Bajo();
let teclado1 = new Teclado ();
let bateria1 = new Bateria ();
let bateria2 = new Bateria();
console.log("Los decibeles del bajos son : " + bajo1.dbl);
console.log("Los decibeles de guitarra son : " + guitarra1.dbl);
/// amplificador
class Amplificador{
  constructor(dbl){
    this.dbl=dbl;
  }
  marshall(){
    return this.dbl*2;
  }
  fender(){
    return this.dbl*3;
  }
}
// instancias de los amplificadores
var amplificadorMarshall = new Amplificador(guitarra2.dbl);
console.log("amplificador marshall : " + amplificadorMarshall.marshall());
var amplificadorFender = new Amplificador("Ampli" +bajo1.dbl);
console.log(amplificadorFender.fender());
//instancia de los musicos y organizador
let musico0 = new Musico("Horacio", "Valenzuela", 35, 0, guitarra1 , generos.MASCULINO )
let organizador = new Organizador("Carlos", "Mendoza",37, 1, generos.MASCULINO )
console.log(musico0);

/////////     Bandas           ///////////////
const generoDeLasBandas = {
  ROCK : "Rock",
  POP: "Pop",
  INDIE : "Indie",
  PUNK: "Punk",
  ELECTRO : "Electro",
  COUNTRY : "Country",
  REGGAE : "Reggae",
}
//////// Array de Integrates
let musico1 = new Musico("John", "Lennon", 40, 0, guitarra1 , generos.MASCULINO )
let musico2 = new Musico("Paul", "McCartney",79, 1, bajo1 , generos.MASCULINO )
let musico3 = new Musico("Ringo", "Starr", 81, 2, bateria1 , generos.MASCULINO )
let musico4 = new Musico("George","Harrison", 58, 3, guitarra2 , generos.MASCULINO )
var integrantes= [];
integrantes.push(musico1,musico2, musico3,musico4);
//console.log(musico2);
//filtrar nombre completo
let nomComp = integrantes.map((x) => x.nombre + " "+x.apellido);
console.log(nomComp);

/////  array de instrumentos cree un array de instrumento para despues poder sacar los decibeles totales     //////////
var instrumentoDeMusico = [];
instrumentoDeMusico.push(guitarra1, guitarra2, bajo1, bateria1);
console.log(instrumentoDeMusico);
// cant de decibeles que produce
	let  cantdbl = instrumentoDeMusico.map((i) => i.dbl).reduce((a,b) =>{
    return a +b
  } );
console.log( "La cant total de dbl es : " + cantdbl);
//// cantidad de Integrantes
function cantIntegrantes(){
console.log("La cant de integrantes es :" + integrantes.length);
}
//remover integrante
function removerIntegrante(){
  let integranteNuevo =  integrantes.filter((i) => i.id != '1' );
  console.log(integranteNuevo);
}
//nuevo integrante
function nuevoIntegrante(){
let nuevoMusico = new Musico ("Tommy","Moore", 50, 4, bateria2, generos.MASCULINO);
integrantes.push(nuevoMusico);
console.log(integrantes);
}
class Bandas {
 constructor(nombre,paisOrigen ,fechaDeInicio,fechaDeSeparacion,cuantoHaceQueTocan){
    this.nombre = nombre ;
    this.paisOrigen = paisOrigen;
    this.fechaDeInicio = fechaDeInicio;
    this.fechaDeSeparacion = fechaDeSeparacion;
    this.cuantoHaceQueTocan = cuantoHaceQueTocan;   
 }

  getNombre() {
    return this.nombre;
  }
  getGenero() {
    return this.genero;
  }
  getFechaDeInicio() {
  return this.fechaDeInicio;
  }
  getFechadeSeparacion() {
  return this.fechaDeSeparacion;
  }
  getPaisdeOrigen(){
    return this.paisOrigen;
  }
  getIntegrantes(){
    return integrantes;
  }infoBandas(){
console.log(  this.nombre + " es una banda oriunda de " + this.paisOrigen + ", conformada por " + integrantes.length + " integrantes . Iniciaron su carrera en el " + this.fechaDeInicio + " y se separaron en el  " + this.fechaDeSeparacion + ", tocaron durante " + this.cuantoHaceQueTocan +" anios y su genero es el " + generoDeLasBandas.ROCK) ;
 }
}
///// Años
let inicio = new Date('February 21 1960');
let separacion = new Date('April 10 1970');
let aniosTranscurridos =  separacion.getFullYear() - inicio.getFullYear();
console.log( aniosTranscurridos);
//// banda 1
 let banda1 = new Bandas ("The Beatles", "Reino unido",inicio.toDateString() ,separacion.toDateString(),aniosTranscurridos +" anios" ,generoDeLasBandas.ROCK);
banda1.infoBandas();


