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
  
