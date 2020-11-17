// richiamo VUE
const app = new Vue ({
  el: '#root', // chiamo il div nell'HTML
  data: {
  // definisco le immagini
  immagini: ['images/image1.jpg','images/image2.jpg','images/image3.jpg','images/image4.jpg'],
  // imposto il contatore a 0
  indiceCorrente: 0,
},
  methods: {
    prevClick: function() {
      if (this.indiceCorrente !=0) {
        this.indiceCorrente--;
      } else {
        this.indiceCorrente = this.immagini.length -1;
      }
    },
    nextClick: function() {
      if (this.indiceCorrente != this.immagini.length -1) {
        this.indiceCorrente++;
      } else {
        this.indiceCorrente = 0;
    }
  }
}
});
