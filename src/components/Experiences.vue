<template>
  <section class="experiences">
    <h1>Expériences professionnelles</h1>

    <div class="cards">
      <article v-for="exp in experiences" :key="exp.poste" class="exp-card">
        <h2>{{ exp.poste }}</h2>
        <p class="lieu">{{ exp.lieu }}</p>
        <p class="periode">{{ exp.periode }}</p>

        <ul class="details">
          <li v-for="ligne in exp.details" :key="ligne">{{ ligne }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "ExperiencesPage",
  data() {
    return {
      experiences: [
        {
          poste: "Employée en EHPAD",
          lieu: "EHPAD Les Pinelles – Saint-Denis-en-Val",
          periode: "Septembre 2025 – Septembre 2026",
          details: [
            "Travail en équipe dans un environnement professionnel.",
            "Respect des consignes et des procédures de travail.",
            "Adaptation aux besoins du service et sens des responsabilités."
          ]
        },
        {
          poste: "Hôtesse de caisse",
          lieu: "E.Leclerc – Tavers",
          periode: "2024 – 2025",
          details: [
            "Accueil et encaissement des clients.",
            "Utilisation des équipements de caisse et réalisation des opérations d’encaissement.",
            "Gestion des interactions avec la clientèle et respect des procédures de caisse."
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.experiences {
  padding: 2rem;
  color: #fff;
}

.experiences h1 {
  text-align: center;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.cards {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
}

.exp-card {
  background: rgba(0, 0, 0, 0.7);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: left;
}

.exp-card h2 {
  margin: 0 0 0.3rem;
  font-size: 1.2rem;
}

.lieu {
  font-weight: bold;
  margin: 0;
}

.periode {
  font-style: italic;
  opacity: 0.85;
  margin: 0.2rem 0 1rem;
}

.details {
  padding-left: 1.2rem;
  margin: 0;
  line-height: 1.5;
}
</style>