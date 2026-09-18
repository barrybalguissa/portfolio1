<template>
  <div class="contact">
    <h1>Contactez-moi</h1>
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
