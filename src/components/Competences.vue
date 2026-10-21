<template>
  <section class="competences">
    <h1>Compétences</h1>

    <div class="tags">
      <span v-for="comp in competences" :key="comp" class="tag">{{ comp }}</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "CompetencesPage",
  data() {
    return {
    competences: [
        "Python",
        "Java",
        "OCaml",
        "Jack",
        "XML",
        "Machine virtuelle",
        "Assembleur Hack",
        "HTML/CSS",
        "JavaScript",
        "Vue.js",
        "Django",
        "Git",
        "SQL",
        "PL/SQL"
      ]
    };
  }
};
</script>

<style scoped>
.competences {
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  padding: 2rem;
  color: #fff;
  text-align: center;
}

.competences h1 {
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.tags {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 12px;
  padding: 1.5rem;
}

.tag {
  max-width: 100%;
  background: #8a1c2b;
  color: #fff;
  padding: 0.4rem 1rem;
  border-radius: 999px;
  font-size: 1rem;
  overflow-wrap: anywhere;
}
</style>