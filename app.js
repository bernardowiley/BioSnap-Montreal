/* ═══════════════════════════════════════════════════════════
   FAUNADEX MONTRÉAL · app.js
   ═══════════════════════════════════════════════════════════ */

/* ── FAUNA DATABASE ──────────────────────────────────────── */
const FAUNA = [
  {id:1,name:"Gran Garza Azul",nameEn:"Great Blue Heron",emoji:"🦢",cat:"Aves acuáticas",diff:1,season:"Abr–Oct",habitat:"Riberas y humedales",size:"91–137 cm de altura",spot:"Cap-Saint-Jacques, Île-de-la-Visitation, Rivière-des-Prairies",mapsQuery:"Parc-nature du Cap-Saint-Jacques Montréal",behavior:"Caza sola, inmóvil durante minutos esperando peces. Vuelo lento con cuello doblado en S. Territorio individual a lo largo de ríos.",sound:"Graznido ronco y profundo al alzar vuelo: 'frahnk frahnk'. A veces gruñidos en la colonia.",notes:"La más fácil del álbum. Se queda estática — tómate el tiempo de encuadrar bien antes de disparar.",photo:"Apertura amplia para separar del fondo del agua. Dispara cuando estira el cuello a pescar — ese momento dura 0.5s. Luz lateral de la mañana ilumina el plumaje gris perfectamente."},
  {id:2,name:"Martín Pescador",nameEn:"Belted Kingfisher",emoji:"🐦",cat:"Aves acuáticas",diff:2,season:"Abr–Oct",habitat:"Ríos y lagos con orillas despejadas",size:"28–35 cm",spot:"Île-de-la-Visitation, Rivière-des-Prairies, Canal Lachine",mapsQuery:"Île-de-la-Visitation Montréal",behavior:"Vuela en línea recta sobre el agua, se detiene en rama baja a explorar, se lanza en picada. Territorio lineal a lo largo del río.",sound:"Traqueteo fuerte y rápido: 'kek-kek-kek-kek'. Se oye antes de verse.",notes:"Busca su percha favorita y espera ahí. Vuelve siempre al mismo punto cada 5-10 minutos.",photo:"Pre-enfoca en la rama donde se posa. El momento del clavado vale el esfuerzo — 1/2000s mínimo. La hembra tiene banda rojiza en el pecho que el macho no tiene."},
  {id:3,name:"Pato de Madera",nameEn:"Wood Duck",emoji:"🦆",cat:"Aves acuáticas",diff:2,season:"Abr–Oct",habitat:"Lagunas boscosas con árboles viejos",size:"47–54 cm",spot:"Parc Angrignon, Bois-de-Liesse, estanques forestales",mapsQuery:"Parc Angrignon Montréal",behavior:"Anida en huecos de árboles viejos. El macho tiene colores irrepetibles: verde iridiscente, rojo, blanco. Muy esquivo.",sound:"Silbido agudo ascendente de la hembra: 'oo-EEK oo-EEK'.",notes:"El macho es el ave más colorida de Montréal. Busca en zonas con árboles viejos caídos sobre el agua.",photo:"Busca ángulo bajo, al nivel del agua. Luz suave de mañana o tarde — el plumaje metálico explota. Evita luz de mediodía."},
  {id:4,name:"Ánade Real",nameEn:"Mallard",emoji:"🦆",cat:"Aves acuáticas",diff:1,season:"Todo el año",habitat:"Lagos, parques, cualquier agua",size:"50–65 cm",spot:"Cualquier lago o parque con agua",mapsQuery:"Lac aux Castors Mont-Royal Montréal",behavior:"El más confiado con humanos. Grupos grandes en otoño antes de migrar.",sound:"El famoso 'cuac cuac' — solo la hembra. El macho hace un sonido más suave y grave.",notes:"Primera entrada del álbum. La hembra moteada marrón es más difícil de fotografiar bien que el macho verde.",photo:"Aprovecha que son confiados para practicar enfoque rápido. Captura el despegue del agua con agua salpicando."},
  {id:5,name:"Pelícano Americano",nameEn:"American White Pelican",emoji:"🦅",cat:"Aves acuáticas",diff:3,season:"May–Sep",habitat:"Lago Saint-Louis, aguas abiertas",size:"127–165 cm de envergadura",spot:"Lachine, orilla del Lac Saint-Louis",mapsQuery:"Lac Saint-Louis Lachine Montréal",behavior:"Pesca en grupos coordinados, rodeando bancos de peces. No se zambulle — recoge peces desde la superficie.",sound:"Silencioso la mayoría del tiempo. Graznidos suaves en colonia.",notes:"La colonia visible desde Lachine es uno de los mejores espectáculos de la isla. Binoculares primero, luego 70-300mm.",photo:"Busca el momento en que grupos grandes vuelan juntos en formación — blanco puro contra el cielo azul. Velocidad alta para las puntas de alas negras."},
  {id:6,name:"Garceta Grande",nameEn:"Great Egret",emoji:"🦢",cat:"Aves acuáticas",diff:2,season:"May–Sep",habitat:"Humedales y orillas",size:"80–104 cm",spot:"Cap-Saint-Jacques, Île-de-la-Visitation",mapsQuery:"Parc-nature Cap-Saint-Jacques Montréal",behavior:"Similar a la garza azul pero más delgada y completamente blanca. A veces coexisten en el mismo humedal.",sound:"Graznido ronco similar a la garza azul, pero más agudo.",notes:"El plumaje nupcial en primavera incluye plumas decorativas largas en la espalda — espectacular.",photo:"Fondo oscuro del agua o vegetación oscura hace resaltar el blanco. Cuidado con sobreexponer — -0.7 EV de compensación."},
  {id:7,name:"Avetoro Americano",nameEn:"American Bittern",emoji:"🦉",cat:"Aves acuáticas",diff:4,season:"May–Ago",habitat:"Juncos y pantanos densos",size:"58–85 cm",spot:"Cap-Saint-Jacques (zona pantanosa noreste)",mapsQuery:"Parc-nature Cap-Saint-Jacques Montréal",behavior:"Maestro del camuflaje — cuando se asusta estira el cuello vertical y apunta el pico al cielo, imitando los juncos. Casi invisible aunque esté a 2 metros.",sound:"Sonido más extraño de Montréal: 'oonk-a-loonk', como bomba de agua o tronco hueco. Se oye de madrugada.",notes:"Trofeo de paciencia. Escúchalo primero al amanecer, rastrea la dirección del sonido. Necesitas botas de goma.",photo:"Si lo encuentras, te dejará fotografiar por el comportamiento de camuflaje estático. Dispara rápido — puede volar sin aviso."},
  {id:8,name:"Somormujo Lavanco",nameEn:"Common Loon",emoji:"🐦",cat:"Aves acuáticas",diff:3,season:"Sep–Nov (migración)",habitat:"Aguas abiertas del San Lorenzo",size:"66–91 cm",spot:"Orillas del San Lorenzo en Verdun",mapsQuery:"Berges de Verdun Montréal fleuve",behavior:"Pasa por el San Lorenzo en migración otoñal. Nada bajo el agua hasta 60m. Plumaje invernal más apagado.",sound:"El grito icónico de los lagos canadienses — tremolo ondulante.",notes:"Viaja solo o en pequeños grupos. Difícil de aproximar. 70-300mm esencial.",photo:"Paciencia — emerge del agua de forma impredecible. Luz otoñal dorada ayuda mucho."},
  {id:9,name:"Correlimos Maculado",nameEn:"Spotted Sandpiper",emoji:"🐦",cat:"Aves acuáticas",diff:2,season:"May–Ago",habitat:"Orillas pedregosas de ríos",size:"18–20 cm",spot:"Rivière-des-Prairies, orillas del San Lorenzo",mapsQuery:"Rivière-des-Prairies Montréal",behavior:"Menea la cola arriba y abajo sin parar mientras camina. Vuelo con aleteos rígidos y cortos.",sound:"Silbido agudo: 'weet-weet-weet'.",notes:"Sus manchas en el pecho (en verano) lo diferencian de otros correlimos.",photo:"Ángulo muy bajo al nivel de la orilla para fondo de agua borroso. Captura el bamboleo de cola."},
  {id:10,name:"Rascón de Virginia",nameEn:"Virginia Rail",emoji:"🐦",cat:"Aves acuáticas",diff:5,season:"May–Sep",habitat:"Pantanos densos con juncos",size:"20–27 cm",spot:"Cap-Saint-Jacques (pantanos más profundos)",mapsQuery:"Parc-nature Cap-Saint-Jacques Montréal",behavior:"Experto en moverse entre juncos sin salir. Cuerpo comprimido para deslizarse entre tallos. Raramente vuela.",sound:"'Ki-ki-kiddick' repetido, o gruñidos de cerdo. Mucho más vocal al amanecer y atardecer.",notes:"TROFEO. Sal al pantano a las 5AM, escúchalo, y espera en el borde con paciencia extrema.",photo:"Si aparece, tendrás segundos. Ráfaga continua, enfoque en el borde de los juncos. ISO alto."},
  {id:11,name:"Águila Calva",nameEn:"Bald Eagle",emoji:"🦅",cat:"Rapaces",diff:3,season:"Mar–Abr, Oct–Nov",habitat:"Orillas del San Lorenzo y lagos",size:"70–102 cm, 168–244 cm envergadura",spot:"Lachine, Verdun (orilla del río), Lac Saint-Louis",mapsQuery:"Berges Lachine Montréal",behavior:"Migra siguiendo el San Lorenzo. Se concentra donde hay peces bajo el hielo roto en primavera. Adultos con cabeza y cola blancas; jóvenes completamente marrones.",sound:"Silbido agudo y chillón — mucho menos imponente que su aspecto.",notes:"Mejor durante deshielo de marzo. Binoculares para buscar, luego 70-300mm. Los jóvenes son marrones.",photo:"Vuelo en círculos contra el cielo — subexponer ligeramente para no quemar el blanco. Velocidad ≥1/1000s."},
  {id:12,name:"Gavilán de Cooper",nameEn:"Cooper's Hawk",emoji:"🦅",cat:"Rapaces",diff:3,season:"Todo el año",habitat:"Bosques suburbanos y parques",size:"35–50 cm",spot:"Bois-de-Liesse, Mont-Royal, barrios arbolados",mapsQuery:"Bois-de-Liesse Montréal",behavior:"Cazador de aves pequeñas. Vuelo rápido entre árboles. Cola redondeada, alas redondeadas.",sound:"Ladrido fuerte: 'kek-kek-kek-kek'.",notes:"Confundible con Gavilán Coliafilado (más pequeño). El de Cooper tiene cabeza más grande respecto al cuerpo.",photo:"Se posa en ramas interiores del bosque. ISO 1600-3200, apertura máxima."},
  {id:13,name:"Gavilán Coliafilado",nameEn:"Sharp-shinned Hawk",emoji:"🦅",cat:"Rapaces",diff:3,season:"Sep–Oct (pico migratorio)",habitat:"Bosques, cielo abierto en migración",size:"24–34 cm",spot:"Mont-Royal (punto migratorio en octubre)",mapsQuery:"Mont-Royal Montréal",behavior:"El más pequeño de los gavilanes. Cola cuadrada. Vuela en grupos durante migración.",sound:"Silbido agudo: 'kik-kik-kik'.",notes:"Octubre en Mont-Royal: pueden verse docenas en un solo día migrando hacia el sur.",photo:"Migración = aves en movimiento contra cielo. Tracking AF esencial. Modo deportes."},
  {id:14,name:"Búho Nevado",nameEn:"Snowy Owl",emoji:"🦉",cat:"Rapaces",diff:3,season:"Nov–Mar (años de irrupción)",habitat:"Campos abiertos, zonas despejadas",size:"53–65 cm",spot:"Zona aeropuerto Trudeau, campos en Pierrefonds",mapsQuery:"Aéroport Trudeau Montréal",behavior:"Diurno en invierno. Se posa en postes, montículos de nieve o el suelo. Los machos son casi completamente blancos.",sound:"Búho grave: 'hoo hoo' profundo. También ladridos agresivos.",notes:"Algunos inviernos hay irrupciones masivas desde el Ártico. Sigue redes de avistamiento locales.",photo:"Luz de invierno baja y lateral es perfecta. Spot metering en el ojo amarillo."},
  {id:15,name:"Gran Búho Cornudo",nameEn:"Great Horned Owl",emoji:"🦉",cat:"Rapaces",diff:3,season:"Todo el año",habitat:"Bosques maduros y mixtos",size:"46–63 cm",spot:"Bois-de-Liesse, Cap-Saint-Jacques",mapsQuery:"Bois-de-Liesse Montréal",behavior:"El rapaz más grande de Montréal. Sus 'orejas' son penachos de plumas. Anida en invierno — enero ya está incubando.",sound:"Dueto clásico: 'hoo hoo-oo hoo hoo'. Los dos individuos tienen tonos distintos.",notes:"En enero-febrero busca nidos ocupados. Se sienta quieto por horas.",photo:"Silueta contra el cielo al amanecer/atardecer. O busca el nido y dispara desde distancia respetuosa."},
  {id:16,name:"Lechuza Aserrina",nameEn:"Northern Saw-whet Owl",emoji:"🦉",cat:"Rapaces",diff:5,season:"Oct–Nov (migración)",habitat:"Coníferas densas",size:"17–22 cm — tamaño de puño",spot:"Mont-Royal, Bois-de-Liesse",mapsQuery:"Mont-Royal Montréal",behavior:"El búho más pequeño. En migración se refugia en coníferas durante el día. Famoso por dejarse aproximar mucho.",sound:"Silbido agudo repetitivo: 'too-too-too-too' incesante de noche.",notes:"TROFEO NOCTURNO. Programas de anillamiento en Mont-Royal en octubre — participar o esperar afuera.",photo:"Si lo encuentras posado, puedes acercarte mucho. Luz suave de flash diffusado."},
  {id:17,name:"Halcón Peregrino",nameEn:"Peregrine Falcon",emoji:"🦅",cat:"Rapaces",diff:3,season:"Abr–Sep (nidificación)",habitat:"Puentes, edificios altos del centro",size:"36–49 cm",spot:"Pont Jacques-Cartier, puentes del centro",mapsQuery:"Pont Jacques-Cartier Montréal",behavior:"El ave más rápida del planeta (>320 km/h en picada). Anida en salientes urbanas. Caza palomas en vuelo.",sound:"Chillido áspero y repetido cerca del nido: 'kak-kak-kak-kak'.",notes:"Colonizó exitosamente Montréal. Hay nidos monitoreados públicamente.",photo:"Vuelo rasante sobre el río — velocidad mínima 1/2000s. Mejor desde los puentes al atardecer."},
  {id:18,name:"Cernícalo Americano",nameEn:"American Kestrel",emoji:"🦅",cat:"Rapaces",diff:3,season:"Abr–Oct",habitat:"Campos abiertos con postes y cables",size:"22–31 cm",spot:"Pointe-aux-Prairies, campos en Pierrefonds",mapsQuery:"Pointe-aux-Prairies Montréal",behavior:"Cernerse en el aire es su firma. El más colorido de los halcones: macho con alas azules, espalda naranja.",sound:"Silbido agudo: 'klee-klee-klee'.",notes:"Escaso y en declive. Busca en postes de luz en zonas abiertas.",photo:"El vuelo cerniente es la foto icónica — 1/1600s. Los colores del macho con luz dorsal son espectaculares."},
  {id:19,name:"Carpintero Pileado",nameEn:"Pileated Woodpecker",emoji:"🐦",cat:"Aves de bosque",diff:3,season:"Todo el año",habitat:"Bosques maduros con árboles viejos",size:"40–49 cm — el más grande",spot:"Cap-Saint-Jacques, Bois-de-Liesse",mapsQuery:"Parc-nature Cap-Saint-Jacques Montréal",behavior:"El carpintero más grande de Canadá. Cresta roja llamativa. Hace excavaciones rectangulares enormes en busca de hormigas.",sound:"Tamborileo potente y lento. Llamada: 'wuk-wuk-wuk' profundo, como risa selvática.",notes:"Sus excavaciones son evidencia — busca troncos viejos con agujeros rectangulares grandes.",photo:"Se queda mucho tiempo en el mismo tronco. Aproxímate despacio. Backlight con cresta iluminada es espectacular."},
  {id:20,name:"Carpintero Velloso",nameEn:"Hairy Woodpecker",emoji:"🐦",cat:"Aves de bosque",diff:2,season:"Todo el año",habitat:"Bosques mixtos y parques arbolados",size:"18–26 cm",spot:"Bois-de-Liesse, Mont-Royal",mapsQuery:"Bois-de-Liesse Montréal",behavior:"Similar al carpintero menor pero más grande con pico mucho más largo. Blanco y negro con mancha roja en la nuca del macho.",sound:"Llamada aguda: 'peek'. Tamborileo regular.",notes:"Confundible con el Carpintero Menor (más común, más pequeño). Clave: longitud del pico vs. tamaño de la cabeza.",photo:"Paciencia en el tronco. Aproxímate en espiral para no asustarlo."},
  {id:21,name:"Carpintero Vientre Rojo",nameEn:"Red-bellied Woodpecker",emoji:"🐦",cat:"Aves de bosque",diff:3,season:"Todo el año",habitat:"Bosques deciduos maduros",size:"22–27 cm",spot:"Mont-Royal, Parc Angrignon",mapsQuery:"Mont-Royal Montréal",behavior:"El vientre rojo es muy difícil de ver. La nuca y corona roja (en machos) es lo visible. Llegó a Montréal hace relativamente pocos años.",sound:"Llamada rodante: 'churr'. Común oírlo antes de verlo.",notes:"Relativamente nuevo en Montréal — cada foto es valiosa. Busca en robles y arces maduros.",photo:"Frecuenta comederos de suet en invierno. Plumaje más llamativo con luz lateral."},
  {id:22,name:"Zorzal de Madera",nameEn:"Wood Thrush",emoji:"🐦",cat:"Aves de bosque",diff:3,season:"May–Ago",habitat:"Bosques húmedos y sombreados",size:"19–21 cm",spot:"Mont-Royal, Bois-de-Liesse",mapsQuery:"Mont-Royal Montréal",behavior:"Busca lombrices en el suelo del bosque. Pecho con manchas redondas grandes. Muy vocal.",sound:"Canto más complejo y fluido de los bosques de Montréal — flautas entrelazadas.",notes:"Busca en la hojarasca húmeda del fondo del bosque. Se mueve despacio.",photo:"Luz dappled del bosque es difícil. ISO alto, apertura máxima. Espera en quietud."},
  {id:23,name:"Reinita Amarilla",nameEn:"Yellow Warbler",emoji:"🐦",cat:"Aves de bosque",diff:2,season:"May–Ago",habitat:"Arbustos ribereños, bordes húmedos",size:"11–13 cm",spot:"Île-de-la-Visitation, Cap-Saint-Jacques",mapsQuery:"Île-de-la-Visitation Montréal",behavior:"Todo amarillo. El macho tiene rayitas rojizas en el pecho. Muy activo, salta entre ramas constantemente.",sound:"Canto energético: 'sweet-sweet-sweet-I'm-so-sweet'.",notes:"El más fácil de las reinitas. Abundante en mayo-junio en riberas arboladas.",photo:"Ráfaga en modo continuo. 1/800s mínimo. Busca cuando se posa a cantar."},
  {id:24,name:"Tangara Escarlata",nameEn:"Scarlet Tanager",emoji:"🐦",cat:"Aves de bosque",diff:3,season:"May–Ago",habitat:"Bosques maduros de robles",size:"17 cm",spot:"Mont-Royal, Bois-de-Liesse",mapsQuery:"Mont-Royal Montréal",behavior:"Macho en verano: rojo intenso con alas negras — imposible confundir. Las hembras son verde-amarillosas.",sound:"Canto ronco similar al mirlo pero con 'raspado' en las notas.",notes:"Si mayo, si bosque de robles, abre bien los ojos al dosel. Una mancha roja entre hojas verdes.",photo:"70-300mm. El desafío es que prefiere el dosel alto. Busca cuando baja a beber o bañarse."},
  {id:25,name:"Azulejo del Este",nameEn:"Eastern Bluebird",emoji:"🐦",cat:"Aves de bosque",diff:3,season:"Abr–Oct",habitat:"Campos abiertos con árboles y cajas nido",size:"16–21 cm",spot:"Pointe-aux-Prairies, campos con cajas nido",mapsQuery:"Pointe-aux-Prairies Montréal",behavior:"Azul eléctrico por arriba, pecho rojizo. Caza insectos desde una percha baja. Anida en huecos y cajas nido.",sound:"Canto suave y melodioso: 'chur-lee chur-lee'.",notes:"Busca zonas con cajas nido instaladas — varios parques las tienen.",photo:"Se posa en la entrada de la caja nido. Espera en quietud. Azul eléctrico con luz frontal."},
  {id:26,name:"Mirlo Americano",nameEn:"American Robin",emoji:"🐦",cat:"Aves de bosque",diff:1,season:"Mar–Oct",habitat:"Parques, jardines, cualquier espacio verde",size:"23–28 cm",spot:"En todas partes",mapsQuery:"Parc La Fontaine Montréal",behavior:"Pecho naranja-rojo inconfundible. Corre por el césped, para, escucha, y saca lombrices.",sound:"Canto fluido y musical al amanecer: 'cheerily, cheer-up, cheerio'.",notes:"Primer ave del álbum. En agosto grandes bandadas se mueven para alimentarse de bayas.",photo:"Practica el enfoque rápido y la exposición aquí. Captura la postura de escucha con la cabeza ladeada."},
  {id:27,name:"Cardenal Rojo",nameEn:"Northern Cardinal",emoji:"🐦",cat:"Aves de bosque",diff:2,season:"Todo el año",habitat:"Arbustos y bordes de bosque",size:"21–23 cm",spot:"Mont-Royal, barrios arbolados con comederos",mapsQuery:"Mont-Royal Montréal",behavior:"El macho es rojo intenso con cresta. La hembra es beige-pardusca con toques rojos.",sound:"Silbido fuerte y claro: 'cheer-cheer-cheer' o 'birdy-birdy-birdy'.",notes:"Los machos dan semillas a las hembras como cortejo — espectacular de fotografiar.",photo:"En comederos en invierno el macho contra nieve blanca es una postal. Nieve como fondo = -1 EV."},
  {id:28,name:"Gorrión Cantor",nameEn:"Song Sparrow",emoji:"🐦",cat:"Aves de bosque",diff:2,season:"Mar–Nov",habitat:"Arbustos ribereños, bordes húmedos",size:"11–18 cm",spot:"Cap-Saint-Jacques, Île-de-la-Visitation",mapsQuery:"Île-de-la-Visitation Montréal",behavior:"Se posa en lo alto de arbustos para cantar. Raya central oscura en el pecho.",sound:"Canto variable: 3 notas agudas seguidas de trino.",notes:"Uno de los primeros en llegar en marzo. Canta desde percha visible.",photo:"Se posa en ramas despejadas para cantar — espera el momento del canto abierto."},
  {id:29,name:"Chipe Trepador",nameEn:"Black-and-white Warbler",emoji:"🐦",cat:"Aves de bosque",diff:3,season:"May–Ago",habitat:"Bosques mixtos con árboles viejos",size:"11–13 cm",spot:"Mont-Royal, Bois-de-Liesse",mapsQuery:"Bois-de-Liesse Montréal",behavior:"Trepa los troncos como un nuthatch — hacia arriba y abajo por la corteza. Rayas negras y blancas perfectas.",sound:"Silbido fino agudo: 'weesa-weesa-weesa'.",notes:"Comportamiento inconfundible. Busca en troncos gruesos de árboles maduros.",photo:"Ángulo bajo para fotografiar mientras trepa hacia arriba."},
  {id:30,name:"Turpial de Baltimore",nameEn:"Baltimore Oriole",emoji:"🐦",cat:"Aves de bosque",diff:2,season:"May–Ago",habitat:"Bordes de bosque y árboles grandes",size:"17–22 cm",spot:"Mont-Royal, parques con árboles grandes",mapsQuery:"Mont-Royal Montréal",behavior:"Macho: naranja brillante y negro. Nido en forma de bolsa colgante en ramas altas.",sound:"Silbido rico y fluido.",notes:"En mayo, poner naranja cortada en el jardín atrae machos. Nido colgante es icónico.",photo:"El macho naranja contra follaje verde de mayo es una foto que se vende sola."},
  {id:31,name:"Reinita de Blackburnian",nameEn:"Blackburnian Warbler",emoji:"🐦",cat:"Aves migratorias",diff:4,season:"May (migración)",habitat:"Copas de coníferas altas",size:"11–13 cm",spot:"Mont-Royal, cualquier conífera alta en mayo",mapsQuery:"Mont-Royal Montréal",behavior:"La garganta naranja fuego del macho es única. Vive en el dosel alto de coníferas.",sound:"Canto muy agudo, fino, casi inaudible para personas mayores: 'zeee-zeee-ZEEE'.",notes:"Ventana de 2-3 semanas en mayo. Una de las fotos más difíciles y más deseadas del álbum.",photo:"70-300mm apuntando al dosel. El momento en que desciende a la orilla de una rama es la oportunidad."},
  {id:32,name:"Reinita de Magnolia",nameEn:"Magnolia Warbler",emoji:"🐦",cat:"Aves migratorias",diff:3,season:"May (migración)",habitat:"Coníferas jóvenes a altura media",size:"11–13 cm",spot:"Mont-Royal en mayo",mapsQuery:"Mont-Royal Montréal",behavior:"Frecuenta estratos medios de coníferas — más accesible que otras. Amarillo, negro y blanco con banda en la cola.",sound:"Canto suave: 'weeto-weeto-weetee'.",notes:"Una de las reinitas más coloridas. Oleadas migratorias de mayo 10-25 son el pico.",photo:"Más accesible que Blackburnian. Busca en el lado iluminado de las coníferas."},
  {id:33,name:"Chipe Encapuchado",nameEn:"Hooded Warbler",emoji:"🐦",cat:"Aves migratorias",diff:4,season:"May–Ago",habitat:"Sotobosque denso sombreado",size:"13 cm",spot:"Cap-Saint-Jacques, bordes de bosques húmedos",mapsQuery:"Parc-nature Cap-Saint-Jacques Montréal",behavior:"Macho con capucha negra y cara amarilla. Mueve y abre la cola constantemente mostrando manchas blancas.",sound:"Canto fuerte: 'weeta-weeta-wee-TEE-o'.",notes:"Al límite norte de su rango. Cada avistamiento en la isla es notable.",photo:"Sotobosque = poca luz. ISO alto, apertura máxima. La capucha negra contrasta con el amarillo."},
  {id:34,name:"Zorzalito de Swainson",nameEn:"Swainson's Thrush",emoji:"🐦",cat:"Aves migratorias",diff:3,season:"May, Sep (migración)",habitat:"Bosques mixtos durante migración",size:"16–20 cm",spot:"Mont-Royal durante oleadas migratorias",mapsQuery:"Mont-Royal Montréal",behavior:"Pasa pero no nidifica en la isla. En migración baja al sotobosque. Anillo ocular beige visible.",sound:"Canto espiral fluido ascendente — uno de los más bellos del continente.",notes:"Mont-Royal en mayo de madrugada. El canto es la señal.",photo:"Luz difusa del sotobosque. Se mueve lento buscando fruta — más predecible que las reinitas."},
  {id:35,name:"Castor Americano",nameEn:"American Beaver",emoji:"🦫",cat:"Mamíferos",diff:2,season:"Abr–Oct",habitat:"Ríos y estanques con vegetación ribereña",size:"60–100 cm + cola plana de 25–38 cm",spot:"Cap-Saint-Jacques, Bois-de-Liesse, Rivière-des-Prairies",mapsQuery:"Parc-nature Cap-Saint-Jacques Montréal",behavior:"Crepuscular y nocturno. Construye presas y lodges. Cola plana inconfundible.",sound:"Golpe fuerte de cola en el agua = alarma. Se oye desde lejos.",notes:"Llegar 30 min antes del atardecer y esperar en el borde del estanque.",photo:"Luz dorada del atardecer sobre el agua quieta. El momento de roer un árbol es la foto icónica."},
  {id:36,name:"Zorro Rojo",nameEn:"Red Fox",emoji:"🦊",cat:"Mamíferos",diff:2,season:"Todo el año",habitat:"Bordes de bosque, campos, parques",size:"45–90 cm + cola de 30–55 cm",spot:"Cap-Saint-Jacques, Pointe-aux-Prairies",mapsQuery:"Pointe-aux-Prairies Montréal",behavior:"Más activo al amanecer. Solitario excepto en temporada de cría (enero-marzo).",sound:"Ladrido agudo y extraño, especialmente en celo.",notes:"Familias con cachorros en mayo cerca de sus madrigueras son la mejor oportunidad fotográfica.",photo:"Amanecer. Cachorro jugando en mayo = foto de portada."},
  {id:37,name:"Mapache",nameEn:"Raccoon",emoji:"🦝",cat:"Mamíferos",diff:1,season:"Mar–Nov",habitat:"Urbano, bosques, cerca del agua",size:"40–70 cm + cola",spot:"Cualquier parque grande con agua",mapsQuery:"Parc La Fontaine Montréal",behavior:"Nocturno principalmente, pero visible al atardecer. La 'máscara' negra y cola anillada son inconfundibles.",sound:"Variado — trinos, gruñidos, chillidos.",notes:"Madres con crías en mayo-junio son el sujeto más fotogénico.",photo:"Aproxímate despacio al atardecer cerca del agua."},
  {id:38,name:"Coyote del Este",nameEn:"Eastern Coyote",emoji:"🐺",cat:"Mamíferos",diff:3,season:"Todo el año",habitat:"Parques grandes, bordes de bosque",size:"60–90 cm — más grande que el coyote del oeste",spot:"Cap-Saint-Jacques, Bois-de-Liesse",mapsQuery:"Parc-nature Cap-Saint-Jacques Montréal",behavior:"Híbrido con lobo del este — más grande que el coyote típico. Activo al amanecer y atardecer.",sound:"Aullido en coro muy reconocible. Se escucha en noches tranquilas en parques grandes.",notes:"Avistamientos reportados regularmente en Cap-Saint-Jacques.",photo:"Madrugada o atardecer. Teleobjetivo siempre — nunca te acerques intencionalmente."},
  {id:39,name:"Marmota Común",nameEn:"Groundhog",emoji:"🐾",cat:"Mamíferos",diff:1,season:"Mar–Sep",habitat:"Campos abiertos, bordes de carretera",size:"40–65 cm",spot:"Cap-Saint-Jacques, zonas abiertas",mapsQuery:"Parc-nature Cap-Saint-Jacques Montréal",behavior:"Se yergue sobre patas traseras para vigilar — postura icónica. Hiberna de verdad.",sound:"Silbido agudo de alarma.",notes:"La postura erguida con ojos curiosos es la foto clásica.",photo:"Dispara desde bajo — arrástrate si es necesario."},
  {id:40,name:"Ardilla Gris",nameEn:"Eastern Gray Squirrel",emoji:"🐿️",cat:"Mamíferos",diff:1,season:"Todo el año",habitat:"Parques arbolados, bosques",size:"23–30 cm + cola",spot:"Mont-Royal, cualquier parque arbolado",mapsQuery:"Mont-Royal Montréal",behavior:"Variante melànica (negra) muy común en Montréal. Activa todo el año.",sound:"Chillidos agudos de alarma, chasqueos.",notes:"Hay dos morphs: gris y negro. Fotografiar ambos da dos variaciones de una especie.",photo:"La variante negra contra nieve blanca en invierno es muy fotogénica."},
  {id:41,name:"Ardilla Roja",nameEn:"American Red Squirrel",emoji:"🐿️",cat:"Mamíferos",diff:2,season:"Todo el año",habitat:"Bosques de coníferas",size:"17–23 cm + cola",spot:"Cap-Saint-Jacques (zona de coníferas)",mapsQuery:"Parc-nature Cap-Saint-Jacques Montréal",behavior:"Más pequeña y mucho más agresiva que la gris. Territorial — defiende su árbol de manera ruidosa.",sound:"Chillido rápido y prolongado — mucho más vocal que la gris.",notes:"Localízala por el sonido. Cuando te ve, te chilla sin parar.",photo:"Se sienta en su 'trono' favorito (tocón o rama) a comer. Paciencia y se ignora."},
  {id:42,name:"Ardilla de Tierra",nameEn:"Eastern Chipmunk",emoji:"🐿️",cat:"Mamíferos",diff:1,season:"Abr–Oct",habitat:"Bosques con sotobosque, parques",size:"14–19 cm + cola",spot:"Mont-Royal, Bois-de-Liesse",mapsQuery:"Mont-Royal Montréal",behavior:"Muy confiada cerca de humanos. Lleva comida en las mejillas enormes. Rayas dorsales inconfundibles.",sound:"Chip-chip-chip repetido.",notes:"Probablemente la más fácil de fotografiar bien.",photo:"Acércate muy lento y se quedará. Mejillas llenas de comida = foto perfecta."},
  {id:43,name:"Liebre de Raquetas",nameEn:"Snowshoe Hare",emoji:"🐇",cat:"Mamíferos",diff:4,season:"Todo el año",habitat:"Bosques densos con sotobosque",size:"36–52 cm",spot:"Cap-Saint-Jacques (zona más remota)",mapsQuery:"Parc-nature Cap-Saint-Jacques Montréal",behavior:"Blanca en invierno, marrón en verano — camuflaje perfecto en ambos. Patas traseras enormes.",sound:"Silenciosa generalmente. Golpea el suelo con las patas en alarma.",notes:"Cap-Saint-Jacques en invierno en zonas alejadas. Sus rastros en la nieve son la pista.",photo:"En invierno, blanca sobre nieve a nivel del suelo. En verano, marrón entre hojarasca."},
  {id:44,name:"Murciélago Café",nameEn:"Little Brown Bat",emoji:"🦇",cat:"Mamíferos",diff:2,season:"May–Sep",habitat:"Zonas abiertas al atardecer",size:"Envergadura 22–27 cm",spot:"Alrededor de lámparas de parque al oscurecer",mapsQuery:"Parc La Fontaine Montréal",behavior:"Sale a cazar 20-30 min después del atardecer. Vuelo errático cazando insectos.",sound:"Ultrasonidos inaudibles.",notes:"Fotografía contra el cielo azul del crepúsculo — siluetas.",photo:"Modo deportes, ISO 3200-6400, 1/1000s. Ráfaga obligatoria."},
  {id:45,name:"Musaraña de Cola Corta",nameEn:"Short-tailed Shrew",emoji:"🐀",cat:"Mamíferos",diff:5,season:"Todo el año",habitat:"Suelo húmedo del bosque bajo hojarasca",size:"9–14 cm",spot:"Cap-Saint-Jacques (suelo húmedo del bosque)",mapsQuery:"Parc-nature Cap-Saint-Jacques Montréal",behavior:"Activa día y noche bajo la hojarasca. El único mamífero venenoso de Canadá. Come constantemente.",sound:"Chillidos agudos de ultrasonido.",notes:"TROFEO MÁXIMO. Avistamiento casi accidental. Revisa troncos caídos húmedos.",photo:"Si aparece, tienes 3-5 segundos. ISO alto, apertura media, dispara sin pensar."},
  {id:46,name:"Tortuga Pintada",nameEn:"Painted Turtle",emoji:"🐢",cat:"Reptiles y anfibios",diff:1,season:"May–Sep",habitat:"Estanques con troncos sumergidos",size:"10–25 cm",spot:"Cap-Saint-Jacques, Parc Angrignon",mapsQuery:"Parc Angrignon Montréal",behavior:"Se asolean en grupos sobre troncos y rocas. La concha tiene bordes rojos y amarillos.",sound:"Silenciosa.",notes:"Fácil de encontrar, difícil de fotografiar sin asustarla. Aproxímate muy lento.",photo:"Ángulo bajo a nivel del agua con luz de mañana. Lente largo para no asustarla."},
  {id:47,name:"Tortuga de Orejas Rojas",nameEn:"Red-eared Slider",emoji:"🐢",cat:"Reptiles y anfibios",diff:1,season:"May–Sep",habitat:"Estanques urbanos y parques",size:"15–30 cm",spot:"Parc Angrignon, parques con estanques urbanos",mapsQuery:"Parc Angrignon Montréal",behavior:"Especie invasora (mascota liberada). Manchas rojas detrás de los ojos inconfundibles.",sound:"Silenciosa.",notes:"Invasora pero fotografiable. La mancha roja es el detalle diagnóstico.",photo:"Mismas técnicas que la pintada. Busca el detalle de la mancha roja en close-up."},
  {id:48,name:"Tortuga Mordedora",nameEn:"Snapping Turtle",emoji:"🐢",cat:"Reptiles y anfibios",diff:3,season:"May–Sep",habitat:"Fondos fangosos de lagos y ríos",size:"20–50 cm, hasta 16 kg",spot:"Cap-Saint-Jacques, Bois-de-Liesse",mapsQuery:"Bois-de-Liesse Montréal",behavior:"La más grande y agresiva de Canadá. Sale a poner huevos en junio. Cuello extensible sorpresivo. NO acercarse.",sound:"Siseo al sentirse amenazada.",notes:"En junio busca en caminos — las hembras caminan a poner huevos. NUNCA tocar.",photo:"Distancia de seguridad siempre. El perfil lateral mostrando la concha serrada es la foto buscada."},
  {id:49,name:"Rana Leopardo",nameEn:"Northern Leopard Frog",emoji:"🐸",cat:"Reptiles y anfibios",diff:2,season:"May–Sep",habitat:"Pantanos y praderas húmedas",size:"5–11 cm",spot:"Cap-Saint-Jacques, praderas húmedas",mapsQuery:"Parc-nature Cap-Saint-Jacques Montréal",behavior:"Verde o marrón con manchas ovaladas oscuras — patrón leopardo claro. Salta fuerte al acercarse.",sound:"Ronquido largo y bajo + gruñidos.",notes:"Común pero requiere acercarse despacio.",photo:"Acercarse muy lento por el suelo. La rana se congela si no percibes amenaza."},
  {id:50,name:"Rana Toro",nameEn:"American Bullfrog",emoji:"🐸",cat:"Reptiles y anfibios",diff:2,season:"Jun–Ago",habitat:"Estanques grandes y permanentes",size:"9–20 cm — la más grande de Canadá",spot:"Cap-Saint-Jacques, Bois-de-Liesse",mapsQuery:"Bois-de-Liesse Montréal",behavior:"Se queda inmóvil en el borde del agua durante horas. Tímpano más grande que el ojo en el macho.",sound:"Ronquido profundo: 'jug-o-rum'. Se oye desde 1 km.",notes:"Mide el tímpano vs. el ojo para saber el sexo.",photo:"Se queda quieta — la oportunidad perfecta para composición cuidadosa."},
  {id:51,name:"Rana de Árbol Gris",nameEn:"Gray Treefrog",emoji:"🐸",cat:"Reptiles y anfibios",diff:4,season:"May–Ago",habitat:"Bordes de bosque húmedo, árboles",size:"3.2–6 cm",spot:"Cap-Saint-Jacques (árboles cerca del agua)",mapsQuery:"Parc-nature Cap-Saint-Jacques Montréal",behavior:"Cambia de color de gris a verde según el sustrato. Ventosas adhesivas en los dedos.",sound:"Trino musical fuerte y largo — uno de los más bellos de Montréal. Se escucha de noche.",notes:"Escúchalo de noche — ubica el árbol — vuelve de día con linterna.",photo:"Si lo encuentras posado en corteza, el camuflaje es increíble."},
  {id:52,name:"Salamandra Manchada",nameEn:"Spotted Salamander",emoji:"🦎",cat:"Reptiles y anfibios",diff:4,season:"1 noche en marzo/abril",habitat:"Bosques deciduos con charcas de lluvia",size:"15–25 cm",spot:"Cap-Saint-Jacques (primera noche cálida y lluviosa de marzo)",mapsQuery:"Parc-nature Cap-Saint-Jacques Montréal",behavior:"Sale UNA noche al año en masa — la primera noche de lluvia tibia (>10°C) de primavera — para reproducirse.",sound:"Silenciosa.",notes:"TROFEO ABSOLUTO. Hay que saber la fecha exacta. Sigue grupos de naturalistas locales.",photo:"Lluvia de noche + flash + salamandra negra y amarilla = foto de vida silvestre épica."},
  {id:53,name:"Culebra Rayada",nameEn:"Eastern Garter Snake",emoji:"🐍",cat:"Reptiles y anfibios",diff:2,season:"May–Sep",habitat:"Praderas, bordes de bosque, orillas",size:"46–137 cm",spot:"Cap-Saint-Jacques, Pointe-aux-Prairies",mapsQuery:"Pointe-aux-Prairies Montréal",behavior:"La única culebra común en Montréal. Tres rayas longitudinales claras sobre fondo oscuro. Inofensiva.",sound:"Silenciosa. Sisea si se siente amenazada.",notes:"Se asola en rocas y troncos al sol. Fácil si te acercas lento.",photo:"Acercamiento lento mientras se asola. Plano picado muestra el patrón de rayas."},
  {id:54,name:"Mariposa Monarca",nameEn:"Monarch Butterfly",emoji:"🦋",cat:"Insectos",diff:2,season:"Ago–Sep (migración sur)",habitat:"Praderas con Asclepias",size:"10 cm envergadura",spot:"Cap-Saint-Jacques, Pointe-aux-Prairies",mapsQuery:"Pointe-aux-Prairies Montréal",behavior:"Migra miles de kilómetros a México. Agosto-septiembre: grupos descansan en Asclepias.",sound:"Silenciosa.",notes:"Agosto-septiembre en campos de Asclepias milkweed. Especie en peligro.",photo:"Luz frontal en Asclepias florecida. Macro de la textura del ala."},
  {id:55,name:"Cola de Golondrina Tigre",nameEn:"Canadian Tiger Swallowtail",emoji:"🦋",cat:"Insectos",diff:2,season:"May–Jul",habitat:"Bosques y jardines con flores",size:"8–12 cm envergadura",spot:"Mont-Royal, parques arbolados",mapsQuery:"Mont-Royal Montréal",behavior:"La mariposa grande y amarilla más común. Se posa largo tiempo en flores.",sound:"Silenciosa.",notes:"Mayo en Mont-Royal es temporada alta. Se posa en flores de lila y manzano.",photo:"Busca ángulo lateral para ver el ala completa. Se queda quieta con néctar."},
  {id:56,name:"Libélula 12 Puntos",nameEn:"Twelve-spotted Skimmer",emoji:"🦟",cat:"Insectos",diff:2,season:"Jun–Ago",habitat:"Orillas de estanques y lagos",size:"5 cm, 7 cm envergadura",spot:"Cap-Saint-Jacques, Parc Angrignon",mapsQuery:"Parc Angrignon Montréal",behavior:"Macho con 12 manchas en las alas. Territorial — defiende una percha y vuelve siempre.",sound:"Silenciosa.",notes:"Encuentra su percha favorita y espera — vuelve cada 2-3 minutos.",photo:"Macro en la percha. Alas transparentes con manchas contra luz de fondo son espectaculares."}
];

const CATS = ["Todas", ...new Set(FAUNA.map(f => f.cat))];
const DIFF_LABELS = ["","Común","Fácil","Moderado","Difícil","Trofeo"];
const DIFF_COLORS = ["","#4ade80","#a3e635","#fbbf24","#fb923c","#f87171"];
const DIFF_BG    = ["","#052e16","#1a2e05","#2d1f00","#2d1200","#2d0000"];

const ACHIEVEMENTS = [
  {id:'first_sighting', icon:'👁️', name:'Primer Avistamiento', desc:'Registra tu primera especie', goal:1, type:'sighted'},
  {id:'first_photo',    icon:'📸', name:'Primera Foto',        desc:'Fotografia tu primera especie', goal:1, type:'captured'},
  {id:'ten_species',    icon:'🌿', name:'Naturalista',          desc:'Fotografía 10 especies', goal:10, type:'captured'},
  {id:'twenty_five',    icon:'🔭', name:'Observador Serio',    desc:'Fotografía 25 especies', goal:25, type:'captured'},
  {id:'fifty_species',  icon:'🏆', name:'Maestro de la Fauna', desc:'Completa 50 de 56 especies', goal:50, type:'captured'},
  {id:'full_dex',       icon:'🌎', name:'Pokédex Completa',    desc:'¡Fotografía las 56 especies!', goal:56, type:'captured'},
  {id:'trophy_hunter',  icon:'💎', name:'Cazador de Trofeos', desc:'Fotografía 3 especies de dificultad 5', goal:3, type:'trophies'},
  {id:'bike_explorer',  icon:'🚲', name:'Explorador en Bici',  desc:'Registra avistamientos en 3 parques distintos', goal:3, type:'parks'},
  {id:'early_bird',     icon:'🌅', name:'Madrugador',          desc:'Registra 5 avistamientos antes de las 8AM', goal:5, type:'early'},
  {id:'seasonal_spring',icon:'🌸', name:'Primavera Activa',   desc:'Avista 10 especies en mayo', goal:10, type:'spring'},
  {id:'all_raptors',    icon:'🦅', name:'Rey de Rapaces',     desc:'Fotografía las 8 rapaces', goal:8, type:'raptors'},
  {id:'reptile_seeker', icon:'🐍', name:'Herpetólogo',         desc:'Fotografía las 8 especies de reptiles y anfibios acuáticos', goal:8, type:'herp'},
];

/* ── STATE ───────────────────────────────────────────────── */
let S = {
  tab: 'dashboard',
  filterCat: 'Todas',
  filterDiff: 0,
  search: '',
  expandedId: null,
  lifelistTab: 'captured',  // captured | sighted | pending
};

let DB = {
  captured: new Set(),   // ids photographed
  sightings: {},         // id -> [{date, location, notes, photoCount}]
  userPhotos: {},        // id -> [dataURL]
  achievements: new Set(),
};

/* ── PERSISTENCE ─────────────────────────────────────────── */
function save() {
  localStorage.setItem('faunadex_v3', JSON.stringify({
    captured: [...DB.captured],
    sightings: DB.sightings,
    userPhotos: DB.userPhotos,
    achievements: [...DB.achievements],
  }));
}

function load() {
  try {
    const raw = localStorage.getItem('faunadex_v3');
    if (!raw) return;
    const d = JSON.parse(raw);
    DB.captured = new Set(d.captured || []);
    DB.sightings = d.sightings || {};
    DB.userPhotos = d.userPhotos || {};
    DB.achievements = new Set(d.achievements || []);
  } catch(e) { console.warn('Load error', e); }
}

function exportBackup() {
  const data = JSON.stringify({
    captured: [...DB.captured],
    sightings: DB.sightings,
    userPhotos: DB.userPhotos,
    achievements: [...DB.achievements],
    exportedAt: new Date().toISOString(),
    version: 3
  }, null, 2);
  const blob = new Blob([data], {type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `faunadex-backup-${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  showToast('💾 Respaldo descargado', 'success');
}

function importBackup(file) {
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const d = JSON.parse(e.target.result);
      DB.captured = new Set(d.captured || []);
      DB.sightings = d.sightings || {};
      DB.userPhotos = d.userPhotos || {};
      DB.achievements = new Set(d.achievements || []);
      save();
      renderAll();
      showToast('✅ Respaldo importado', 'success');
    } catch(err) {
      showToast('❌ Error al importar', '');
    }
  };
  reader.readAsText(file);
}

/* ── HELPERS ─────────────────────────────────────────────── */
function getSightedIds() {
  return new Set(Object.keys(DB.sightings).filter(id => (DB.sightings[id]||[]).length > 0).map(Number));
}

function totalSightings() {
  return Object.values(DB.sightings).reduce((a, v) => a + (v||[]).length, 0);
}

function recentlySighted(n = 5) {
  const all = [];
  for (const [idStr, sightings] of Object.entries(DB.sightings)) {
    for (const s of sightings) {
      all.push({ id: +idStr, ...s });
    }
  }
  return all.sort((a,b) => new Date(b.date) - new Date(a.date)).slice(0, n);
}

function activeThisMonth() {
  const month = new Date().toISOString().slice(0,7);
  const ids = new Set();
  for (const [idStr, sightings] of Object.entries(DB.sightings)) {
    if ((sightings||[]).some(s => (s.date||'').startsWith(month))) ids.add(+idStr);
  }
  return [...ids].map(id => FAUNA.find(f => f.id === id)).filter(Boolean);
}

function getObjectives() {
  const objs = [];
  const n = DB.captured.size;
  const milestones = [10, 25, 50, 56];
  for (const m of milestones) {
    if (n < m) { objs.push({emoji:'🎯', name:`${m} especies fotografiadas`, detail:`${n}/${m} completado`}); break; }
  }
  // next trophy
  const trophies = FAUNA.filter(f => f.diff === 5 && !DB.captured.has(f.id));
  if (trophies.length > 0) objs.push({emoji:'💎', name:`Trofeo: ${trophies[0].name}`, detail:`Dificultad máxima · ${trophies[0].season}`});
  // seasonal
  const month = new Date().getMonth() + 1;
  if (month >= 4 && month <= 6) objs.push({emoji:'🌸', name:'Temporada de reinitas', detail:'Mayo es el mejor mes — Mont-Royal'});
  if (month >= 8 && month <= 9) objs.push({emoji:'🦋', name:'Migración de Monarcas', detail:'Agosto-Sep en Pointe-aux-Prairies'});
  if (month >= 11 || month <= 2) objs.push({emoji:'🦉', name:'Búho Nevado activo', detail:'Busca en campos de Pierrefonds'});
  return objs.slice(0, 3);
}

/* ── ACHIEVEMENTS ENGINE ─────────────────────────────────── */
function checkAchievements() {
  const sighted = getSightedIds();
  const captured = DB.captured;
  const newOnes = [];

  const check = (id, condition) => {
    if (!DB.achievements.has(id) && condition) {
      DB.achievements.add(id);
      newOnes.push(ACHIEVEMENTS.find(a => a.id === id));
    }
  };

  check('first_sighting', sighted.size >= 1);
  check('first_photo', captured.size >= 1);
  check('ten_species', captured.size >= 10);
  check('twenty_five', captured.size >= 25);
  check('fifty_species', captured.size >= 50);
  check('full_dex', captured.size >= 56);
  check('trophy_hunter', FAUNA.filter(f => f.diff===5 && captured.has(f.id)).length >= 3);
  const raptures = FAUNA.filter(f => f.cat==='Rapaces' && captured.has(f.id)).length;
  check('all_raptors', raptures >= 8);

  const parks = new Set();
  for (const sightingArr of Object.values(DB.sightings)) {
    for (const s of (sightingArr||[])) if (s.location) parks.add(s.location.trim().toLowerCase());
  }
  check('bike_explorer', parks.size >= 3);

  const early = Object.values(DB.sightings).flat().filter(s => {
    if (!s.date) return false;
    const h = parseInt((s.date.split('T')[1]||'').split(':')[0]);
    return !isNaN(h) && h < 8;
  }).length;
  check('early_bird', early >= 5);

  const springSightings = new Set();
  for (const [idStr, arr] of Object.entries(DB.sightings)) {
    for (const s of (arr||[])) {
      const m = new Date(s.date).getMonth();
      if (m === 4) springSightings.add(+idStr);
    }
  }
  check('seasonal_spring', springSightings.size >= 10);

  const herp = FAUNA.filter(f => f.cat==='Reptiles y anfibios' && captured.has(f.id)).length;
  check('reptile_seeker', herp >= 8);

  if (newOnes.length > 0) {
    save();
    newOnes.forEach((a, i) => setTimeout(() => showAchievementPopup(a), i * 3200));
  }
}

/* ── TOAST ───────────────────────────────────────────────── */
let toastTimer;
function showToast(msg, type='') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast show' + (type ? ` ${type}` : '');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

function showAchievementPopup(a) {
  const p = document.getElementById('achievementPopup');
  p.querySelector('.popup-icon').textContent = a.icon;
  p.querySelector('.popup-name').textContent = a.name;
  p.querySelector('.popup-desc').textContent = a.desc;
  p.classList.add('show');
  setTimeout(() => p.classList.remove('show'), 3000);
}

/* ── NAVIGATION ──────────────────────────────────────────── */
function switchTab(tab) {
  S.tab = tab;
  document.querySelectorAll('.screen').forEach(el => el.classList.toggle('active', el.id === `screen-${tab}`));
  document.querySelectorAll('.nav-item').forEach(el => el.classList.toggle('active', el.dataset.tab === tab));
  const titles = {dashboard:'FaunaDex Montréal', pokedex:'Pokédex', lifelist:'Lista de Vida', achievements:'Logros', settings:'Perfil'};
  document.querySelector('.app-header-title').textContent = titles[tab] || 'FaunaDex';
  if (tab === 'dashboard') renderDashboard();
  if (tab === 'pokedex') renderList();
  if (tab === 'lifelist') renderLifeList();
  if (tab === 'achievements') renderAchievements();
}

/* ── HEADER BADGE ────────────────────────────────────────── */
function updateBadge() {
  const n = DB.captured.size;
  const pct = Math.round(n / FAUNA.length * 100);
  document.querySelector('.app-header-badge').textContent = `${n}/56`;
}

/* ══════════════════════════════════════════════════════════
   DASHBOARD
   ══════════════════════════════════════════════════════════ */
function renderDashboard() {
  const n = DB.captured.size;
  const pct = Math.round(n / FAUNA.length * 100);
  const sighted = getSightedIds().size;
  const el = document.getElementById('screen-dashboard');

  el.innerHTML = `
  <div class="dash-hero">
    <div class="dash-hero-label">Mi Progreso · ${new Date().getFullYear()}</div>
    <div class="dash-hero-progress">
      <span class="dash-hero-num">${n}</span>
      <span class="dash-hero-total">/56</span>
    </div>
    <div class="dash-pct">${pct}% completado</div>
    <div class="dash-bar"><div class="dash-bar-fill" style="width:${pct}%"></div></div>
  </div>

  <div class="dash-stats-row">
    <div class="dash-stat">
      <div class="dash-stat-num text-green">${n}</div>
      <div class="dash-stat-lbl">Fotos</div>
    </div>
    <div class="dash-stat">
      <div class="dash-stat-num" style="color:var(--blue)">${sighted}</div>
      <div class="dash-stat-lbl">Vistas</div>
    </div>
    <div class="dash-stat">
      <div class="dash-stat-num text-gold">${DB.achievements.size}</div>
      <div class="dash-stat-lbl">Logros</div>
    </div>
  </div>

  ${renderRecentSection()}
  ${renderActiveMonth()}
  ${renderObjectivesSection()}
  `;
}

function renderRecentSection() {
  const recent = recentlySighted();
  if (recent.length === 0) return `
    <div class="section-title">Avistamientos recientes</div>
    <div style="padding:12px 16px">
      <div class="empty-state" style="padding:20px">
        <div class="empty-icon">🔭</div>
        <div class="empty-title">Sin avistamientos aún</div>
        <div class="empty-text">Sal a buscar y registra tus primeras especies en el Pokédex.</div>
      </div>
    </div>`;

  const cards = recent.map(s => {
    const f = FAUNA.find(x => x.id === s.id);
    if (!f) return '';
    return `<div class="dash-mini-card" onclick="openSpecies(${f.id})">
      <div class="dash-mini-card-img">${f.emoji}</div>
      <div class="dash-mini-card-body">
        <div class="dash-mini-card-name">${f.name}</div>
        <div class="dash-mini-card-sub">${(s.date||'').split('T')[0]}</div>
      </div>
    </div>`;
  }).join('');

  return `<div class="section-title">Avistamientos recientes</div>
    <div class="dash-card-row">${cards}</div>`;
}

function renderActiveMonth() {
  const active = activeThisMonth();
  if (active.length === 0) return '';
  const monthName = new Date().toLocaleDateString('es-CA', {month:'long'});
  return `<div class="section-title">Activas en ${monthName}</div>
    <div class="dash-card-row">${active.map(f => `
      <div class="dash-mini-card" onclick="openSpecies(${f.id})">
        <div class="dash-mini-card-img">${f.emoji}</div>
        <div class="dash-mini-card-body">
          <div class="dash-mini-card-name">${f.name}</div>
          <div class="dash-mini-card-sub">${DB.captured.has(f.id) ? '✅ Fotografiada' : '👁️ Vista'}</div>
        </div>
      </div>`).join('')}</div>`;
}

function renderObjectivesSection() {
  const objs = getObjectives();
  if (objs.length === 0) return '';
  return `<div class="section-title">Próximos objetivos</div>
    <div class="dash-objectives">
      ${objs.map(o => `
        <div class="objective-item">
          <span class="obj-emoji">${o.emoji}</span>
          <div class="obj-body">
            <div class="obj-name">${o.name}</div>
            <div class="obj-detail">${o.detail}</div>
          </div>
          <span class="obj-arrow">›</span>
        </div>`).join('')}
    </div>`;
}

/* ══════════════════════════════════════════════════════════
   POKÉDEX
   ══════════════════════════════════════════════════════════ */
function getFiltered() {
  const q = S.search.toLowerCase();
  return FAUNA.filter(f => {
    if (S.filterCat !== 'Todas' && f.cat !== S.filterCat) return false;
    if (S.filterDiff > 0 && f.diff !== S.filterDiff) return false;
    if (q && !f.name.toLowerCase().includes(q) && !f.nameEn.toLowerCase().includes(q) && !f.cat.toLowerCase().includes(q)) return false;
    return true;
  });
}

function renderList() {
  const filtered = getFiltered();
  const el = document.getElementById('speciesList');
  el.innerHTML = filtered.length === 0
    ? `<div class="empty-state"><div class="empty-icon">🔍</div><div class="empty-title">Sin resultados</div><div class="empty-text">Intenta con otra búsqueda o categoría.</div></div>`
    : filtered.map(f => speciesCardHTML(f)).join('');
}

function speciesCardHTML(f) {
  const captured = DB.captured.has(f.id);
  const sightings = DB.sightings[f.id] || [];
  const expanded = S.expandedId === f.id;
  const hasPhotos = (DB.userPhotos[f.id]||[]).length > 0;

  return `<div class="species-card ${captured?'captured':''} ${expanded?'expanded':''}" id="sc-${f.id}">
    <div class="species-card-main" onclick="toggleExpand(${f.id})">
      <div class="species-thumb">
        ${hasPhotos
          ? `<img src="${DB.userPhotos[f.id][0]}" alt="${f.name}">`
          : `<span style="font-size:28px">${f.emoji}</span>`}
        <div class="captured-overlay">✅</div>
      </div>
      <div class="species-card-info">
        <div class="species-card-id">#${String(f.id).padStart(3,'0')} · ${f.cat}</div>
        <div class="species-card-name">${f.name}</div>
        <div class="species-card-en">${f.nameEn}</div>
        <div class="species-card-tags">
          <span class="species-tag" style="color:${DIFF_COLORS[f.diff]};background:${DIFF_BG[f.diff]};border:1px solid ${DIFF_COLORS[f.diff]}44;border-radius:4px;padding:2px 6px;">${DIFF_LABELS[f.diff]}</span>
          <span class="species-tag species-tag-season">📅 ${f.season}</span>
          ${sightings.length > 0 ? `<span class="species-tag" style="color:var(--blue)">👁️ ${sightings.length}×</span>` : ''}
        </div>
      </div>
      <button class="species-action-btn" onclick="event.stopPropagation();toggleCapture(${f.id})" title="${captured?'Desmarcar':'Marcar como fotografiada'}">
        ${captured ? '✅' : '📷'}
      </button>
    </div>
    ${expanded ? speciesDetailHTML(f) : ''}
  </div>`;
}

function speciesDetailHTML(f) {
  const sightings = DB.sightings[f.id] || [];
  const photos = DB.userPhotos[f.id] || [];

  const photoGrid = photos.length > 0
    ? `<div class="photo-gallery">${photos.map((p,i) => `<div class="photo-thumb"><img src="${p}" loading="lazy"></div>`).join('')}<div class="photo-add-btn" onclick="addPhoto(${f.id})">+</div></div>`
    : `<div style="margin-bottom:8px"><div class="photo-add-btn" style="width:80px;height:80px;border-radius:10px" onclick="addPhoto(${f.id})">📷</div></div>`;

  const sightingItems = sightings.map((s,i) => `
    <div class="sighting-item">
      <div class="sighting-date">📅 ${(s.date||'').replace('T',' ').slice(0,16)}</div>
      ${s.location ? `<div class="sighting-loc">📍 ${s.location}</div>` : ''}
      ${s.notes ? `<div class="sighting-notes">${s.notes}</div>` : ''}
      ${s.photoCount ? `<div class="sighting-loc">📸 ${s.photoCount} foto(s)</div>` : ''}
      <button class="sighting-delete" onclick="deleteSighting(${f.id},${i})">✕</button>
    </div>`).join('');

  return `<div class="species-detail">
    <div class="detail-hero">
      <span>${f.emoji}</span>
      <div class="detail-hero-gradient"></div>
      <div class="detail-hero-difficulty" style="color:${DIFF_COLORS[f.diff]};background:${DIFF_BG[f.diff]};border-color:${DIFF_COLORS[f.diff]}66">${DIFF_LABELS[f.diff]}</div>
    </div>
    <div class="detail-body">
      <div class="detail-grid">
        <div class="detail-cell"><div class="detail-cell-label">📏 Tamaño</div><div class="detail-cell-val">${f.size}</div></div>
        <div class="detail-cell"><div class="detail-cell-label">📅 Temporada</div><div class="detail-cell-val">${f.season}</div></div>
        <div class="detail-cell full"><div class="detail-cell-label">🏞️ Hábitat</div><div class="detail-cell-val">${f.habitat}</div></div>
        <div class="detail-cell full"><div class="detail-cell-label">📍 Spot recomendado</div><div class="detail-cell-val">${f.spot}</div></div>
        <div class="detail-cell full"><div class="detail-cell-label">🦁 Comportamiento</div><div class="detail-cell-val">${f.behavior}</div></div>
        <div class="detail-cell full"><div class="detail-cell-label">🔊 Sonido / Canto</div><div class="detail-cell-val">${f.sound}</div></div>
      </div>

      <div class="detail-note-box">
        <div class="detail-note-label">💡 Nota de Campo</div>
        <div class="detail-note-text">${f.notes}</div>
      </div>

      <div class="detail-photo-box">
        <div class="detail-photo-label">📷 Tip Fotográfico</div>
        <div class="detail-photo-text">${f.photo}</div>
      </div>

      <a class="detail-maps-btn" href="https://www.google.com/maps/search/${encodeURIComponent(f.mapsQuery)}" target="_blank" rel="noopener">
        <span class="detail-maps-icon">🗺️</span>
        <span>Cómo llegar · ${f.spot.split(',')[0]}</span>
        <span class="detail-maps-arrow">↗</span>
      </a>

      <div class="sighting-section">
        <div class="sighting-section-title">📸 Mis Fotos</div>
        ${photoGrid}
      </div>

      <div class="sighting-section">
        <div class="sighting-section-title">👁️ Registrar Avistamiento</div>
        <div class="sighting-form" id="sf-${f.id}">
          <input type="datetime-local" class="form-input" id="sw-date-${f.id}" value="${new Date().toISOString().slice(0,16)}">
          <input type="text" class="form-input" id="sw-loc-${f.id}" placeholder="Ubicación (ej: Cap-Saint-Jacques)" autocomplete="off">
          <div class="form-row">
            <input type="number" class="form-input" id="sw-photos-${f.id}" placeholder="# fotos" min="0" style="max-width:100px">
            <textarea class="form-textarea" id="sw-notes-${f.id}" placeholder="Notas..." rows="2" style="flex:1"></textarea>
          </div>
          <button class="form-save-btn" onclick="saveSighting(${f.id})">Guardar avistamiento</button>
        </div>
      </div>

      ${sightings.length > 0 ? `
      <div class="sighting-section">
        <div class="sighting-section-title">Historial (${sightings.length})</div>
        <div class="sightings-list">${sightingItems}</div>
      </div>` : ''}
    </div>
  </div>`;
}

function toggleExpand(id) {
  S.expandedId = S.expandedId === id ? null : id;
  renderList();
  if (S.expandedId) {
    setTimeout(() => {
      const el = document.getElementById(`sc-${id}`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }
}

function openSpecies(id) {
  S.expandedId = id;
  switchTab('pokedex');
  setTimeout(() => {
    S.filterCat = 'Todas'; S.filterDiff = 0; S.search = '';
    renderList();
    setTimeout(() => {
      const el = document.getElementById(`sc-${id}`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }, 50);
}

function toggleCapture(id) {
  if (DB.captured.has(id)) {
    DB.captured.delete(id);
    showToast('Desmarcada');
  } else {
    DB.captured.add(id);
    showToast('📸 ¡Fotografiada!', 'success');
  }
  save();
  checkAchievements();
  updateBadge();
  renderList();
}

function saveSighting(id) {
  const date = document.getElementById(`sw-date-${id}`)?.value;
  const location = document.getElementById(`sw-loc-${id}`)?.value.trim();
  const notes = document.getElementById(`sw-notes-${id}`)?.value.trim();
  const photoCount = parseInt(document.getElementById(`sw-photos-${id}`)?.value) || 0;
  if (!date) { showToast('⚠️ Añade una fecha'); return; }
  if (!DB.sightings[id]) DB.sightings[id] = [];
  DB.sightings[id].unshift({ date, location, notes, photoCount });
  save();
  checkAchievements();
  showToast('👁️ Avistamiento guardado', 'success');
  renderList();
}

function deleteSighting(id, idx) {
  if (!DB.sightings[id]) return;
  DB.sightings[id].splice(idx, 1);
  save();
  showToast('Eliminado');
  renderList();
}

function addPhoto(id) {
  const input = document.createElement('input');
  input.type = 'file'; input.accept = 'image/*'; input.capture = 'environment';
  input.onchange = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      if (!DB.userPhotos[id]) DB.userPhotos[id] = [];
      DB.userPhotos[id].unshift(ev.target.result);
      if (!DB.captured.has(id)) { DB.captured.add(id); checkAchievements(); updateBadge(); }
      save();
      showToast('📸 Foto añadida', 'success');
      renderList();
    };
    reader.readAsDataURL(file);
  };
  input.click();
}

/* ── FILTER INIT ─────────────────────────────────────────── */
function initFilters() {
  const catEl = document.getElementById('catFilterRow');
  catEl.innerHTML = CATS.map(c =>
    `<button class="filter-chip ${S.filterCat===c?'active':''}" onclick="setCat('${c}')">${c}</button>`
  ).join('');

  const diffEl = document.getElementById('diffFilterRow');
  diffEl.innerHTML =
    `<button class="diff-chip ${S.filterDiff===0?'active':''}" style="${S.filterDiff===0?'border-color:var(--border2);color:var(--text2)':''}" onclick="setDiff(0)">Todas</button>` +
    [1,2,3,4,5].map(d =>
      `<button class="diff-chip ${S.filterDiff===d?'active':''}" style="${S.filterDiff===d?`border-color:${DIFF_COLORS[d]};background:${DIFF_BG[d]};color:${DIFF_COLORS[d]}`:''}" onclick="setDiff(${d})">${DIFF_LABELS[d]}</button>`
    ).join('');
}

function setCat(c) { S.filterCat = c; initFilters(); renderList(); }
function setDiff(d) { S.filterDiff = d; initFilters(); renderList(); }

/* ══════════════════════════════════════════════════════════
   LIFE LIST
   ══════════════════════════════════════════════════════════ */
function renderLifeList() {
  const el = document.getElementById('screen-lifelist');
  const sighted = getSightedIds();
  const tabs = [
    {id:'captured', label:`📸 Fotos (${DB.captured.size})`},
    {id:'sighted',  label:`👁️ Vistas (${sighted.size})`},
    {id:'pending',  label:`🎯 Pendientes (${56 - DB.captured.size})`},
  ];

  let items = [];
  if (S.lifelistTab === 'captured') items = FAUNA.filter(f => DB.captured.has(f.id));
  if (S.lifelistTab === 'sighted')  items = FAUNA.filter(f => sighted.has(f.id));
  if (S.lifelistTab === 'pending')  items = FAUNA.filter(f => !DB.captured.has(f.id));

  const cats = [...new Set(items.map(f => f.cat))];

  el.innerHTML = `
  <div class="lifelist-header">
    <div class="lifelist-tabs">
      ${tabs.map(t => `<button class="lifelist-tab ${S.lifelistTab===t.id?'active':''}" onclick="setLifelistTab('${t.id}')">${t.label}</button>`).join('')}
    </div>
  </div>

  ${items.length === 0
    ? `<div class="lifelist-empty">
        <div class="lifelist-empty-icon">${S.lifelistTab==='pending'?'🏆':'🔭'}</div>
        <div class="lifelist-empty-title">${S.lifelistTab==='pending'?'¡Lista completa!':'Sin especies aquí aún'}</div>
        <div class="lifelist-empty-text">${S.lifelistTab==='pending'?'¡Felicidades, completaste la Pokédex!':'Ve al Pokédex y registra tus primeros avistamientos.'}</div>
      </div>`
    : cats.map(cat => {
        const catItems = items.filter(f => f.cat === cat);
        return `<div class="lifelist-cat-section">
          <div class="lifelist-cat-header">
            <span class="lifelist-cat-name">${cat}</span>
            <span class="lifelist-cat-count">${catItems.length}</span>
          </div>
          ${catItems.map(f => {
            const sightingDate = (DB.sightings[f.id]||[]).length > 0
              ? (DB.sightings[f.id][0].date||'').split('T')[0] : '';
            return `<div class="lifelist-item" onclick="openSpecies(${f.id})">
              <span class="lifelist-emoji">${f.emoji}</span>
              <span class="lifelist-name">${f.name}</span>
              ${sightingDate ? `<span class="lifelist-date">${sightingDate}</span>` : ''}
              ${DB.captured.has(f.id) ? '<span class="lifelist-check">📸</span>' : ''}
            </div>`;
          }).join('')}
        </div>`;
      }).join('')
  }`;
}

function setLifelistTab(t) { S.lifelistTab = t; renderLifeList(); }

/* ══════════════════════════════════════════════════════════
   ACHIEVEMENTS
   ══════════════════════════════════════════════════════════ */
function getAchievementProgress(a) {
  const sighted = getSightedIds().size;
  const captured = DB.captured.size;
  switch(a.type) {
    case 'sighted':  return Math.min(sighted, a.goal);
    case 'captured': return Math.min(captured, a.goal);
    case 'trophies': return Math.min(FAUNA.filter(f => f.diff===5 && DB.captured.has(f.id)).length, a.goal);
    case 'raptors':  return Math.min(FAUNA.filter(f => f.cat==='Rapaces' && DB.captured.has(f.id)).length, a.goal);
    case 'herp':     return Math.min(FAUNA.filter(f => f.cat==='Reptiles y anfibios' && DB.captured.has(f.id)).length, a.goal);
    case 'parks': {
      const parks = new Set();
      for (const arr of Object.values(DB.sightings)) for (const s of (arr||[])) if (s.location) parks.add(s.location.trim().toLowerCase());
      return Math.min(parks.size, a.goal);
    }
    case 'early': {
      const n = Object.values(DB.sightings).flat().filter(s => { const h=parseInt((s.date||'').split('T')[1]?.split(':')[0]); return !isNaN(h)&&h<8; }).length;
      return Math.min(n, a.goal);
    }
    case 'spring': {
      const ids = new Set();
      for (const [id, arr] of Object.entries(DB.sightings)) for (const s of (arr||[])) if (new Date(s.date).getMonth()===4) ids.add(+id);
      return Math.min(ids.size, a.goal);
    }
    default: return 0;
  }
}

function renderAchievements() {
  const el = document.getElementById('screen-achievements');
  const unlocked = DB.achievements.size;

  el.innerHTML = `
  <div class="achievements-header">
    <div class="achievements-total">${unlocked}<span style="font-size:20px;color:var(--text3)">/${ACHIEVEMENTS.length}</span></div>
    <div class="achievements-label">Logros desbloqueados</div>
  </div>
  <div class="achievement-grid">
    ${ACHIEVEMENTS.map(a => {
      const isUnlocked = DB.achievements.has(a.id);
      const prog = getAchievementProgress(a);
      const pct = Math.round(prog / a.goal * 100);
      return `<div class="achievement-card ${isUnlocked?'unlocked':''}">
        <div class="achievement-icon">${a.icon}</div>
        <div class="achievement-name">${a.name}</div>
        <div class="achievement-desc">${a.desc}</div>
        <div class="achievement-progress">
          <div class="achievement-progress-fill" style="width:${pct}%"></div>
        </div>
        <div style="font-family:var(--font-mono);font-size:9px;color:${isUnlocked?'var(--gold)':'var(--text3)'};margin-top:4px">${prog}/${a.goal}</div>
      </div>`;
    }).join('')}
  </div>`;
}

/* ══════════════════════════════════════════════════════════
   SETTINGS
   ══════════════════════════════════════════════════════════ */
function renderSettings() {
  // static in HTML, actions wired here
}

/* ── IMPORT FILE ─────────────────────────────────────────── */
document.getElementById('importFile').addEventListener('change', e => {
  const file = e.target.files[0];
  if (file) importBackup(file);
  e.target.value = '';
});

/* ══════════════════════════════════════════════════════════
   SERVICE WORKER
   ══════════════════════════════════════════════════════════ */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').then(reg => {
      console.log('SW registered:', reg.scope);
    }).catch(err => console.warn('SW failed:', err));
  });
}

/* ── INIT ────────────────────────────────────────────────── */
function renderAll() {
  updateBadge();
  renderDashboard();
  initFilters();
  renderList();
}

load();
renderAll();

// Splash screen
setTimeout(() => {
  document.getElementById('splash').classList.add('hidden');
}, 2000);
