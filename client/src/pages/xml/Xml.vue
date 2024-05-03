<script>
import X2JS from 'x2js'

export default {
  data() {
    return {
      xmlData: null,
      jsonOutput: ''
    }
  },
  methods: {
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      let reader = new FileReader();
      reader.onload = (e) => {
        this.xmlData = e.target.result;
      };
      reader.readAsText(files[0]);
    },
    convertToJSON() {
      let x2js = new X2JS();
      let jsonObj = x2js.xml2js(this.xmlData);
      this.jsonOutput = JSON.stringify(jsonObj, null, 2);
    },
    downloadJSON() {
      let blob = new Blob([this.jsonOutput], {type: "application/json"});
      let link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = "output.json";
      link.click();
    }
  }
}
</script>

<template>
  <main>
    <img src="/perro-robot.webp" alt="Foto de perro robot">
    <section>
        <div id="menu">
          <input type="file" @change="onFileChange">
          <button @click="convertToJSON">Convertir a JSON</button>
          <button @click="downloadJSON" :disabled="!jsonOutput">Descargar JSON</button>
          <a href="/">Home</a>
      </div>

      <pre>{{ jsonOutput }}</pre>
    </section>
  </main>
</template>

<style scoped>

main {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  
  display: flex;
  justify-content: center;
  align-items: center;

}

section {
  display: flex;
  flex-direction: column;

  border-radius: 0.5rem;

  color: white;
  background-color: rgba(46, 170, 152, 0.541);

  width: 50%;
}

img {
    width: 100%;
    z-index: -1;

    position: fixed;
}

button, input {
  width: 35%;
  height: 2rem;

  color: rgb(121, 255, 248);
  font-weight: 600;

  border: 2px solid rgb(121, 255, 248);
  border-radius: 0.5rem;
  cursor: pointer;

  background-color: transparent;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.6));

  margin-bottom: 2rem;
}

a {
  font-weight: 600;

  color: rgb(121, 255, 248);

  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5));

  margin-right: 2rem;
}

pre {
  font-weight: 600;

  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.6));

  margin: 1rem;
}


#menu {
  width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 0.5rem;

    background: linear-gradient(90deg, rgba(40, 211, 191, 0.4), rgba(24, 173, 231, 0.4));
    backdrop-filter: blur(10px);

    padding: 1rem 0;
}

button:hover {
  background-color: rgba(255, 255, 255, 0.178);
}

</style>