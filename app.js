/* app.js */
document.addEventListener('DOMContentLoaded', () => {
    // ----- Oração do Dia ----- //
    const textoOracao = document.getElementById('textoOracao');
    const temaOracao = document.getElementById('temaOracao');
  


    const oracoes = {
      familia: "Santo Anjo do Senhor, meu zeloso guardador, se a ti me confiou a piedade divina, sempre me rege, me guarda, me governa, me ilumina. Amém.",
      trabalho: 
      `Deus onipotente, Pai de bondade e de misericórdia, tende piedade das benditas almas do purgatório e ajudai a meus queridos pais e antepassados.

Jesus meu, misericórdia! Ajudai a meus irmãos e parentes.

Jesus meu, misericórdia! Ajudai a todos meus benfeitores espirituais e temporais.

Jesus meu, misericórdia! Ajudai aos que tem sido meus amigos e empregados.

Jesus meu, misericórdia! Ajudai a quantos devo amor e orar.

Jesus meu, misericórdia! Ajudai a quantos tive prejudicado e ferido.

Jesus meu, misericórdia! Ajudai aos que tiveram faltado contra mim.

Jesus meu, misericórdia! Ajudai aqueles a quem professais predileção.

Jesus meu, misericórdia! Ajudai aos que estão mais próximos a união convosco.

Jesus meu, misericórdia! Ajudai aos que vos desejam mais ardentemente.

Jesus meu, misericórdia! Ajudai aos que sofrem mais.

Jesus meu, misericórdia! Ajudai aos que estão mais longe de sua liberação.

Jesus meu, misericórdia! Ajudai aos que menos auxílios recebem.

Jesus meu, misericórdia! Ajudai aos que mais méritos tem pela Igreja.

Jesus meu, misericórdia! Ajudai aos que foram ricos aqui, e ali são os mais pobres.

Jesus meu, misericórdia! Ajudai aos poderosos, que agora são como servos.

Jesus meu, misericórdia! Ajudai aos cegos que agora reconhecem sua cegueira.

Jesus meu, misericórdia! Ajudai aos vaidosos que desperdiçaram seu tempo.

Jesus meu, misericórdia! Ajudai aos pobres que não buscaram as riquezas divinas.

Jesus meu, misericórdia! Ajudai aos tíbios que muito pouca oração tem feito.

Jesus meu, misericórdia! Ajudai aos presunços que tem descuidado de tantas obras boas.

Jesus meu, misericórdia! Ajudai aos de pouca fé que descuidaram dos Santos Sacramentos.

Jesus meu, misericórdia! Ajudai aos reincidentes que apenas por um milagre da graça se tem salvado.

Jesus meu, misericórdia! Ajudai aos pais que não vigiaram bem a seus filhos.

Jesus meu, misericórdia! Ajudai aos superiores pouco atentos a salvação de seus súditos.

Jesus meu, misericórdia! Ajudai aos pobres homens, que quase apenas se preocuparam do dinheiro e do prazer.

Jesus meu, misericórdia! Ajudai aos de espírito mundano que não aproveitaram suas riquezas ou talentos para o céu.

Jesus meu, misericórdia! Ajudai aos néscios, que viram morrer a tantos não se lembrando de sua própria morte.

Jesus meu, misericórdia! Ajudai aos que não dispuseram a tempo de sua casa, estando completamente desprevenidos para a viagem mais importante.

Jesus meu, misericórdia! Ajudai aos que julgais mais severamente, quanto mais lhes foi confiado.

Jesus meu, misericórdia! Ajudai aos pontífices, reis e príncipes.

Jesus meu, misericórdia! Ajudai aos bispos e seus conselheiros.

Jesus meu, misericórdia! Ajudai a meus mestres e pastores de almas.

Jesus meu, misericórdia! Ajudai aos finados sacerdotes desta diocese.

Jesus meu, misericórdia! Ajudai aos sacerdotes e religiosos da Igreja católica.

Jesus meu, misericórdia! Ajudai aos defensores da santa fé.

Jesus meu, misericórdia! Ajudai aos caídos nos campos de batalha.

Jesus meu, misericórdia! Ajudai aos sepultados nos mares.

Jesus meu, misericórdia! Ajudai aos mortos repentinamente.

Jesus meu, misericórdia! Ajudai aos falecidos sem receber os Santos Sacramentos.

Jesus meu, misericórdia! Dai-lhes, Senhor, a todas as almas o descanso eterno.

Jesus meu, misericórdia! E fazei brilhar sobre elas vossa eterna luz.

Jesus meu, misericórdia! Que em paz descansem.

Jesus meu, misericórdia! Amém.`,
      cura: "Ó Santo Pontífice, fiel servo do Senhor, fiel e humilde discípulo do divino Mestre. Na dor e na alegria, nos trabalhos e nas solicitudes, experimentado pastor do rebanho de Cristo, volvei o vosso olhar sobre nós.  Árduos são os tempos em que vivemos. Duras as fadigas que de nós exigem. A Esposa de Cristo, confiada aos vossos cuidados, está de novo em angústias terríveis. Os vossos filhos se vêem ameaçados por inúmeros perigos na alma e no corpo.  O espírito do mundo, qual leão enfurecido, rodeia-nos buscando a quem devorar. Não poucos caem nas suas garras. Têm olhos e não vêem. Têm ouvidos e não ouvem.  Fecham os olhos à luz da eterna verdade, preferindo dar ouvidos às vozes que insinuam mensagens enganadoras.  Vós que fostes na terra grande animador e guia do povo de Deus, sede auxílio e intercessor nosso e de todos os que se professam seguidores de Cristo.  Vós, cujo coração se rompeu quando o mundo se precipitou em sanguinolenta luta, socorrei a humanidade, a cristandade, exposta presentemente a semelhantes abalos.  Obtende-nos da misericórdia divina o dom da paz duradoura e, como aproximação, o retorno dos espíritos àquele sentido de fraternidade, que somente pode dar aos homens e as nações a justiça e a concórdia desejadas por Deus. Assim seja.",
      saomiguelarcanjo: 
`São Miguel Arcanjo, defendei-nos no combate.
Sede o nosso refúgio contra as maldades e ciladas do demônio.
Que Deus manifeste o seu poder sobre ele. Eis a nossa humilde súplica.
E vós, Príncipe da Milícia Celeste, com o poder que Deus vos conferiu,
precipitai no inferno Satanás e os outros espíritos malignos,
que andam pelo mundo tentando as almas. Amém.`,
      consagracaocoracaoimaculadomaria: 
      `Ó Maria, Mãe de Deus e nossa Mãe, recorremos a Vós nesta hora de tribulação. Vós sois Mãe, amais-nos e conheceis-nos: de quanto temos no coração, nada Vos é oculto. Mãe de misericórdia, muitas vezes experimentamos a vossa ternura providente, a vossa presença que faz voltar a paz, porque sempre nos guiais para Jesus, Príncipe da paz.

Mas perdemos o caminho da paz. Esquecemos a lição das tragédias do século passado, o sacrifício de milhões de mortos nas guerras mundiais. Descuidamos os compromissos assumidos como Comunidade das Nações e estamos a atraiçoar os sonhos de paz dos povos e as esperanças dos jovens. Adoecemos de ganância, fechamo-nos em interesses nacionalistas, deixamo-nos ressequir pela indiferença e paralisar pelo egoísmo. Preferimos ignorar Deus, conviver com as nossas falsidades, alimentar a agressividade, suprimir vidas e acumular armas, esquecendo-nos que somos guardiões do nosso próximo e da própria casa comum. Dilaceramos com a guerra o jardim da Terra, ferimos com o pecado o coração do nosso Pai, que nos quer irmãos e irmãs. Tornamo-nos indiferentes a todos e a tudo, exceto a nós mesmos. E, com vergonha, dizemos: perdoai-nos, Senhor!

Na miséria do pecado, das nossas fadigas e fragilidades, no mistério de iniquidade do mal e da guerra, Vós, Mãe Santa, lembrai-nos que Deus não nos abandona, mas continua a olhar-nos com amor, desejoso de nos perdoar e levantar novamente. Foi Ele que Vos deu a nós e colocou no vosso Imaculado Coração um refúgio para a Igreja e para a humanidade. Por bondade divina, estais connosco e conduzis-nos com ternura mesmo nos transes mais apertados da história.

Por isso recorremos a Vós, batemos à porta do vosso Coração, nós os vossos queridos filhos que não Vos cansais de visitar em todo o tempo e convidar à conversão. Nesta hora escura, vinde socorrer-nos e consolar-nos. Repeti a cada um de nós: «Não estou porventura aqui Eu, que sou tua mãe?» Vós sabeis como desfazer os emaranhados do nosso coração e desatar os nós do nosso tempo. Repomos a nossa confiança em Vós. Temos a certeza de que Vós, especialmente no momento da prova, não desprezais as nossas súplicas e vindes em nosso auxílio.

Assim fizestes em Caná da Galileia, quando apressastes a hora da intervenção de Jesus e introduzistes no mundo o seu primeiro sinal. Quando a festa se mudara em tristeza, dissestes-Lhe: «Não têm vinho!» (Jo 2, 3). Ó Mãe, repeti-o mais uma vez a Deus, porque hoje esgotamos o vinho da esperança, desvaneceu-se a alegria, diluiu-se a fraternidade. Perdemos a humanidade, malbaratamos a paz. Tornamo-nos capazes de toda a violência e destruição. Temos necessidade urgente da vossa intervenção materna.

Por isso acolhei, ó Mãe, esta nossa súplica:
Vós, estrela do mar, não nos deixeis naufragar na tempestade da guerra;
Vós, arca da nova aliança, inspirai projetos e caminhos de reconciliação;
Vós, «terra do Céu», trazei de volta ao mundo a concórdia de Deus;
Apagai o ódio, acalmai a vingança, ensinai-nos o perdão;
Libertai-nos da guerra, preservai o mundo da ameaça nuclear;
Rainha do Rosário, despertai em nós a necessidade de rezar e amar;
Rainha da família humana, mostrai aos povos o caminho da fraternidade;
Rainha da paz, alcançai a paz para o mundo.

O vosso pranto, ó Mãe, comova os nossos corações endurecidos. As lágrimas, que por nós derramastes, façam reflorescer este vale que o nosso ódio secou. E, enquanto o rumor das armas não se cala, que a vossa oração nos predisponha para a paz. As vossas mãos maternas acariciem quantos sofrem e fogem sob o peso das bombas. O vosso abraço materno console quantos são obrigados a deixar as suas casas e o seu país. Que o vosso doloroso Coração nos mova à compaixão e estimule a abrir as portas e cuidar da humanidade ferida e descartada.

Santa Mãe de Deus, enquanto estáveis ao pé da cruz, Jesus, ao ver o discípulo junto de Vós, disse-Vos: «Eis o teu filho!» (Jo 19, 26). Assim Vos confiou cada um de nós. Depois disse ao discípulo, a cada um de nós: «Eis a tua mãe!» (19, 27). Mãe, agora queremos acolher-Vos na nossa vida e na nossa história. Nesta hora, a humanidade, exausta e transtornada, está ao pé da cruz convosco. E tem necessidade de se confiar a Vós, de se consagrar a Cristo por vosso intermédio. O povo ucraniano e o povo russo, que Vos veneram com amor, recorrem a Vós, enquanto o vosso Coração palpita por eles e por todos os povos ceifados pela guerra, a fome, a injustiça e a miséria.

Por isso nós, ó Mãe de Deus e nossa, solenemente confiamos e consagramos ao vosso Imaculado Coração nós mesmos, a Igreja e a humanidade inteira, de modo especial a Rússia e a Ucrânia. Acolhei este nosso ato que realizamos com confiança e amor, fazei que cesse a guerra, providenciai ao mundo a paz. O sim que brotou do vosso Coração abriu as portas da história ao Príncipe da Paz; confiamos que mais uma vez, por meio do vosso Coração, virá a paz. Assim a Vós consagramos o futuro da família humana inteira, as necessidades e os anseios dos povos, as angústias e as esperanças do mundo.

Por vosso intermédio, derrame-se sobre a Terra a Misericórdia divina e o doce palpitar da paz volte a marcar as nossas jornadas. Mulher do sim, sobre Quem desceu o Espírito Santo, trazei de volta ao nosso meio a harmonia de Deus. Dessedentai a aridez do nosso coração, Vós que «sois fonte viva de esperança». Tecestes a humanidade para Jesus, fazei de nós artesãos de comunhão. Caminhastes pelas nossas estradas, guiai-nos pelas sendas da paz. Amen.`,
confissao: 
`Confesso a Deus Todo-poderoso, à bem-aventurada sempre Virgem Maria, ao bem-aventurado Miguel Arcanjo, ao bem-aventurado João Batista, aos santos Apóstolos Pedro e Paulo, e a todos os Santos e a vós, Padre, que pequei muitas vezes por pensamentos, palavras e obras.

Por minha culpa, minha culpa, minha máxima culpa. 

Portanto, rogo à bem-aventurada sempre Virgem Maria, ao bem-aventurado Miguel Arcanjo, ao bem-aventurado João Batista, aos santos Apóstolos Pedro e Paulo, e a todos os Santos e a vós, Padre, que oreis por mim a Deus, Nosso Senhor.`
    };
  
   
  

    const oracoesLatim = {
      familia: "Angele Dei, qui custos es mei, me tibi commíssum pietáte supérna, illúmina, custódi, rege et gubérna. ",
      trabalho: 
      `Deus omnipotens, Pater bonitatis et misericordiae, miserere animarum beatarum purgatorii et adiuva meos carissimos parentes et maiores.

Iesus meus, misericordia! Adiuva fratres meos et cognatos.

Iesus meus, misericordia! Adiuva omnes benefactores meos spirituales et temporales.

Iesus meus, misericordia! Adiuva eos, qui fuerunt amici mei et servi.

Iesus meus, misericordia! Adiuva omnes, quibus debeo amorem et orationem.

Iesus meus, misericordia! Adiuva eos, quos laesi et vulneravi.

Iesus meus, misericordia! Adiuva eos, qui mihi defecerunt.

Iesus meus, misericordia! Adiuva illos, quibus tu potius favorem praestitisti.

Iesus meus, misericordia! Adiuva eos, qui sunt propinquiores unionem tecum.

Iesus meus, misericordia! Adiuva eos, qui ardentius te cupiunt.

Iesus meus, misericordia! Adiuva eos, qui magis dolorum laborant.

Iesus meus, misericordia! Adiuva eos, qui longius sunt a liberatione sua.

Iesus meus, misericordia! Adiuva eos, qui minimum auxilium accipiunt.

Iesus meus, misericordia! Adiuva eos, qui maxima merita habent pro Ecclesia.

Iesus meus, misericordia! Adiuva eos, qui hic divites fuerunt, et ibi sunt pauperes.

Iesus meus, misericordia! Adiuva eos, qui potentes erant et nunc sunt servi.

Iesus meus, misericordia! Adiuva eos, qui caeci sunt et nunc suam caecitatem agnoscunt.

Iesus meus, misericordia! Adiuva eos, qui vani fuerunt et tempus suum dissipaverunt.

Iesus meus, misericordia! Adiuva eos, qui pauperes sunt et divitias divinas non quaesierunt.

Iesus meus, misericordia! Adiuva eos, qui tepidi sunt et modicam orationem fecerunt.

Iesus meus, misericordia! Adiuva eos, qui superbi fuerunt et multum neglexerunt bona opera.

Iesus meus, misericordia! Adiuva eos, qui parvam fidem habent et Sacramenta Sancta neglexerunt.

Iesus meus, misericordia! Adiuva eos, qui peccaverunt et per miraculum gratiae servati sunt.

Iesus meus, misericordia! Adiuva parentes, qui filios suos non bene custodiverunt.

Iesus meus, misericordia! Adiuva superiores, qui non satis curaverunt salutem subditorum.

Iesus meus, misericordia! Adiuva pauperes homines, qui solum de pecunia et voluptate curaverunt.

Iesus meus, misericordia! Adiuva eos, qui spiritum mundanum habent et divitias vel dona sua ad caelum non convertissent.

Iesus meus, misericordia! Adiuva nescientes, qui videntes mortem multorum, sui mortis memores non fuerunt.

Iesus meus, misericordia! Adiuva eos, qui tempus domum suam non paraverunt et ad viam maximam omnino immemores venerunt.

Iesus meus, misericordia! Adiuva eos, quos severius iudicasti, quantum eis fuerit commissum.

Iesus meus, misericordia! Adiuva pontifices, reges et principes.

Iesus meus, misericordia! Adiuva episcopos et eorum consiliarios.

Iesus meus, misericordia! Adiuva magistris meis et pastoribus animarum.

Iesus meus, misericordia! Adiuva sacerdotes defunctos huius dioecesis.

Iesus meus, misericordia! Adiuva sacerdotes et religiosos Ecclesiae catholicae.

Iesus meus, misericordia! Adiuva defensores sanctae fidei.

Iesus meus, misericordia! Adiuva eos, qui in acie pugnant.

Iesus meus, misericordia! Adiuva eos, qui in mari sepulti sunt.

Iesus meus, misericordia! Adiuva eos, qui subito mortui sunt.

Iesus meus, misericordia! Adiuva eos, qui sine Sacramentis Sanctis decesserunt.

Iesus meus, misericordia! Da eis, Domine, omnium animarum requiem aeternam.

Iesus meus, misericordia! Et fac illis fulgere lumen aeternum tuum.

Iesus meus, misericordia! Ut in pace requiescant.

Iesus meus, misericordia! Amen.`,
      cura: 
      `O Sancte Pontifex, fidelis servus Domini, fidelis et humilis discipulus divini Magistri. In dolore et in gaudio, in laboribus et sollicitudinibus, pastor experientissimus gregis Christi, conversus oculos tuos super nos. Durae sunt tempora quibus vivimus. Gravissimae sunt laboriosae exigentiae a nobis. Sponsa Christi, cui curas vestri commisit, iterum in angustiis terribilibus versatur. Filii tui variis periculis in anima et corpore oppressi sunt. Spiritus mundi, quasi leo furibundus, nos circumvenit quaerens quem devorare. Non pauci in manus eius cadunt. Oculos habent et non vident. Aures habent et non audiunt. Oculos a luce aeternae veritatis claudent, malunt aures praebere vocibus, quae dolosas nuntiant.
      Tu, qui in terra magnus animosus et dux populi Dei fuisti, adiuva et intercessor noster et omnium qui se Christo sectatores profitentur. Tu, cuius cor contritum est cum mundus in sanguinolentam pugnam se praecipitavit, succurre humanitati, christianae fidei, nunc talibus perturbationibus obnoxiae. Obtine nobis a misericordia divina donum pacis perpetuae et, ut adveniat, reditus spirituum ad fratrum sensum, quem solus Deus hominibus et nationibus dare potest, iustitiam et concordiam desideratam. Sic sit.`,
      saomiguelarcanjo: "Sancte Michael Archangele, defende nos in praelio, contra nequitiam et insidias diaboli esto praesidium. Imperet illi Deus, supplices deprecamur: tuque, Princeps militiae caelestis, Satanam aliosque spiritus malignos, qui ad perditionem animarum pervagantur in mundo, divina virtute in infernum detrude. Amen.",
      consagracaocoracaoimaculadomaria: 
      `O Maria, Mater Dei et Mater nostra, confugimus ad Te in hoc tempore tribulationis. Tu es Mater, amasti nos et nos cognoscis: de omnibus quae in corde habemus, nihil tibi est occultum. Mater misericordiae, saepe experti sumus tuam providentem clementiam, tuam praesentiam quae pacem reparat, quia semper nos ducis ad Iesum, Principem pacis.

Sed amisimus viam pacis. Obliviscimur lectionem tragediarum saeculi praeteriti, sacrificium milionum mortuorum in bellis mundanis. Neglegimus obligationes, quas tamquam Communitas Nationum suscepimus, et proditores sumus somniorum pacis populorum et spei iuvenum. Avaritia nos adfecit, claudimur in studiis nationalisticis, indifferentiæ nos sequi permitimus et aegri sumus ab egoismo. Malumus Deum ignorare, vivere cum nostris mendaciis, alere aggressivitatem, supprimere vitae et arma cumulanda, obliviscendo nos esse custodientes proximi nostri et ipsius domus communis. Bellum laceravit hortum Terrae, peccatum vulneravit cor Patris nostri, qui fratres et sorores nos vult. Facti sumus indifferentes ad omnia et ad cuncta, nisi ad nos ipsos. Et, cum verecundia, dicimus: ignosce nobis, Domine!

In miseria peccati, laboribus et fragilitate nostra, in mysterio iniquitatis mali et belli, tu, Mater Sancta, mone nos Deum non nos derelinquere, sed nos amare perseverare et nobis iterum ignoscere et suscitare. Ipse qui nos tibi dedit et in Immaculato Corde tuo posuit refugium Ecclesiae et hominum. Ob bonitatem divinam, es nobiscum et dulciter nos ducis etiam in angustiis historiae.

Ideo confugimus ad Te, pulsamus ad januam Corde tuo, nos filii tui dilectissimi, qui nunquam defatigaris nos visitare omni tempore et ad conversionem invitem. In hac hora obscura, veni ad auxilium nostrum et consolationem. Repeti unicuique nostrum: "Non sumne ego hic, quae mater tua sum?" Tu nosti quomodo dissipare nodos cordis nostri et solvere vincula temporis nostri. Restituimus fiduciam nostram in Te. Certi sumus quod Tu, praesertim in momento probationis, non despicis preces nostras et venis in auxilium nostrum.

Sic fecisti in Cana Galilaeae, cum festinasti horam interventionis Iesu et introduxisti primum signum suum in mundo. Cum festum in tristitiam mutatum esset, dixisti ei: "Vinum non habent!" (Io 2, 3). O Mater, iterum hoc dicite Deo, quia hodie vinum spei exhaustum est, laetitia evanuit, fraternitas diluta est. Perdidimus humanitatem, pacem dissipavimus. Facti sumus capaces omnium violentiae et destructionis. Urgente necessitate interventionis tuae maternae.

Ideo accipe, O Mater, hanc nostram supplicationem: Tu, stella maris, non sinas nos naufragare in tempestate belli; Tu, arca novi foederis, inspira consilia et vias reconciliationis; Tu, "terra caeli", revertere in mundum concordiam Dei; Extinguas odium, sedes ultionem, doceas nos veniam; Libera nos a bello, praeserva mundum a minatione nucleari; Regina Rosarii, excita in nobis necessitatem orandi et amandi; Regina humanae familiae, monstra populis viam fraternitatis; Regina pacis, obtine pacem mundo.

Luctus tuus, O Mater, commoveat corda nostra duritia. Lacrimae, quas pro nobis fudiisti, faciant refluere hunc vallem quem odium nostrum siccavit. Et, dum fragor armorum non sileat, oratio tua nos praeparabit ad pacem. Manus tuae maternae leniant eos qui dolorum sub onere bombarum patiuntur et fugient. Complexus tuus maternos consolare eos, qui domos suas et patriam relinquere coguntur. Cor tuum dolorum moveat nos ad compassionem et excitet nos ad portas apertas et curam humanitatis vulneratae et reiectae.

Sancta Mater Dei, dum ad crucem stabas, Iesus, discipulum videns a te, dixit: "Ecce filius tuus!" (Io 19, 26). Sic confidi nobis singulos. Deinde dixit discipulo, unicuique nostrum: "Ecce mater tua!" (Io 19, 27). Mater, nunc volumus te accipere in vita nostra et in historia nostra. In hac hora, humanitas, fessa et turbata, est ad crucem tecum. Et opus habet se tibi committere, se Christi per te consecrare. Populus Ucrainae et populus Russiae, qui te amore venerantur, confugiunt ad Te, dum cor tuum palpitans pro eis et pro omnibus populis a bello, fame, iniustitia et miseria deminutis.

Ideo nos, O Mater Dei et nostra, solenni modo confestim et consacramus Immaculato Corde tuo nos ipsos, Ecclesiam et totam humanitatem, specialiter Russiam et Ucrainam. Accipe hoc actum nostrum quem confide et amore perficimus, fac ut bellum cesset, provide pacem mundo. Sic fiat ut per cor tuum pacem afferat. Sic confestim dedicamus futurum humanitatis universae, necessitates et desideria populorum, angustias et spem mundi.

Per te, effundatur super Terram Misericordia divina et dulcis pulsatio pacis redeat in vias nostras. Mulier sim, super quam Spiritus Sanctus descendit, revertere harmoniam Dei inter nos. Seca ariditatem cordis nostri, quae "es fons vivus spei". Texuisti humanitatem Iesu, fac nos artifices communionis. Perambulasti vias nostras, duce nos per semitas pacis. Amen.`,
      confissao: 
      `Confiteor Deo omnipotenti, beatae Mariae semper Virgini, beato Michaeli Archangelo, beato Joanni Baptistae, sanctis apostolis Petro et Paulo, omnibus Sanctis, et tibi, Pater, quia peccavi nimis cogitatione, verbo et opere.

Mea culpa, mea culpa, mea maxima culpa.

Ideo precor beatam Mariam semper Virginem, beatum Michaelem Archangelum, beatum Joanem Baptistam, Sanctos apostolos Petrum et Paulum, omnes Sanctos, et Te, Pater, orare pro me ad Dominum Deum nostrum.`
    };

    const switchIdioma = document.getElementById('switchIdioma');  // O switch para alternar o idioma

// Função para atualizar a oração com base no tema e idioma
const updateOracao = () => {
  const tema = temaOracao.value;
  const isLatim = switchIdioma.checked;  // Verifica se o switch está ativado (Latim)
  
  // Exibe a oração em português ou latim com base na escolha do usuário
  textoOracao.innerHTML = isLatim 
    ? oracoesLatim[tema].replace(/\n/g, "<br>")  // Exibe a oração em latim
    : oracoes[tema].replace(/\n/g, "<br>");     // Exibe a oração em português
};

// Atualiza a oração quando o tema ou o idioma é alterado
temaOracao.addEventListener('change', updateOracao);
switchIdioma.addEventListener('change', updateOracao);

// Chama a função para inicializar a oração na primeira vez
updateOracao();


// ----- Ladainhas ----- //
const textoLadainhas = document.getElementById('textoLadainhas');
const temaLadainhas = document.getElementById('temaLadainhas');
const switchIdiomaLadainha = document.getElementById('switchIdiomaLadainha');  // O switch para alternar o idioma

const ladainhas = {
  ladainhaUm: 
    `Senhor, tende piedade de nós.
    Cristo, tende piedade de nós. 
    Senhor, tende piedade de nós. 
    Jesus Cristo, ouvi-nos.
    Jesus Cristo, atendei-nos. 
    Deus Pai do Céu, tende piedade de nós. 
    Deus Filho, Redentor do mundo, tende piedade de nós.
    Deus Espírito Santo, tende piedade de nós.
    Santíssima Trindade, que sois um só Deus, tende piedade de nós.
    
    Santa Maria, rogai por nós.  
    Santa Mãe de Deus, rogai por nós. 
    Santa Virgem das Virgens, rogai por nós.
    
    São Miguel, rogai por nós.
    São Gabriel, rogai por nós.  
    São Rafael, rogai por nós.  
    Todos os Santos Anjos e Arcanjos, rogai por nós.  
    Todas as santas ordens de Espíritos bem-aventurados, rogai por nós.  
    
    São João Batista, rogai por nós.  
    São José, rogai por nós.  
    Todos os santos Patriarcas e Profetas, rogai por nós.  
    
    São Pedro, rogai por nós.  
    São Paulo, rogai por nós.  
    Santo André, rogai por nós.  
    São João, rogai por nós.  
    Todos os santos Apóstolos e Evangelistas, rogai por nós.  
    Todos os santos Discípulos do Senhor, rogai por nós.  
    
    Santo Estêvão, rogai por nós.  
    São Lourenço, rogai por nós.  
    São Vicente, rogai por nós.  
    Todos os santos Mártires, rogai por nós.  
    
    São Silvestre, rogai por nós.  
    São Gregório, rogai por nós.  
    Santo Agostinho, rogai por nós.  
    Todos os santos Pontífices e Confessores, rogai por nós.  
    Todos os santos Doutores, rogai por nós.  
    
    Santo Antão, rogai por nós.  
    São Bento, rogai por nós.  
    São Domingos, rogai por nós.  
    São Francisco, rogai por nós.  
    Todos os santos Sacerdotes e Levitas, rogai por nós.  
    Todos os santos Monges e Eremitas, rogai por nós.  
    
    Santa Maria Madalena, rogai por nós.  
    Santa Inês, rogai por nós.  
    Santa Cecília, rogai por nós.  
    Santa Águeda, rogai por nós.  
    Santa Anastácia, rogai por nós.  
    Todas as santas Virgens e Viúvas, rogai por nós.  
    Todos os Santos e Santas de Deus, intercedei por nós.  
    
    Sede-nos propício, perdoai-nos, Senhor.  
    Sede-nos propício, ouvi-nos, Senhor.  
    
    De todo mal, livrai-nos, Senhor.  
    De todo pecado, livrai-nos, Senhor.  
    Da morte eterna, livrai-nos, Senhor.  
    
    Pelo mistério da vossa santa Encarnação, livrai-nos, Senhor.  
    Pela vossa Vinda, livrai-nos, Senhor.  
    Pelo vosso Nascimento, livrai-nos, Senhor.  
    Pelo vosso Batismo e santo Jejum, livrai-nos, Senhor.  
    Pela vossa Cruz e Paixão, livrai-nos, Senhor.  
    Pela vossa Morte e Sepultura, livrai-nos, Senhor.  
    Pela vossa santa Ressurreição, livrai-nos, Senhor.  
    Pela vossa admirável Ascensão, livrai-nos, Senhor.  
    Pela vinda do Espírito Santo Consolador, livrai-nos, Senhor.  
    No dia do Juízo, livrai-nos, Senhor.  
    
    Pecadores que somos, nós vos rogamos: ouvi-nos.  
    Para que nos perdoeis, nós vos rogamos: ouvi-nos.  
    Para que vos digneis governar e conservar a vossa santa Igreja, nós vos rogamos: ouvi-nos.  
    Para que vos digneis conservar na santa religião o Sumo Pontífice e todas as ordens da hierarquia eclesiástica, nós vos rogamos: ouvi-nos.  
    Para que vos digneis humilhar os inimigos da santa Igreja, nós vos rogamos: ouvi-nos.  
    Para que vos digneis conceder a paz e a verdadeira concórdia aos reis e príncipes cristãos, nós vos rogamos: ouvi-nos.  
    Para que vos digneis confortar-nos e conservar-nos em vosso santo serviço, nós vos rogamos: ouvi-nos.  
    Para que vos digneis retribuir, com os bens sempiternos, a todos os nossos benfeitores, nós vos rogamos: ouvi-nos.  
    Para que vos digneis dar e conservar os frutos da terra, nós vos rogamos: ouvi-nos.  
    Para que vos digneis conceder o descanso eterno a todos os fiéis defuntos, nós vos rogamos: ouvi-nos.  
    Para que vos digneis atender-nos, nós vos rogamos: ouvi-nos.  
    
    Cordeiro de Deus, que tirais os pecados do mundo, perdoai-nos, Senhor.  
    Cordeiro de Deus, que tirais os pecados do mundo, ouvi-nos, Senhor.  
    Cordeiro de Deus, que tirais os pecados do mundo, tende piedade de nós.  
    
    Jesus Cristo, ouvi-nos.  
    Jesus Cristo, atendei-nos.`,
      ladainhaDois: 
      `Senhor, tende piedade de nós.
Jesus Cristo, tende piedade de nós.
Senhor, tende piedade de nós.

Jesus Cristo, ouvi-nos.
Jesus Cristo, atendei-nos.

Pai celeste, que sois Deus, tende piedade de nós.
Filho, Redentor do mundo, que sois Deus, tende piedade de nós.
Espírito Santo, que sois Deus, tende piedade de nós.
Santíssima Trindade, que sois um só Deus, tende piedade de nós.

Jesus, Filho de Deus vivo, tende piedade de nós.
Jesus, esplendor do Pai,
Jesus, pureza da luz eterna,
Jesus, Rei da glória,
Jesus, sol da justiça,
Jesus, Filho da Virgem Maria,
Jesus amável,
Jesus admirável,
Jesus, Deus forte,
Jesus, pai do futuro do século,
Jesus, anjo do grande conselho,
Jesus poderosíssimo,
Jesus pacientíssimo,
Jesus obedientíssimo,
Jesus, manso e humilde de coração,
Jesus, amante da castidade,
Jesus, amador nosso,
Jesus, Deus da paz,
Jesus, autor da vida,
Jesus, exemplar das virtudes,
Jesus, zelador das almas,
Jesus, nosso Deus,
Jesus, nosso refúgio,
Jesus, pai dos pobres,
Jesus, tesouro dos fiéis,
Jesus, bom pastor,
Jesus, luz verdadeira,
Jesus, sabedoria eterna,
Jesus, bondade infinita,
Jesus, nosso caminho e nossa vida,
Jesus, alegria dos anjos,
Jesus, rei dos patriarcas,
Jesus, mestre dos Apóstolos,
Jesus, doutor dos evangelistas,
Jesus, fortaleza dos mártires,
Jesus, luz dos confessores,
Jesus, pureza das virgens,
Jesus, coroa de todos os santos,

Sede-nos propício, perdoai-nos, Jesus.
Sede-nos propício, ouvi-nos, Jesus.

De todo o mal, livrai-nos, Jesus.
De todo o pecado,
De vossa ira,
Das ciladas do demônio,
Do espírito de impureza,
Da morte eterna,
Do desprezo das vossas inspirações,
Pelo mistério da vossa santa Encarnação,
Pela vossa natividade,
Pela vossa infância,
Pela vossa santíssima vida,
Pelos vossos trabalhos,
Pela vossa agonia e paixão,
Pela vossa cruz e desamparo,
Pelas vossas angústias,
Pela vossa morte e sepultura,
Pela vossa ressurreição,
Pela vossa ascensão,
Pela vossa instituição da Santíssima Eucaristia,
Pelas vossas alegrias,
Pela vossa glória,

Cordeiro de Deus, que tirais os pecados do mundo, perdoai-nos, Jesus.
Cordeiro de Deus, que tirais os pecados do mundo, ouvi-nos, Jesus.
Cordeiro de Deus, que tirais os pecados do mundo, tende piedade de nós, Jesus.

Jesus, ouvi-nos.
Jesus, atendei-nos.

Oremos: Senhor Jesus Cristo, que dissestes: “Pedi e recebereis, buscai e achareis, batei e abrir-se-vos-á”, 
nós vos suplicamos que concedais a nós, que vos pedimos, os sentimentos afetivos de vosso divino amor, a fim 
de que vos amemos de todo o coração e que esse amor transcenda por nossas ações. Permiti que tenhamos sempre, 
Senhor, um igual temor e amor pelo vosso santo nome, pois não deixais de governar aqueles que estabeleceis na 
firmeza do vosso amor. Vós que viveis e renais pelos séculos dos séculos. Amém.`,
      ladainhaTres: 
      `Senhor, tende piedade de nós
Cristo, tende piedade de nós
Senhor, tende piedade de nós
Cristo, ouvi-nos
Cristo, atendei-nos
Deus Pai do céu, tende piedade de nós
Deus Filho Redentor do mundo, tende piedade de nós
Deus Espírito Santo, tende piedade de nós
Santíssima Trindade, que sois um só Deus, tende piedade de nós

Santa Maria, rogai por nós.
Santa Mãe de Deus, 
Santa Virgem das virgens, 
Mãe de Cristo,
Mãe da Igreja,
Mãe de misericórdia,
Mãe da divina graça, 
Mãe da esperança,
Mãe puríssima, 
Mãe castíssima, 
Mãe sempre virgem,
Mãe imaculada, 
Mãe digna de amor, 
Mãe admirável, 
Mãe do bom conselho, 
Mãe do Criador, 
Mãe do Salvador, 
Virgem prudentíssima,
Virgem venerável,
Virgem louvável, 
Virgem poderosa, 
Virgem clemente, 
Virgem fiel,
Espelho de perfeição, 
Sede da Sabedoria, 
Fonte de nossa alegria, 
Vaso espiritual, 
Tabernáculo da eterna glória,
Moradia consagrada a Deus, 
Rosa mística, 
Torre de Davi, 
Torre de marfim,
Casa de ouro,
Arca da aliança,
Porta do céu,
Estrela da manhã,
Saúde dos enfermos,
Refúgio dos pecadores,
Socorro dos migrantes, 
Consoladora dos aflitos,
Auxílio dos cristãos,
Rainha dos Anjos, 
Rainha dos Patriarcas,
Rainha dos Profetas,
Rainha dos Apóstolos,
Rainha dos Mártires,
Rainha dos confessores da fé,
Rainha das Virgens,
Rainha de todos os Santos,
Rainha concebida sem pecado original,
Rainha assunta ao céu,
Rainha do santo Rosário,
Rainha da paz.

Cordeiro de Deus, que tirais os pecados do mundo, perdoai-nos, Senhor.

Cordeiro de Deus, que tirais os pecados do mundo, ouvi-nos, Senhor.

Cordeiro de Deus, que tirais os pecados do mundo, tende piedade de nós.

Rogai por nós, santa Mãe de Deus.

Para que sejamos dignos das promessas de Cristo.`

      
    };

const ladainhasLatim = {
  ladainhaUm: 
  `Kyrie, eleison
Christe, eleison
Kyrie, eleison
Pater de caelis, Deus, miserere nobis.
Fili, Redemptor mundi, Deus, miserere nobis.
Spiritus Sancte, Deus, miserere nobis.
Sancta Trinitas, unus Deus, miserere nobis.
Sancta Maria, ora pro nobis.
Sancta Dei Genetrix, ora pro nobis.
Sancta Virgo virginum, ora pro nobis.
Sancte Michael Gabriel et Raphael, orate pro nobis.
Omnes sancti Angeli, orate pro nobis.
Sancte Abraham, ora pro nobis.
Sancte Ioannes Baptista, ora pro nobis.
Sancte Ioseph, ora pro nobis.
Omnes sancti Patriarchae et Prophetae, orate pro nobis.
Sancte Petre et Paule, orate pro nobis.
Sancte Andrea, ora pro nobis.
Sancte Ioannes et Iacobe, orate pro nobis.
Sancte Matthaee, ora pro nobis.
Omnes sancti Apostoli, orate pro nobis.
Sancte Marce, ora pro nobis.
Sancta Maria Magdalena, ora pro nobis.
Omnes sancti discipuli Domini, orate pro nobis.
Sancte Stephane, ora pro nobis.
Sancte Ignati, ora pro nobis.
Sancte Polycarpe, ora pro nobis.
Sancte Iustine, ora pro nobis.
Sancte Laurenti, ora pro nobis.
Sancta Agnes, ora pro nobis.
Omnes sancti martyres, orate pro nobis.
Sancti Leo et Gregori, orate pro nobis.
Sancte Ambrosi, ora pro nobis.
Sancte Augustine, ora pro nobis.
Sancti Basili et Gregori, orate pro nobis.
Sancte Benedicte, ora pro nobis.
Sancte Ioannes Maria, ora pro nobis.
Sancta Teresia, ora pro nobis.
Sancta Elisabeth, ora pro nobis.
Omnes Sancti et Sanctae Dei, orate pro nobis.
Propitius esto, libera nos Domine.
Ab omni malo, libera nos Domine.
A morte perpetua, libera nos Domine.
Per Incarnationis tuae, libera nos Domine.
Per sanctam resurrectionem tuam, libera nos Domine.
Per refusionem Spiritus Sancti, libera nos Domine.
Christe Fili Dei vivi, miserere nobis.
Qui in hunc mundum venisti, miserere nobis.
Qui in mortem propter nos accepisti, miserere nobis.
Qui a mortuis resurrexisti, miserere nobis.
Qui Spiritum Sanctum in Apostolos misisti, miserere nobis.
Qui venturus es iudicare vivos et mortuos, miserere nobis.
Ut nobis parcas, te rogamus audi nos.
Ut ecclesiam tuam sanctam regere et conservare digneris, te rogamus audi nos.
Ut omnes homines ad Evangelii lumen perducere digneris, te rogamus audi nos.
Christe audi nos, Christe audi nos.
Christe exaudi nos, Christe exaudi nos.
Agnus Dei, qui tollis peccata mundi, miserere nobis.
Agnus Dei, qui tollis peccata mundi, miserere nobis.
Agnus Dei, qui tollis peccata mundi, miserere nobis.
Christe audi nos, Christe audi nos.
Christe exaudi nos, Christe exaudi nos.`,
  ladainhaDois: 
  `Kýrie, eléison.
Christe, eléison.
Kýrie, eléison.

Iesu, audi nos.
Iesu, exáudi nos. 
 
Pater de cælis, Deus, 
miserére nobis.
Fili, Redémptor mundi, Deus, 
miserére nobis.
Spíritus Sancte, Deus, 
miserére nobis.
Sancta Trínitas, unus Deus, 
miserére nobis.
 
Iesu, Filii Dei vivi,
Iesu, splendor Patris,
Iesu, candor lucis æternæ,
Iesu, Rex gloriæ,
Iesu, sol iustitiæ,
Iesu, Fili Mariæ Virginis,
Iesu amabilis,
Iesu admirabilis,
Iesu, Deus fortis,
Iesu, pater futuri sæculi,
Iesu, magni consilii angele,
Iesu potentissime,
Iesu patientissime,
Iesu obedientissime,
Iesu, mitis et humilis corde,
Iesu, amator castitatis,
Iesu, amator noster,
Iesu, Deus pacis,
Iesu, auctor vitæ,
Iesu, exemplar virtutum,
Iesu, zelator animarum,
Iesu, Deus noster,
Iesu, refugium nostrum,
Iesu, pater pauperum,
Iesu, thesaure fidelium,
Iesu, bone pastor,
Iesu, lux vera,
Iesu, sapientia æterna,
Iesu, bonitas infinita,
Iesu, via et vita nostra,
Iesu, gaudium Angelorum,
Iesu, rex Patriarcharum,
Iesu, magister Apostolorum,
Iesu, doctor Evangelistarum,
Iesu, fortitudo Martyrum,
Iesu, lumen Confessorum,
Iesu, puritas Virginum,
Iesu, corona sanctorum omnium,
 
Propitius esto; parce nobis, Iesu.
Propitius esto; exaudi nos, Iesu.
   
Ab omni malo, libera-nos, Iesu.
Ab omni peccato,
Ab ira tua,
Ab insidiis diaboli,
A spiritu fornicátionis,
A morte perpetua,
A neglectu inspirationum tuarum,
Per mysterium sanctæ incarnationis tuæ,
Per nativitatem tuam,
Per infantiam tuam,
Per divinissimam vitam tuam,
Per labores tuos,
Per agoniam et passionem tuam,
Per crucem et derelictionem tuam,
Per languores tuos,
Per mortem et sepulturam tuam,
Per resurrectionem tuam,
Per ascensionem tuam,
Per sanctissimæ Eucharistiæ institutionem tuam,
Per gaudia tua,
Per gloriam tuam,
 
Agnus Dei, qui tollis peccáta mundi, 
parce nobis, Iesu. 
Agnus Dei, qui tollis peccáta mundi, 
exáudi nos, Iesu.
Agnus Dei, qui tollis peccáta mundi,  
miserére nobis, Iesu.
  
Iesu, audi nos.
Iesu, exáudi nos.
 
Orémus.

Domine Iesu Christi, qui dixisti: Petite, et accipietis; quærite, et invenietis; pulsate, et aperietur vobis; quæsumus, da nobis, petentibus, divinissimi tui amoris affectum, ut te todo corde, ore et opere diligamus et a tua nunquam laude cessemus.
Sancti nominis tui, Domine, timorem pariter et amorem fac nos habere perpetuum; quia nunquam tua gubernatione destituis, quos in soliditate tuæ dilectionis instituis. Qui vivis et regnas in sæcula sæculorum.
 
Amen.`,
  ladainhaTres: 
  `Kýrie, eléison.
℟. Kýrie, eléison.
Christe, eléison.
℟. Christe, eléison.
Kýrie, eléison.
℟. Kýrie, eléison.
Christe, audi nos.
℟. Christe, audi nos.
Christe, exaudi nos.
℟. Christe, exaudi nos.
Pater de caelis, Deus.
℟. Miserére nobis.
Fili, Redémptor mundi, Deus.
℟. Miserére nobis.
Spíritus Sancte, Deus.
℟. Miserére nobis.
Sancta Trínitas, unus Deus.
℟. Miserére nobis.
Sancta Maria.
℟. Ora pro nobis.
Sancta Dei Génitrix.
℟. Ora pro nobis.
Sancta Virgo vírginum.
℟. Ora pro nobis.
Mater Christi.
℟. Ora pro nobis.
Mater Ecclésiae.
℟. Ora pro nobis.
Mater misericórdiae.
℟. Ora pro nobis.
Mater divínae grátiae.
℟. Ora pro nobis.
Mater spei.
℟. Ora pro nobis.
Mater puríssima.
℟. Ora pro nobis.
Mater castíssima.
℟. Ora pro nobis.
Mater invioláta.
℟. Ora pro nobis.
Mater intemerata.
℟. Ora pro nobis.
Mater amábilis.
℟. Ora pro nobis.
Mater admirábilis.
℟. Ora pro nobis.
Mater boni consílii.
℟. Ora pro nobis.
Mater Creatóris.
℟. Ora pro nobis.
Mater Salvatóris.
℟. Ora pro nobis.
Virgo prudentíssima.
℟. Ora pro nobis.
Virgo veneranda.
℟. Ora pro nobis.
Virgo praedicánda.
℟. Ora pro nobis.
Virgo potens.
℟. Ora pro nobis.
Virgo clemens.
℟. Ora pro nobis.
Virgo fidélis.
℟. Ora pro nobis.
Spéculum iustítiae.
℟. Ora pro nobis.
Sedes sapiéntiae.
℟. Ora pro nobis.
Causa nostrae laetítiae.
℟. Ora pro nobis.
Vas spirituále.
℟. Ora pro nobis.
Vas honorábile.
℟. Ora pro nobis.
Vas insígne devotiónis.
℟. Ora pro nobis.
Rosa mystica.
℟. Ora pro nobis.
Turris davídica.
℟. Ora pro nobis.
Turris ebúrnea.
℟. Ora pro nobis.
Domus áurea.
℟. Ora pro nobis.
Féderis arca.
℟. Ora pro nobis.
Iánua caeli.
℟. Ora pro nobis.
Stella matutina.
℟. Ora pro nobis.
Salus infirmórum.
℟. Ora pro nobis.
Refúgium peccatórum.
℟. Ora pro nobis.
Solácium Migrántium.
℟. Ora pro nobis.
Consolátrix afflictórum.
℟. Ora pro nobis.
Auxílium christianórum.
℟. Ora pro nobis.
Regína angelórum.
℟. Ora pro nobis.
Regína patriarchárum.
℟. Ora pro nobis.
Regína prophetárum.
℟. Ora pro nobis.
Regína apostolórum.
℟. Ora pro nobis.
Regína mártyrum.
℟. Ora pro nobis.
Regína confessórum.
℟. Ora pro nobis.
Regína vírginum.
℟. Ora pro nobis.
Regína sanctórum ómnium.
℟. Ora pro nobis.
Regína sine labe origináli concepta.
℟. Ora pro nobis.
Regína in caelum assumpta.
℟. Ora pro nobis.
Regína sacratíssimi rosárii.
℟. Ora pro nobis.
Regína famíliae.
℟. Ora pro nobis.
Regína pacis.
℟. Ora pro nobis.
Agnus Dei, qui tollis peccata mundi.
℟. Parce nobis Domine.
Agnus Dei, qui tollis peccata mundi.
℟. Exaudi nos Domine.
Agnus Dei, qui tollis peccata mundi.
℟. Miserere nobis.
℣. Ora pro nobis, sancta Dei Génitrix.
℟. Ut digni efficiámur promissiónibus Christi.
Orémus.
Deus, cuius Unigénitus per vitam, mortem et resurrectiónem suam nobis salútis aetérnae praemia comparávit, concéde, quaesumus: ut haec mystéria sacratíssimo beátae Maríae Vírginis Rosário recoléntes, et imitémur quod cóntinent, et quod promíttunt assequámur.
Per eúndem Christum Dóminum nostrum.
Amen.`
};

const updateLadainha = () => {
  const tema = temaLadainhas.value;
  const isLatim = switchIdiomaLadainha.checked;  // Verifica se o switch está ativado (Latim)
  
  // Exibe a oração em português ou latim com base na escolha do usuário
  textoLadainhas.innerHTML = isLatim 
    ? ladainhasLatim[tema].replace(/\n/g, "<br>")  // Exibe a oração em latim
    : ladainhas[tema].replace(/\n/g, "<br>");     // Exibe a oração em português
};

// Atualiza a ladainha sempre que o tema ou o switch de idioma for alterado
temaLadainhas.addEventListener('change', updateLadainha);
switchIdiomaLadainha.addEventListener('change', updateLadainha);

// Chama a função uma vez para garantir que a ladainha inicial seja carregada
updateLadainha();


   // ----- Catequese ----- //
   const textoCatequese = document.getElementById('textoCatequese');
   const temaCatequese = document.getElementById('temaCatequese');
 
   const catequese = {
     catequeseUm: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt felis ac lectus faucibus, ac eleifend justo cursus. In vel pulvinar neque. Aenean porttitor diam elit, eget facilisis risus interdum sit amet. Pellentesque accumsan viverra efficitur. Aenean egestas nibh vel velit molestie convallis. Etiam eget gravida lorem. Integer fermentum consectetur ornare. Pellentesque lacinia, mauris non tincidunt porttitor, velit massa sodales enim, quis rutrum lectus mi sed neque. Quisque quis mi ipsum. Cras et viverra tortor, sit amet facilisis felis. Nullam nec erat vel nisl ullamcorper bibendum eget a arcu. Nulla eget vulputate erat. Nullam at est et ligula tincidunt sodales non in nulla. Duis a felis porta, vehicula ligula vel, fringilla nunc. Nam quis sapien interdum, rutrum lectus quis, finibus odio. ",
     catequeseDois: "Sed vel felis congue, gravida leo ornare, feugiat est. Duis et feugiat turpis, a molestie turpis. Phasellus massa dolor, lacinia in ornare ut, commodo interdum turpis. Curabitur felis urna, ultrices vitae neque sed, mattis placerat neque. Proin varius felis semper gravida imperdiet. Fusce id fermentum enim. Donec ultrices ultricies nisi in efficitur. Suspendisse porta, sem id condimentum pretium, ante augue dignissim elit, facilisis condimentum ex lacus sed elit. Nulla ac purus sapien. Sed ornare sit amet libero vel facilisis. ",
     catequeseTres: "Donec ornare commodo diam, in blandit ex pulvinar nec. Pellentesque felis massa, vehicula a fringilla id, vehicula quis est. Ut aliquam nisi quis ligula tristique vehicula. Vestibulum et malesuada tellus, placerat tristique velit. Sed odio dui, aliquet eget urna vel, dictum commodo nulla. Nunc eleifend non arcu vitae iaculis. Fusce faucibus, nunc tincidunt tempus convallis, neque erat posuere purus, a faucibus erat nunc eu erat. "
   };
 
   const updateCatequese = () => {
     const tema = temaCatequese.value;
     textoCatequese.textContent = catequese[tema];
   };
 
   temaCatequese.addEventListener('change', updateCatequese);
   updateCatequese();

  
    // ----- Contador de Terço ----- //
    let count = 0;
    const contadorEl = document.getElementById('contador');
    const btnContador = document.getElementById('btnContador');
    const btnReset = document.getElementById('btnReset');
  
    btnContador.addEventListener('click', () => {
      count++;
      contadorEl.textContent = count;
    });
  
    btnReset.addEventListener('click', () => {
      count = 0;
      contadorEl.textContent = count;
    });
  
    document.getElementById('selectRegion').addEventListener('change', function() {
      const selectedRegion = this.value;
      const cards = document.querySelectorAll('.card-region');
    
      cards.forEach(card => {
        // Exibe todos se for selecionada a opção "Todas as Regiões"
        if (selectedRegion === 'all' || card.getAttribute('data-region') === selectedRegion) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });

    document.getElementById('meditacaoTexto').innerHTML = `
  <p>"Nem olhos viram, nem ouvidos ouviram, nem jamais penetrou em coração humano o que Deus preparou para aqueles que O amam" (1 Coríntios 2,9).

                          Fecha os olhos por um momento e imagina: o último suspiro desta vida. Tudo o que era transitório se desfaz como uma sombra ao pôr do sol. O peso dos dias, as lutas, os sofrimentos... tudo fica para trás. E então, o silêncio. Um silêncio profundo, mas não vazio. Pelo contrário, é um silêncio cheio de paz, como uma manhã serena em que o sol começa a despontar no horizonte.
                          
                          Então, de repente, a consciência se ilumina. O véu que separava a terra do céu é rasgado. Diante de ti, não há mais tempo, apenas eternidade. E uma luz — não uma luz comum, mas uma luz viva, uma luz que te envolve por completo. Não fere os olhos, mas os abre; não cega, mas revela. É a luz de Deus.
                          
                          Ao longe, percebes uma figura aproximando-se. É um anjo, majestoso e sereno. Seu semblante resplandece com a glória do Altíssimo. Ele te chama pelo nome. Mas não é um chamado qualquer. É um chamado carregado de amor, um chamado que ressoa nas profundezas da tua alma, como se desde toda a eternidade esperasses por este momento.
                          
                          Então, vês que não estás sozinho. Outros anjos, santos e bem-aventurados estão ali, jubilosos, esperando por ti. Entre eles, um olhar brilha com ternura especial: é Nossa Senhora. A Virgem Santa te contempla como uma mãe que recebe o filho que esteve longe por muito tempo.
                          
                          Mas antes de seguir adiante, um último olhar para trás: a terra, que foi apenas um exílio, agora parece tão pequena, tão distante...
                          O Juízo e a Misericórdia
                          
                          Então, és conduzido à presença do Justo Juiz. O olhar de Cristo pousa sobre ti, mas não é um olhar de acusação, e sim de verdade e amor. Tudo na tua vida se revela diante d’Ele. Cada palavra, cada pensamento, cada obra, cada omissão. Mas a cada erro, cada pecado reconhecido com arrependimento, a Sua misericórdia cobre como um oceano imenso. Se morreste em Sua graça, purificado pelo sofrimento ou pelo Purgatório, agora nada mais te impede de entrar na felicidade eterna.
                          
                          Então, ouves aquelas palavras pelas quais os santos suspiraram durante toda a vida:
                          
                          "Vinde, bendito de meu Pai, tomai posse do Reino que vos está preparado desde a criação do mundo" (Mateus 25,34).
                          
                          E num instante, tudo se transforma. És envolvido por um júbilo inefável, uma alegria que preenche cada fibra do teu ser.
                          A Entrada no Paraíso
                          
                          A porta do Paraíso se abre diante de ti. E que visão esplêndida! Nenhum poeta, nenhum artista, nenhum sábio jamais poderia captar a imensidão da beleza que agora se desvela.
                          
                          São João Crisóstomo dizia que se pudéssemos vislumbrar um instante da glória celestial, desprezaríamos todos os reinos da terra como cinza. E agora, entendes por quê.
                          
                          O primeiro som que ouves é um cântico. Os coros angélicos entoam hinos de louvor ao Cordeiro imolado. Os santos se unem a esse cântico, e nele encontrarás a tua voz.
                          
                          Não há cansaço, não há dor, não há sombra. Cada fibra do teu ser agora está em harmonia perfeita, pois foste criado para isto: para ver a Deus, para conhecê-Lo, para amá-Lo e ser amado por Ele eternamente.
                          A Vida na Eternidade
                          
                          Mas como é a eternidade? Não um simples repouso, mas um movimento incessante de amor. Santo Tomás de Aquino explica que a bem-aventurança consiste na visão beatífica: contemplar Deus face a face, sem véus, sem distâncias.
                          
                          Na terra, buscaste-O na oração, na fé, nos sacramentos. Agora, Ele está diante de ti, mais real do que tudo o que já experimentaste. Seu olhar penetra tua alma e, em um instante eterno, compreendes tudo. Cada mistério, cada sofrimento, cada cruz carregada – tudo fazia parte de um plano de amor.
                          
                          Os santos te cercam. Reconheces figuras que admiravas nos livros: Santo Agostinho, São Francisco de Assis, Santa Teresinha, São José... e cada um deles transborda alegria, pois o Céu não é solidão, mas comunhão.
                          
                          E não há tédio. Como poderia haver? Cada momento na eternidade é um novo êxtase de amor, uma nova revelação da infinita glória de Deus. Como dizia Santa Catarina de Sena:
                          
                          "O céu não é estático, mas um contínuo mergulhar no oceano infinito do amor divino."
                          O Banquete do Cordeiro
                          
                          Então, és convidado para algo ainda maior: o Banquete do Cordeiro. Vês a mesa preparada, e à frente dela, Cristo, resplandecente. A Eucaristia que recebias na terra era apenas uma sombra, um prenúncio desta união agora plena e perfeita.
                          
                          E neste festim eterno, os eleitos celebram, amam, louvam. Não há inveja, não há divisão, não há tristeza. Cada alma recebe a plenitude da felicidade para a qual foi criada, e ao mesmo tempo, alegra-se pela felicidade dos outros.
                          
                          Este é o Paraíso: um êxtase eterno de amor e comunhão com Deus.
                          O Que Fazer Agora?
                          
                          Voltas agora à tua vida terrena. Mas algo mudou. Tens um vislumbre do teu destino final. Não foste criado para o pó, mas para a glória. Para alcançar este Céu, há um caminho: a santidade.
                          
                          Então, vive cada dia como um peregrino que caminha para o Lar. Ama, reza, recebe os sacramentos, carrega a tua cruz com paciência. Porque um dia, e pode ser mais breve do que imaginas, ouvirás aquela voz dizendo:
                          
                          "Servo bom e fiel... entra na alegria do teu Senhor!" (Mateus 25,21).
                          
                          E então, tudo terá valido a pena.
`;

    

    // ----- Notificações ----- //
    const btnNotificar = document.getElementById('btnNotificar');
    btnNotificar.addEventListener('click', () => {
      if ("Notification" in window) {
        if (Notification.permission === "granted") {
          new Notification("Lembrete de Oração", {
            body: "Não esqueça da oração do dia e dos momentos de meditação.",
            icon: "https://via.placeholder.com/100.png"
          });
        } else if (Notification.permission !== "denied") {
          Notification.requestPermission().then(permission => {
            if (permission === "granted") {
              new Notification("Lembrete de Oração", {
                body: "Não esqueça da oração do dia e dos momentos de meditação.",
                icon: "https://via.placeholder.com/100.png"
              });
            }
          });
        } else {
          alert("Você bloqueou notificações. Por favor, habilite-as nas configurações do navegador.");
        }
      } else {
        alert("Este navegador não suporta notificações.");
      }
    });
  });
  
