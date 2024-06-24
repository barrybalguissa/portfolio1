<template>
  <div class="project-list">
    <div v-for="project in projects" :key="project.id" class="project-item" @click="openModal(project)">
      <img :src="project.image" :alt="project.title" class="project-image" />
      <h3>{{ project.title }}</h3>
      <p class="project-date">Date de creation: {{ project.date }}</p>
      <p class="project-technologies">Technologies utilisees: {{ project.technologies }}</p>
      <a :href="project.link" class="project-link" target="_blank">Lien github du projet</a>
    </div>

    <div v-if="showModal" class="modal" @click.self="closeModal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2>{{ selectedProject.title }}</h2>
        <p>{{ selectedProject.description }}</p>
        <div class="modal-images">
          <img v-for="(image, index) in selectedProject.detailsImages" :key="index" :src="image" :alt="selectedProject.title" class="modal-image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { id: 1, title: "curriculum vitae", date: "01/12/2023", technologies: ["HTML", "CSS", "W3C", "GIT et GITHUB"], link: "https://github.com/barrybalguissa/com", image: require("@/assets/cv.jpg"), detailsImages: [require("@/assets/cv.jpg"), require("@/assets/cv.jpg")] },
        {
          id: 2,
          title: "Espace Commentaire",
          date: "01/02/2024",
          technologies: ["HTML", "CSS", "JAVASCRIPT", "W3C", "GIT et GITHUB"],
          link: "https://github.com/barrybalguissa/com",
          image: require("@/assets/commentaire.jpg"),
          detailsImages: [require("@/assets/commentaire.jpg"), require("@/assets/commentaire.jpg")],
        },
        {
          id: 3,
          title: "cahier de charges",
          date: "01/01/2024",
          technologies: ["Cours", "Internet"],
          link: "https://github.com/barrybalguissa/cahier-de-charges",
          image: require("@/assets/cahier-de-charges.jpg"),
          detailsImages: [require("@/assets/cahier-de-charges.jpg"), require("@/assets/cahier-de-charges.jpg")],
          document: "/cahier-de-charges.pdf",
        },
      ],
      showModal: false,
      selectedProject: null,
    };
  },
  methods: {
    openModal(project) {
      this.selectedProject = project;
      this.showModal = true;
      document.body.style.overflow = "hidden";
    },
    closeModal() {
      this.showModal = false;
      document.body.style.overflow = "";
    },
  },
};
</script>

<style scoped>
.project-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  position: absolute;
  right: 400px;
  top: 0;
}

.project-item {
  cursor: pointer;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  width: 200px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.project-item:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.project-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 800px;
  text-align: center;
  position: relative;
  max-height: 80vh;
  overflow-y: auto;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
}

.modal-images {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.modal-image {
  width: calc(50% - 10px);
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}
</style>
