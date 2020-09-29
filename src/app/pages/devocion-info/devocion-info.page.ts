import { Component, Input, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-devocion-info',
  templateUrl: './devocion-info.page.html',
  styleUrls: ['./devocion-info.page.scss'],
})
export class DevocionInfoPage implements OnInit 
{

  @Input( ) option: Number;

  devociones =
  [
    {
      image: '../assets/images/devociones/dia1.jpg',
      title: 'Hacer discipulos, es el Gran Mandato de Jesús',
      day: 1,
      origin: 'Mateo 28:18-20',
    },
    {
      image: '../assets/images/devociones/devocional_2.jpg',
      title: '¡Soy un discípulo! Una extención de amor',
      day: 2,
      origin: 'Juan 17:26',
    },
    {
      image: '../assets/images/devociones/devocional_3.jpg',
      title: 'Mantener el enfoque',
      day: 3,
      origin: 'Filipenses 3:13-14',
    },
    {
      image: '../assets/images/devociones/devocional_4.jpg',
      title: 'Jesús es el Hijo por excelencia y nuestro modelo a seguir',
      day: 4,
      origin: 'Efesios 4:13'
    },
    {
      image: '../assets/images/devociones/devocional_5.jpg',
      title: 'El Discipulado se basa en imitación',
      day: 5,
      origin: '1 Corintios 11:1',
    },
    {
      image: '../assets/images/devociones/devocional_6.jpg',
      title: 'El Discípulo manifiesta el Reino',
      day: 6,
      origin: 'Colosenses 1:27',
    },
    {
      image: '../assets/images/devociones/devocional_7.jpg',
      title: 'El Discípulo forma el género',
      day: 7,
      origin: 'Proverbios 27:17',
    },
    {
      image: '../assets/images/devociones/devocional_8.jpg',
      title: 'El Discípulo se vuelve un modelo para otros',
      day: 8,
      origin: '2 Tesalonicenses 3:7',
    },
    {
      image: '../assets/images/devociones/devocional_9.jpg',
      title: 'El Discípulo necesita un grupo pequeño',
      day: 9,
      origin: 'Marcos 3:14',
    },
    {
      image: '../assets/images/devociones/devocional_10.jpg',
      title: 'Los discípulos saben estar juntos y unánimes',
      day: 10,
      origin: 'Hechos 2:42,44-47',
    },
    {
      image: '../assets/images/devociones/devocional_11.jpg',
      title: 'Hijos que vas a parir desde el corazón',
      day: 11,
      origin: 'Mateo 23:37',
    },
  ];


  devocionBody =
  [
    '<p style="text-align: justify;">       “Y Jesús se acercó y les habló diciendo: Toda potestad me es dada en el cielo y en la tierra. [19] Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo; [20] enseñándoles que guarden todas las cosas que os he mandado; y he aquí yo estoy con vosotros todos los días, hasta el fin del mundo. Amén”     </p>     <p style="text-align: justify;">       Jesús se acercó a declarar su posicionamiento y poder sobre TODO; y para reafirmar que en nuestro ejercicio para el cumplimiento de la Gran Comisión no estaríamos solos, sino que todos los días estaría acompañándonos, hasta el fin.     </p>     <p style="text-align: justify;">       En Jesús descansa nuestra confianza, y de Él surge la inspiración para cumplir con tan valiosa comisión: HACER DISCÍPULOS. De la misma manera en que Él se acercó a nosotros, debemos tomar la iniciativa de salir de nuestra comodidad, y romper con la conformidad de esperar a que lleguen esas almas solas y perdidas. Necesitamos ser intencionales y salir a su encuentro con un anhelo legítimo de hacer discípulos, no sólo buscar convertidos o seguidores con mentalidad de inmediatez.     </p>     <p style="text-align: justify;">       ¡Dios no nos llama a ser populares, sino a ser influyentes y contribuir intencionalmente en la formación de alguien más! Bautizándole y enseñándole todo lo que Él ya nos ha enseñado, pues sólo de esa manera podemos desarrollar discípulos maduros, capaces de sostener su fe en medio de los desafíos que ofrece cada día, y agentes de Reino que practiquen este mismo mandato, extendiendo así el Reino mismo, al discipular a otros.     </p>     <p class="text-center">       <h6>¡ESA ES LA GRAN COMISIÓN!</h6>     </p>     <p style="text-align: justify;">       ¡Cuánto necesitamos involucrarnos en la obra que Dios nos ha encomendado y cuán importante es tener presente que no estamos solos!     </p>     <p class="text-center">       <h6>Oración del día:</h6>     </p>     <p style="text-align: justify;">       Amado Dios, creemos que no es por nuestro buen ánimo, ni nuestros grandes deseos de ver llenas nuestras congregaciones; no es nuestra capacidad de planear estrategias de alcance y sostenimiento, las razones que nos llevan a lograr esa comisión que nos has dado, sino por tu posicionamiento y poder en nuestras vidas, que viene como resultado de un encuentro verdadero contigo. Tú ya nos has dado la victoria, pues toda potestad te ha sido dada en el cielo y en la tierra.     </p>     <p style="text-align: justify;">       Dios, tú nos has dado todo cuanto se necesita para ir por aquellos que aún no conocen de tu verdad. Hoy rendimos nuestra voluntad para cumplir la tuya y hacer a las naciones, tus discípulos.     </p>     <p class="text-center">       <h6>Pastora Yukary Quevedo</h6>     </p>',
    '<p style="text-align: justify;">       “Y les he dado a conocer tu nombre, y lo daré a conocer aún, para que el amor con que me has amado, esté en ellos, y yo en ellos”.     </p>     <p style="text-align: justify;">       El mayor referente de que somos discípulos de Jesús es ser una extensión de su amor para con otros. Necesitamos ser agentes de su Reino que hagan visible ese amor; y así, sostener la evidencia de que quien nos ha amado, también nos ha enviado amar.     </p>     <p style="text-align: justify;">       Algo que he aprendido con los años es que, en el proceso de amar como Dios ama, necesitamos ejercitar nuestra alma y dominarla, hasta que su Espíritu tenga por habitación todo nuestro ser. Dios nos ha dado un “espíritu de PODER, AMOR Y DOMINIO PROPIO” -dice su palabra en 2 Timoteo 1:7, NO un “espíritu de cobardía”; y es que sólo un cobarde no se atreve amar, sabiendo todo lo que eso implica. Se necesita entendimiento y valor para decidir amar a quien no quieres, cuando no lo sientes, porque crees que no se lo merece, o no lo necesita.     </p>     <p style="text-align: justify;">       Pensar en que el amor debe ser nuestra motivación para ser, hacer y tener, suele ser sencillo; pero ponerlo en práctica requiere que un amor sobrenatural gobierne nuestra vida y alimente en nosotros su poder, amor y dominio propio, para sostenernos en un estilo de vida que inspire y modele a otros a amar. De esa manera damos a conocer el poder de su nombre con hechos y no con palabras. DIOS ES AMOR, nosotros damos a conocer lo que Dios es cuando lo demostramos a otros.     </p>     <p class="text-center">       <h6>¿Cuánto ha demostrado Dios su amor hacia a mí, aún sin merecerlo?</h6>     </p>     <p class="text-center">       <h6>¿Es visible ese amor de Dios para con otros?</h6>     </p>     <p class="text-center">       <h6>¿Soy capaz de amar como Dios ama, sin importar si a mi parecer alguien lo merece o no?</h6>     </p>     <p class="text-center">       <h6>Oración del día:</h6>     </p>     <p style="text-align: justify;">       Señor mi Dios, en esto somos conocidos, porque el amor que hay en nosotros proviene de ti. Queremos provocar las condiciones correctas para que tú gobiernes nuestra alma y habites entre nosotros. Que tu amor que sobrepasa todo entendimiento sea en nuestras vidas el motivo de nuestras acciones en beneficio a otros; para que cuando nos vean, te vean a ti. Queremos ser una extensión de ti, el pedazo de piel que muchos necesitan para hacer visible tu amor. Queremos amar a otros de la misma manera en que tú amas.     </p>     <p class="text-center">       <h6>Pastora Yukary Quevedo</h6>     </p>',
    '<p style="text-align: justify;">       “Hermanos, yo mismo no pretendo haberlo ya alcanzado; pero una cosa hago: olvidando ciertamente lo que queda atrás, y extendiéndome a lo que está delante, prosigo a la meta, al premio del supremo llamamiento de Dios en Cristo Jesús”.     </p>     <p style="text-align: justify;">       Para poder avanzar hay que seguir caminando. Nuestra mentalidad hacia el futuro debe ser la motivación que nuestro presente necesita para esforzarnos cada día y seguir avanzando, sin soltar ninguno de los beneficios de lo que hemos conquistado hasta hoy. Pablo sabía que andar en el propósito de Dios para su vida, es andar en el camino correcto. Saber que andamos por el camino correcto nos permite meter el acelerador; ir por más hasta llegar a la meta.     </p>     <p style="text-align: justify;">       Cuando pienso en la vida, una imagen viene a mi mente: Un camino sinuoso con todo lo que eso implica. Tramos de terracería y asfalto, baches, desviaciones, topes, señalamientos ó carriles sin delimitaciones claras. ¡Riesgo, mucho riesgo! ¿Has tenido que enfrentarte a este caos alguna vez? Para conducir bien, tienes que estar preparado para enfrentar este tipo de camino, pero hay algo aún más importantes: ¡Debes conocer el destino a donde te diriges! Hoy podemos apoyarnos de un GPS que nos oriente en el momento que nuestra brújula mental empieza a traicionarnos, pero la decisión que debemos tomar recae en nosotros.     </p>     <p style="text-align: justify;">       ¿A dónde voy? ¿Cuál es el camino que me lleva a mi destino más rápido y más seguro? ¿Cómo puedo evitar ó superar un camino difícil?     </p>     <p style="text-align: justify;">       La mejor manera de evitar riesgos es anticipándonos a ellos; a esto creo que se refería Pablo en Filipenses 3:13 cuando decía: “Hermanos, yo mismo no pretendo haberlo ya alcanzado; pero una cosa hago: olvidando ciertamente lo que queda atrás, y extendiéndome a lo que está delante”. Extiendo mi visión hacia el frente, dejo lo que queda atrás para reconocer el camino que tengo adelante.     </p>     <p style="text-align: justify;">       Cuando no estamos dispuestos a soltar y despojarnos de lo que queda atrás, vivimos limitados a lo que está sucediendo en el presente, predispuestos al futuro de mala forma, ó sin miras al porvenir. ¿Te ha pasado?.     </p>     <p style="text-align: justify;">       Quizá esta decisión es precisamente lo que ha provocado dejar de creer en ti y dejar de creer en otros. Y esto nos limita en el cumplimiento de la Gran Comisión, porque al perder el enfoque nos distraemos con otras cosas y dejamos de hacer lo que él nos ha mandado. Suelta lo que te limita, lo que te estorba, lo que te detiene y prosigue a la meta; que todo aquello que superas se vuelve la experiencia que otros necesitan para tener sus propias victorias.     </p>     <p class="text-center">       <h6>Oración del día:</h6>     </p>     <p style="text-align: justify;">       Poderoso Dios, ayúdame a liberarme de las batallas del pasado, despojarme de todo lo que estorba y limita mis pasos para seguir avanzando hacia la meta. Dame la serenidad de aceptar las cosas que no puedo cambiar y la determinación para cambiar a aquellas que sí puedo. Forma en mí, una consciencia clara de que, cada lección del pasado, es en mi presente la experiencia que necesito para seguir adelante, y permite Señor que lo que formas en mí, pueda contribuir en la formación de la mejor versión de otros. Dame lo suficiente para ayudar a otros a ser tus discípulos.     </p>     <p class="text-center">       <h6>Pastora Yukary Quevedo</h6>     </p>',
    '<p style="text-align: justify;">       “De este modo, todos llegaremos a la unidad de la fe y del conocimiento del Hijo de Dios, a una humanidad perfecta que se conforme a la plena estatura de Cristo”.     </p>     <p style="text-align: justify;">       Está comprobado que por naturaleza, los seres humanos buscamos instintivamente un modelo a seguir. En el proceso de nuestras vidas, nos topamos con distintos tipos de personas, con estilos de vida que podemos adoptar. He conocido a algunos que crecieron bajo un marco de violencia, rechazo, carencia y dolor. Algunos otros, fueron formados en sobreprotección, aceptación, holgura económica, libertinaje, etc. Otros tantos tienen una combinación extraña entre unos y otros.     </p>     <p style="text-align: justify;">       Si analizo mi propia vida, me doy cuenta de que mi formación no fue tan distinta a la de los demás. He tenido figuras de autoridad muy cercanas a mí desde que nací y seguramente hicieron lo mejor que pudieron para modelar mi vida; incluso mejor de lo que otros modelaron la suya. Es muy probable que a ellos les tocó lidiar con fallas y deficiencias que hoy, yo procuro no repetir en aquellos para quienes soy un referente ó modelo.     </p>     <p style="text-align: justify;">       ¡Sólo Jesús es el modelo por excelencia! Durante su tiempo en esta tierra nos demostró a través de cada enseñanza, dicho y hecho, lo valioso de ser hijo. Jesús habló más del Padre que de si mismo. En Juan 14:9 dijo una poderosa palabra: “El que me ha visto a mí, ha visto al Padre”. ¡Que poderosa declaración! Debemos ser la evidencia de Dios como Padre: volteemos a ver a Jesús como hijo y aprendamos a ser modelados conforme a su imagen, para que nuestro Señor Jesús sea el primero entre muchos hermanos.     </p>     <p class="text-center">       <h6>Oración del día:</h6>     </p>     <p style="text-align: justify;">       Padre nuestro, nos dirigimos a ti por medio de nuestro amado Señor Jesucristo, el primero de muchos hermanos, agradeciendo que nos hayas dado tan valioso modelo de vida a seguir. Sabemos que, como hijos tuyos, tenemos al único que por excelencia trae equilibrio a nuestras vidas; él es nuestro modelo para vivir según tu propósito y de acuerdo a tu mandato. Ayúdanos Padre a ser hijos, pues reconocemos que sólo quien ha tenido corazón de hijo, puede formar en otros la mentalidad correcta de Padre.     </p>     <p class="text-center">       <h6>Pastora Yukary Quevedo</h6>     </p>',
    '<p style="text-align: justify;">       “Sed imitadores de mí, así como yo de Cristo”     </p>     <p style="text-align: justify;">       Existen 3 tipos de personas de las que nos rodeamos: alguien a quien seguimos, alguien con quien caminamos y alguien que sigue nuestros pasos. En algún punto de nuestra vida hemos compartido tiempo con quien nos identifica el mismo sentir o tipo de pensamiento, esta influencia puede ser buena y edificante, en algunos casos resulta mala, y en otros tantos incluso opcional.     </p>     <p style="text-align: justify;">       Personalmente, al paso de los años he tratado con personas que han sido influencia en mi vida en ocasiones para bien y otras no tanto, y con cada experiencia que he tenido, ha adquirido un valor extraordinario el reconocer la responsabilidad y libertad que tengo al decidir a quién le doy derecho de influir en mi vida y cubrirla. Y es que un buen referente de vida, es algo muy difícil de encontrar en esta época. Si quieres un consejo sobre cómo encontrarlo, concéntrate en que su vida y consejo esté basado en la verdad que no cambia, ni por circunstancias, ni por tiempo.     </p>     <p style="text-align: justify;">       Encontrar esa amistad ó cobertura, me motiva a convertirme en alguien que influya también positivamente en otros, por eso me pregunto: ¿Soy un verdadero discípulo de Jesús? ¿Tengo para mi vida la influencia y cobertura correcta que me forma?     </p>     <p class="text-center">       <h6>Oración del día:</h6>     </p>     <p style="text-align: justify;">       Amado Jesús, tú viniste a vivir entre nosotros y has sido el gran maestro de la forma como se debe vivir íntegramente; tú eres el camino, la verdad y la vida. Quiero ser imitador de ti para que cuando me vean, te vean. Ayúdame a pensar, sentir y vivir como tú, de acuerdo a los estándares de tu Reino. Toma autoridad en mi vida y hazme un referente que influya consciente y naturalmente en la vida de otros, para que lo que formes en mi sea formado también en ellos.     </p>     <p class="text-center">       <h6>Pastora Yukary Quevedo</h6>     </p>',
    '<p style="text-align: justify;">       “A quienes Dios quiso dar a conocer las riquezas de la gloria de este misterio entre los gentiles; que es Cristo en vosotros, la esperanza de gloria”     </p>     <p style="text-align: justify;">       Nadie puede dar lo que no tiene. Dios quiere que tengamos poder para poderlo impartir a otros a través de nuestro servicio y ministerio. Por eso Hechos 1:8 dice: "recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo, y me seréis testigos en Jerusalén, en toda Judea, en Samaria, y hasta lo último de la tierra". El propósito es que los discípulos tengan recursos para transferir lo que le mundo necesita. Es el cumplimiento de la oración de nuestro Señor cuando dijo en Mateo 6:10: “Venga tu reino. Hágase tu voluntad, como en el cielo, así también en la tierra”.     </p>     <p style="text-align: justify;">       La voluntad de Dios es que su Reino se manifieste en nuestra era. Esa misión inició con el nacimiento de Cristo, y la expansión del Reino continúa con el trabajo de sus discípulos, que somos nosotros. Hoy, somos responsables de que esta obra avance. Nosotros, quienes hemos recibido salvación y hemos oído las buenas nuevas, somos agentes del Reino, portadores de ellas para salvación de otros.     </p>     <p style="text-align: justify;">       ¡El Reino se acerca cuando un discípulo de Jesús se aproxima! Cristo en primer lugar anuncia el Reino de Dios, e inmediatamente después empieza a congregar una comunidad de discípulos que aceptan ese Reino, los cuales están llamados a “visibilizar” sus valores como dice Mateo 5.13-16, siendo sal en la tierra y luz delante de los hombres.       Jesús no les envía fuera, a otro lugar, sino que les enseña el valor de dar testimonio, por medio de una forma de vida que se convierta en algo atrayente. Es decir, que se vuelvan un testimonio vivo que los llevará a proclamar el Reino posteriormente.     </p>     <p style="text-align: justify;">       Al final del evangelio de Mateo, Jesús dice solemnemente a sus discípulos: “Id y haced discípulos a todas las naciones”. ¿Qué es este mandato sino ¡extender el Reino!? Para eso hemos sido empoderados por su Santo Espíritu, Él quiere que ejerzamos gobierno como embajadores del Reino de los cielos en la tierra.     </p>     <p style="text-align: justify;">       ¿Estoy demostrando con mis acciones que el Reino de los cielos me gobierna? ¿Soy un agente del Reino que reproduce en otros las buenas nuevas de salvación y sus obras en la tierra? ¿He establecido y extendido el Reino a donde quiera que voy?     </p>     <p class="text-center">       <h6>Oración del día:</h6>     </p>     <p style="text-align: justify;">       Poderoso Rey de Reyes y Señor de Señores, tu poderío está sobre cualquier otro gobierno visible e invisible. Eres soberano, todo poderoso y grande es la magnificencia de tu Reino sobre nuestras vidas para colocarnos como embajadores tuyos; reyes y sacerdotes en la tierra para gobernar en tu nombre. Revístenos de tu poder, gracia y sabiduría.     </p>     <p class="text-center">       <h6>Pastora Yukary Quevedo</h6>     </p>',
    '<p style="text-align: justify;">       “Hierro con hierro se aguza; Y así el hombre aguza el rostro de su amigo”     </p>     <p style="text-align: justify;">       Como el hierro se afila con hierro, así un amigo se afila con su amigo. Qué enfática es la palabra de Dios para reafirmar la importancia, no sólo de relacionarnos con otros, sino de mantener las relaciones correctas que potencian lo mejor que hay en cada uno de nosotros.       De lo que produces y reproduces, procura ser acertado en las relaciones que provoquen de ti lo mejor para que produzcas y reproduzcas lo correcto. Eclesiastés 4:9 lo reafirma cuando nos dice que: “Es mejor ser dos que uno”, porque ambos pueden ayudarse mutuamente a lograr el éxito.     </p>     <p style="text-align: justify;">       Mi Pastor Ofir Peña tiene una frase: “no sumes a tus sueños personas con menos fe que tú”. En el ministerio que tengo la bendición de dirigir, puedo comprobar que sumar a personas afines a nuestro llamado, con la misma fe ó mayor, es lo que logra avance poderoso y permite que las diferencias, se vuelvan sólo un contraste maravilloso.     </p>     <p style="text-align: justify;">       Pregúntate: ¿Estoy rodeando de las personas correctas? ¿Personas afines a mi diseño (hombre o mujer) que provoquen las motivaciones correctas para construir la mejor versión de mi?     </p>     <p class="text-center">       <h6>Oración del día:</h6>     </p>     <p style="text-align: justify;">       Amado Dios, me has creado como un ser relacional, capaz de vivir en comunidad y en comunión con otros. Quiero pedirte que me des el amor que necesito para ser de bendición a quienes me rodean y la sabiduría para reconocer y acompañarme de las personas que pueden hacerme crecer a tu imagen. Ayúdame a hacer sinergia con personas clave para edificar relaciones que impacten positivamente el mundo.     </p>     <p class="text-center">       <h6>Pastora Yukary Quevedo</h6>     </p>',
    '<p style="text-align: justify;">       “Porque vosotros mismos sabéis de qué manera debéis imitarnos; pues nosotros no anduvimos desordenadamente entre vosotros”     </p>     <p style="text-align: justify;">       El testimonio tiene un carácter público. En un juicio, la persona que da testimonio se auto-implica en la verdad y fiabilidad de lo que dice. La credibilidad, el respeto y prestigio son el resultado de lo que testifican sus hechos, más que sus palabras. Esa es la realidad. ¡Somos conocidos por nuestras acciones! Debemos vivir hoy de acuerdo a cómo queremos ser conocidos mañana.     </p>     <p style="text-align: justify;">       Hay valores que no se pueden demostrar teóricamente, como la esperanza, la fe y el amor que hunden sus raíces en lo más hondo de la persona, que empeñan toda la vida, transforman y se traslucen. Es claro que estos valores no se extienden con publicidad convencional, con campañas de propaganda; sino que se contagian y se transmiten por contacto personal, porque allí se capta su valor “humanizante”: las posibilidades insospechadas que ofrecen.     </p>     <p style="text-align: justify;">       ¿Es mi forma de vivir la muestra de que soy imitador de Cristo? ¿Deseo legítimamente que otros imiten lo que hago? Sólo una persona convencida de ser buena influencia se atrevería a asumir el compromiso de pedir abiertamente que lo imites.     </p>     <p class="text-center">       <h6>Oración del día:</h6>     </p>     <p style="text-align: justify;">       Señor, necesito tu ayuda para caminar en integridad, pido la ayuda del Espíritu Santo para superar aquellas fisuras que me hacen perder el carácter correcto. Por favor, dame fuerzas para resistir la tentación y así poder convertirme en el discípulo que otros puedan imitar. Estoy consciente que la forma correcta para que el mundo se de cuenta de que el evangelio es poderoso y verdadero, es que vean una diferencia en tu pueblo, y yo, quiero ser un ejemplo de tu Reino en la tierra.     </p>     <p class="text-center">       <h6>Pastora Yukary Quevedo</h6>     </p>',
    '<p style="text-align: justify;">       “Designó a doce, a quienes nombró apóstoles, para que lo acompañaran y para enviarlos a predicar”     </p>     <p style="text-align: justify;">       El primer grupo pequeño cristiano estaba compuesto por Jesús y los doce hombres a los que invitó a que lo siguieran. Las primeras iglesias iniciaron con pequeños grupos de discípulos que se reunían en los hogares de unos y otros, de esa manera la iglesia aumentó en cantidad y calidad de personas que desarrollaron madurez y compromiso para la expansión del Reino.     </p>     <p style="text-align: justify;">       Y es que los seres humanos somos relacionales naturalmente, por muy solitario que parezca una persona y sea muy selectiva en sus relaciones, sentirse acompañado será una necesidad básica. Vivimos en comunidad y procuramos estar rodeados de personas con las que podamos identificarnos. Buscamos pertenecer y ser aceptados por otros con los que podamos compartir tiempo, sentimientos, sueños, esfuerzo, descanso, metas afines, etc.     </p>     <p style="text-align: justify;">       La capacidad de relacionarnos con otros ayuda a satisfacer no sólo las propias necesidades, sino también nos volvemos facilitadores de otros para satisfacción de las suyas. Pertenecer a un grupo o comunidad nos permite una interacción social en la que desarrollamos habilidades como la capacidad de comunicarnos asertivamente, tolerancia, respeto, honestidad, solidaridad, responsabilidad.     </p>     <p style="text-align: justify;">       Todos necesitamos acompañar y ser acompañados, sumar a lado de otros siempre será una manera de edificar mucho más alto, con bases mucho más fuertes.     </p>     <p style="text-align: justify;">       Como iglesia formamos una comunidad en donde la aceptación y el sentido de pertenencia en nuestros grupos de discipulado, sea la realidad a donde otros vienen y se suman.     </p>     <p style="text-align: justify;">       ¿Alguna vez se ha puesto a pensar en la importancia de pertenecer a un grupo en donde desarrolle sus dones y talentos, y el beneficio que ofrece construir a lado de otros? Con seguridad lograríamos resultados que solos no podríamos alcanzar.     </p>     <p class="text-center">       <h6>Oración del día:</h6>     </p>     <p style="text-align: justify;">       Señor mi Dios, cuánto es que necesitamos como seres humanos sentirnos aceptados y pertenecer a donde podemos desarrollarnos, y construir con otros para alcanzar objetivos que en nuestras propias fuerzas no lograríamos. Bien dice tu palabra que “dos son mejor que uno”. Ayúdanos a sumar al lado de los que compartimos el mismo sentir, de la misma forma en que tú lo hiciste con los 12 discípulos con quienes decidiste caminar cerca, los cuales compartieron de tu instrucción y tomaron de ti lo necesario para la edificación de los unos con otros. Queremos ser solícitos en hacer lo que con tu ejemplo nos has enseñado.     </p>     <p class="text-center">       <h6>Pastora Yukary Quevedo</h6>     </p>',
    '<p style="text-align: justify;">       “Y perseveraban en la doctrina de los apóstoles, en la comunión unos con otros, en el partimiento del pan y en las oraciones....Todos los que habían creído estaban juntos, y tenían en común todas las cosas; y vendían sus propiedades y sus bienes, y lo repartían a todos según la necesidad de cada uno. Y perseverando unánimes cada día en el templo, y partiendo el pan en las casas, comían juntos con alegría y sencillez de corazón, alabando a Dios, y teniendo favor con todo el pueblo. Y el Señor añadía cada día a la iglesia los que habían de ser salvos. Y perseverando unánimes cada día en el templo, y partiendo el pan en las casas, comían juntos con alegría y sencillez de corazón, alabando a Dios, y teniendo favor con todo el pueblo. Y el Señor añadía cada día a la iglesia los que habían de ser salvos”     </p>     <p style="text-align: justify;">       No es suficiente estar en el mismo lugar si no compartimos el mismo espíritu y la palabra de Dios nos enseña el valor de estar juntos y unánimes. Puedes estar físicamente en algún lado sin estar presente del todo. ¿Te ha pasado?.     </p>     <p style="text-align: justify;">       La palabra griega traducida “unánimes” es homothumadón, una palabra que denota gran énfasis y que tiene una amplia gama de significados. El vocablo homo significa “igual” y thumos significa “mente, voluntad, propósito (alma, corazón)”. No es suficiente ser parte de una comunidad si no compartimos el mismo espíritu.     </p>     <p style="text-align: justify;">       En el libro de Hechos vemos que los ciento veinte oraron juntos con el mismo espíritu con un mismo pensamiento, una misma voluntad y un mismo propósito que embargaba y poseía su alma y corazón. Esto significa que la totalidad de nuestro ser participa en ello. La unanimidad es la clave y el pulso vital de la oración, el Espíritu y la Palabra. Es posible que oremos mucho, procuremos experimentar la llenura del Espíritu Santo y adquiramos mucho conocimiento bíblico; pero si carecemos de la unanimidad no podremos ver la bendición que el Señor tiene para nuestras vidas.     </p>     <p style="text-align: justify;">       Una de las tragedias más grandes que pueden suceder en un grupo o comunidad es la falta de unidad, pues “una casa dividida no prevalece”; contrario a eso, la Escritura nos enseña que con dos o tres juntos en su nombre, Dios estará presente y unánime con la tierra para pedir acerca de cualquier cosa, y esto será hecho por el Padre que está en los cielos.     </p>     <p class="text-center">       <h6>Oración del día:</h6>     </p>     <p style="text-align: justify;">       Padre y Dios nuestro entendemos que no es suficiente congregarnos en un lugar y ser parte de una comunidad si en cada uno no hay un espíritu dispuesto a pertenecer y estar presente en totalidad, no sólo en cuerpo y alma, sino en un mismo espíritu. De la misma manera como fue desde el principio, en donde tu iglesia tenía en común todas las cosas, actúa en mi ser y dame la libertad de ser con cada uno de mis hermanos uno, de la misma manera en que tú y el padre son uno.     </p>     <p class="text-center">       <h6>Pastora Yukary Quevedo</h6>     </p>',
    '<p style="text-align: justify;">       “!Jerusalén, Jerusalén, que matas a los profetas, y apedreas a los que te son enviados! !!Cuántas veces quise juntar a tus hijos, como la gallina junta sus polluelos debajo de las alas, y no quisiste!”     </p>     <p style="text-align: justify;">       Dios me ha permitido tener más hijos de los que había pensado, hijos que se dan a luz desde el corazón, con el poder de la oración y la fuerza de rodillas. Viven en el pensamiento, con ellos compartes los logros y son por quien te dueles en sus dolores; hijos que defendemos con verdad y por justicia, a los que declaramos vida plena y victoriosa para ellos, sus familias y ministerios; con quienes nos atrevemos a soñar y nos anticipamos a verlos llegar más alto y más lejos de lo que nosotros hemos estado.     </p>     <p style="text-align: justify;">       Hijos a los que ves que aún ya grandes de edad y con experiencia encima, comienzan a tambalearse y corres a sostenerlos, se confían y se asoman al precipicio, y un grito de tu voz a tiempo los detiene de caer. Hijos que llegan lastimados de las mejillas por ponerlas al alcance una y otra vez de quién los traiciona, esos que salen y se ensucian, y regresan a casa arrepentidos y humillados con la vestidura rota, con hambre y sed. Hijos que en un momento de coraje hacen berrinche, y se apartan y esconden haciendo cualquier cosa para no quererte y que no los quieras; luego se arrepienten y saben pedir perdón, a veces se comportan egoístas, caprichosos, pensando solo en lo suyo; pero rápidamente son entendidos al recibir exhorto, escuchan, aguachan la cabeza y cumplen con la promesa de tener más cuidado. Hijos que lloran contigo por frustración, tristeza o coraje, pero los ves también riéndose y celebrando el nuevo logro.     </p>     <p style="text-align: justify;">       HIJOS a los que amas sin ser ya niños, a los que aún viendo sus deficiencias, defectos y fallas para su edad, los sigues sintiendo parte de los amados por ti.     </p>     <p style="text-align: justify;">       HIJOS cuyo vínculo no se dio por la sangre natural, pero sí por la de El que nos dio a luz a todos.     </p>     <p style="text-align: justify;">       HIJOS que fueron paridos en el corazón y nos elegimos para caminar juntos en esta etapa de nuestra vida.     </p>     <p style="text-align: justify;">       HIJOS que son formados con identidad, que tienen sentido de pertenencia, que se han vuelto saetas en tu aljaba; a los que se han dejado poner nombre, a los que conocen de HONOR: ¡No los sueltes, lánzalos más alto!     </p>     <p style="text-align: justify;">       Abraza a los que fueron abortados ministerialmente, a los incomprendidos solitarios, atrabancados y juzgados por locos; a los que no viven de la apariencia, y rechazan toda religiosidad y pose popular. Los que no soportan la hipocresía, la injusticia y la mentira, los que no se conforman con la etiqueta de bastardos; los que no venden la primogenitura por un plato de lentejas, los que se sientan a la mesa. Los que anhelan ser Padres para parir hijos.     </p>     <p class="text-center">       <h6>Oración del día:</h6>     </p>     <p style="text-align: justify;">       Padre mío, permite que pueda aprender de tu corazón para desarrollar la paternidad que muchos necesitan alrededor de mí. Ayúdame a ser la expresión natural de tu amor para guiar, proteger, aconsejar y proveer a otros, a quienes pueda llamar “hijos espirituales”. Permíteme ser buen hijo espiritual, para poder también ser padre de otros.     </p>     <p class="text-center">       <h6>Pastora Yukary Quevedo</h6>     </p>',
  ];

  //configuración del slider de imagenes
  slideOpts =
  {
    pagination: false,
    on:
    {
      beforeInit()
      {
        const swiper = this;
        swiper.classNames.push(`${swiper.params.containerModifierClass}fade`);
        const overwriteParams =
        {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        swiper.params = Object.assign(swiper.params, overwriteParams);
        swiper.params = Object.assign(swiper.originalParams, overwriteParams);
      },
      setTranslate()
      {
        const swiper = this;
        const { slides } = swiper;
        for (let i = 0; i < slides.length; i += 1)
        {
          const $slideEl = swiper.slides.eq(i);
          const offset$$1 = $slideEl[0].swiperSlideOffset;
            let tx = -offset$$1;
          if (!swiper.params.virtualTranslate) tx -= swiper.translate;
            let ty = 0;
          if (!swiper.isHorizontal())
          {
            ty = tx;
            tx = 0;
          }
          const slideOpacity = swiper.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
            : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
          $slideEl
            .css({
              opacity: slideOpacity,
            })
            .transform(`translate3d(${tx}px, ${ty}px, 0px)`);
        }
      },
      setTransition(duration)
      {
        const swiper = this;
        const { slides, $wrapperEl } = swiper;
        slides.transition(duration);
        if (swiper.params.virtualTranslate && duration !== 0)
        {
          let eventTriggered = false;
          slides.transitionEnd(() =>
          {
            if (eventTriggered) return;
            if (!swiper || swiper.destroyed) return;
            eventTriggered = true;
            swiper.animating = false;
            const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
            for (let i = 0; i < triggerEvents.length; i += 1) {
              $wrapperEl.trigger(triggerEvents[i]);
            }
          });
        }
      },
    }
  };


  constructor( private modalCtrl: ModalController, private platform: Platform ) { }

  ngOnInit() {
  }
  
  dismiss() 
  {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
