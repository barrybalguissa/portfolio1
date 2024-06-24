<template>
  <div>
    <h1>À propos de moi</h1>
    <p>Etudiante en formation professionnelle de niveau 5 en developpement web et web mobile.</p>
    <div class="linkFooter">
      <div class="link">
        <a href="https://github.com/barrybalguissa" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/balguissa-barry-2b352a275/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BS7xhrE1mRh2hLux6ZrmqPA%3D%3D" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutSection",
};
</script>

<style scoped>
h1 {
  right: 500px;
  top: 0;
  font-size: 3rem;
  color: yellow;
  text-align: right;
}
p {
  right: 500px;
  top: 0;
  text-align: right;
  margin-left: auto;
  float: right;
}

.linkFooter {
  margin-top: auto;
  text-align: center;
  padding: 10px;
}
.link {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.link a {
  color: #333;
  font-size: 24px;
  text-decoration: none;
}
</style>
