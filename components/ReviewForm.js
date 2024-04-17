app.component('review-form', {
    template:
    
    `<form class="review-form mt" @submit.prevent="onSubmit" class="container">
      
      <fieldset class="form-group">
        <legend>Recenzija</legend>
        <div class="form-group">
          <label for="name">Ime:</label>
          <input id="name" v-model="name" class="form-control">
        </div>
        <div class="form-group">
          <label for="mailA">E-mail adresa:</label>
          <input id="mailA" v-model="mailA" class="form-control">
        </div>
        <div class="form-group">
          <label for="rating">Ocenite kvalitet usluge:</label>
          <select id="rating" v-model.number="rating" class="form-control">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
          </select>
            <p v-if="rating > 2" style="color: blue">Hvala na dobroj oceni! :)</p>
            <p v-else-if="rating < 3 && rating > 0">Zao nam je ako niste zadovoljni uslugom. Potrudicemo se da ispravimo greske! :(</p>
            <p v-else> </p>
        </div>
        <div class="form-group">
          <label for="review">Dodatno objasnjenje:</label>      
          <textarea id="review" v-model="review" maxlength="100" cols="100" rows="5" class="form-control"></textarea>
        </div>
      
        
      </fieldset>
  
      <input class="button btn-primary btn" type="submit" value="Submit">
      
      <a href="pocetna.html"> Vrati se na pocetnu stranicu</a>
    </form>
    `,
    data() {
      return {
        name: '',
        mailA: '',
        rating: null,
        review: ''
      }
    },
    methods: {
      onSubmit() {
        if (this.name === '' || this.mailA === '' || this.rating === null) {
          alert('Nepotpuna recenzija.')
          return
        }
  
        let productReview = {
          name: this.name,
          mailA: this.mailA,
          review: this.review,
          rating: this.rating
  
        }
        this.$emit('review-submitted', productReview)
  
        this.name = '',
        this.mailA = '',
        this.review = '',
        this.rating = null
        
        
      }
    }
  })