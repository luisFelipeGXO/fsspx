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
      `Creio em um só Deus, Pai Todo-Poderoso, criador do céu e da terra, / de todas as coisas visíveis e invisíveis. / Creio em um só Senhor, Jesus Cristo, Filho Unigênito de Deus, / nascido do Pai antes de todos os séculos: Deus de Deus, luz da luz, / Deus verdadeiro de Deus verdadeiro, / gerado, não criado, consubstancial ao Pai. / Por ele todas as coisas foram feitas. / E por nós, homens, e para nossa salvação, desceu dos céus:
(aqui todos se ajoelhem)
e se encarnou pelo Espírito Santo, / no seio da Virgem Maria, e se fez homem.
(aqui todos se levantem)
Também por nós foi crucificado sob Pôncio Pilatos; / padeceu e foi sepultado. / Ressuscitou ao terceiro dia, / conforme as Escrituras, / e subiu aos céus, / onde está sentado à direita do Pai. / E de novo há de vir, / em sua glória, / para julgar os vivos e os mortos; / e o seu reino não terá fim. / Creio no Espírito Santo, / Senhor que dá a vida, / e procede do Pai e do Filho; / e com o Pai e o Filho é adorado e glorificado: / ele que falou pelos profetas. / Creio na Igreja, una, santa, católica e apostólica. / Professo um só batismo para remissão dos pecados. / E espero a ressurreição dos mortos / e a vida do mundo que há de vir. - Amém.
      `,
      defendeinosnocombate:
      `São Miguel Arcanjo, defendei-nos no combate.
Sede o nosso refúgio contra as maldades e ciladas do demônio.
Que Deus manifeste o seu poder sobre ele. Eis a nossa humilde súplica.
E vós, Príncipe da Milícia Celeste, com o poder que Deus vos conferiu,
precipitai no inferno Satanás e os outros espíritos malignos,
que andam pelo mundo tentando as almas. Amém.
      `,
      deprofundis:
      `Dos profundos abismos clamei a Vós, meu Senhor:

Senhor, ouvi a minha voz.

Dai ouvidos atentos à voz da minha súplica.

Se Vós, Senhor, observardes as iniquidades, Senhor, quem poderá subsistir na Vossa presença?

Porque em vós tudo é clemência e por causa da Vossa lei, esperei em Vós, Senhor.

Susteve-se a minha alma na sua palavra; esperou a minha alma no Senhor.

Desde a aurora até à noite, espere todo Israel no Senhor.

Porque o Senhor é cheio de misericórdia e n’Ele se encontra uma redenção abundante.

­E ele mesmo há de remir a Israel de todas as suas iniquidades.

℣. Dai-lhes, Senhor, o descanso eterno.

℟. Entre os resplendores da luz perpétua.

℣. Descansem em paz.

℟. Amém.

Oração:

Disponde e fortificai, Senhor, os nossos corações com a abundância da Vossa graça, afim de que, penetrando em espírito de fé, de caridade e compaixão nas pavorosas prisões do purgatório, possamos levar aos fiéis que nele sofrem os tesouros dos sufrágios que servem para seu alívio, para Vossa glória e proveito de nossa alma.
      `,
      devocionario:
      `Maria, Mãe minha; livrai-me de cair em pecado mortal!

Pelo o Poder que te concedeu o Pai Eterno. 
Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus.
Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora da nossa morte. Amém.

Pela Sabedoria que te concedeu o Filho. 
Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus.
Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora da nossa morte. Amém.

Pelo Amor que te concedeu o Espírito Santo.
Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus.
Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora da nossa morte. Amém.

      `,
      exorcismodesaobento:
      `São Bento, glorioso patriarca, fazei que, por vossa intercessão, sejamos preservados de todo mal. Vós que fostes escolhido por Deus para ser o defensor e protetor do povo cristão, intercedei por nós junto ao Senhor. Abençoai-nos com vosso poder, para que, por vosso auxílio, possamos ser livres de toda a tentação, perigo e ataque do maligno. Concedei-nos a graça da fé firme, da esperança inabalável e do amor sincero, para que possamos sempre seguir os caminhos de Cristo.

São Bento, rogai por nós!

Amém.
      `,
      exorcismodesaomiguel:
      `São Miguel Arcanjo,
defendei-nos no combate,
cobri-nos com o vosso escudo
contra as maldades e ciladas do demônio.
Subjugaí-o, ó Deus, instantaneamente,
e vós, Príncipe da Milícia Celeste,
pelo poder de Deus,
lançai no inferno a Satanás
e a todos os espíritos malignos
que andam pelo mundo para perder as almas.
Amém.
      `,
      gloriaaopai:
      `Glória ao pai, ao Filho e ao Espírito Santo, assim como era no princípio agora e sempre, e pelos séculos dos séculos, amém.
      `,
      gozosdenossasenhoradocarmo:
      `(Refrão): Ó Maria do Carmelo,
Esperança e guia nossa,
Com vosso santo Escapulário,
Sede o nosso refúgio!

    Desde o Monte contemplamos
    Vosso manto protetor,
    Vossa graça nos chamando
    Para a luz do Redentor.
    
    (Refrão)

    O Escapulário sagrado
    É penhor de salvação,
    Por vós somos guardados
    Nos caminhos da aflição.
   
    (Refrão)

    Em perigo e em tormenta,
    Mãe do Carmo, vinde já,
    Seus filhos vós sustentais,
    Com materna proteção.
   
    (Refrão)
      `,
      gozosdenossasenhoradoperpetuosocorro:
      `(Refrão): Ó Maria, Mãe querida,
Sois do mundo a esperança;
Vosso olhar nos dê guarida,
Sede o nosso Perpétuo Socorro!

    Do alto trono de glória,
    Vossa imagem nos ensina,
    Que o pecador em ruína
    Pode achar em vós vitória.

    (Refrão)

    Vosso Filho, em seu penar,
    Nosso mal já antevê,
    E em vosso colo de fé,
    A salvação vem nos dar.

    (Refrão)

    Os arcanjos apontando
    Os sinais da Redenção,
    Vosso amparo suplicamos,
    Livrai-nos da perdição.

    (Refrão)
      `,
      hinoacristorei:
      `Honra, glória, louvor sempiterno
A Jesus, a Jesus Redentor!
Deus de Deus, Luz de Luz, Verbo eterno
Cristo Rei, do Universo Senhor

Jesus Rei Deus verdadeiro
O teu Reino venha a nós
Obedeça o mundo inteiro
Ao poder de tua voz
Todo o orbe homenagens Lhe renda
Aos seus pés traga o mundo cristão
De almas livres a livre oferenda
Corações para o seu coração!

Também nós Brasileiros, queremos
De Jesus a realeza aclamar!
De nossa alma os afetos supremos
São por Ele, sua lei, seu Altar!

Rubejantes emblemas que bordam
Nossos peitos, sagrados broqueis
Sangue e ouro nas cores recordam
Cruz e glória aos Apóstolos fiéis

Ruja embora a inimiga coorte
Contra nós, defensores da Cruz
Nosso brio no prélio é mais forte
A vitória será de Jesus!

O estandarte do amor se desdobra
Brilha aí o sinal do perdão!
Ele guia os valentes à obra
Do divino e imortal Coração

A bandeira da pátria! Levai-a
Brasileiros, aos pés de Jesus!
E a suprema homenagem! Curvai-a
Ela é o símbolo da Terra da Cruz
      `,
      hinoaoespiritosanto:
      `1.
Vinde, Espírito Divino,
Enchei os corações dos vossos fiéis,
E acendei neles o fogo do vosso amor.

2.
Enviai o vosso Espírito,
E tudo será criado,
E renovareis a face da terra!

Refrão:
Oremos:
Ó Deus, que instruístes os corações dos vossos fiéis
com a luz do Espírito Santo,
fazei que apreciemos retamente todas as coisas
segundo o mesmo Espírito
e gozemos sempre da sua consolação.
Por Cristo, Senhor nosso. Amém.

3.
Vinde, Pai dos pobres,
Vinde, doadores dos dons,
Vinde, luz dos corações.

4.
Consolador perfeito,
Doce hóspede da alma,
Doce alívio dos que sofrem.

5.
Na laboriosa pena,
Nos castigos, nas tristezas,
Vossa força é que nos sustenta.

6.
Vinde, Espírito Santo,
Enchei os corações dos vossos fiéis,
E acendei neles o fogo do vosso amor.
      `,
      hinoasaomiguelarcanjo:
      `Verso 1:

São Miguel, nobre guerreiro,
Luta em nome do Senhor,
Defende-nos, ó fiel,
Do mal, do pecado e da dor.

Coro:
São Miguel, Arcanjo forte,
Em teu nome, força e luz!
Na batalha contra o mal,
Nossa fé jamais se reduz!

Verso 2:
Com tua espada divina,
Afasta a sombra do erro,
Protege nossa alma pura,
Conduz-nos ao caminho certo.

Coro:
São Miguel, Arcanjo forte,
Em teu nome, força e luz!
Na batalha contra o mal,
Nossa fé jamais se reduz!

Verso 3:
Quando a tentação nos cerca,
E o pecado nos ameaça,
Ergue-te, São Miguel,
E a luz da verdade nos abraça.

Coro:
São Miguel, Arcanjo forte,
Em teu nome, força e luz!
Na batalha contra o mal,
Nossa fé jamais se reduz!

Final:
São Miguel, nosso protetor,
Com fé, seguiremos a cruz.
Em teu nome, venceremos,
Na glória de Deus, temos a luz.
      `,
      hinodaigrejatriunfante:
      `Igreja triunfante, com alma fervente,
Em Cristo a vitória, nossa glória eterna!
Os santos no Céu, cantam o louvor,
E a Igreja na terra, ecoa o seu amor.

De Cristo vencedor, a vitória cantemos,
Com fé e com amor, os santos proclamemos!
A Igreja no Céu, com Cristo reinará,
Na glória do Pai, eterna será.

Ó Igreja triunfante, fonte de luz,
No Coração de Cristo, vive a nossa cruz!
Reina no Céu, com a Mãe Maria,
Dai-nos a força, ó Santa Igreja, um dia!
      `,
      jesusmariajose:
      `Jesus, Maria e José, eu vos dou o meu coração e a minha alma. Jesus, Maria e José, assisti-me na vida e acolhei-me na hora da minha morte. Jesus, Maria e José, conduzi-me ao Paraíso, para com vós, gozar de toda a felicidade eterna.
      `,
      magnificat:
      `A minha alma glorifica ao Senhor 
e o meu espírito se alegra em Deus, meu Salvador. 
Porque pôs os olhos na humildade da sua serva: 
de hoje em diante me chamarão bem-aventurada todas as gerações. 
O Todo-Poderoso fez em mim maravilhas: 
Santo é o seu nome. 
A sua misericórdia se estende de geração em geração 
sobre aqueles que O temem. 
Manifestou o poder do seu braço 
e dispersou os soberbos. 
Derrubou os poderosos de seus tronos 
e exaltou os humildes. 
Aos famintos encheu de bens 
e aos ricos despediu de mãos vazias. 
Acolheu Israel seu servo, 
lembrado da sua misericórdia, 
como tinha prometido a nossos pais, 
a Abraão e à sua descendência 
para sempre. 
Glória ao Pai e ao Filho 
e ao Espírito Santo. 
Como era no princípio, agora e sempre. 
Ámen.
      `,
      miserere:
      ` 3 Tende piedade de mim, Senhor, segundo a vossa bondade. E conforme a imensidade de vossa misericórdia, apagai a minha iniqüidade.

4 Lavai-me totalmente de minha falta, e purificai-me de meu pecado.

5 Eu reconheço a minha iniqüidade, diante de mim está sempre o meu pecado.

6 Só contra vós pequei, o que é mau fiz diante de vós. Vossa sentença assim se manifesta justa, e reto o vosso julgamento.

7 Eis que nasci na culpa, minha mãe concebeu-me no pecado.

8 Não obstante, amais a sinceridade de coração. Infundi-me, pois, a sabedoria no mais íntimo de mim.

9 Aspergi-me com um ramo de hissope e ficarei puro. Lavai-me e me tornarei mais branco do que a neve.

10 Fazei-me ouvir uma palavra de gozo e de alegria, para que exultem os ossos que triturastes.

11 Dos meus pecados desviai os olhos, e minhas culpas todas apagai.

12 Ó meu Deus, criai em mim um coração puro, e renovai-me o espírito de firmeza.

13 De vossa face não me rejeiteis, e nem me priveis de vosso santo Espírito.

14 Restituí-me a alegria da salvação, e sustentai-me com uma vontade generosa.

15 Então aos maus ensinarei vossos caminhos, e voltarão a vós os pecadores.

16 Deus, ó Deus, meu salvador, livrai-me da pena desse sangue derramado, e a vossa misericórdia a minha língua exaltará.

17 Senhor, abri meus lábios, a fim de que minha boca anuncie vossos louvores.

18 Vós não vos aplacais com sacrifícios rituais; e se eu vos ofertasse um sacrifício, não o aceitaríeis.

19 Meu sacrifício, ó Senhor, é um espírito contrito, um coração arrependido e humilhado, ó Deus, que não haveis de desprezar.

20 Senhor, pela vossa bondade, tratai Sião com benevolência, reconstruí os muros de Jerusalém.

21 Então aceitareis os sacrifícios prescritos, as oferendas e os holocaustos; e sobre vosso altar vítimas vos serão oferecidas. 
      `,
      memorare:
      `Lembrai-vos, ó Piíssima Virgem Maria, de que nunca se ouviu dizer, que algum daqueles que tenha recorrido à vossa clemência, implorado a vossa assistência, reclamado o vosso socorro, fosse por vós abandonado.
Animado eu, pois, com igual confiança, a vós, Virgem das Virgens, como Mãe recorro, de vós me valho e gemendo sob o peso de meus pecados, me prosto a vossos pés.
Não desprezeis as minhas súplicas, ó mãe do Verbo de Deus humanado, mas dignai-vos de as ouvir propícia e de me alcançar o que vos rogo.
 
Amém.
      `,
      oracaoanossasenhoraauxiliadora:
      `Santíssima Virgem Maria,
a quem Deus constituiu Auxiliadora dos Cristãos,
nós vos escolhemos como Senhora e Protetora desta casa.
Dignai-vos mostrar aqui Vosso auxílio poderoso.

Preservai esta casa de todo perigo:
do incêndio, da inundação, do raio, das tempestades,
dos ladrões, dos malfeitores, da guerra
e de todas as outras calamidades que conheceis.

Abençoai, protegei, defendei,
guardai como coisa vossa
as pessoas que vivem nesta casa.

 Sobretudo, concedei-lhes a graça mais importante,
a de viverem sempre na amizade de Deus,
evitando o pecado.

Dai-lhes a fé que tivestes na Palavra de Deus,
e o amor que nutristes para com Vosso Filho Jesus
e para com todos aqueles
pelos quais Ele morreu na cruz.

Maria, Auxílio dos Cristãos,
rogai por todos os que moram nesta casa
que Vos foi consagrada.

Amém.
      `,
      oracaoanossasenhoradaassuncao:
      `Ó dulcíssima soberana, Rainha dos Anjos, bem sabemos que, miseráveis pecadores, não éramos dignos de vos possuir neste vale de lágrimas, mas sabemos também que a vossa grandeza não vos faz esquecer a nossa miséria e, no meio de tanta glória, a vossa compaixão, longe de diminuir, aumenta cada vez mais para conosco.

Do alto desse trono em que reinas sobre todos os anjos e santos, volvei para nós os vossos olhos misericordiosos; vede a quantas tempestades e mil perigos estaremos, sem cessar, expostos até o fim de nossa vida! Pelos merecimentos de vossa bendita morte obtende-nos o aumento da fé, da confiança e da santa perseverança na amizade de Deus, para que possamos, um dia, ir beijar os vossos pés e unir as nossas vozes às dos espíritos celestes, para louvar e cantar as vossas glórias eternamente no céu.  Assim seja.
      `,
      oracaoanossasenhoradasgracas:
      `Lembrai-vos, ó puríssima Virgem Maria, do poder ilimitado que vos deu o vosso Divino Filho sobre o seu coração adorável. Cheio de confiança na vossa intercessão, venho implorar o vosso auxílio. Tendes, em vossas mãos, a fonte de todas as graças que brotam do coração amantíssimo de Jesus Cristo; abri-a em meu favor, concedendo-me a graça que ardentemente vos peço. Não quero ser o único por vós rejeitado, sois minha Mãe, sois a soberana do coração de vosso Divino Filho. 
      
      Sim, ó Virgem Santa, não esqueçais as tristezas dessa terra; lançai um olhar de vontade aos que estão no sofrimento, aos que não cessam de provar o cálice das amarguras da vida. Tende piedade dos que se amam e que estão separados pela discórdia, pela doença, pelo cárcere, exílio ou morte. Tende piedade dos que choram, dos que suplicam, e dai a todos o conforto, a esperança e a paz! Atendei, pois, a minha humilde súplica e alcançai-me as graças que agora fervorosamente vos peço por intermédio de vossa santa Medalha Milagrosa!

Amém.
      `,
      oracaoanossasenhoradefatima:
      `Santíssima Virgem,  que nos montes de Fátima vos dignastes revelar  aos três pastorinhos os tesouros de graças  que podemos alcançar, rezando o Santo Rosário, ajudai-nos a apreciar sempre mais esta santa oração, a fim de que, meditando os mistérios da nossa redenção, alcancemos as graças que insistentemente vos pedimos (peça a graça pretendida).

Maria Santíssima, volvei vossos olhos misericordiosos para este mundo tão necessitado de Paz, de Saúde e Justiça. Vinde em nosso auxílio, Mãe dos Aflitos, e Socorrei-nos com Vosso Amor e Piedade. Nossa Senhora do Rosário de Fátima, rogai por nós.

Rezar:  1 Pai-Nosso, 1 Ave-Maria,  1 Glória ao Pai.
      `,
      oracaoanossasenhoradocarmo:
      `

O Santíssima e Imaculada Virgem Maria, Ornamento e glória do Carmelo, vós que velais tão particularmente sobre os que vestem vosso sagrado escapulário, velai também sobre nós e cobri-nos com o manto da vossa maternal proteção. Fortalecei nossa fraqueza com o vosso poder e dissipai com a vossa luz as trevas do nosso coração, aumentai em nós a fé, a esperança e a caridade. Ornai nossa alma com todas
as virtudes, afim de que ela se torne sempre mais amada pelo vosso divino filho. Assitinos durante a vida, consolai-nos com a vossa amável presença na hora da morte, e apresentai-nos a Santíssima Trindade como vossos filhos e sevos fiéis, para que nós possamos louvar-vos eternamente no céu.

Assim seja. (três Aves Marias)

Nossa Senhora do Carmo…Rogai por nós! 
      `,
      oracaoanossasenhoradoperpetuosocorro:
      `Ó Mãe do Perpétuo Socorro, nós vos suplicamos, com toda a força do nosso coração, amparar a cada um de nós em Vosso colo materno, nos momentos de insegurança e sofrimento. Que o Vosso olhar esteja sempre atento, para não nos deixar cair em tentação e, que em vosso silêncio, aprendamos a aquietar nosso coração e fazer a vontade do Pai. Intercedei junto a Ele pela paz no mundo e por nossas famílias. Abençoai todos os Vossos filhos e filhas enfermos.

      Iluminai nossos governantes e representantes para que sejam sempre servidores do grande povo de Deus. Concedei-nos, ainda, muitas e santas vocações religiosas, sacerdotais e missionárias para a maior difusão do Reino de Vosso Filho Jesus Cristo. Enfim, derramei no coração dos Vossos filhos e filhas a Vossa bênção de amor e misericórdia. Sede sempre o nosso Perpétuo Socorro na vida e, principalmente, na hora da morte.
Amém.

Nossa Senhora do Perpétuo Socorro, rogai por nós!
      `,
      oracaoasaobento:
      `Ó glorioso Patriarca São Bento, que vos mostrastes sempre compassivo com os necessitados, fazei que também nós, recorrendo à vossa poderosa intercessão, obtenhamos auxílio em todas as nossas aflições. Que nas famílias reine a paz e a tranquilidade, afastem-se todas as desgraças, tanto corporais como espirituais, especialmente o pecado. Alcançai do Senhor a graça que vos suplicamos, obtendo-nos finalmente que, ao terminar nossa vista, neste vale de lágrimas, possamos louvar a Deus. 

      A Cruz Sagrada seja a minha luz, não seja o dragão o meu guia. Retira-te, satanás! Nunca me aconselhes coisas vãs. É mau o que tu me ofereces. Bebe tu mesmo os teus venenos!

      Ó Deus, Vós que Vos dignastes derramar sobre o bem-aventurado confessor, o Patriarca, o espírito de todos os justos, concedei a nós, Vossos servos e servas, a graça de nos revestirmos desse mesmo espírito, para que possamos, com o Vosso auxílio, fielmente cumprir o que temos prometido. Por Jesus Cristo nosso Senhor. Amém!
      `,
      oracaoasaofranciscodeassis:
      `Senhor,
Fazei de mim um instrumento de vossa Paz.
Onde houver Ódio, que eu leve o Amor,
Onde houver Ofensa, que eu leve o Perdão.
Onde houver Discórdia, que eu leve a União.
Onde houver Dúvida, que eu leve a Fé.
Onde houver Erro, que eu leve a Verdade.
Onde houver Desespero, que eu leve a Esperança.
Onde houver Tristeza, que eu leve a Alegria.
Onde houver Trevas, que eu leve a Luz!

Ó Mestre,
fazei que eu procure mais:
consolar, que ser consolado;
compreender, que ser compreendido;
amar, que ser amado.
Pois é dando, que se recebe.
Perdoando, que se é perdoado e
é morrendo, que se vive para a vida eterna!

Amém
      `,
      oracaoasaojosepelapureza:
      `São José, castíssimo esposo de Maria, pai adotivo de Jesus e modelo de pureza e santidade, eu te louvo e te agradeço por tua vida exemplar, marcada pela virtude e pela fidelidade a Deus. Em tua pureza, encontraste força para cumprir a vontade divina, guardando com todo amor e respeito a Mãe de Deus e o Filho de Deus.

Peço-te, ó São José, que intercedas por mim diante de Deus, para que eu possa viver a pureza em todos os aspectos de minha vida, especialmente nos meus pensamentos, palavras e ações. Concede-me a graça de conservar meu coração puro e livre de todas as tentações impuras, assim como tu foste preservado da mancha do pecado e da desordem.

Ajuda-me a viver segundo os ensinamentos de Cristo, com coração puro, para que eu possa agradar a Deus em tudo o que faço e ser digno da Sua graça e da Sua paz.

São José, protector da castidade, intercede por mim, e com tua poderosa intercessão, ajuda-me a ser fiel a Deus em todos os momentos da minha vida. Amém.
      `,
      oracaoasaomiguelarcanjo:
      `São Miguel Arcanjo, defendei-nos no combate. Sede o nosso refúgio contra as maldades e ciladas do demônio. Que Deus manifeste o seu poder sobre ele. Eis a nossa humilde súplica. E vós, Príncipe da Milícia Celeste, com o poder que Deus vos conferiu, precipitai no inferno Satanás e os outros espíritos malignos, que andam pelo mundo tentando as almas. Amém
      `,
      oracaoasantateresinhadomeninojesus:
      `Ó, Santa Teresinha do Menino Jesus, modelo de humildade, de confiança e de amor! Do alto dos céus, despeje sobre nós estas rosas que levas em teus braços: a rosa da humildade para que vençamos nosso orgulho e aceitemos o jugo do Evangelho; a rosa da confiança para que nos abandonemos à vontade de Deus e descansemos em Sua Misericórdia; a rosa do amor para que, abrindo nossas almas sem medida à graça, realizemos o único fim para o qual Deus nos criou à sua imagem : Amar- Lhe e fazer- Lhe amar. Tu que passas teu Céu fazendo o bem na terra, ajuda-me nesta necessidade e concede-me do Senhor o que te peço, se for para glória de Deus e para o bem de minha alma. Amém.

      Reze um Pai Nosso.
      `,
      oracaodaconfiancaemmaria:
      `Doce Virgem Maria, creio tão firmemente que, do alto Céu, velais dia e noite por mim e por todos quantos em Vós confiam, estou tão intimamente convencido de que jamais poderá faltar algo a quem tudo espera de Vós, que resolvi viver doravante sem qualquer apreensão, deixando por inteiro a vosso cargo todas as minhas inquietudes.

Doce Virgem Maria, Vós me firmastes na mais inabalável confiança. Mil vezes obrigado por tão preciosa graça! De agora em diante, permanecerei em paz, apoiado em vosso Coração tão puro; não me preocuparei senão de Vos amar e Vos obedecer, enquanto Vós mesma, ó boa Mãe, cuidareis de meus mais caros interesses.

Doce Virgem Maria, que dentre os homens alguns procurem nas riquezas ou em seus próprios talentos a felicidade; que outros se apoiem na inocência de sua vida, no rigor de sua penitência, no fervor de suas orações ou no grande número de suas boas obras; quanto a mim – pobre pecador, que não tenho senão meu pouco amor –, esperarei somente em Vós, depois de Deus, e o fundamento de minha esperança será minha confiança em vossa maternal bondade.

Doce Virgem Maria, poderá a perversidade humana roubar minha reputação e os poucos bens que eu possua; poderão as doenças tirar-me as forças e a capacidade externa de Vos servir; infelizmente, ó minha terna Mãe, poderei eu mesmo, pelo pecado, perder vossas boas graças; mas minha amorosa confiança em vossa bondade materna, esta jamais perderei! Não, nunca a perderei! Conservarei esta inabalável confiança até exalar meu último suspiro. Todas as forças do inferno juntas não serão capazes de me roubá-la. Morrerei, ó boa Mãe, repetindo mil vezes vosso nome bendito, depositando em vosso Coração toda a minha esperança.

E por que estou tão seguro de confiar sempre em Vós, senão porque Vós mesma, dulcíssima Virgem, me ensinastes que sois toda misericórdia, nada mais que misericórdia? Portanto, ó bondosíssima e amantíssima Maria, estou seguro de que sempre Vos invocarei porque sempre me consolareis; sempre Vos agradecerei porque sempre me aliviareis; sempre Vos servirei porque sempre me ajudareis; amar-Vos-ei sempre porque me amareis sempre; de Vós sempre obterei tudo, porque sempre vosso magnânimo amor ultrapassará minha esperança.

Sim, ó doce Virgem, é somente de Vós que, apesar de meus pecados, espero o único bem que almejo: a união com Jesus no tempo e na eternidade. Exclusivamente de Vós, porque sois Vós a escolhida por meu divino Salvador para me dispensar todos os favores e a Ele conduzir-me com segurança.

Sim, minha Mãe, sois Vós que, depois de me ter ensinado a compartilhar as humilhações e os sofrimentos de vosso Divino Filho, me introduzireis em sua glória e suas delícias para, junto a Vós e convosco, louvá-Lo e bendizê-Lo por todos os séculos dos séculos. 
      `,
      oracaodeagradecimento:
      `Senhor Deus, Pai de misericórdia,
Te louvo e Te agradeço por Tuas infinitas bênçãos e por Teu amor imensurável.
Com um coração cheio de gratidão, quero Te agradecer por todas as graças que me concedeste, por Tuas providências diárias e pelo dom da vida.

Obrigado, Senhor, pela saúde, pela família, pelos amigos e por todas as bênçãos que, mesmo sem merecer, me alcançam a cada dia.
Agradeço-Te pela força nas dificuldades, pela luz que ilumina meu caminho, e pela Tua presença constante, que nunca me abandona.

Eu Te agradeço, Senhor, por tudo o que é bom em minha vida e por me conduzires sempre para a verdade e a paz.
Que eu saiba, em todos os momentos, reconhecer e viver com gratidão, obedecendo aos Teus ensinamentos, amando-Te de todo o coração e servindo ao próximo com generosidade e humildade.

Eu Te louvo, Te agradeço e Te bendigo, Pai, Filho e Espírito Santo,
Agora e para sempre.
Amém.
      `,
      oracaodeconsagracaoaoespiritosanto:
      `Santo Espírito de Deus, consagro-Te hoje todo o meu ser, vontade, inteligência, memória, imaginação e afetividade. Conduze-me por Teus caminhos, guia-me com Tua sabedoria à vida plena de Jesus. Cria em mim um coração puro e humilde, mas que tenha a ousadia e o ardor dos mártires. Enche-me com Teus dons, santifica-me com Teus frutos. Restaura todo o meu viver, para que eu seja um canal do Teu amor.
Amém.
      `,
      oracaodesaobernardo:
      `Lembrai-Vos, ó piíssima Virgem Maria,
que nunca se ouviu dizer
que algum daqueles
que têm recorrido à vossa proteção,
implorado a vossa assistência,
e reclamado o vosso socorro,
fosse por Vós desamparado.
Animado eu, pois, de igual confiança,
a Vós, Virgem entre todas singular,
como a Mãe recorro,
de Vós me valho e,
gemendo sob o peso dos meus pecados,
me prostro aos Vossos pés.
Não desprezeis as minhas súplicas,
ó Mãe do Filho de Deus humanado,
mas dignai-Vos
de as ouvir propícia
e de me alcançar o que Vos rogo. Amém.
      `,
      oracaoantescomunhao:
   `Ó Deus eterno e todo poderoso, eis que me aproximo do Sacramento do vosso Filho único, Nosso Senhor Jesus Cristo.

Impuro, venho à fonte da misericórdia; cego, à luz da eterna claridade; pobre e indigente, ao Senhor do céu e da terra.

Imploro, pois, a abundância da vossa liberalidade, para que vos digneis curar a minha fraqueza, lavar as minhas manchas, iluminar minha cegueira, enriquecer minha pobreza, vestir minha nudez.

Que eu receba o pão dos anjos, o rei dos reis e o Senhor dos senhores com o respeito e a humildade, com a contrição e a devoção, a pureza e a fé, o propósito e a intenção que convém à salvação da minha alma.

Dai-me que receba não só o Sacramento do Corpo e Sangue do Senhor, mas também o seu efeito e a sua força.

Ó Deus de mansidão, fazei-me acolher com tais disposições o Corpo que vosso Filho único, Nosso Senhor Jesus Cristo, recebeu da Virgem Maria, que seja incorporado ao seu Corpo Místico e contado entre seus membros.

Ó Pai cheio de amor, fazei que, recebendo agora vosso Filho sob o véu do Sacramento, possa na eternidade contemplá-Lo face a face.

Amén. 
      `,
      oracaodepoiscomunhao:
      `Dou-vos graças, Senhor santo, Pai onipotente, Deus eterno, a vós que, sem merecimento nenhum de minha parte, mas por efeito de vossa misericórdia, vos dignastes saciar-me, sendo eu pecador e vosso indigno servo, com o corpo adorável e com o sangue precioso do vosso Filho, Nosso Senhor Jesus Cristo.

Eu vos peço que esta comunhão não me seja imputada como uma falta digna de castigo, mas interceda eficazmente para alcançar o meu perdão; seja a armadura da minha fé e o escudo da minha boa vontade; livre-me de meus vícios; apague os meus maus desejos; mortifique a minha concupiscência; aumente em mim a caridade e a paciência, a humildade, a obediência e todas as virtudes; sirva-me de firme defesa contra os embustes de todos os meus inimigos, tanto visíveis como invisíveis; serene e regule perfeitamente todos os movimentos, tanto de minha carne como de meu espírito; una-me firmemente a vós, que sois o único e verdadeiro Deus; e seja enfim a feliz consumação de meu destino.

Dignai-vos, Senhor, eu vos suplico, conduzir-me, a mim pecador, a esse inefável festim onde, com o vosso Filho e o Espírito Santo, sois para os vossos santos luz verdadeira, gozo pleno e alegria eterna, cúmulo de delícias e felicidade perfeita.

Pelo mesmo Jesus Cristo, Senhor Nosso.

Amén. 
      `,
      oracaoaoanjodeportugal:
      `Meu Deus, eu creio, adoro, espero e amo-Vos.

    Peço-Vos perdão para os que não creem, não adoram, não esperam e não Vos amam.
          
    Santíssima Trindade, Pai, Filho, Espírito Santo,

    adoro-Vos profundamente

    e ofereço-Vos o preciosíssimo Corpo, Sangue, Alma e Divindade de Jesus Cristo,

    presente em todos os sacrários da terra,

    em reparação dos ultrajes, sacrilégios e indiferenças com que ele mesmo é ofendido.

    E pelos méritos infinitos do Seu Santíssimo Coração

    e do Coração Imaculado de Maria,

    peço-Vos a conversão dos pobres pecadores.
    `,
      oracaodoperdao:
      `Em nome do Pai, do Filho e do Espírito Santo.

Deus, Pai de amor e bondade, que em Sua infinita misericórdia acolhe todos os que se aproximam de Vós com o coração arrependido, acolhei meu pedido de perdão por tantas faltas cometidas contra Ti e meus irmãos.

Senhor Jesus Cristo, Mestre da ternura e do amor, que devolveu a vida em plenitude a tantos homens e mulheres imersos no pecado e caminhantes das trevas, conduzi-me nos caminhos do perdão e fortalecei minha alma para que eu tenha a humildade de pedir perdão e a misericórdia de saber perdoar.

Espírito Santo, Consolador da alma, Advogado dos justos e Paráclito do amor, inspirai em meu coração gestos de bondade e ternura, que devolvam aos corações angustiados a beleza do perdão e as graças da reconciliação.

Amém.
      `,
      oracaopelosagonizantes:
      `Oh Clementíssimo Jesus, que amais as almas, eu Vos suplico pela agonia do Vosso Sacratíssimo Coração e pelas dores de Vossa Mãe Imaculada, que purifiqueis em Vosso sangue os pecadores de todo o mundo que estão em agonia e hoje hão de morrer.

V. Coração Agonizante de Jesus.
R. Compadecei-Vos dos moribundos.
      `,
      oracaopelossacerdotes:
      `Nós te pedimos, Senhor Jesus, pelos nossos sacerdotes, para que
sejam fiéis ao dom da vocação e ministério que receberam e
vivam apaixonados por Ti e pelo Povo de Deus que lhes
confiaste!
Senhor Jesus, faz com que os sacerdotes sejam santos, humildes
e pobres de coração, castos e obedientes à vontade do Pai! Que
sejam «bons pastores» e «bons samaritanos», testemunhos vivos
do amor do Teu Coração!
Senhor Jesus, que os nossos sacerdotes conduzam o Povo de
Deus com sabedoria e misericórdia, vivam apaixonados pela
Palavra e pela Eucaristia, tenham gosto em celebrar os
sacramentos, sejam contemplativos e homens de profunda
oração, que não lhes falte o amor e dedicação aos pobres, aos
doentes, aos marginalizados, aos que sofrem e às famílias em
provação.
Faz, Senhor Jesus, com que os nossos sacerdotes saibam partilhar
com os jovens a alegria da sua vida sacerdotal. Ampara os
sacerdotes mais idosos e os mais doentes, os que se sentem mais
tentados ou desanimados. Protege-os nas suas dificuldades,
fortalece-os nas suas fragilidades.
Sê, Senhor Jesus, amparo e refúgio dos sacerdotes, para que,
animados pelo sopro do Espírito, tenham o coração aquecido e
enobrecido pelo fogo do Teu amor.
Amém!
      `,
      painosso:
      `Pai Nosso que estais no céu, santificado seja o vosso nome, vem a nós o vosso reino, seja feita a vossa vontade assim na terra como no céu. O pão nosso de cada dia nos daí hoje, perdoai-nos as nossas dívidas, assim como nós perdoamos aos nossos devedores, não nos deixei cair em tentação mas livrai-nos do mal. Amém.
      `,
      pelasalmasdopurgatorio:
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

Jesus meu, misericórdia! Amém.
      `,
      pequenoexorcismo:
      `Em Nome do Pai e do Filho e do Espírito Santo

Salmo 67

Levanta-se Deus e sejam dispersos seus inimigos e fujam de sua presença os que lhe odeiam. Como se dissipa o fumo se dissipem eles, como se derrete a cera ante o fogo, assim perecerão os ímpios ante Deus.

Salmo 34

Senhor, peleja contra os que me atacam; combate aos que lutam contra mim. Sofram uma derrota e caiam envergonhados os que me perseguem à morte. Retornem a espada cheios de vergonha os que maquinam minha perdição. Sejam como a palha levada pelo vento, quando o anjo do Senhor vier acossá-los. Torne-se tenebroso e escorregadio o seu caminho, quando o anjo do Senhor vier persegui-los.

Porque sem motivo me armaram laços; para me perder, cavaram um fosso sem motivo. Que lhes surpreenda um desastre imprevisto; apanhe-os a rede por eles mesmos preparada, caiam eles próprios na cova que abriram. Minha alma se alegra com o Senhor e gozará de sua salvação.Glória ao Pai, ao Filho, e ao Espírito Santo. Como era no princípio, agora e sempre, pelos séculos dos séculos. Amém.

Súplica a São Miguel Arcanjo.

Gloriosíssimo Príncipe da Milícia Celestial, São Miguel Arcanjo, defendei-nos na luta que temos combatido "contra os principados e potestades, contra os chefes deste mundo tenebroso, contra os espíritos malignos espalhados pelos ares". Vinde em auxílio dos homens que Deus criou incorruptíveis à sua imagem e semelhança, e a tão "grande preço resgatados" da tirania do demônio. Com os exércitos dos anjos bons peleja hoje os combates do Senhor, como outrora lutaste contra Lúcifer, chefe da soberba e contra seus anjos apóstatas. Eles não puderam vencer, e perderam seu lugar no céu. "Foi precipitado o grande dragão, a antiga serpente e denominado diabo e satanás, o sedutor do universo: foi precipitado na terra e com ele foram lançados seus anjos" (Apoc. 12,8-9)

Eis que o antigo inimigo e homicida tem se erguido com impetuosidade. Transfigurado em "anjo de luz" (II Cor. 11, 14), com a escolta de todos os espíritos malignos, cercou e invadiu a terra inteira, e se instala em todo lugar, com o desígnio de manchar ali o Nome de Deus e de Seu Cristo, de roubar as almas destinadas à coroa da Glória Eterna, de destruí-las e perdê-las para sempre.
O dragão maldito transvasou, como rio imundíssimo, o veneno de sua iniqüidade em homens depravados de mente e corruptos de coração: incutiu-lhes o espírito de mentira, impiedade, blasfêmia, e seu hálito mortífero de luxúria, de todos os vícios e iniquidades.

Os mais maliciosos inimigos tem enchido de amargura a Igreja, esposa do Cordeiro Imaculado, tem-lhe dado a beber absinto, tem posto suas mãos ímpias sobre tudo o que para Ela é mais sagrado. Onde foram estabelecidas a Sé do Beatíssimo Pedro e a Cátedra da Verdade como Luz para as Nações, eles tem erguido o Trono da Abominação e da Impiedade, de sorte que, ferido o Pastor, possa dispersar-se o rebanho.
Ó invencível Príncipe, ajuda o povo de Deus contra a perversidade dos espíritos que lhes atacam e dai-lhes a vitória. Amém.

A Igreja te venera como seu guardião e patrono, se gloria que és seu defensor contra os poderes nocivos terrenos e infernais; Deus te confiou as almas dos redimidos para colocá-los no estado de suprema felicidade. Roga ao Deus da Paz que esmague Satanás sob os nossos pés, para que já não possa reter cativos os homens e prejudicar a Tua Igreja. Oferece nossas orações ao Altíssimo, para que o quanto antes desçam sobre nós as misericórdias do Senhor (Salmo 78,8), e sujeita o dragão, a antiga serpente, que é o diabo e satanás, para o precipitar encadeado nos abismos, de modo que não possa nunca mais, seduzir as nações. Segue…

Depois disto, confiados em tua proteção e patrocínio, com a sagrada autoridade da Santa Mãe Igreja, nos dispomos a rechaçar a peste das fraudes diabólicas, confiados e seguros em nome de Jesus Cristo, Nosso Deus e Senhor.


Eis aqui a Cruz do Senhor, fugi potências inimigas !
R. Venceu o Leão da tribo de Judá, o descendente de Davi.


Que a tua misericórdia, Senhor, seja sobre nós.
R.Como nós esperamos em Ti.


Senhor, escuta nossa oração.
R. E chegue a Ti nosso clamor


O Senhor esteja convosco. (Somente o sacerdote)
R. E com teu espírito.


Oremos: Deus e Pai de Nosso Senhor Jesus Cristo, invocamos Teu Santo Nome e suplicantes imploramos Tua clemência, para que, por intercessão da Imaculada Sempre Virgem Maria Mãe de Deus, de São Miguel Arcanjo, de São José esposo da Santíssima Virgem, dos Santos Apóstolos Pedro e Paulo e de todos os Santos, dignai-Vos prestar-nos Vosso auxílio contra Satanás e todos os demais espíritos imundos que vagam pelo mundo para dar a perder o gênero humano e para a perdição das almas. Amém.

Exorcismo

Te exorcizamos +, espírito imundo, potência satânica, invasão do inimigo infernal, legião ou seita diabólica, em Nome e virtude de Nosso Senhor Jesus Cristo + sejas desarraigado e expulso da Igreja de Deus, das almas criadas à imagem de Deus e resgatadas pelo Precioso Sangue do Divino Cordeiro +. Desde esse momento, não te atrevas mais, pérfida serpente, a enganar o gênero humano, perseguir + a Igreja de Deus e sacudir e joeirar como trigo os eleitos de Deus +. Manda-te Deus Altíssimo, a quem em tua insolente soberba ainda pretendes assemelhar-te, "o qual quer que todos os homens se salvem e cheguem ao conhecimento da verdade" (II Tm. 2).


Manda-te Deus Pai +.
Manda-te Deus Filho +.
Manda-te Deus Espírito Santo +.
Manda-te a Majestade de Cristo, o Verbo Eterno de Deus feito homem, que para salvação de nossa progênie perdida pôr tua inveja humilhou-se e "tornou obediente até à morte". (Fil. 2,8). Ele que edificou a Sua Igreja sobre pedra firme e prometeu que as portas do inferno não prevaleceriam jamais contra Ela, querendo permanecer com Ela "todos os dias até ao fim do mundo"(Mt 28,20). Manda-te o sinal sagrado da Cruz, e a virtude de todos os Mistérios de nossa Fé Cristã +. Manda-te a poderosa Mãe de Deus, a Virgem Maria, que desde o primeiro instante da sua Imaculada Conceição, pela sua humildade esmagou a tua cabeça orgulhosa +.


Manda-te a Fé dos Apóstolos Pedro e Paulo e todos os outros Santos Apóstolos +. Manda-te o sangue dos mártires e a piedosa intercessão de todos os Santos e Santas +. Então, dragão maldito e toda legião diabólica, nós te esconjuramos: Pelo Deus + Vivo, Pelo Deus + Verdadeiro, Pelo Deus + Santo, Pelo Deus que tanto amou o mundo, ate dar-lhe Seu Único Filho, para quem crer Nele, não pereça mas tenha a vida eterna ( Jo, 14-15).
Cessa de enganar as criaturas humanas e de derramar sobre elas o veneno da condenação eterna. Cessa de danificar a Igreja e de armar laços à sua liberdade.Vai-te embora satanás, inventor e mestre de enganos, inimigo da salvação dos homens. Cede lugar a Cristo, em Quem não encontraste nada em tuas obras.


Cede o lugar à Igreja – Única, Santa, Católica, Apostólica – que o próprio Cristo adquiriu com o Seu Sangue. Humilha-te sob a poderosa Mão de Deus, treme e foge à invocação, feita por nós, do Santo e terrível Nome de Jesus que faz tremer o inferno: a Quem as Virtude dos Céus, as Potestades e as Dominações estão submissas; e que os Querubins e os Serafins louvam sem cessar, dizendo: "Santo, Santo, Santo, é o Senhor Deus dos Exércitos."


-Senhor, ouvi a minha oração.
R. E chegue até Vós o meu clamor.


O Senhor esteja convosco…(para os sacerdotes)
R. E com teu espírito.

Oração final de joelhos

Oremos: Deus do Céu, Deus da Terra, Deus dos Anjos, Deus dos Arcanjos.Deus dos Patriarcas, Deus dos Profetas, Deus dos Apóstolos.Deus dos Mártires, Deus dos confessores, Deus das Virgens. Deus que tendes o poder de dar a vida depois da morte, o repouso depois do trabalho. Porque não há outro Deus senão vós; e, que não pode haver outro a não ser Vós: Criador de todas as coisas visíveis e invisíveis, cujo Reino não terá fim. Com humildade, suplicamos que a Vossa Gloriosa Majestade se digne livrar-nos poderosamente, e sãos e salvos de todo o poder, laço e mentira e malvadez dos espíritos infernais.


Das emboscadas do demônio,
R. Livrai-nos Senhor.


Dignai-vos conceder à nossa Igreja a segurança e a liberdade para Vos servir.
R. Nós Vos suplicamos, ouvi-nos Senhor.


Dignai-vos humilhar os inimigos da Santa Igreja.
R. Nós Vos suplicamos, escutai-nos Senhor.

Aspergir com água benta as pessoas e o lugar.
      `,
      pequenooficio:
      `Matinas
℣. Entoai agora, lábios meus,(fazer o sinal da cruz nos lábios)
℟. Glórias e dons da Virgem Mãe de Deus.

Matinas: antes da aurora

℣. Em meu socorro vinde já, Senhora.(fazer o sinal da cruz completo, testa, boca e peito)

℟. Do inimigo livrai-me, vencedora.

Glória ao pai...

Hino
Salve, ó Virgem Mãe, Senhora minha,
Estrela da Manhã, do Céu Rainha.
Cheia de graça sois; salve, luz pura,
Valei ao mundo e a toda criatura.

Para Mãe o Senhor Vos destinou
Do que os mares, a Terra e Céus criou.
Preservou Ele a vossa Conceição
Da mancha que nós temos em Adão.
Amém.

℣. Deus A escolheu e predestinou.
℟. No seu tabernáculo A fez habitar.

℣. Protegei, Senhora, a minha oração.
℟. E chegue até Vós o meu clamor.

Oremos: Santa Maria, Rainha dos Céus, Mãe de Nosso Senhor Jesus Cristo e Dominadora do mundo, que a ninguém desamparais nem desprezais; ponde, Senhora, em mim, os olhos de vossa piedade e alcançai-me de vosso amado Filho o perdão de todos os meus pecados, para que, venerando agora afetuosamente a vossa Imaculada Conceição, consiga depois a coroa da eterna bem-aventurança: por mercê do mesmo vosso Filho Jesus Cristo, Senhor nosso, que com o Padre e o Espírito Santo vive e reina em unidade perfeita, Deus, pelos séculos dos séculos. Amém.
℣. Protegei, Senhora, a minha oração.
℟. E chegue até Vós o meu clamor.
℣. Bendigamos ao Senhor.
℟. Demos graças a Deus.
℣. As almas dos fiéis defuntos,(fazer o sinal da cruz) por misericórdia de Deus, descansem em paz.
Todos: Amém.
Prima

Prima: às 6 horas

℣. Em meu socorro vinde já, Senhora.(fazer o sinal da cruz completo, testa, boca e peito)

℟. Do inimigo livrai-me, vencedora.

Glória ao pai...

Hino
Salve, prudente Virgem, destinada
Para dar ao Senhor digna morada.
Com as sete colunas da Escritura,
Do Templo a mesa ornou-Vos em figura.

Fostes livre do mal que o mundo espanta,
E no seio materno sempre santa.
Porta dos Santos: Eva, Mãe da vida,
Estrela de Jacob aparecida.

Sois armado esquadrão contra Luzbel;
Sede amparo e refúgio à grei fiel.
Amém.

℣. Ele próprio A criou no Espírito Santo.
℟. A representou maravilhosamente em todas as suas obras.

℣. Protegei, Senhora, a minha oração.
℟. E chegue até Vós o meu clamor.

Oremos:(de joelhos) Santa Maria, Rainha dos Céus, Mãe de Nosso Senhor Jesus Cristo e Dominadora do mundo, que a ninguém desamparais nem desprezais; ponde, Senhora, em mim, os olhos de vossa piedade e alcançai-me de vosso amado Filho o perdão de todos os meus pecados, para que, venerando agora afetuosamente a vossa Imaculada Conceição, consiga depois a coroa da eterna bem-aventurança: por mercê do mesmo vosso Filho Jesus Cristo, Senhor nosso, que com o Padre e o Espírito Santo vive e reina em unidade perfeita, Deus, pelos séculos dos séculos. Amém.
℣. Protegei, Senhora, a minha oração.
℟. E chegue até Vós o meu clamor.
℣. Bendigamos ao Senhor.
℟. Demos graças a Deus.
℣. As almas dos fiéis defuntos,(fazer o sinal da cruz) por misericórdia de Deus, descansem em paz.
Todos: Amém.
Tércia

Tércia: às 9 horas

℣. Em meu socorro vinde já, Senhora.(fazer o sinal da cruz completo, testa, boca e peito)

℟. Do inimigo livrai-me, vencedora.

Glória ao pai...

Hino
Sois a Arca da Aliança, o trono de Salomão,
Belo íris celeste, sarça ardente da visão.
Vós sois a Virgem florida, o velo de Gedeão,
Divino portal fechado, o favo do forte Sansão.

Convinha, pois, certamente, que a Mãe de tão nobre Filho
Não tivesse de Eva a mancha e resplandecesse com todo o brilho.
E tendo o Verbo escolhido por Mãe a Virgem casta,
Não quis que fosse sujeita à culpa que o mundo arrasta
Amém.

℣. Eu moro no mais alto dos Céus.
E o meu trono está sobre a coluna de nuvens.

℣. Protegei, Senhora, a minha oração.
℟. E chegue até Vós o meu clamor.

Oremos:(de joelhos) Santa Maria, Rainha dos Céus, Mãe de Nosso Senhor Jesus Cristo e Dominadora do mundo, que a ninguém desamparais nem desprezais; ponde, Senhora, em mim, os olhos de vossa piedade e alcançai-me de vosso amado Filho o perdão de todos os meus pecados, para que, venerando agora afetuosamente a vossa Imaculada Conceição, consiga depois a coroa da eterna bem-aventurança: por mercê do mesmo vosso Filho Jesus Cristo, Senhor nosso, que com o Padre e o Espírito Santo vive e reina em unidade perfeita, Deus, pelos séculos dos séculos. Amém.
℣. Protegei, Senhora, a minha oração.
℟. E chegue até Vós o meu clamor.
℣. Bendigamos ao Senhor.
℟. Demos graças a Deus.
℣. As almas dos fiéis defuntos,(fazer o sinal da cruz) por misericórdia de Deus, descansem em paz.
Todos: Amém.
Sexta

Sexta: às 12 horas

℣. Em meu socorro vinde já, Senhora.(fazer o sinal da cruz completo, testa, boca e peito)

℟. Do inimigo livrai-me, vencedora.

Glória ao pai...

Hino
Deus Vos salve, Virgem Mãe,
Vós sois o Templo da Trindade,
O puro encanto dos Anjos, agasalho da castidade.

Sois o consolo dos tristes; horto da alegria cara,
Sois a palma da paciência, o cedro da pureza rara.

Maria, terra Vós sois, bendita e sacerdotal,
Concebida e preservada sem pecado original.

Cidade santa do Altíssimo, do Céu entrada oriental,
Há em Vós, singular Virgem, toda a graça celestial.
Amém.

℣. Como um lírio entre os espinhos,
℟. Assim a minha predileta entre os filhos de Adão.

℣. Protegei, Senhora, a minha oração.
℟. E chegue até Vós o meu clamor.

Oremos:(de joelhos) Santa Maria, Rainha dos Céus, Mãe de Nosso Senhor Jesus Cristo e Dominadora do mundo, que a ninguém desamparais nem desprezais; ponde, Senhora, em mim, os olhos de vossa piedade e alcançai-me de vosso amado Filho o perdão de todos os meus pecados, para que, venerando agora afetuosamente a vossa Imaculada Conceição, consiga depois a coroa da eterna bem-aventurança: por mercê do mesmo vosso Filho Jesus Cristo, Senhor nosso, que com o Padre e o Espírito Santo vive e reina em unidade perfeita, Deus, pelos séculos dos séculos. Amém.
℣. Protegei, Senhora, a minha oração.
℟. E chegue até Vós o meu clamor.
℣. Bendigamos ao Senhor.
℟. Demos graças a Deus.
℣. As almas dos fiéis defuntos,(fazer o sinal da cruz) por misericórdia de Deus, descansem em paz.
Todos: Amém.
Noa

Noa: às 15 horas

℣. Em meu socorro vinde já, Senhora.(fazer o sinal da cruz completo, testa, boca e peito)

℟. Do inimigo livrai-me, vencedora.

Glória ao pai...

Hino
Cidade sois de refúgio, de torres fortalecida,
Por David entrincheirada, e de armas também munida.

Bem não éreis concebida, em caridade abrasada,
Foi do dragão a soberba, por Vós, ferida e humilhada.

Sois a bela Abigail, Judith invicta e animosa,
Fostes do vero David Mãe terna, Mãe carinhosa.

Raquel ao Egito deu prudente governador,
A Virgem das virgens deu ao mundo o seu Salvador.

Amém.

℣. Toda sois formosa, ó Mãe querida.
℟. E a mancha original nunca tocou em Vós.

℣. Protegei, Senhora, a minha oração.
℟. E chegue até Vós o meu clamor.

Oremos:(de joelhos) Santa Maria, Rainha dos Céus, Mãe de Nosso Senhor Jesus Cristo e Dominadora do mundo, que a ninguém desamparais nem desprezais; ponde, Senhora, em mim, os olhos de vossa piedade e alcançai-me de vosso amado Filho o perdão de todos os meus pecados, para que, venerando agora afetuosamente a vossa Imaculada Conceição, consiga depois a coroa da eterna bem-aventurança: por mercê do mesmo vosso Filho Jesus Cristo, Senhor nosso, que com o Padre e o Espírito Santo vive e reina em unidade perfeita, Deus, pelos séculos dos séculos. Amém.
℣. Protegei, Senhora, a minha oração.
℟. E chegue até Vós o meu clamor.
℣. Bendigamos ao Senhor.
℟. Demos graças a Deus.
℣. As almas dos fiéis defuntos,(fazer o sinal da cruz) por misericórdia de Deus, descansem em paz.
Todos: Amém.
Véspera

Vesperas: ao entardecer

℣. Em meu socorro vinde já, Senhora.(fazer o sinal da cruz completo, testa, boca e peito)

℟. Do inimigo livrai-me, vencedora.

Glória ao pai...

Hino
Salve, regulador celeste, pelo qual
Em dez linhas foi o sol retrogradado.
A fim de encarnar-se o Verbo eterno, e ser humilhado,
E o homem, como o sol, ao Céu ser levantado.

Daquele brilhante Sol a Virgem tem o fulgor,
E qual aurora surgente refulge em esplendor.

Lírio entre espinhos, a cabeça do dragão calcando,
Qual lua bela ilumina os que no mundo vão errando.
Amém.

℣. Eu fiz nascer no Céu a luz que não se apaga.
℟. E cobri como névoa a Terra toda.

℣. Protegei, Senhora, a minha oração.
℟. E chegue até Vós o meu clamor.

Oremos:(de joelhos) Santa Maria, Rainha dos Céus, Mãe de Nosso Senhor Jesus Cristo e Dominadora do mundo, que a ninguém desamparais nem desprezais; ponde, Senhora, em mim, os olhos de vossa piedade e alcançai-me de vosso amado Filho o perdão de todos os meus pecados, para que, venerando agora afetuosamente a vossa Imaculada Conceição, consiga depois a coroa da eterna bem-aventurança: por mercê do mesmo vosso Filho Jesus Cristo, Senhor nosso, que com o Padre e o Espírito Santo vive e reina em unidade perfeita, Deus, pelos séculos dos séculos. Amém.
℣. Protegei, Senhora, a minha oração.
℟. E chegue até Vós o meu clamor.
℣. Bendigamos ao Senhor.
℟. Demos graças a Deus.
℣. As almas dos fiéis defuntos,(fazer o sinal da cruz) por misericórdia de Deus, descansem em paz.
Todos: Amém.
Completas

Completas: rezar antes de dormir

℣. Converta-nos Jesus (fazer o sinal da cruz no peito), por vosso amor.

℟. E retire de nós o seu furor.

℣. Em meu socorro vinde já, Senhora.(fazer o sinal da cruz completo, testa, boca e peito)

℟. Do inimigo livrai-me, vencedora.

Glória ao pai...

Hino
Salve, florente Virgem ilibada,
Meiga Rainha de astros coroada.
Mais pura que os Anjos, tendes trono
À direita do Rei, em nosso abono.

Ó Mãe da graça, nossa doce esperança,
Do mar Estrela e porto de bonança,
Porta do Céu, Saúde na doença,
De Deus guiai-nos à feliz presença.
Amém.

℣. Vosso nome, ó Maria, é como um bálsamo.
℟. Muito Vos amam vossos fiéis servos.

℣. Protegei, Senhora, a minha oração.
℟. E chegue até Vós o meu clamor.

Oremos:(de joelhos) Santa Maria, Rainha dos Céus, Mãe de Nosso Senhor Jesus Cristo e Dominadora do mundo, que a ninguém desamparais nem desprezais; ponde, Senhora, em mim, os olhos de vossa piedade e alcançai-me de vosso amado Filho o perdão de todos os meus pecados, para que, venerando agora afetuosamente a vossa Imaculada Conceição, consiga depois a coroa da eterna bem-aventurança: por mercê do mesmo vosso Filho Jesus Cristo, Senhor nosso, que com o Padre e o Espírito Santo vive e reina em unidade perfeita, Deus, pelos séculos dos séculos. Amém.
℣. Protegei, Senhora, a minha oração.
℟. E chegue até Vós o meu clamor.
℣. Bendigamos ao Senhor.
℟. Demos graças a Deus.
℣. As almas dos fiéis defuntos,(fazer o sinal da cruz) por misericórdia de Deus, descansem em paz.
Todos: Amém.
Depois do Ofício

Rezar de joelhos

Hino
Aceitai, ó Virgem,
Esta devoção
Em louvor da vossa
Pura Conceição.
Sede-nos na vida
Defensora e guia;
Sede-nos alento
Em nossa agonia.
Ó Mãe de bondade,
Ó doce Maria.
Antífona. Esta é a Virgem admirável, na qual não houve a nódoa original, nem sombra de pecado.
℣. Na vossa Conceição, ó Virgem, fostes imaculada.
℟. Rogai por nós ao Eterno Pai, cujo Filho destes ao mundo.

Oremos
Ó Deus que pela Imaculada Conceição da Virgem, preparastes ao vosso Filho uma digna morada: nós Vos rogamos que, pois em virtude da previsão da morte do mesmo vosso Filho A preservastes de toda mancha, também nos concedais que, purificados por sua intercessão, cheguemos à vossa divina presença. Pelo mesmo Jesus Cristo, Nosso Senhor. Amém.
      `,
      precepelosfalecidos:
      `Pai santo, Deus eterno e Todo-Poderoso, nós Vos pedimos por (nome do falecido), que chamastes deste mundo. Dai-lhe a felicidade, a luz e a paz. Que ele, tendo passado pela morte, participe do convívio de Vossos santos na luz eterna, como prometestes a Abraão e à sua descendência. Que sua alma nada sofra, e Vos digneis ressuscitá-lo com os Vossos santos no dia da ressurreição e da recompensa. Perdoai-lhe os pecados para que alcance junto a Vós a vida imortal no reino eterno. Por Jesus Cristo, Vosso Filho, na unidade do Espírito Santo. Amém (Rezar Pai-Nosso e Ave-Maria.)

Dai-lhe, Senhor, o repouso eterno e brilhe para ele a Vossa luz! Amém
      `,
      precesdaboamorte:
      `Ó Jesus misericordioso, pregado na cruz, lembrai-Vos da hora da minha morte.
Ó coração misericordiosíssimo de Jesus, aberto pela lança, escondei-me na hora da morte.
Ó sangue e água que brotastes do coração de Jesus como fonte de misericórdia insondável para mim, na hora da minha morte, lavai-me!
Ó Jesus agonizante, refém de misericórdia, aliviai a ira de Deus na hora da minha morte!
Ó meu Jesus, que meus últimos dias de exílio sejam inteiramente conformes à Vossa santíssima vontade.
Uno os meus sofrimentos, amarguras e a própria agonia com a Vossa santa paixão e ofereço-me pelo mundo inteiro, para pedir a abundância da divina misericórdia para as almas dos pecadores.
Confio firmemente e submeto-me inteiramente à Vossa santa vontade, que é a própria misericórdia, e a Vossa misericórdia será tudo para mim nessa última hora, como Vós mesmo me prometestes.
Amém.
      `,
      precesparaantesdaconfissao:
      `1. Orações para infundir na alma o arrependimento necessário para a confissão

- Em nome do Pai, do Filho, e do Espírito Santo, Amém.

a. Vinde, Espírito Santo

- Vinde, Espírito Santo, e enchei os corações dos vossos fiéis, e acendei neles o fogo do vosso amor.

Enviai, Senhor o vosso Espírito, e tudo será Criado, e renovareis a face da terra.

Ó Deus, que instruístes os vossos fiéis, com a luz do Espírito Santo, fazei que apreciemos retamente todas as coisas, e gozemos sempre da sua consolação, por Cristo, Senhor nosso, Amém.

b. Pai Nosso, Ave Maria e Glória

- Pai nosso, que estais no céu, santificado seja o Vosso Nome; venha a nós o Vosso Reino, seja feita a Vossa Vontade, assim na terra como no céu. O pão nosso de cada dia nos dai hoje, perdoai-nos as nossas ofensas, assim como nós perdoamos a quem nos têm ofendido, e não nos deixeis cair em tentação, mas livrai-nos do mal, Amém.

- Ave, Maria, Cheia de Graça! O Senhor é contigo, bendita és tu entre as mulheres e bendito é o fruto do teu ventre, Jesus! Santa Maria, mãe de Deus, roga por nós pecadores, agora e na hora de nossa morte, Amém.

- Glória ao Pai, ao Filho, e ao Espírito Santo, como era no princípio, agora e sempre, Amém.

- Ó, meu Jesus, livrai-nos do fogo do inferno, levai as almas todas para o céu, principalmente as que mais precisarem!

c. Salmo 50 - chamado "Miserere"
(que quer dizer "tem piedade", que é a primeira palavra do Salmo).

1.Ao mestre de canto. Salmo de Davi.

2.Quando o profeta Natã foi encontrá-lo, após o pecado com Betsabé

3.Tende piedade de mim, ó Deus, segundo a vossa bondade, e conforme a imensidade de vossa misericórdia, apagai a minha iniqüidade.

4.Lavai-me totalmente de minha falta, e purificai-me do meu pecado.

5.Eu reconheço a minha iniqüidade, diante de vós está sempre o meu pecado.

6.Só contra vós pequei, o que é mau fiz diante de vós. Vossa sentença assim se manifesta justa, e reto o vosso julgamento.

7.Eis que nasci na culpa, minha mãe concebeu-me no pecado.

8.Não obstante, amas a sinceridade de coração; infunde-me, pois, a sabedoria no mais íntimo de mim.

9.Aspergi-me com um ramo e ficarei puro; lavai-me e me tornarei mais branco do que a neve.

10.Fazei-me ouvir uma palavra de gozo e de alegria, para que exultem os ossos que triturastes.

11.Dos meus pecados desviai os olhos, e minhas culpas todas apagai.

12.Ó meu Deus, criai em mim um coração puro, e renovai-me o espírito de firmeza.

13.De vossa face não me rejeiteis, e nem me priveis de vosso Santo Espírito.

14.Restituí-me a alegria da salvação, e sustentai-me com uma vontade generosa.

15.Então, aos maus ensinarei vossos caminhos, e voltarão a vós os pecadores.

16.Deus, ó Deus, livrai-me da pena deste sangue derramado; E a vossa misericórdia a minha língua exaltará.

17.Senhor, abri meus lábios, a fim de que minha boca anuncie os vossos louvores.

18.Vós não vos aplacais com sacrifícios rituais; e se eu vos oferecesse um sacrifício vós não aceitaríeis;

19.Meu sacrifício, ó Senhor, é um espírito contrito; um coração arrependido e humilhado, ó Deus, não haveis de desprezar.

20.Senhor, pela vossa bondade, tratai Sião com benevolência, reconstruí os muros de Jerusalém!

21.Então aceitareis os sacrifícios prescritos, as oferendas e os holocaustos; então, sobre o vosso altar vítima vos serão oferecidas.

d. Salmo 129 - chamado "de profundis"
(que quer dizer "do fundo", que é como começa o Salmo).

1.Do fundo do abismo, clamo a v ós, Senhor!

2.Senhor, ouvi minha oração; que vossos ouvidos estejam atentos à voz de minha súplica.

3.Se levardes em conta nossos pecados, Senhor, quem poderá permanecer diante de vós?

4.Mas em vós se encontra o perdão dos pecados, para que, reverentes, o sirvamos.

5.Ponho a minha esperança no Senhor. Minha alma tem confiança em sua palavra.

6.Minha alma espera pelo Senhor, mais ansiosa do que os vigias esperando a manhã;

7.Mais do que os vigias aguardam a manhã, Espere Israel pelo Senhor. Porque junto dele se acha a misericórdia; Encontra-se nele copiosa redenção.

8.Ele mesmo há de remir Israel de todas as suas iniqüidades.

2. Condições para a boa confissão

(O conhecimento dos próprios pecados, sem o necessário arrependimento, em vez de diminuir, só aumenta a gravidade das nossas culpas. E arrepender-se sem pedir perdão agrava ainda mais o erro. É necessário reconhecer que erramos, arrepender-se dos erros, e pedir perdão por esses erros.)

a. Exame de Consciência

(Os mandamentos são uma exigência do amor. Deus nos pede para o amarmos e nos amarmos. Será que o fazemos?)

1º Amando a Deus acima de tudo: Neguei a fé? Duvidei da existência de Deus? Escarneci da religião? Deixei de rezar por muito tempo? Declarei que o matrimônio, o sacerdócio, a confissão, a missa estão utrapassados?

2º Não tomando o seu Santo Nome em vão: Cantei músicas blasfemas? Zombei da Igreja, das cerimônias religiosas ou de seus representantes? Falei mal do Santo Padre, o Papa? Acusei a Igreja de ser falsa, ou desonesta? Acusei Deus de injusto? Roguei pragas? Contei piadas em que Deus aparece como personagem, rindo dEle? Jurei em falso, ou à toa?

3º Guardando os dias santificados: Passei o Domingo na frente da televisão? Faltei na missa nesse mesmo dia? Fiz piada com a santa missa? Disse que "já assisti missas que chega"? Fui na missa para "cumprir a obrigação"? Dediquei uma parte do meu tempo a Deus, lendo a Bíblia e rezando?

4º Honrando pai e mãe: Fui desobediente aos pais, autoridades ou superiores? Desejei-lhes algum mal, talvez a morte? Obedeci-lhes em coisas contrárias à lei de Deus? Negligenciei como pai e mãe ou irmão mais velho, os deveres de educação e instrução religiosa?

5º Não matando: Tive ódio? Recusei o perdão a quem me pediu? Desejei a morte para mim ou para outros? Ensinei a praticar pecados? Seduzi alguém ao pecado? Defendi o assassínio de bebês através do aborto? Desejei a guerra, ou me entusiasmei por ela? Falei que "a terra tá cheia demais, e precisa mesmo morrer gente"?

6º Guardando a castidade; 9º Não cobiçando a mulher (ou marido) do próximo: Tenho visto revistas e filmes pornográficos? Faço ou aprovo o sexo sem o matrimônio ou fora do matrimônio? Defendi ou propaguei a sua leitura? Acaso me divirto observando na rua o corpo das pessoas, e fazendo gracejos com elas, ou em conversas indecentes sobre as pessoas que passam? Tenho me vestido de maneira sensual? Provoquei os outros com meu comportamento? Fiz intriga para acabar namoros ou casamentos que eu não aprovava, ou cobiçava? Aprovo a prostituição? Sou promíscuo? Zombei da virgindade de alguém? Me envergonhei da minha virgindade, rejeitando-a?

7º Não roubando; 10º Não cobiçando as coisas alheias: Prejudiquei alguém ou tive desejo de prejudicar, enganando no troco, nos pesos e nas medidas, ou roubando? Fiz dívidas desnecessárias à subsistência? Paguei as minhas dívidas? Comprei bebidas ou cigarros a fiado, sem ter como pagar? Gastei meu salário com outras coisas, faltando em casa para a comida? Recusei a dar esmolas, nem que seja de comida? Roubei de Deus o dinheiro que devia dar a Ele para o sustento da Igreja? Deixei de devolver algo que não me pertence? Paguei com justiça os meus empregados?

8º Não mentindo: Falei mal dos outros pelas costas? Fui fiel à verdade ao comentar acontecimentos passados? Exagerei ou inventei qualidades para ganhar um emprego ou subir no emprego? Prejudiquei alguém com minhas palavras? Fiz alguém perder o emprego? Fiz juízo errado das pessoas? Duvidei da honestidade de alguém? Acusei algum mendigo ou pedinte de desonestidade? Revelei faltas ocultas dos outros? Ridicularizei ou humilhei alguém na frente dos outros? Fui fingido? Digo aos outros que sou católico mas não frequento a Igreja? Caluniei os sacerdotes e religiosas?

b. Tenho sido um bom cristão?

(Os mandamentos da lei de Deus nos mostram como evitar o caminho errado. E o caminho certo? Será que o seguimos?)

Dando de comer a quem tem fome e de beber a quem tem sede: Dei esmolas em dinheiro ou comida para os pedintes? Ajudei os amigos, parentes ou vizinhos desempregados? Paguei um salário justo aos empregados? Tenho ajudado meus pais idosos com comida ou remédios?

Vestindo os que estão nus: Tenho roupas demais? Tenho o armário cheio de roupas e digo "não tenho o que vestir"? Me visto só com roupas da moda? Já dei uma roupa nova e bonita a alguém que precisava dela? O que faço com as roupas que me sobram?

Visitar os enfermos e cativos: Sou doador de sangue? Visito os meus parentes e amigos doentes? Sei se na minha rua tem alguém doente? Visito meus pais idosos?

Dar pousada aos peregrinos: Cobro um preço justo pelo aluguel? Expulsei um filho de casa? Recusei morada a algum parente? Ajudo os desabrigados nas enchentes e enchurradas? Tenho bons sentimentos para com os imigrantes de outras cidades e estados?

Remir os cativos e oprimidos: Ajudo os drogados a largar o vício e os prostituídos a mudar de vida? Tenho vontade de ajudar a Igreja nas visitas que faz ao presídio, indo lá ou colaborando com doações?

Enterrar os mortos: Evito de ir a velórios e enterros? Vou só por obrigação social? Concedi um enterro cristão aos meus parentes, chamando um sacerdote?

Dar bons conselhos; Ensinar aos ignorantes; Consolar os aflitos: Tenho conversado com meus filhos, ensinando-os a moral cristã? Tenho ensinado eles ou os outros a não pecar, por amor a Deus? Tenho aconselhado os pais a batizar os filhos, e os pecadores a se confessar? Aconselhei alguém a evitar o suicídio, ou a não usar drogas? Me ofereço para dar catequese? Perdoar as injúrias; Sofrer com paciência as fraquezas do próximo; Corrigir os que erram: Tenho tido paciência com os erros dos outros? Tenho perdoado com facilidade a quem me ofendeu? Tenho alertado às pessoas de vida errada? Tenho alertado aos jovens promíscuos sobre o seu erro? Tenho corrigido meus filhos quando erram?

Rogar a Deus pelos vivos e pelos defuntos: Lembro dos meus parentes e amigos falecidos nas minhas orações? Quando rezo peço mais para mim do que para os outros? Rezo pelos problemas dos outros? Ofereço missas pelas necessidades dos vivos e pelas almas dos falecidos?
(Anote o que você descobriu.)

(Faça agora uma lista do que você descobriu. Se você esqueceu algum pecado leve, será perdoado, basta que você se arrependa. Se você quiser, pode somente entregar a lista para o sacerdote, e depois dar fim nela, de preferência queimando-a.)

c. Ato de contrição

- Senhor meu Jesus Cristo, Deus e homem verdadeiro, Criador e Redentor meu, por serdes vós quem sois, sumamente bom e digno de ser amado sobre todas as coisas, e porque vos amo e vos estimo, pesa-me, Senhor, de vos ter ofendido; e proponho firmemente, ajudado com os auxílios de vossa divina graça, emendar-me e nunca mais tornar a vos ofender; espero alcançar de vossa infinita misericórdia o perdão de minhas culpas. Amém.

d. Ato de fé, esperança e caridade

(Quando pecamos, quebramos o laço de amor, confiança e esperança que nos liga com a parte ofendida e com Deus. Por isso, devemos renovar nosso amor, confiança e esperança em Deus.)

- Meu Deus, eu vos amo acima de tudo, porque só vós sois bom. Creio em vós porque sois a própria verdade. Espero receber de vós a salvação e o perdão dos meus pecados, porque sei que só Vós sois bom e misericordioso. Amém.

3. Depois da confissão

(Volte para o banco da Igreja, de preferência perto do altar, de onde possa ver o Sacrário onde está Jesus na Hóstia Santa, e a Cruz. Agradeça a Deus pelo dom da Salvação, pois hoje você ressuscitou com Cristo! Aleluia! Festa no céu para cada pecador que se converta!)

a. Agradeça rezando o Salmo 29

1.Eu vos exaltarei, Senhor, porque me livrastes. Não permitistes que exultassem sobre mim meus inimigos!

2.Senhor, meu Deus, clamei a vós e foi curado,

3.Senhor, minha alma foi tirada por vós da habitação dos mortos, dentre os que descem para o túmulo vós me salvastes!

4.Ó vós, fiéis do Senhor, cantai a sua glória; dai graças ao seu Santo Nome.

5.Porque a sua indignação dura apenas um momento, enquanto sua benevolência é para toda a vida. Pela tarde vem o pranto, mas de manhã retorna a alegria.

6.Eu porém, disse, seguro de mim: "Não serei jamais abalado".

7.Senhor, foi por favor que me destes honra e poder, mas quando escondestes vossa face, fiquei aterrado.

8.A vós, Senhor, eu clamo, e imploro a misericórdia do meu Deus!

9.Que proveito vos resultará de retomar-me a vida, de minha descida ao túmulo?

10.Porventura vos luvará o meu pó? Apregoará ele a vossa fidelidade?

11.Ouvi-me, Senhor, e tende piedade de mim; Senhor, vinde em minha ajuda.

12.Vós convertestes o meu pranto em prazer, tirastes meus farrapos de penitência e me destes roupas de festa.

13.Assim, minha alma vos louvará sem calar jamais. Senhor, meu Deus, eu vos bendirei eternamente.

(Reza pelo Santo Padre, o Papa)

- Pai Nosso, Ave Maria e Glória ao Pai. b. Ato de desagravo

(O ato de desagravo é um tipo de oração para consolar a Deus pelos nossos pecados. As orações abaixo foram ensinadas pelo Anjo da Paz às crianças de Fátima a quem apareceu Nossa Senhor. Reze na frente do sacrário da Igreja, onde está Jesus na Hóstia Santa:)

- Meu Deus eu creio, adoro, espero e amo-vos!

E peço perdão por todos os que não creêm, não adoram, não esperam e não vos amam! (3x)

- Santíssima Trindade: Deus Pai, Filho e Espírito Santo, eu vos adoro profundamente, e vos ofereço o preciosíssimo Corpo, Sangue, Alma e Divindade de Jesus Cristo, presente em todos os Sacrários do mundo inteiro, em reparação pelas inúmeras ofensas, sacrilégios e indiferenças com que é todos os dias ofendido.

- E pelos infinitos merecimentos do Seu Santíssimo Coração e do Coração Imaculado de Maria, peço-vos a conversão dos pobres pecadores! (3x)

c. Faz um firme propósito

(Reza olhando para a cruz:)

- Jesus, tu fizeste tudo isto por mim,
o que posso fazer por ti? (3x)

d. A disposição de fazer penitência

(Quando causamos prejuízo a alguém, não basta pedir desculpas. É preciso consertar o estrago. E para oferecer a Deus uma satisfação pelo mal que causamos, fazemos a penitência, especialmente na quaresma.

A penitência que mais agrada a Deus é que dividamos o nosso pão com o faminto, e que façamos "um jejum da língua", deixando de falar mal dos outros. O jejum e a esmola também são para Deus uma satisfação agradável por nossas culpas, pois nos desapega dos bens materiais.)

e. Oração a Jesus Crucificado

- Eis-me aqui, meu bom e doce Jesus! De joelhos me prostro em tua Santa presença, e te suplico que te dignes a gravar em meu coração os mais vivos sentimentos de fé, esperança e caridade, verdadeiro arrependimento dos meus pecados e firme propósito de conversão, enquanto contemplo, com vivo afeto e dor, as tuas cinco chagas, tendo diante dos olhos o que o profeta Davi já dizia de ti, ó meu bom Jesus: "Perfuraram minhas mãos e os meus pés, e posso contar todos os meus ossos".

(Pede a benção de Deus e despede-te, mas promete-lhe voltar em breve.)

- Em nome do Pai, do Filho, e do Espírito Santo, Amém.
      `,
      precesparadepoisdaconfissao:
      `Senhor, sois misericordioso para com os que os procuram! Como é grande o Vosso amor e a Vossa bondade! Confio que, pêlos merecimentos infinitos de Vosso preciosismo Sangue, já me haveis perdoado os pecados. a posso contar-me de novo entre os Vossos filhos! Não permitais Pai de misericórdia, que eu me esqueça dessa grande graça.Proponho-me firmemente evitar o pecado, ara nunca mais perder a Vossa graça. Abençoai, Senhor, este meu propósito e fortalecei-me para que nunca mais torne a cair.

 Ó, Maria, minha Mãe, rogai por mim e amparai-me. Santos e anjos do céu, intercedei por mim. Amém
      `,
      reginacaeli:
      `Rainha do Céu, alegrai-vos, aleluia!

Porque Aquele que merecestes trazer em Vosso ventre, aleluia!

 

Ressuscitou como disse, aleluia!

Rogai por nós a Deus, aleluia!

 

Alegrai-vos e exultai, ó Virgem Maria, aleluia!

Porque o Senhor ressuscitou verdadeiramente, aleluia!

 

Oremos.

Ó Deus, que Vos dignastes alegrar o mundo com a Ressurreição do vosso Filho, Nosso Senhor Jesus Cristo, concedei-nos, Vos suplicamos,  que pela intercessão da Virgem Maria, Sua Mãe, a glória da vida eterna. 

Pelo mesmo Cristo Nosso Senhor. 

Amen.
      `,
      salmonoventa:
      `1. Tu que habitas sob a proteção do Altíssimo, que moras à sombra do Onipotente,
2. dize ao Senhor: Sois meu refúgio e minha cidadela, meu Deus, em que eu confio.
3. É ele quem te livrará do laço do caçador, e da peste perniciosa.
4. Ele te cobrirá com suas plumas, sob suas asas encontrarás refúgio. Sua fidelidade te será um escudo de proteção.
5. Tu não temerás os terrores noturnos, nem a flecha que voa à luz do dia,
6. nem a peste que se propaga nas trevas, nem o mal que grassa ao meio-dia.
7. Caiam mil homens à tua esquerda e dez mil à tua direita, tu não serás atingido.
8. Porém verás com teus próprios olhos, contemplarás o castigo dos pecadores,
9. porque o Senhor é teu refúgio. Escolheste, por asilo, o Altíssimo.
10. Nenhum mal te atingirá, nenhum flagelo chegará à tua tenda,
11. porque aos seus anjos ele mandou que te guardem em todos os teus caminhos.
12. Eles te sustentarão em suas mãos, para que não tropeces em alguma pedra.
13. Sobre serpente e víbora andarás, calcarás aos pés o leão e o dragão.
14. Pois que se uniu a mim, eu o livrarei; e o protegerei, pois conhece o meu nome.
15. Quando me invocar, eu o atenderei; na tribulação estarei com ele. Hei de livrá-lo e o cobrirei de glória.
16. Será favorecido de longos dias, e mostrar-lhe-ei a minha salvação. 
      `,
      salverainha:
      `Salve, Rainha, 
mãe de misericórdia, 
vida, doçura, esperança nossa, salve! 
A Vós bradamos, 
os degredados filhos de Eva. 
A Vós suspiramos, gemendo e chorando 
neste vale de lágrimas. 
Eia, pois, advogada nossa, 
esses Vossos olhos misericordiosos 
a nós volvei. 
E, depois deste desterro, 
nos mostrai Jesus, bendito fruto 
do Vosso ventre. 
Ó clemente, ó piedosa, 
ó doce Virgem Maria. 
Rogai por nós, Santa Mãe de Deus, 
para que sejamos dignos das promessas de Cristo.
      `,
      saopioxpelaigreja:
      `Ó Santo Pontífice, fiel servo do Senhor, fiel e humilde discípulo do divino Mestre. Na dor e na alegria, nos trabalhos e nas solicitudes, experimentado pastor do rebanho de Cristo, volvei o vosso olhar sobre nós.  Árduos são os tempos em que vivemos. Duras as fadigas que de nós exigem. A Esposa de Cristo, confiada aos vossos cuidados, está de novo em angústias terríveis. Os vossos filhos se vêem ameaçados por inúmeros perigos na alma e no corpo.  O espírito do mundo, qual leão enfurecido, rodeia-nos buscando a quem devorar. Não poucos caem nas suas garras. Têm olhos e não vêem. Têm ouvidos e não ouvem.  Fecham os olhos à luz da eterna verdade, preferindo dar ouvidos às vozes que insinuam mensagens enganadoras.  Vós que fostes na terra grande animador e guia do povo de Deus, sede auxílio e intercessor nosso e de todos os que se professam seguidores de Cristo.  Vós, cujo coração se rompeu quando o mundo se precipitou em sanguinolenta luta, socorrei a humanidade, a cristandade, exposta presentemente a semelhantes abalos.  Obtende-nos da misericórdia divina o dom da paz duradoura e, como aproximação, o retorno dos espíritos àquele sentido de fraternidade, que somente pode dar aos homens e as nações a justiça e a concórdia desejadas por Deus. Assim seja.
      `,
      subtuumpraesidium:
      `Debaixo de Vossa proteção nos refugiamos, Santa Mãe de Deus: não desprezeis as nossas súplicas em nossas necessidades, mas livrai-nos sempre de todos os perigos, ó Virgem gloriosa e bendita.
      `,
      tedeum:
      `Nós Vos louvamos, ó Deus, 
nós Vos bendizemos, Senhor. 
Toda a terra Vos adora, 
Pai eterno e omnipotente. 
Os Anjos, os Céus 
e todas as Potestades, 
os Querubins e os Serafins 
Vos aclamam sem cessar: 
Santo, Santo, Santo, 
Senhor Deus do Universo, 
o céu e a terra proclamam a vossa glória. 
O coro glorioso dos Apóstolos, 
a falange venerável dos Profetas, 
o exército resplandecente dos Mártires 
cantam os vossos louvores. 
A santa Igreja anuncia por toda a terra 
a glória do vosso nome: 
Deus de infinita majestade, 
Pai, Filho e Espírito Santo. 
Senhor Jesus Cristo, Rei da glória, 
Filho do Eterno Pai, 
para salvar o homem, tomastes 
a condição humana no seio da Virgem Maria. 
Vós despedaçastes as cadeias da morte 
e abristes as portas do céu. 
Vós estais sentado à direita de Deus, 
na glória do Pai, 
e de novo haveis de vir para julgar 
os vivos e os mortos. 
Socorrei os vossos servos, Senhor, 
que remistes com vosso Sangue precioso;
e recebei-os na luz da glória, 
na assembleia dos vossos Santos. 
Salvai o vosso povo, Senhor, 
e abençoai a vossa herança; 
sede o seu pastor e guia através dos tempos 
e conduzi-o às fontes da vida eterna. 
Nós Vos bendiremos todos os dias da nossa vida 
e louvaremos para sempre o vosso nome. 
Dignai-Vos, Senhor, neste dia, livrar-nos do pecado. 
Tende piedade de nós, 
Senhor, tende piedade de nós. 
Desça sobre nós a vossa misericórdia, 
Porque em Vós esperamos. 
Em Vós espero, meu Deus, 
não serei confundido eternamente.
      `,
      visitaaosantissimosacramento:
      `Meu Senhor Jesus Cristo, pelo amor que tendes aos homens, permaneceis noite e dia neste Sacramento cheio de compaixão e de amor, esperando, chamando e acolhendo todos os que vêm visitar-Vos. Creio que estais presente no Sacramento do Altar: adoro-Vos do abismo do meu nada e agradeço-Vos por todas as graças que me concedestes e, em particular, por me terdes dado a Vós mesmo neste Sacramento, por me terdes dado a Vossa Santíssima Mãe Maria por minha advogada e por me terdes chamado a visitar-Vos nesta capela. Saúdo agora o
Vosso amantíssimo Coração, e isto por três motivos:
1. Em ação de graças por este grande dom;
2. Para reparar-Vos por todos os ultrajes que recebeis neste Sacramento de todos os Vossos inimigos;
3. Pretendo, com esta visita, adorar-Vos em todos os lugares da terra onde sois menos venerado e mais abandonado.

Meu Jesus, eu Vos amo de todo o meu coração. Lamento ter ofendido tantas vezes a Vossa infinita bondade. Prometo, com a Vossa graça, nunca mais Vos ofender.
Agora, miserável e indigno como sou, consagro-me a Vós sem reservas;
entrego-Vos toda a minha vontade, os meus afetos, os meus desejos e tudo o que possuo. De agora em diante, disponhais de mim e de tudo o que tenho como Vos aprouver. Tudo o que Vos peço e desejo é o Vosso santo amor, a perseverança final e o perfeito cumprimento da Vossa vontade. Recomendo-Vos as almas do purgatório; mas especialmente aquelas que tinham a maior devoção ao Santíssimo Sacramento e à Bem-Aventurada Virgem Maria. Recomendo-Vos também todos os pobres pecadores.

Meu querido Salvador, uno todos os meus afetos aos afetos do Teu amantíssimo Coração; e os ofereço, assim unidos, ao Teu eterno Pai, e suplico-Lhe em Teu nome que, por Teu amor, se digne aceitá-los.
Amém.
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

const exame = {
      imandamento: `
<h5><strong>I MANDAMENTO:</strong> "Eu sou o Senhor teu Deus, não terás outro deus diante de mim"</h5>    
<ul>
      <li>Negligência na oração (distrações voluntárias, poucas orações)</li>
      <li>Ficar mais de um mês sem rezar</li>
      <li>Ingratidão para com Deus</li>
      <li>Preguiça espiritual</li>
      <li>Ódio a Deus ou à Igreja Católica</li>
      <li>Tentar a Deus (explicitamente ou implicitamente, por exemplo, expondo-se a um perigo para alma, vida ou saúde sem causa grave)</li>
      <li>Não se comportar adequadamente em uma Igreja (ex: não fazer genuflexão ao Santíssimo Sacramento)</li>
      <li>Excessivo apego a coisas/criaturas (ex: afeição exagerada a animais, fanatismo por esportes, idolatria de celebridades, amor desordenado ao dinheiro, prazer ou poder)</li>
      <li>Idolatria (adorar falsos deuses ou honrar criaturas como Satanás, ciência, ancestrais, pátria no lugar de Deus)</li>
      <li>Superstição (atribuir poderes a coisas criadas indevidamente)</li>
      <li>Hipnotismo (sem causa grave)</li>
      <li>Adivinhação (consultar Satanás, demônios, mortos, horóscopos, astrologia, leitura da mão, etc.)</li>
      <li>Importância indevida a sonhos, presságios e destino</li>
      <li>Práticas de magia ou feitiçaria (branca ou negra, bruxaria, vodu)</li>
      <li>Uso de amuletos</li>
      <li>Brincar com quadro Ouija ou mesas giratórias</li>
      <li>Espiritismo (falar com espíritos)</li>
      <li>Sacrilégio (profanar sacramentos, ações litúrgicas, pessoas ou lugares sagrados)</li>
      <li>Receber sacramentos, especialmente a Eucaristia, em pecado mortal</li>
      <li>Simonia (comprar ou vender coisas espirituais)</li>
      <li>Uso profano ou supersticioso de objetos abençoados</li>
      <li>Materialismo prático (depender só de bens materiais)</li>
      <li>Humanismo ateu (ver o homem como fim último e autônomo)</li>
      <li>Ateísmo (rejeição teórica ou prática de Deus)</li>
      <li>Agnosticismo (nega que seja possível conhecer ou afirmar algo sobre Deus)</li>
    </ul>

    <p><strong>Pecados contra a Fé:</strong></p>
    <ul>
      <li>Dúvida voluntária sobre verdades da fé</li>
      <li>Ignorância deliberada sobre as verdades que se deve conhecer</li>
      <li>Falar contra a doutrina da Igreja</li>
      <li>Negligência em instruir-se na fé conforme seu estado</li>
      <li>Credulidade imprudente em revelações privadas ou condenadas pela Igreja</li>
      <li>Apostasia (abandono completo da fé)</li>
      <li>Heresia (negar uma ou mais verdades da fé)</li>
      <li>Indiferentismo (achar que todas as religiões são igualmente verdadeiras ou agradáveis a Deus)</li>
      <li>Ler ou divulgar escritos contra a fé católica de forma que comprometa a fé própria ou alheia</li>
      <li>Ouvir músicas com letras contrárias à fé católica</li>
      <li>Silenciar diante de questionamento legítimo sobre a própria fé (pecado grave)</li>
      <li>Participar de culto herético ou cismático</li>
      <li>Ouvir pregação de falso ministro religioso</li>
      <li>Aderir ou apoiar sociedades proibidas (maçonaria, teosofia, rosa-cruz, Rotary, Lions)</li>
    </ul>

    <p><strong>Pecados contra a Esperança:</strong></p>
    <ul>
      <li>Desespero da misericórdia de Deus (desistir da salvação e dos meios para alcançá-la)</li>
      <li>Falta de confiança na graça de Deus diante de apuros ou tentações</li>
      <li>Não recorrer a Deus ou aos santos nas tentações</li>
      <li>Falta de desejo pela vida eterna</li>
      <li>Presunção (esperar salvação sem ajuda divina, ou perdão sem arrependimento)</li>
      <li>Presunção da misericórdia de Deus para continuar no pecado</li>
      <li>Recusar depender de Deus</li>
    </ul>

    <p><strong>Pecados contra a Caridade:</strong></p>
    <ul>
      <li>Negligência em praticar atos de caridade regularmente, especialmente nas necessidades</li>
      <li>Egoísmo (buscar só os próprios interesses, vaidade, desejo de elogios)</li>
      <li>Pensamentos revoltosos deliberados contra Deus</li>
      <li>Jactância (orgulho do pecado, vangloriar-se do mal feito)</li>
      <li>Violar a lei de Deus ou omitir boas obras por respeito humano</li>
      <li>Impaciência diante de provações e adversidades</li>
    </ul>
      `,
      iimandamento: `<h5><strong>II MANDAMENTO:</strong> Não tomarás o nome do Senhor, teu Deus, em vão</h5>

  <ul>
    <li>Desonra de Deus por uso profano ou desrespeitoso de Seu Nome, do Santo Nome de Jesus Cristo, da Santíssima Virgem Maria e de todos os santos</li>
    <li>Blasfêmia (insultar a Deus, Nosso Senhor Jesus Cristo, a Igreja Católica, a Santíssima Virgem Maria ou os santos por palavras ou gestos)</li>
    <li>Ouvir músicas blasfemas</li>
    <li>Perjúrio (prometer algo sob juramento sem intenção de cumprir, ou quebrar promessa jurada)</li>
    <li>Fazer juramentos falsos ou desnecessários (invocar Deus em vão para uma mentira)</li>
    <li>Amaldiçoar a si mesmo ou aos outros com intenção real</li>
    <li>Murmurar contra a providência divina</li>
    <li>Quebrar votos ou promessas feitas a Deus (grave dependendo da promessa)</li>
    <li>Irreverência na Igreja: falar durante a Missa ou distrair os outros; vestir-se inadequadamente ou qualquer comportamento impróprio</li>
  </ul>`,
      iiimandamento: ` <h5><strong>III MANDAMENTO:</strong> Lembra-te que deves santificar o dia do Senhor</h5>

  <ul>
    <li>Omissão da oração e do culto divino; trabalho servil desnecessário que impeça a santificação do Domingo</li>
    <li>Comércio desnecessário aos Domingos e Dias de Guarda</li>
    <li>Profanar os dias santos com más companhias, diversões pecaminosas, jogos de azar, danças indecentes, excessos com bebida</li>
    <li>Negligência em conduzir os filhos à Missa aos Domingos e Dias Santos, e na recepção dos sacramentos</li>
  </ul>`,
      ivmandamento: ` <h5><strong>IV MANDAMENTO:</strong> Honra teu pai e tua mãe</h5>

  <p><strong>Para os filhos:</strong></p>
  <ul>
    <li>Raiva ou aversão aos pais ou superiores legítimos</li>
    <li>Desdém, desejo de mal, ameaças ou agressões contra os pais</li>
    <li>Ingratidão, má conduta, provocá-los à ira, ofendê-los ou insultá-los</li>
    <li>Negligência em ajudar os pais em suas necessidades</li>
    <li>Desobediência às ordens legítimas (sobretudo quanto às más companhias, diversões e deveres como o estudo)</li>
  </ul>

  <p><strong>Para os pais:</strong></p>
  <ul>
    <li>Odiar ou amaldiçoar os filhos</li>
    <li>Dar escândalo (praguejar, embriagar-se etc.)</li>
    <li>Deixá-los crescer na ignorância, preguiça ou pecado</li>
    <li>Parcialidade injustificada entre os filhos</li>
    <li>Adiar o batismo por mais de um mês</li>
    <li>Negligência quanto à saúde, instrução religiosa, amizades, leituras e diversões</li>
    <li>Falta de correção ou correções duras e cruéis</li>
    <li>Enviar filhos a escolas protestantes ou de má doutrina</li>
  </ul>

  <p><strong>Entre os cônjuges:</strong></p>
  <ul>
    <li>Maltrato (sem consideração pelo bem-estar e caridade)</li>
    <li>Impedir o cumprimento dos deveres religiosos</li>
    <li>Negar o débito conjugal sem causa justa</li>
    <li>Falta de paciência e dureza com as faltas do outro</li>
    <li>Ciúmes injustificados</li>
    <li>Negligência nos deveres domésticos</li>
    <li>Mau humor e aborrecimentos sem motivo</li>
    <li>Palavras injuriosas</li>
    <li>Preguiça ou timidez na busca de sustento para a família</li>
  </ul>

  <p><strong>Para os súditos da Igreja e do Estado:</strong></p>
  <ul>
    <li>Desrespeitar ou desobedecer aos superiores espirituais (Papa, bispos, padres)</li>
    <li>Recusar-se a rezar por eles ou zombar de sua autoridade</li>
    <li>Não rezar pelo país e seu governo</li>
    <li>Colocar o país acima de Deus</li>
    <li>Participar de movimentos subversivos ou revolucionários</li>
    <li>Juntar-se a partidos comunistas ou liberais</li>
    <li>Resistir à autoridade legal, perturbar a paz pública</li>
    <li>Votar em partidos socialistas ou comunistas</li>
  </ul>

  <p><strong>Para empregadores:</strong></p>
  <ul>
    <li>Negar tempo razoável para os deveres religiosos</li>
    <li>Dar mau exemplo ou permitir que outros o façam</li>
    <li>Não pagar salário justo ou cuidar de empregados doentes</li>
    <li>Demitir injustamente</li>
    <li>Impor políticas desproporcionadas</li>
  </ul>

  <p><strong>Para empregados:</strong></p>
  <ul>
    <li>Desrespeito aos empregadores</li>
    <li>Falta de obediência nos deveres do contrato</li>
    <li>Perda de tempo (ex: uso indevido da internet)</li>
    <li>Negligência no trabalho</li>
    <li>Desonestidade ou descuido com bens do empregador</li>
    <li>Violar regras sem justa causa</li>
  </ul>

  <p><strong>Para servidores públicos e profissionais:</strong></p>
  <ul>
    <li>Ignorância culpável sobre os deveres da função</li>
    <li>Negligência no cumprimento das responsabilidades</li>
    <li>Injustiça ou parcialidade</li>
  </ul>

  <p><strong>Para professores:</strong></p>
  <ul>
    <li>Negligência no progresso dos alunos</li>
    <li>Punições injustas ou excessivas</li>
    <li>Parcialidade</li>
    <li>Mau exemplo</li>
    <li>Ensino de doutrinas falsas</li>
  </ul>

  <p><strong>Para estudantes:</strong></p>
  <ul>
    <li>Desrespeito, desobediência, teimosia</li>
    <li>Indolência, preguiça</li>
    <li>Perda de tempo com distrações inúteis (festas, TV, internet)</li>
  </ul>

  <p><strong>Para todos:</strong></p>
  <ul>
    <li>Desprezo das leis justas do Estado e da Igreja</li>
    <li>Desobediência à autoridade legítima</li>
    <li>Desobediência às leis civis</li>
  </ul>`,
      vmandamento: `<h5><strong>V MANDAMENTO:</strong> Não matarás</h5>

  <ul>
    <li>Causar morte ou lesão física de alguém por ação própria, participação, instigação, conselho, consentimento ou silêncio</li>
    <li>Ter a intenção de matar alguém</li>
    <li>Assassinato</li>
    <li>Realizar um aborto</li>
    <li>Abortar, ajudar alguém a procurar um aborto (o penitente deve estar ciente que abortar, praticar ou ajudar em um aborto incorre em excomunhão, se o aborto se consumar)</li>
    <li>Eutanásia</li>
    <li>Retirar os meios ordinários para um paciente terminal ou moribundo</li>
    <li>Suicídio</li>
    <li>Tentativa de suicídio, sérios pensamentos de cometer suicídio</li>
    <li>Brigar</li>
    <li>Rixas</li>
    <li>Ódio</li>
    <li>Desejo de vingança</li>
    <li>Tortura humana</li>
    <li>Gula (beber ou comer em excesso)</li>
    <li>Embriaguez (em que grau?)</li>
    <li>Abuso de álcool, medicamentos ou drogas</li>
    <li>Colocar em perigo a vida de outros (como beber e dirigir, dirigir muito rápido, etc.)</li>
    <li>Colocar em risco a própria vida ou um membro do corpo sem uma razão suficiente (por exemplo, acrobacias arriscadas, roleta russa, etc.)</li>
    <li>Descuido em deixar expostos venenos, drogas perigosas, armas, etc.</li>
    <li>Mutilação do corpo, (como castração, por exemplo).</li>
    <li>Vasectomia, ligadura ou outro procedimento para evitar os filhos (apesar da prática muito generalizada, mesmo entre católicos, trata-se de pecado mortal, ainda que haja motivos legítimos para evitar os filhos. É preciso buscar a reversão da cirurgia, se ainda existe a possibilidade de fertilidade)</li>
    <li>Histerectomia (sem causa médica suficiente)</li>
    <li>Inseminação artificial ou fertilização in vitro ou algo semelhante (apesar da prática muito generalizada, mesmo entre católicos, trata-se de pecado mortal)</li>
    <li>Pesquisas científicas imorais e suas aplicações</li>
    <li>Mau exemplo ou escândalo, levando outros a pecar</li>
    <li>Desrespeito pelos moribundos ou pelos mortos</li>
    <li>Não tentar evitar a guerra</li>
    <li>Mostrar aversão ou desprezo pelos outros</li>
    <li>Recusar falar com outros quando cumprimentado</li>
    <li>Ignorar ofertas de reconciliação, especialmente entre parentes</li>
    <li>Fomentar um espírito que não perdoa o próximo</li>
    <li>Zombaria e escárnio</li>
    <li>Insultos</li>
    <li>Ações ou palavras irritantes</li>
    <li>Tristeza pela prosperidade alheia</li>
    <li>Alegrar-se pela miséria alheia</li>
    <li>Inveja pela atenção dada aos outros</li>
    <li>Comportamento tirânico</li>
    <li>Induzir os outros ao pecado pela palavra ou pelo exemplo</li>
    <li>Prejudicar a saúde pelo excesso de indulgência</li>
    <li>Dar álcool aos outros sabendo que irão abusar dele</li>
    <li>Vício em jogos de azar (coloca em perigo o sustento próprio ou da família?)</li>
    <li>Tomar contraceptivos que podem ou não ser abortivos (pílulas e outros: apesar da prática generalizada mesmo entre católicos, trata-se de pecado mortal, ainda que haja motivos legítimos para evitar os filhos)</li>
    <li>Uso de métodos profiláticos ou de barreira para evitar a gravidez (mesma observação do pecado precedente)</li>
    <li>Utilizar métodos naturais para evitar filhos possuindo uma mentalidade contraceptiva</li>
    <li>Esterilização direta (vide vasectomia, ligadura de trompas e outros métodos anticoncepcionais)</li>
    <li>Causar morte ou sofrimento desnecessário aos animais</li>
  </ul>`,
      vimandamento: `<h5><strong>VI MANDAMENTO:</strong> Não cometerás adultério</h5>

  <ul>
    <li>Impureza e imodéstia nas palavras, nos olhares e nas ações, seja sozinho ou com outros</li>
    <li>Contar ou ouvir piadas sujas; falar ou ouvir (consentindo) coisas indecentes, ou com duplo sentido</li>
    <li>Vangloriar-se da própria imoralidade</li>
    <li>Utilizar roupas imodestas (minissaias, calças apertadas, decotes arrojados, blusas e saias transparentes, biquínis, etc.)</li>
    <li>Comprar, alugar ou assistir filmes, programas de TV ou ler livros, revistas ou outras coisas indecentes (não somente pornografia, mas também tudo que contenha impurezas, o que é generalizado hoje)</li>
    <li>Expor-se voluntariamente a ocasiões de pecado por curiosidade pecaminosa, por manter companhia perigosa, por frequentar locais perigosos, diversões perigosas ou pecaminosas; por danças indecentes (quase todas as modernas) ou jogos indecentes; por familiaridade indevida com pessoas do sexo oposto</li>
    <li>Manter companhia pecaminosa, ou morar com alguém que não é o cônjuge</li>
    <li>Ser tentação nessa matéria para os outros, pelo modo de falar, de se comportar, de se vestir, ou insinuando-se</li>
    <li>Ouvir música cuja letra é indecente ou cujo ritmo favoreça a sensualidade</li>
    <li>Masturbação (é habitual?)</li>
    <li>Fornicação (sexo antes do casamento)</li>
    <li>Prostituição</li>
    <li>Sodomia (práticas homossexuais)</li>
    <li>Outras práticas contrárias à natureza</li>
    <li>Adultério (também em pensamentos)</li>
    <li>Divórcio</li>
    <li>Poligamia</li>
    <li>Incesto</li>
    <li>Abuso sexual</li>
    <li>Estupro</li>
    <li>Beijo sensual, prolongado</li>
    <li>Carícias ou preliminares fora do contexto do matrimônio ou dentro do contexto do matrimônio sem serem ordenadas à consumação do ato conjugal natural, com perigo de polução</li>
    <li>Ato conjugal consumado de modo inapto à procriação</li>
    <li>Negar o débito conjugal sem razão realmente legítima para tanto</li>
    <li>Danças imodestas</li>
    <li>Namoro sem tomar as devidas precauções para guardar a pureza e a fé</li>
    <li>Namoro quando não deveria, sem a maturidade suficiente, sem intenção de casar-se</li>
  </ul>`,
      viimandamento: `<h5><strong>VII MANDAMENTO:</strong> Não roubarás</h5>

  <p><strong>Pecados contra o sétimo mandamento:</strong></p>
  <ul>
    <li>Roubo (quanto?)</li>
    <li>Pequenos furtos (ex: tomar coisas do trabalho ou dinheiro de um membro da família sem permissão)</li>
    <li>Trapacear</li>
    <li>Plágio</li>
    <li>Quebra de regulamentação de direito autoral (ex: fotocopiar algo sem autorização e sem causa suficiente)</li>
    <li>Manter objetos emprestados ou perdidos sem tentar restituir a propriedade alheia</li>
    <li>Possessão de bens ilícitos</li>
    <li>Aconselhar ou pedir a alguém que prejudique outra pessoa ou danifique seus bens</li>
    <li>Danificar por descuido ou malícia a propriedade alheia</li>
    <li>Ocultar fraude, roubo ou dano quando se tem o dever de informar</li>
    <li>Sonegação de impostos (não pagar os impostos justos)</li>
    <li>Fraude comercial</li>
    <li>Desonestidade na política, nos negócios, etc.</li>
    <li>Não pagar dívidas no tempo correto ou não fazer esforços para pagá-las</li>
    <li>Não fazer reparação ou compensação a quem sofreu danos injustos</li>
    <li>Aumentar preços para tirar proveito da ignorância ou necessidade alheia</li>
    <li>Usura (emprestar dinheiro a altos juros a alguém em dificuldade)</li>
    <li>Especulação (manipular preços para ganhar com o prejuízo alheio)</li>
    <li>Corrupção (influenciar julgamentos para decisão em questões legais)</li>
    <li>Aceitar ou oferecer suborno</li>
    <li>Apropriação e uso indevido de bens comuns para fins privados</li>
    <li>Trabalho mal feito</li>
    <li>Pagar salários injustos ou não fornecer benefícios devidos</li>
    <li>Falsificação de cheques e faturas</li>
    <li>Emitir cheques sem fundos suficientes para cobri-los</li>
    <li>Despesas excessivas ou mal administradas</li>
    <li>Não cumprir promessas ou acordos contratuais</li>
    <li>Jogar e apostar, privando-se dos meios necessários de vida para si ou para os outros</li>
    <li>Gasto excessivo ou desnecessário de bens, recursos, dinheiro ou fundos</li>
  </ul>

  <p><strong>Nota sobre restituição:</strong></p>
  <ul>
    <li>Se você cometeu injustiça, seus pecados não serão perdoados enquanto você não fizer o reparo.</li>
    <li>Devolva o valor do que foi adquirido injustamente ou, se não for possível, restitua parte dele sem demora.</li>
    <li>A obrigação de restituição é compulsória até que seja totalmente exonerada.</li>
    <li>A restituição deve ser feita ao dono, ou se não for possível, aos pobres, à Igreja ou à caridade.</li>
  </ul>`,
      viiimandamento: `<h5><strong>VIII MANDAMENTO:</strong> Não darás falso testemunho contra o teu próximo</h5>

  <p><strong>Pecados contra o oitavo mandamento:</strong></p>
  <ul>
    <li>Mentir (se a mentira prejudicou alguém, gravemente ou não?)</li>
    <li>Dizer palavrões ou grosserias</li>
    <li>Vangloriar-se</li>
    <li>Lisonja (bazófia)</li>
    <li>Hipocrisia</li>
    <li>Exagero</li>
    <li>Ironia</li>
    <li>Sarcasmo</li>
    <li>Dano injusto ao nome alheio (detração, calúnia ou difamação; revelando faltas verdadeiras ou falsas)</li>
    <li>Criticar os outros, escutar com prazer os outros sendo criticados</li>
    <li>Fazer fofocas</li>
    <li>Desonrar injustamente alguém em sua presença (injúria)</li>
    <li>Julgamento precipitado (acreditar firmemente, sem razão suficiente, que alguém tem um defeito moral ou cometeu um erro)</li>
    <li>Revelar segredos</li>
    <li>Publicar segredos que causem descrédito aos outros, sem causa proporcionalmente grave, mesmo que sejam verdadeiros</li>
    <li>Recusar ou demorar em restituir o bom nome que foi manchado</li>
    <li>Acusações sem fundamento</li>
    <li>Suspeitas infundadas</li>
    <li>Julgamentos precipitados sobre os outros em nossa própria mente</li>
  </ul>`,
      ixmandamento: `<h5><strong>IX MANDAMENTO:</strong> Não cobiçarás a mulher do próximo</h5>
      <p>O nono mandamento proíbe todo
pensamento e desejo impuro com os
quais nos comprazemos
deliberadamente, pensando neles
voluntariamente ou consentindo neles
de bom grado quando tais paixões ou
pensamentos impuros vêm à nossa
mente. O penitente deve ter em mente
que se deleitar deliberadamente ou
consentir em qualquer pecado listado
no sexto mandamento pode ter o
mesmo grau de gravidade de executá-
lo de fato, isto é, trata-se de pecado
mortal ou venial, segundo o pecado e
conforme haja plena advertência e
pleno consentimento.</p>`,
      xmandamento: `décimo mandamento`
    };
    
    const temaExame = document.getElementById("temaExame");
    const textoExame = document.getElementById("textoExame");
    
    const updateExame = () => {
      const tema = temaExame.value;
      textoExame.innerHTML = exame[tema] || "Selecione um mandamento válido.";
    };
    
    // Atualiza a ladainha sempre que o tema for alterado
    temaExame.addEventListener('change', updateExame);
    
    // Chama a função uma vez para garantir que a ladainha inicial seja carregada
    updateExame();
    


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
  
