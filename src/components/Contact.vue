<template>
  <div class="contact">
    <h1>Contactez-moi</h1>
  <div class="contact-infos">
  <p>
    <strong>Email :</strong>
    <a href="mailto:balguissabarry43@gmail.com">balguissabarry43@gmail.com</a>
  </p>
  <p>
    <strong>LinkedIn :</strong>
    <a href="https://www.linkedin.com/in/balguissa-barry-2b352a275/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BCOJtpMNvQui4zC3tDvhm8A%3D%3D" target="_blank" rel="noopener noreferrer">
      linkedin.com/in/Balguissa-Barry
    </a>
  </p>
  <p>
    <strong>GitHub :</strong>
    <a href="https://github.com/barrybalguissa/portfolio1" target="_blank" rel="noopener noreferrer">
      github.com/barrybalguissa
    </a>
  </p>
</div>

    <form>
      <div class="form-group">
        <label for="name">Nom:</label>
        <input type="text" id="name" name="name" />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" name="message"></textarea>
      </div>
      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactSection",
};
</script>

<style scoped>

.contact {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: wheat;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  position: absolute;
  right: 500px;
  top: 0;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--secondary-color);
}

input,
textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  font-size: 1rem;
}

button {
  width: 100%;
  padding: 0.75rem;
  background-color: var(--primary-color);
  color: green;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background-color: var(--secondary-color);
}
</style>
