/* app.js */
document.addEventListener('DOMContentLoaded', () => {
    // ----- Oração do Dia ----- //
    const textoOracao = document.getElementById('textoOracao');
    const temaOracao = document.getElementById('temaOracao');
    const favoritarOracaoBtn = document.getElementById('favoritarOracao');
  
    const oracoes = {
      familia: "Senhor Deus, nós Vos pedimos humildemente que abençoeis nossa família. Ajudai-nos a viver em harmonia e união, segundo os Teus ensinamentos, com amor e respeito mútuos. Que o Teu Espírito Santo nos guie em todos os momentos, fortalecendo-nos na fé, na esperança e na caridade. Dai-nos paciência e compreensão nas dificuldades, e paz em nossos corações, para que possamos ser testemunhas do Vosso amor. Abençoai nossos laços familiares, protegendo-nos de todo mal e guiando-nos na caminhada de santidade. Concedei-nos sabedoria para educar nossos filhos na fé e no amor. Por intercessão de Nossa Senhora, Mãe de todas as famílias, pedimos que abençoeis nosso lar, nossa casa, e que sempre sejamos um reflexo do Vosso amor para o mundo. Em nome de Jesus Cristo, Vosso Filho, que vive e reina para sempre. Amém.",
      trabalho: "Senhor Deus, nós Vos pedimos humildemente que abençoeis nosso trabalho. Dai-nos força, sabedoria e paciência para realizar nossas tarefas com dedicação e honestidade, sempre buscando glorificar Vosso nome em tudo o que fizermos. Ajudai-nos a ser justos em nossas ações, generosos com os outros e humildes em nossos corações. Que, em cada esforço, possamos refletir Vossa luz e fazer da nossa vida um testemunho do Vosso amor. Pedimos também, Senhor, que abençoeis os frutos do nosso trabalho, para que possamos cuidar de nossas famílias, ajudar aos necessitados e contribuir para o bem de todos. Em nome de Jesus Cristo, Vosso Filho, que vive e reina para sempre. Amém.",
      cura: "Senhor Deus, nós Vos pedimos com confiança que abençoeis a nossa saúde. Concedei-nos forças para enfrentar as dificuldades e curai-nos de todas as enfermidades, físicas e espirituais. Protegei-nos de todo mal, livrai-nos de doenças e fortalecei-nos no corpo e na alma. Que, em nossa fragilidade, possamos sempre confiar em Vossa misericórdia e na intercessão dos santos. Pedimos que derrameis Vossa paz sobre os doentes, curando-os e confortando-os, e que aqueles que cuidam da saúde dos outros sejam abençoados com sabedoria e compaixão. Em nome de Jesus Cristo, Vosso Filho, que vive e reina para sempre. Amém."
    };
  
    const updateOracao = () => {
      const tema = temaOracao.value;
      textoOracao.textContent = oracoes[tema];
    };
  
    temaOracao.addEventListener('change', updateOracao);
    updateOracao();

    // ----- Ladainhas ----- //
    const textoLadainhas = document.getElementById('textoLadainhas');
    const temaLadainhas = document.getElementById('temaLadainhas');
  
    const ladainhas = {
      ladainhaUm: `
    Senhor, tende piedade de nós.  
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
    Jesus Cristo, atendei-nos.  
      `,
      ladainhaDois: `
      Senhor, tende piedade de nós.
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
firmeza do vosso amor. Vós que viveis e renais pelos séculos dos séculos. Amém.
      `,
      ladainhaTres: `
      Senhor, tende piedade de nós
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

Para que sejamos dignos das promessas de Cristo.

      `
    };
    
  
    const updateLadainhas = () => {
      const tema = temaLadainhas.value;
      textoLadainhas.textContent = ladainhas[tema];
    };
  
    temaLadainhas.addEventListener('change', updateLadainhas);
    updateLadainhas();


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
  
