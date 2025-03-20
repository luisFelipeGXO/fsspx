/* app.js */
document.addEventListener('DOMContentLoaded', () => {
    // ----- Oração do Dia ----- //
    const textoOracao = document.getElementById('textoOracao');
    const temaOracao = document.getElementById('temaOracao');
  


const oracoes = {
  almadecristo: 
  `Alma de Cristo, santificai-me. 
Corpo de Cristo, salvai-me. 
Sangue de Cristo, inebriai-me. 
Água do lado de Cristo, lavai-me 
Paixão de Cristo, confortai-me. 
Ó bom Jesus, ouvi-me. 
Dentro das Vossas chagas, escondei-me. 
Não permitais que eu me separe de Vós. 
Do inimigo maligno defendei-me. 
Na hora da minha morte, chamai-me. 
Mandai-me ir para Vós, 
Para que Vos louve com os Vossos Santos 
Pelos séculos dos séculos. Ámen.
  `,
atodeadoracao: 
`Meu Jesus, amo-­Vos de todo o meu coração. Arrependo-­me de, no passado, ter ofendido tantas vezes Vossa bondade infinita. Proponho, com Vossa graça, não mais Vos ofender no futuro. Nesta hora, miserável como sou, consagro-­me todo a Vós, dou e entrego-Vos minha vontade, meus afetos, meus desejos e tudo o que me pertence. Daqui em diante, fazei de mim e de tudo o que sou eu o que Vos aprouver.

Somente Vos peço e quero Vosso amor, a perseverança final e o perfeito cumprimento da Vossa vontade.

Recomendo-Vos as almas do purgatório, especialmente as mais devotas do Santíssimo Sacramento e da Virgem Maria. Recomendo-­Vos também todos os pobres pecadores. Enfim, amado Salvador meu, uno todos os meus afetos aos afetos do Vosso coração amantíssimo e, assim unidos, eu os ofereço a Vosso eterno Pai, pedindo-­Lhe em Vosso nome e, por Vosso amor, que se digne a aceitá-­los e atendê-­los.

Ó Jesus, Pão vivo descido do Céu, como é grande Vossa bondade! Para perpetuar a fé em Vossa presença real na Eucaristia, com extraordinário poder, dignastes-Vos mudar as espécies do pão e do vinho em Carne e Sangue, como se conservam no Santuário Eucarístico de Lanciano.

Aumentai sempre mais a nossa fé em Vós, Senhor sacramentado! Ardendo de amor por Vós, fazei com que, nos perigos, nas angústias e necessidades, só em Vós encontremos auxílio e consolação, ó divino Prisioneiro dos nossos tabernáculos, ó fonte inesgotável de todas as graças.

Suscitai em nós a fome e a sede do Vosso alimento eucarístico, para que, saboreando este pão celeste, possamos gozar da verdadeira vida, agora e sempre. Amém.`,
      atodecaridade: 
      `Meu Deus, porque sois infinitamente bom e digno de ser amado sobre todas as coisas, eu Vos amo de todo o meu coração, a exemplo de Jesus; e, por Vosso amor, amo também o meu próximo como a mim mesmo. Senhor, fazei que eu Vos ame cada vez mais. Ámen.`,
      atodecontricao: 
`Confesso a Deus Todo-poderoso, à bem-aventurada sempre Virgem Maria, ao bem-aventurado Miguel Arcanjo, ao bem-aventurado João Batista, aos santos Apóstolos Pedro e Paulo, e a todos os Santos e a vós, Padre, que pequei muitas vezes por pensamentos, palavras e obras.

Por minha culpa, minha culpa, minha máxima culpa. 

Portanto, rogo à bem-aventurada sempre Virgem Maria, ao bem-aventurado Miguel Arcanjo, ao bem-aventurado João Batista, aos santos Apóstolos Pedro e Paulo, e a todos os Santos e a vós, Padre, que oreis por mim a Deus, Nosso Senhor.`,
atodeesperanca: 
      `Eu espero, meu Deus, com firme confiança, que pelos merecimentos do meu Senhor Jesus Cristo me dareis a salvação eterna e as graças necessárias para consegui-la, porque Vós, sumamente bom e poderoso, a haveis prometido a quem observar fielmente os Vossos mandamentos e o Evangelho de Jesus Cristo, como eu proponho fazer com o Vosso auxílio.
      `,
atodefe: 
      `Eu creio firmemente que há um só Deus, em três Pessoas realmente distintas: Pai Filho e Espírito Santo. Creio que o Filho de Deus se fez Homem, padeceu e morreu na cruz para nos salvar, e que ao terceiro dia ressuscitou. Creio em tudo que crê e ensina a Santa Igreja Católica e Apostólica, porque Deus, verdade infalível, lhe revelou. E nesta fé quero viver e morrer. Amém.`,
atodehumildade: 
      `Senhor, meu Deus, eu me humilho diante de Vós, reconhecendo que sou um ser frágil e limitado. Agradeço por tudo o que me concedestes e peço perdão pelas minhas falhas. Vós, que sois a fonte de toda a sabedoria e misericórdia, guiai-me no caminho da verdade e da bondade. Que eu, com humildade, busque sempre fazer a Vossa vontade e viver conforme o Vosso exemplo de amor e serviço. Amém.
      `,
      atodeoferecimento: 
      `Meu Deus, eu te ofereço todas as ações que realizarei hoje com as intenções e para a glória do Sagrado Coração de Jesus. Quero santificar as batidas do meu coração, os meus pensamentos e as minhas obras, inclusive as mais simples, unindo-as aos seus méritos infinitos, e reparar as minhas faltas lançando-as à fornalha do seu Amor misericordioso.

Ó meu Deus! Quero pedir-te, para mim e para os meus entes queridos, a graça de cumprir perfeitamente a tua santa vontade, de aceitar por teu amor as alegrias e tristezas desta vida passageira, para que estejamos um dia reunidos no céu para toda a eternidade. Que assim seja.
      `,
      atodereparacao: 
      `Dulcíssimo Jesus, cuja infinita caridade para com os homens é por eles tão ingratamente correspondida com esquecimentos, friezas e desprezos, eis-nos aqui prostrados na Vossa presença, para Vos desagravarmos, com especiais homenagens, da insensibilidade tão insensata e das nefandas injúrias com que é de toda parte alvejado o Vosso amorosíssimo coração.

Reconhecendo, porém, com a mais profunda dor, que também nós mais de uma vez cometemos as mesmas indignidades, para nós, em primeiro lugar, imploramos a Vossa misericórdia, prontos a expiar não só as próprias culpas, senão também as daqueles que, errando longe do caminho da salvação, ou se obstinam na sua infidelidade, não Vos querendo como pastor e guia, ou, conculcando as promessas do batismo, sacudiram o suavíssimo jugo da Vossa santa lei.

De todos estes tão deploráveis crimes, Senhor, queremos nós hoje desagravar-Vos, mais particularmente da licença dos costumes e imodéstia do vestido, de tantos laços de corrupção armados à inocência, da violação dos dias santificados, das execrandas blasfêmias contra Vós e Vossos Santos, dos insultos ao Vosso Vigário e a todo o Vosso clero, do desprezo e das horrendas e sacrílegas profanações do Sacramento do divino amor e, enfim, dos atentados e rebeldias das nações contra os direitos e o Magistério da Vossa Igreja.

Oh! Se pudéssemos lavar com o próprio sangue tantas iniqüidades!

Entretanto, para reparar a honra divina ultrajada, Vos oferecemos, juntamente com os merecimentos da Virgem Mãe, de todos os santos e almas piedosas, aquela infinita satisfação, que Vós oferecestes ao eterno Pai sobre a cruz, e que não cessais de renovar todos os dias sobre nossos altares.

Ajudai-nos Senhor, com o auxílio da Vossa graça, para que possamos, como é nosso firme propósito, com a vivência da fé, com a pureza dos costumes, com a fiel observância da lei e caridade evangélicas, reparar todos os pecados cometidos por nós e por nosso próximo, impedir, por todos os meios, novas injúrias à Vossa divina Majestade e atrair ao Vosso serviço o maior número de almas possível.

Recebei, ó benigníssimo Jesus, pelas mãos de Maria santíssima reparadora, a espontânea homenagem deste nosso desagravo, e concedei-nos a grande graça de perseverarmos constantes, até à morte, no fiel cumprimento de nossos deveres e no Vosso santo serviço, para que possamos chegar todos à pátria bem-aventurada, onde Vós com o Pai e o Espírito Santo viveis e reinais por todos os séculos dos séculos.

Amém.
      `,
      atoderesignacao: 
      `Senhor, Deus meu, desde já aceito de vossa mão, resignado e contente, conforme vos aprouver, todo e qualquer gênero de morte, Vosso Filho Jesus dentre os mortos, eu me entrego em Vossas mãos paternais, e espero de Vossa misericórdia ser revestido de imortalidade e acolhido em Vosso reino eterno.
Amém.
      `,
      atodeuniao: 
      `Ó Senhora minha,
Ó minha Mãe,
Eu me ofereço todo a Vós,
E em prova da minha devoção para convosco,
Vos consagro neste dia,
Os meus olhos, os meus ouvidos,
A minha boca, o meu coração,
Toda a minha alma, e todo o meu ser.
Onde quer que eu vá,
Eu Vos pertenço.
Ó minha boa Mãe,
Guardai-me e defendei-me,
Como coisa e propriedade vossa.
Amém.
      `,
      bencaodamesa: 
      `Senhor Deus, abençoai esta mesa,
abençoai os alimentos que vamos receber,
e a todos nós, que aqui estamos.
Que nossa vida seja sempre regida
pela vossa paz e amor.
Por Cristo, nosso Senhor.
Amém.
      `,
      bencaodanoite: 
      `Em nome do Pai, do Filho e do Espírito Santo. Amém.

Senhor, antes de me entregar ao sono, venho a Ti em oração, agradecendo pelo dia que passou e por todas as bênçãos que recebi. Peço-Te, Senhor, que me concedas uma noite tranquila, cheia de paz, e que me protejas de todo o mal.

Que o Teu Santo Anjo me guarde durante a noite, livrando-me de perigos e trazendo a paz para o meu coração. Que no amanhecer eu possa acordar renovado, pronto para viver um novo dia segundo a Tua vontade.

Em nome de Jesus, Teu Filho amado, Te peço. Amém.
      `,
      bencaodolar: 
      `Senhor, Deus Todo-Poderoso, abençoai esta casa e todos os que nela habitam. Que o vosso amor e paz estejam sempre presentes em nosso lar. Abençoai cada cômodo, os objetos e os corações de cada pessoa que aqui vive, para que possamos sempre viver em harmonia e alegria.

Que a vossa luz brilhe sobre nós, dissipando as trevas e as dificuldades que possam surgir. Protegei-nos, Senhor, contra todo o mal e perigo. Concedei-nos a graça de viver em união, fé, esperança e amor, seguindo o exemplo de Jesus Cristo, nosso Salvador.

Fazei de nossa casa um lugar de acolhimento, de oração e de caridade, onde todos possam sentir a vossa presença e amor.

Por Cristo, nosso Senhor. Amém.
      `,
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

Por vosso intermédio, derrame-se sobre a Terra a Misericórdia divina e o doce palpitar da paz volte a marcar as nossas jornadas. Mulher do sim, sobre Quem desceu o Espírito Santo, trazei de volta ao nosso meio a harmonia de Deus. Dessedentai a aridez do nosso coração, Vós que «sois fonte viva de esperança». Tecestes a humanidade para Jesus, fazei de nós artesãos de comunhão. Caminhastes pelas nossas estradas, guiai-nos pelas sendas da paz. Amém.
`,
      consagracaoaosagradocoracaodejesus: 
      `Eu me dou e consagro ao sagrado Coração de nosso Senhor Jesus Cristo: minha pessoa e minha vida, minhas ações, meus trabalhos e meus sofrimentos, a fim de no futuro pregar tudo quanto sou e tenho, unicamente para sua honra, amor e glória. É minha resolução irrevogável ser inteiramente dele e fazer tudo por seu amor, renunciando de todo o meu coração a tudo que lhe puder desagradar. Portanto, o Coração Sagrado, eu vos escolho para único objeto de meu amor, para protetor de minha vida, penhor de minha salvação, amparo de minha fragilidade e inconstância, reparação de todas as faltas de minha vida e asilo seguro na hora de minha morte. Coração de ternura e bondade, sede Vós minha justificação diante de Deus vosso Pai e afastai de mim os castigos de sua justa cólera. Coração de amor, em Vós ponho toda a minha confiança; de minha fraqueza e maldade tudo temo, mas de Vossa bondade tudo espero. Consumi, pois, em mim, tudo o que puder desagradar-vos ou se opor a Vós. Imprimi o Vosso puro amor tão firmemente no meu coração, que nunca mais Vos possa esquecer nem nunca possa de vós me separar, Coração Sagrado, eu vos conjuro, por toda a Vossa bondade, que o meu nome seja profundamente gravado em Vós, pois eu quero que toda a minha felicidade e glória seja viver e morrer no Vosso serviço. Amém.
      `,
      consagracaoanossasenhora: 
      `Ó minha Senhora, minha Mãe, eu me ofereço inteiramente a vós, e em prova de minha devoção, eu vos consagro neste dia, meus olhos, meus ouvidos, minha boca, meu coração, minha vida, tudo o que sou, tudo o que tenho. Porque sois minha Mãe, quero servir-vos com todo o meu ser. Aceitai-me como vosso e, como Mãe amorosa, conduzi-me sempre para o caminho de vosso Filho, Jesus.

Maria, Mãe da Igreja, intercedei por nós, agora e na hora de nossa morte. Amém.
      `,
      consagracaoasaojose: 
      `Ó glorioso São José, que Deus escolheu para pai adotivo de Jesus, para Esposo puríssimo da Virgem Maria e chefe da Sagrada família, e que o Sumo Pontífice declarou Padroeiro e Protetor da Igreja fundada por Jesus, eu recorro a vós neste momento e imploro com a maior confiança, o vosso poderoso auxilio para toda a Igreja militante.

Protejei, e especialmente, com vosso amor verdadeiramente paternal, o Vigário de Cristo e todos os Bispos e Sacerdotes, unidos à Santa Sé de Pedro.
Defendei os que trabalham pela salvação das almas, entre as angústias de tribulações desta vida, e fazei que todos os povos da Terra se sujeitem docilmente à Igreja, que é o meio de salvação necessário para todos.

Dignai-vos também, meu querido São José, aceitar a consagração que vos faço de mim mesmo. Eu me ofereço todo a vós, para que sejais sempre meu pai, o meu protetor e meu guia no caminho da salvação. Alcançai-me uma grande pureza de coração e um amor ardente à vida interior.

Fazei que seguindo o vosso exemplo, todas as minhas obras sejam dirigidas para a maior gloria de Deus em união como o Coração Divino de Jesus e com o Coração imaculado de Maria e convosco. Amém. 
      `,
      credo:
      `textodaoracao
      `,
      defendeinosnocombate:
      `textodaoracao
      `,
      deprofundis:
      `textodaoracao
      `,
      devocionario:
      `textodaoracao
      `,
      exorcismodesaobento:
      `textodaoracao
      `,
      exorcismodesaomiguel:
      `textodaoracao
      `,
      gloriaaopai:
      `textodaoracao
      `,
      gozosdenossasenhoradocarmo:
      `textodaoracao
      `,
      gozosdenossasenhoradoperpetuosocorro:
      `textodaoracao
      `,
      hinoacristorei:
      `textodaoracao
      `,
      hinoaoespiritosanto:
      `textodaoracao
      `,
      hinoasaomiguelarcanjo:
      `textodaoracao
      `,
      hinodaigrejatriunfante:
      `textodaoracao
      `,
      jesusmariajose:
      `textodaoracao
      `,
      magnificat:
      `textodaoracao
      `,
      nomedmiserereaoracao:
      `textodaoracao
      `,
      memorare:
      `textodaoracao
      `,
      oracaoanossasenhoraauxiliadora:
      `textodaoracao
      `,
      oracaoanossasenhoradaassuncao:
      `textodaoracao
      `,
      oracaoanossasenhoradasgracas:
      `textodaoracao
      `,
      oracaoanossasenhoradefatima:
      `textodaoracao
      `,
      oracaoanossasenhoradocarmo:
      `textodaoracao
      `,
      oracaoanossasenhoradoperpetuosocorro:
      `textodaoracao
      `,
      oracaoasaobento:
      `textodaoracao
      `,
      oracaoasaofranciscodeassis:
      `textodaoracao
      `,
      oracaoasaojosepelapureza:
      `textodaoracao
      `,
      oracaoasaomiguelarcanjo:
      `textodaoracao
      `,
      oracaoasantateresinhadomeninojesus:
      `textodaoracao
      `,
      oracaodaconfiancaemmaria:
      `textodaoracao
      `,
      oracaodeagradecimento:
      `textodaoracao
      `,
      oracaodeconsagracaoaoespiritosanto:
      `textodaoracao
      `,
      oracaodesaobernardo:
      `textodaoracao
      `,
      oracaoantescomunhao:
      `textodaoracao
      `,
      oracaodepoiscomunhao:
      `textodaoracao
      `,
      oracaoaoanjodeportugal:
      `textodaoracao
      `,
      oracaodoperdao:
      `textodaoracao
      `,
      oracaopelosagonizantes:
      `textodaoracao
      `,
      oracaopelossacerdotes:
      `textodaoracao
      `,
      painosso:
      `textodaoracao
      `,
      pelasalmasdopurgatorio:
      `textodaoracao
      `,
      pequenoexorcismo:
      `textodaoracao
      `,
      pequenooficio:
      `textodaoracao
      `,
      precepelosfalecidos:
      `textodaoracao
      `,
      precesdaboamorte:
      `textodaoracao
      `,
      precesparaantesdaconfissao:
      `textodaoracao
      `,
      precesparadepoisdaconfissao:
      `textodaoracao
      `,
      reginacaeli:
      `textodaoracao
      `,
      salmonoventa:
      `textodaoracao
      `,
      salverainha:
      `textodaoracao
      `,
      saopioxpelaigreja:
      `textodaoracao
      `,
      subtuumpraesidium:
      `textodaoracao
      `,
      tedeum:
      `textodaoracao
      `,
      visitaaosantissimosacramento:
      `textodaoracao
      `
    };
  
    const oracoesLatim = {
      almadecristo: 
      `Anima Christi, sanctífica me.
Corpus Christi, salva me.
Sanguis Christi, inébria me.
Aqua láteris Christi, lava me.
Pássio Christi, confórta me.
O bone Iesu, exáudi me.
Intra tua vúlnera abscónde me.
Ne permíttas me separári a te.
Ab hoste malígno defénde me.
In hora mortis meæ voca me.
Et iube me veníre ad te, ut cum Sanctis tuis laudem te in sæcula sæculórum.
Amen
      `,
      atodeadoracao: 
      `Domine Iesu, te amo ex toto corde meo. Poenitet me, quod praeteritum tempus tuam infinitam bonitatem saepissime offendi. Propono, tua gratia, ne amplius te offendam in futurum. In hoc momento, miserrimus ut sum, me totum tibi consecro, do et tradam tibi voluntatem meam, affectus meos, desideria mea et omnia quae mihi pertinent. Ab hoc momento, fac de me et de omnibus quae sum ut tibi placuerit.

Solum peto et volo amorem tuum, perseverantiam finalem et perfectum implendum voluntatis tuae.

Commendo tibi animas purgatorii, praesertim eas quae maxime devotae sunt Sacramento Sanctissimo et Virgini Mariae. Commendo tibi etiam omnes pauperes peccatores. Denique, amatus Salvator meus, unio omnes affectus meos affectibus cordis tui amantissimi et, ita uniti, offero eos Patri tuo aeterno, rogans eum in nomine tuo et pro amore tuo, ut dignetur accipere eos et exaudire.

O Iesu, Panis vivus descendens de Caelo, quantus est tua bonitas! Ut fidem tuam in praesentia reali Eucharistiae perpetuaret, mirabili potestate dignatus es species panis et vini in Caro et Sanguinem converti, sicut conservantur in Sanctuario Eucharistico Lanciani.

Augmenta semper fidem nostram in te, Domine sacramentato! Aestuans amore tui, fac ut, in periculis, angustia et necessitatibus, solum in te auxilium et consolationem inveniamus, o divinum Captivum in tabernaculis nostris, o fons inexhaustibilis omnium gratiarum.

Excita in nobis famem et sitim tuae Eucharistici cibi, ut, gustando hunc panem caelestem, veram vitam gustare possimus, nunc et semper. Amen.`,
      atodecaridade: `Deus meus, quia es infinitus bonus et dignus amari super omnia, te amo ex toto corde meo, exemplo Iesu; et, propter amorem tuum, amo etiam proximum meum sicut me ipsum. Domine, fac ut te amem semper magis. Amen.`,
      atodecontricao: 
      `Confiteor Deo omnipotenti, beatae Mariae semper Virgini, beato Michaeli Archangelo, beato Joanni Baptistae, sanctis apostolis Petro et Paulo, omnibus Sanctis, et tibi, Pater, quia peccavi nimis cogitatione, verbo et opere.

Mea culpa, mea culpa, mea maxima culpa.

Ideo precor beatam Mariam semper Virginem, beatum Michaelem Archangelum, beatum Joanem Baptistam, Sanctos apostolos Petrum et Paulum, omnes Sanctos, et Te, Pater, orare pro me ad Dominum Deum nostrum.`,
atodeesperanca: 
      `Spero, Deus meus, cum firma fiducia, quod per merita Domini mei Iesu Christi salutem aeternam et gratias necessarias ad eam consequendam mihi dabitis, quia Tu, summe bonus et potens, promissisti eam iis qui fideliter mandata Tua et Evangelium Iesu Christi servaverint, sicut ego propono facere auxilio Tuo.
      `,
      atodefe: 
      `Confiteor Deo omnipotenti, beatae Mariae semper Virgini, beato Michaeli Archangelo, beato Joanni Baptistae, sanctis apostolis Petro et Paulo, omnibus Sanctis, et tibi, Pater, quia peccavi nimis cogitatione, verbo et opere.

Mea culpa, mea culpa, mea maxima culpa.

Ideo precor beatam Mariam semper Virginem, beatum Michaelem Archangelum, beatum Joanem Baptistam, Sanctos apostolos Petrum et Paulum, omnes Sanctos, et Te, Pater, orare pro me ad Dominum Deum nostrum.`,
atodehumildade: 
      `textodaoracao
      `,
      atodeoferecimento: 
      `textodaoracao
      `,
      atodereparacao: 
      `textodaoracao
      `,
      atoderesignacao: 
      `textodaoracao
      `,
      atodeuniao: 
      `textodaoracao
      `,
      bencaodamesa: 
      `textodaoracao
      `,
      bencaodanoite: 
      `textodaoracao
      `,
      bencaodolar: 
      `textodaoracao
      `,
      consagracaocoracaoimaculadomaria: 
      `textodaoracao
      `,
      consagracaoaosagradocoracaodejesus: 
      `textodaoracao
      `,
      consagracaoanossasenhora: 
      `textodaoracao
      `,
      consagracaoasaojose: 
      `textodaoracao
      `,
      credo:
      `textodaoracao
      `,
      defendeinosnocombate:
      `textodaoracao
      `,
      deprofundis:
      `textodaoracao
      `,
      devocionario:
      `textodaoracao
      `,
      exorcismodesaobento:
      `textodaoracao
      `,
      exorcismodesaomiguel:
      `textodaoracao
      `,
      gloriaaopai:
      `textodaoracao
      `,
      gozosdenossasenhoradocarmo:
      `textodaoracao
      `,
      gozosdenossasenhoradoperpetuosocorro:
      `textodaoracao
      `,
      hinoacristorei:
      `textodaoracao
      `,
      hinoaoespiritosanto:
      `textodaoracao
      `,
      hinoasaomiguelarcanjo:
      `textodaoracao
      `,
      hinodaigrejatriunfante:
      `textodaoracao
      `,
      jesusmariajose:
      `textodaoracao
      `,
      magnificat:
      `textodaoracao
      `,
      nomedmiserereaoracao:
      `textodaoracao
      `,
      memorare:
      `textodaoracao
      `,
      oracaoanossasenhoraauxiliadora:
      `textodaoracao
      `,
      oracaoanossasenhoradaassuncao:
      `textodaoracao
      `,
      oracaoanossasenhoradasgracas:
      `textodaoracao
      `,
      oracaoanossasenhoradefatima:
      `textodaoracao
      `,
      oracaoanossasenhoradocarmo:
      `textodaoracao
      `,
      oracaoanossasenhoradoperpetuosocorro:
      `textodaoracao
      `,
      oracaoasaobento:
      `textodaoracao
      `,
      oracaoasaofranciscodeassis:
      `textodaoracao
      `,
      oracaoasaojosepelapureza:
      `textodaoracao
      `,
      oracaoasaomiguelarcanjo:
      `textodaoracao
      `,
      oracaoasantateresinhadomeninojesus:
      `textodaoracao
      `,
      oracaodaconfiancaemmaria:
      `textodaoracao
      `,
      oracaodeagradecimento:
      `textodaoracao
      `,
      oracaodeconsagracaoaoespiritosanto:
      `textodaoracao
      `,
      oracaodesaobernardo:
      `textodaoracao
      `,
      oracaoantescomunhao:
      `textodaoracao
      `,
      oracaodepoiscomunhao:
      `textodaoracao
      `,
      oracaoaoanjodeportugal:
      `textodaoracao
      `,
      oracaodoperdao:
      `textodaoracao
      `,
      oracaopelosagonizantes:
      `textodaoracao
      `,
      oracaopelossacerdotes:
      `textodaoracao
      `,
      painosso:
      `textodaoracao
      `,
      pelasalmasdopurgatorio:
      `textodaoracao
      `,
      pequenoexorcismo:
      `textodaoracao
      `,
      pequenooficio:
      `textodaoracao
      `,
      precepelosfalecidos:
      `textodaoracao
      `,
      precesdaboamorte:
      `textodaoracao
      `,
      precesparaantesdaconfissao:
      `textodaoracao
      `,
      precesparadepoisdaconfissao:
      `textodaoracao
      `,
      reginacaeli:
      `textodaoracao
      `,
      salmonoventa:
      `textodaoracao
      `,
      salverainha:
      `textodaoracao
      `,
      saopioxpelaigreja:
      `textodaoracao
      `,
      subtuumpraesidium:
      `textodaoracao
      `,
      tedeum:
      `textodaoracao
      `,
      visitaaosantissimosacramento:
      `textodaoracao
      `
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
  ladainhadaalmadecristo: 
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
    ladainhadasalmasdopurgatorio: 
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
ladainhadobomjesus: 
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

Para que sejamos dignos das promessas de Cristo.`,
ladainhadocoracaodolorosoeimaculadodemaria: 
`textodaladainha
`,
ladainhadocoracaoeucaristicodejesus: 
`textodaladainha
`,
ladainhadedombosco: 
`textodaladainha
`,
ladainhadoespiritosanto: 
`textodaladainha
`,
ladainhadejesuscristo: 
`textodaladainha
`,
ladainhadonomedejesus: 
`textodaladainha
`,
ladainhadopreciosissimosanguedejesus: 
`textodaladainha
`,
ladainhademariasantissima: 
`textodaladainha
`,
ladainhademariasantissimafavorespecial: 
`textodaladainha
`,
ladainhamariasantissimaalcancarpreserverancafinal: 
`textodaladainha
`,
ladainhanossasenhoraauxiliadora: 
`textodaladainha
`,
ladainhadenossasenhoradaassuncao: 
`textodaladainha
`,
ladainhadenossasenhoradaconceicao: 
`textodaladainha
`,
ladainhanossasenhoradapiedade: 
`textodaladainha
`,
ladainhanossasenhoradasdores: 
`textodaladainha
`,
ladainhanossasenhoradasgracas: 
`textodaladainha
`,
ladainhadenossasenhoradapenha: 
`textodaladainha
`,
ladainhadenossasenhoradasaude: 
`textodaladainha
`,
ladainhadenossasenhoradefatima: 
`textodaladainha
`,
ladainhadenossasenhoradeguadalupe: 
`textodaladainha
`,
ladainhadenossasenhoradelasalette: 
`textodaladainha
`,
ladainhadenossasenhoradelourdes: 
`textodaladainha
`,
ladainhadenossasenhoradocarmo: 
`textodaladainha
`,
ladainhadenossasenhoradoperpetuosocorro: 
`textodaladainha
`,
ladainhedenossasenhoradosremedios: 
`textodaladainha
`,
ladainhadenossasenhorarainhadosapostolos: 
`textodaladainha
`,
ladainhadesaopadrepio: 
`textodaladainha
`,
ladainhadospastoresdebelem: 
`textodaladainha
`,
ladainhadorosario: 
`textodaladainha
`,
ladainhadesantacecilia: 
`textodaladainha
`,
ladainhadesantafilomena: 
`textodaladainha
`,
ladainhadesantateresinhadomeninojesus: 
`textodaladainha
`,
ladainhadosanteagostinho: 
`textodaladainha
`,
ladainhadesantoafonsomaria: 
`textodaladainha
`,
ladainhadesantoantonio: 
`textodaladainha
`,
ladainhadesantoexpedito: 
`textodaladainha
`,
ladainhadesantoinaciodeloyola: 
`textodaladainha
`,
ladainhadesaobenedito: 
`textodaladainha
`,
ladainhadesaobento: 
`textodaladainha
`,
ladainhadesaodomingossavio: 
`textodaladainha
`,
ladainhadesaofranciscodeassis: 
`textodaladainha
`,
ladainhadesaofranciscoxavier: 
`textodaladainha
`,
ladainhadesaogabrielarcanjo: 
`textodaladainha
`,
ladainhadesaogeraldo: 
`textodaladainha
`,
ladainhadesaojose: 
`textodaladainha
`,
ladainhadesaojoaobatista: 
`textodaladainha
`,
ladainhadesaojoaoevangelista: 
`textodaladainha
`,
ladainhadesaojoaomariavianney: 
`textodaladainha
`,
ladainhadesaojudastadeu: 
`textodaladainha
`,
ladainhadesaoluismaria: 
`textodaladainha
`,
ladainhadesaomarcosevangelista: 
`textodaladainha
`,
ladainhadesaomiguelarcanjo: 
`textodaladainha
`,
ladainhadesaopauloapostolo: 
`textodaladainha
`,
ladainhadesaopedroapostolo: 
`textodaladainha
`,
ladainhadesaorafaelarcanjo: 
`textodaladainha
`,
ladainhadesaotomasdeaquino: 
`textodaladainha
`,
ladainhadesaovicentedepaulo: 
`textodaladainha
`,
ladainhadossantos: 
`textodaladainha
`,
ladainhadosagradocoracaodejesus: 
`textodaladainha
`,
ladainhadosantissimonomedejesus: 
`textodaladainha
`,
ladainhadavirgemmaria: 
`textodaladainha
`,
ladainhadavisitacao: 
`textodaladainha
`
};

const ladainhasLatim = {
  ladainhadaalmadecristo: 
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
    ladainhadasalmasdopurgatorio: 
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
ladainhadobomjesus: 
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

Para que sejamos dignos das promessas de Cristo.`,
ladainhadocoracaodolorosoeimaculadodemaria: 
`textodaladainha
`,
ladainhadocoracaoeucaristicodejesus: 
`textodaladainha
`,
ladainhadedombosco: 
`textodaladainha
`,
ladainhadoespiritosanto: 
`textodaladainha
`,
ladainhadejesuscristo: 
`textodaladainha
`,
ladainhadonomedejesus: 
`textodaladainha
`,
ladainhadopreciosissimosanguedejesus: 
`textodaladainha
`,
ladainhademariasantissima: 
`textodaladainha
`,
ladainhademariasantissimafavorespecial: 
`textodaladainha
`,
ladainhamariasantissimaalcancarpreserverancafinal: 
`textodaladainha
`,
ladainhanossasenhoraauxiliadora: 
`textodaladainha
`,
ladainhadenossasenhoradaassuncao: 
`textodaladainha
`,
ladainhadenossasenhoradaconceicao: 
`textodaladainha
`,
ladainhanossasenhoradapiedade: 
`textodaladainha
`,
ladainhanossasenhoradasdores: 
`textodaladainha
`,
ladainhanossasenhoradasgracas: 
`textodaladainha
`,
ladainhadenossasenhoradapenha: 
`textodaladainha
`,
ladainhadenossasenhoradasaude: 
`textodaladainha
`,
ladainhadenossasenhoradefatima: 
`textodaladainha
`,
ladainhadenossasenhoradeguadalupe: 
`textodaladainha
`,
ladainhadenossasenhoradelasalette: 
`textodaladainha
`,
ladainhadenossasenhoradelourdes: 
`textodaladainha
`,
ladainhadenossasenhoradocarmo: 
`textodaladainha
`,
ladainhadenossasenhoradoperpetuosocorro: 
`textodaladainha
`,
ladainhedenossasenhoradosremedios: 
`textodaladainha
`,
ladainhadenossasenhorarainhadosapostolos: 
`textodaladainha
`,
ladainhadesaopadrepio: 
`textodaladainha
`,
ladainhadospastoresdebelem: 
`textodaladainha
`,
ladainhadorosario: 
`textodaladainha
`,
ladainhadesantacecilia: 
`textodaladainha
`,
ladainhadesantafilomena: 
`textodaladainha
`,
ladainhadesantateresinhadomeninojesus: 
`textodaladainha
`,
ladainhadosanteagostinho: 
`textodaladainha
`,
ladainhadesantoafonsomaria: 
`textodaladainha
`,
ladainhadesantoantonio: 
`textodaladainha
`,
ladainhadesantoexpedito: 
`textodaladainha
`,
ladainhadesantoinaciodeloyola: 
`textodaladainha
`,
ladainhadesaobenedito: 
`textodaladainha
`,
ladainhadesaobento: 
`textodaladainha
`,
ladainhadesaodomingossavio: 
`textodaladainha
`,
ladainhadesaofranciscodeassis: 
`textodaladainha
`,
ladainhadesaofranciscoxavier: 
`textodaladainha
`,
ladainhadesaogabrielarcanjo: 
`textodaladainha
`,
ladainhadesaogeraldo: 
`textodaladainha
`,
ladainhadesaojose: 
`textodaladainha
`,
ladainhadesaojoaobatista: 
`textodaladainha
`,
ladainhadesaojoaoevangelista: 
`textodaladainha
`,
ladainhadesaojoaomariavianney: 
`textodaladainha
`,
ladainhadesaojudastadeu: 
`textodaladainha
`,
ladainhadesaoluismaria: 
`textodaladainha
`,
ladainhadesaomarcosevangelista: 
`textodaladainha
`,
ladainhadesaomiguelarcanjo: 
`textodaladainha
`,
ladainhadesaopauloapostolo: 
`textodaladainha
`,
ladainhadesaopedroapostolo: 
`textodaladainha
`,
ladainhadesaorafaelarcanjo: 
`textodaladainha
`,
ladainhadesaotomasdeaquino: 
`textodaladainha
`,
ladainhadesaovicentedepaulo: 
`textodaladainha
`,
ladainhadossantos: 
`textodaladainha
`,
ladainhadosagradocoracaodejesus: 
`textodaladainha
`,
ladainhadosantissimonomedejesus: 
`textodaladainha
`,
ladainhadavirgemmaria: 
`textodaladainha
`,
ladainhadavisitacao: 
`textodaladainha
`
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
  
