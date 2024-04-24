import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface Inmueble {
  id: number;
  nombre: string;
  imagen: string;
  descrip: string;
  descripcion: string;
}

@Component({
  selector: 'app-inmueble',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inmueble.component.html',
  styleUrl: './inmueble.component.css'
})
export class InmuebleComponent {
  info: Inmueble[] = [
    {
      id: 1,
      nombre: "Casa en la Moraleja",
      imagen: "assets/CasaMoraleja.png",
      descrip: "Esta casa reformada en La Moraleja, con un cautivador estilo...",
      descripcion: "Esta casa reformada en La Moraleja, con un cautivador estilo moderno y una arquitectura impresionante, ofrece una experiencia de vida contemporánea y lujosa. Con un ascensor para mayor comodidad y una elegante zonda de bodega, esta propiedad redefine la elegancia. Además, su espectacular zona de barbacoa complementa perfectamente los espacios interiores, creando un ambiente ideal para el entretenimientos y el disfrute al aire libre. Tiene NOvecientos treita metros construidos sobre la parcela de 2600 metros para que si no quieres no tengas ni que cruzarte con tus familiares en meses. En la planta principal se ubican las zonas comunes con un elegante y amplísimo salón de 72 m2 en el que cabría perfectamente el piso enano en el que vives ahora. También cuenta con una cocina con isla central comunicada con el comedor y que verás desde lejos porque pudiendo permitirte esta casa no creo que cocines en tu vida ya que de eso se ocupara el servicio incluido con la casa y que en caso de fallecimiento se procederá a enterrarles con usted con nuestro paquete especial Creete un Faraón. El garaje, tiene capacidad para 4 coches en su interior."
  },
  {
      id: 2,
      nombre: "Casa en Colmenar Viejo",
      imagen: "assets/CasaColmenarViejo.png",
      descrip: "Magnífico Chalet pareado en venta en Colmenar Viejo. El Mirador...",
      descripcion: "Magnífico Chalet pareado en venta en Colmenar Viejo. El Mirador de Madrid. Situado en una exclusiva urbanización cerrada, este inmueble ofrece un estilo de vida de lujo y comodidad. Con zonas comunes que incluyen piscina, zona verde y gimnasio. Podrás disfrutar de momentos de relax y diversión en tu propio hogar. La casa cuenta con tres plantas, ofreciendo amplios espacios para toda la familia. En la planta baja, encontrarás un hall que te dará la bienvenida a un luminoso salón-comedor de 40m2. Perfecto para reuniones y celebraciones. La cocina americana moderna te permitirá preparar deliciosas comidas mientras interactúas con tus invitados. Además, podrás disfrutar de una terraza y un amplio jardín, ideal para tomar el sol o disfrutar de una barbacoa. En la primera planta, encontrarás tres dormitorios amplios, todos con múltiples armarios empotrados para almacenamiento adicional. Hay dos baños completos, uno de ellos en suite para que no tengas que esperar a que tus familiares terminen de hacer sus cosas. Ven y disfruta de esta maravillosa casa y de los atascazos que se forman todas las mañanas si quieres bajar a Madrid."
  },
  {
      id: 3,
      nombre: "Casita humilde",
      imagen: "assets/CasaHumilde.jpg",
      descrip: "Esta casa no es solo un hogar, es una experiencia. Con una piscina...",
      descripcion: "Esta casa no es solo un hogar, es una experiencia. Con una piscina que parece más grande que la de tu vecindario entero, y un jardín tan grande que necesitarás un GPS para encontrar a tus invitados perdidos. ¿Quién necesita vecinos cuando tienes un cine en casa con palomitas de maíz ilimitadas y un mayordomo que te trae el control remoto? Y no te preocupes por la hipoteca, ¡porque si puedes pagar esta casa, seguramente puedas pagar la Luna también!"
  },
  {
    id: 4,
    nombre: "La Casa que te puedes permitir",
    imagen: "assets/CasaRuinas.jpg",
    descrip: "¿Buscas una casa con carácter? ¡Esta casa tiene tanto carácter que...",
    descripcion: "¿Buscas una casa con carácter? ¡Esta casa tiene tanto carácter que podrías escribir una novela sobre ella! Con ventanas rotas que ofrecen vistas panorámicas del vecindario, y un techo que te da la bienvenida con el que puedes ver perfectamente el firmamento de las estrellas por la noche o sentir en primera mano las goteras en cada lluvia. Esta casa es perfecta para aquellos que buscan una experiencia auténtica de vida urbana, donde cada día es una aventura para sobrevivir. ¡Incluso incluye un jardín salvaje donde puedes cultivar lo que quieras si no te ataca ningún ser salvaje que habite por allí!"
  },
  ];
 
}
