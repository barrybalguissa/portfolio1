<template>
  <div class="about">
    <h1>Qui suis-je ?</h1>
    <p>
      Étudiant en 3ème année de Licence Informatique, parcours MIAGE
      (Méthodes Informatiques Appliquées à la Gestion des Entreprises),
      à l'Université d'Orléans.
    </p>
    <p>
      Le MIAGE forme des profils hybrides à la croisée de l'informatique
      et de la gestion des organisations. Ma formation couvre aussi bien
      le développement logiciel que les fondamentaux de gestion d'entreprise,
      ce qui me permet d'envisager des missions variées : développement,
      analyse de données, gestion de projet, systèmes d'information ou conseil.
    </p>

    <h2>Compétences acquises pendant ma formation</h2>

    <div class="skills-section">
      <h3>Informatique</h3>
      <ul>
        <li>Programmation : Java, Python</li>
        <li>Bases de données : SQL, conception et modélisation de bases de données</li>
        <li>Développement web : HTML/CSS, JavaScript, Vue.js</li>
        <li>Réseaux et systèmes</li>
      </ul>
    </div>

    <div class="skills-section">
      <h3>Gestion & organisation</h3>
      <ul>
        <li>Gestion comptable et financière</li>
        <li>Économie</li>
        <li>Droit (notions applicables à l'entreprise)</li>
        <li>Statistiques et analyse de données</li>
      </ul>
    </div>

    <div class="skills-section">
      <h3>Autres</h3>
      <ul>
        <li>Anglais</li>
      </ul>
    </div>

    <h2>Recherche actuelle</h2>
    <p>
      Je recherche activement un stage pour l'été 2027 et/ou une alternance
      à partir de la rentrée 2027-2028, ouvert à tout type de mission en
      lien avec ma formation : développement informatique, analyse et
      gestion de données, systèmes d'information, gestion de projet, ou
      tout poste alliant compétences techniques et compréhension du
      fonctionnement des organisations.
    </p>
    <p>
      Curieux et motivé, je suis à la recherche d'une expérience
      professionnelle qui me permettra de mettre en pratique mes
      connaissances tout en découvrant le fonctionnement concret
      d'une entreprise.
    </p>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
  color: white;
}

.about h1 {
  text-align: center;
  margin-bottom: 20px;
}

.about h2 {
  margin-top: 30px;
  border-bottom: 2px solid white;
  padding-bottom: 5px;
}

.skills-section {
  margin-bottom: 15px;
}

.skills-section h3 {
  margin-bottom: 5px;
}

.about ul {
  padding-left: 20px;
}

.about li {
  margin-bottom: 5px;
}

.about p {
  line-height: 1.6;
  margin-bottom: 15px;
}
</style>
