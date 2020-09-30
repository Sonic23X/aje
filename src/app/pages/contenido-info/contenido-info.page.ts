import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-contenido-info',
  templateUrl: './contenido-info.page.html',
  styleUrls: ['./contenido-info.page.scss'],
})
export class ContenidoInfoPage implements OnInit {

  constructor( 
    private modalCtrl: ModalController,
    private platform: Platform
  ) 
  {
    this.platform.backButton.subscribeWithPriority( 10, ( ) => 
    {
      this.dismiss( );
    });
  }

  ngOnInit() {
  }

  imagenes = 
  [
    '../assets/images/contenido/contenido_1.jpg',
    '../assets/images/contenido/contenido_2.jpg',
  ];

  contenidos =
  [
    `<p class="text-center">
    <h3>Al Estilo de Jesús</h3>
  </p>
  <p class="text-center">
    <h6>¿Qué es?</h6>
  </p>
  <p class="text-justify">
    Al Estilo de Jesús es un MODELO de discipulado obtenido de los evangelios, directamente del ejemplo de nuestro Señor, el cual nos permite aprender el proceso que llevó el Maestro para reproducirse en sus discípulos. Lo pusimos de manera sencilla para que cada creyente pueda entenderlo y aplicarlo fácilmente y de manera eficaz.
  </p>
  <p class="text-justify">
    Decidimos regresar a la Biblia como el único Manual confiable para el discipulado y tomamos a nuestro Señor como el referente por excelencia. Leímos una y otra vez su ejemplo en los evangelios para entender los principios detrás de las historias. Al estilo de Jesús, sale directamente de qué hizo y cómo formó discípulos nuestro Señor. No es algo que nosotros creamos y pretendemos que copies, se trata de los principios que nuestro Señor usó.
  </p>
  <p class="text-center">
    <h6>¿Por qué?</h6>
  </p>
  <p class="text-justify">
    Porque decidimos que la prioridad del Señor es nuestra prioridad, y que La Gran Comisión, es en verdad eso: LA GRAN COMISIÓN. Así que, nos tomamos en serio el mandato de Hacer Discípulos.
  </p>
  <p class="text-justify">
    Creemos en la urgencia de que una nueva generación de discípulos. No solo de congegantes, miembros ó asistentes al templo, sino discípulos reales. El mundo los necesita y el Reino los reclama. Es tiempo de que la Iglesia se esfuerce de nuevo en dar a luz, aquello para lo cual fue puesta en esta tierra. Es tiempo de SER Y HACER discípulos, Al Estilo de Jesús.
  </p>
  <hr>
  <p class="text-center">
    <h6>La Campaña de 50 Días</h6>
  </p>
  <p class="text-justify">
    Decidimos presentar Al Estilo de Jesús en una campaña para alinear a toda la congregación, para que todos entendamos lo mismo y nos movamos en la misma dirección y al mismo ritmo.
  </p>
  <p class="text-justify">
    Como su nombre lo dice, la campaña dura 50 días e integra cuatro elementos:
    <ul>
      <li>El culto general de fin de semana</li>
      <li>La reunión en grupos pequeños</li>
      <li>La lectura individual del libro</li>
      <li>El uso personal de la aplicación en el teléfono</li>
    </ul>
  </p>
  <p class="text-center">
    <h6>Recursos</h6>
  </p>
  <p class="text-justify">
    Para lograr esto, integramos 10 RECURSOS:
    <ol>
      <li>Tu libro de base para leer durante la Campaña ó por tu cuenta</li>
      <li>La aplicación para teléfono móvil con recursos varios (esta que tienes en tus manos)</li>
      <li>Ocho sermones para la reunión general de fin de semana</li>
      <li>Ocho estudios para grupos pequeños</li>
      <li>Un devocional para los cincuenta días</li>
      <li>Curso en video para líderes sobre el Modelo</li>
      <li>El Manual para el Pastor (que tiene en su mano)</li>
      <li>El Manual para el Director de campaña</li>
      <li>Videos cortos para la organización</li>
      <li>Test de Evaluación de Nivel</li>
    </ol>
  </p>
  <p class="text-center">
    <h6>Objetivos</h6>
  </p>
  <p class="text-justify">
    Al Estilo de Jesús y la Campaña de 50 Días, tiene 5 objetivos para ti:
    <ol>
      <li>Que te sensibilices para cumplir la Gran Comisión (siendo y haciendo discipulos) con base en el modelo que dio nuestro Señor.</li>
      <li>Que tengas una comprensión clara de la definición de “Discípulo” para que a partir de allí, puedas perseguirlo como un estándar personal.</li>
      <li>Que entiendas los principios clave del discipulado bíblico y el proceso en cuatro pasos</li>
      <li>Que puedas identificar el nivel en el que te encuentra y decidas realizar las acciones para ir al siguiente nivel</li>
      <li>Que te propongas reproducirte en otros</li>
    </ol>
  </p>
  <hr>
  <p class="text-center">
    <h6>Nuestro resumen una imagen</h6>
  </p>
  <p class="text-center">
    El Modelo Al Estilo de Jesús se puede resumir en la siguiente imagen:
  </p>
  <p class="text-justify">
    El mandato es:
    <ol>
      <li>Hacer discípulos</li>
    </ol>
  </p>
  <p class="text-justify">
    Los siete principios son:
    <ol>
      <li>Uno a uno</li>
      <li>En grupo pequeño</li>
      <li>Práctico</li>
      <li>Multiplicador</li>
      <li>Por género</li>
      <li>Permanente</li>
      <li>Manifiesta el Reino</li>
    </ol>
  </p>
  <p class="text-justify">
    Cuatro pasos
    <ol>
      <li>Conocido</li>
      <li>Siervo</li>
      <li>Amigo</li>
      <li>Hijo</li>
    </ol>
  </p>`,
    `
  <p class="text-center">
  <h3>Principios Clave Al Estilo de Jesús</h3>
</p>
<p class="text-justify">
  El discipulado como lo practicó nuestro Señor, tiene principios clave que lo hacen tan eficaz. En ellos basamos nuestro Modelo, y estamos convencidos que si los ponemos en práctica seremos tan productivos como él lo planeó.
</p>
<p class="text-center">
  <h6>1. El discipulado es uno a uno</h6>
</p>
<p class="text-justify">
  Jesús hizo el discipulado de manera personal y así lo debemos hacer nosotros. Él seleccionó a sus discípulos e invirtió de manera individual en ellos.
</p>
<p class="text-center">
  <h6>2. El discipulado se apoya en un grupo pequeño</h6>
</p>
<p class="text-justify">
  El Señor discipuló a doce al mismo tiempo. Cuando discipulamos ó somos discipulados, lo ideal es pertenecer a un grupo. Esto da crecimiento por la interacción con otros. Se comparten causas, aprendizaje, experiencia, etcétera.
</p>
<p class="text-center">
  <h6>3. El discipulado es un proceso</h6>
</p>
<p class="text-justify">
  No hay discipulado sin proceso, porque ser discípulo implica un crecimiento constante con objetivos específicos en cada etapa. El Modelo de Jesús nos marca cuatro etapas en el proceso y debemos aprender cómo operar en cada una para mantener el crecimiento
</p>
<p class="text-center">
  <h6>4. El discipulado es práctico</h6>
</p>
<p class="text-justify">
  Se trata de transferencia de vida, no de conocimientos. El discipulado eficaz es un entrenamiento práctico que abarca todas las facetas de tu vida y que descansa en ejecutar lo que aprendemos, no en acumular conocimientos. 
</p>
<p class="text-center">
  <h6>5. El discipulado es multiplicador</h6>
</p>
<p class="text-justify">
  No puedes llamarte discípulo, si no eres capaz de multiplicarte. El valor del discipulado está en su capacidad de reproducción. No en practicar evangelismo, sino en encontrar hijos espirituales que podamos llevar por lo menos al mismo nivel que nosotros hemos llegado
</p>
<p class="text-center">
  <h6>6. El discipulado es por género</h6>
</p>
<p class="text-justify">
  Jesús discipuló a doce hombres. Aunque tuvo seguidoras mujeres, a quienes pudo llevar más lejos fueron varones. Se necesitan mujeres para mujeres y hombres para hombres, porque el discipulado verdadero forma masculinidad y feminidad. 
</p>
<p class="text-center">
  <h6>7. El discipulado es permanente</h6>
</p>
<p class="text-justify">
  Nunca dejarás de ser discípulo. No hay graduación para esto, porque siempre estarás aprendiendo y por lo tanto, siempre estarás bajo la cobertura de un discipulador. El discípulo siempre está guiando a otros y se deja guiar por alguien. Esa dinámica le acompaña toda la vida. 
</p>
<p class="text-center">
  <h6>8. El discipulado se enfoca en la manifestación del Reino</h6>
</p>
<p class="text-justify">
  La Iglesia hace discípulos y los discípulos manifiestan el Reino. La meta no es pues el crecimiento de la Iglesia local, sino que, como discípulo puedas transformar tu entorno aquí y ahora. 
</p>
  `,
  ];
  
  dismiss() 
  {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
