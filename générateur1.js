// Définir une liste de noms de chat possibles
const nomsChat = ['Félix', 'Choupette', 'Minou', 'Moustache', 'Griffe', 'Lucky', 'Mimi', 'Socks', 'Smokey', 'Sunny', 'Tigrou', 'Whiskers', 'Ziggy'];

// Fonction pour générer un nom de chat aléatoire
function genererNom() {
  const index = Math.floor(Math.random() * nomsChat.length);
  const nom = nomsChat[index];
  document.getElementById('nomChat').innerHTML = 'Votre nom de chat est : ' + nom;
}
