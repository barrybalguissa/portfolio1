<template>
  <section class="projects">
    <h1>Projets universitaires</h1>

    <div class="cards">
      <article v-for="projet in projets" :key="projet.titre" class="project-card">
        <h2>{{ projet.titre }}</h2>
        <p class="contexte">{{ projet.contexte }}</p>

        <ul class="details">
          <li v-for="ligne in projet.details" :key="ligne">{{ ligne }}</li>
        </ul>

        <div class="tags">
          <span v-for="tech in projet.technologies" :key="tech" class="tag">{{ tech }}</span>
        </div>

        <a
          v-if="projet.lien"
          :href="projet.lien"
          target="_blank"
          rel="noopener noreferrer"
          class="bouton"
        >
          Voir le code
        </a>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectsView",
  data() {
    return {
      projets: [
        {
          titre: "Développement d’une application web de gestion de livres et d’avis de lecture",
          contexte: "Projet individuel – Université d’Orléans",
          details: [
            "Développement d’une application web avec Python et le framework Django.",
            "Conception des modèles de données et définition des relations entre les objets.",
            "Mise en place de fonctionnalités de gestion des livres et des avis de lecture.",
            "Utilisation de Git pour la gestion des versions du projet."
          ],
          technologies: ["Python", "Django", "Git"],
          lien: ""
        },
        {
          titre: "Développement de jeux en Java : Nim et jeu du pendu",
          contexte: "Projet en groupe – Université d’Orléans",
          details: [
            "Conception et développement de jeux en console en langage Java.",
            "Mise en pratique des principes de programmation orientée objet et de la logique algorithmique.",
            "Collaboration en équipe pour la réalisation et la mise au point des programmes."
          ],
          technologies: ["Java", "POO"],
          lien: ""
        },
        {
          titre: "Développement d’un compilateur et d’un traducteur pour la machine virtuelle Hack",
          contexte: "Projet universitaire en groupe – Université d’Orléans",
          details: [
            "Analyse lexicale et syntaxique du langage Jack, avec génération d’arbres syntaxiques et de fichiers XML.",
            "Développement en Python d’un générateur de code pour traduire Jack en instructions de machine virtuelle.",
            "Traduction des instructions de la machine virtuelle en assembleur Hack, incluant branchements, appels de fonctions et gestion des étiquettes.",
            "Tests et validation du code généré à l’aide de simulateurs."
          ],
          technologies: ["Python", "Jack", "Machine virtuelle", "Assembleur Hack"],
          lien: ""
        }
      ]
    };
  }
};
</script>

<style scoped>
.projects {
  padding: 2rem;
  color: #fff;
}

.projects h1 {
  text-align: center;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.project-card {
  flex: 1 1 320px;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: left;
}

.project-card h2 {
  font-size: 1.15rem;
  margin: 0 0 0.5rem;
}

.contexte {
  font-style: italic;
  opacity: 0.85;
  margin: 0 0 1rem;
}

.details {
  padding-left: 1.2rem;
  margin: 0 0 1rem;
  line-height: 1.5;
}

.tags {
  margin-top: auto;
  margin-bottom: 1rem;
}

.tag {
  display: inline-block;
  background: #8a1c2b;
  color: #fff;
  padding: 0.2rem 0.7rem;
  border-radius: 999px;
  margin: 0.15rem 0.3rem 0.15rem 0;
  font-size: 0.85rem;
}

.bouton {
  align-self: flex-start;
  background: #fff;
  color: #6b0f1a;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
}

.bouton:hover {
  background: #f0d5d9;
}
</style>