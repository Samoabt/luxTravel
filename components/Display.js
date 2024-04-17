app.component('product-display', {
  
  template: 
  `<div class="product-display">
    <div class="product-container">
      
        
        
      </div>
    </div>
    
    <review-form @review-submitted="addReview"></review-form>
  </div>`,
  data() {
    return {
        reviews: []
    }
  },
  methods: {
      
      addReview(review) {
        this.reviews.push(review)
      }
  }
  
      
  
})