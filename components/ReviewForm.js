app.component("review-form", {
  template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name">

    <label for="review">Review:</label>
    <textarea id="review" v-model="review"></textarea>

    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

    <!-- solution -->
    <label for="recommend">Would you recommend this product?</label>
    <select id="recommend" v-model="recommend">
      <option>Yes</option>
      <option>No</option>
    </select>
    <!-- solution -->   

    <input class="button" type="submit" value="Submit">  

  </form>`,
  data() {
    return {
      name: "",
      review: "",
      rating: null,
      //   recommend: ''
    };
  },
  methods: {
    onSubmit() {
      if (
        this.name === "" ||
        this.review === "" ||
        this.rating === null ||
        this.recommend === null
      ) {
        alert("Review is incomplete. Please fill out every field.");
        return;
      }

      let productReview = {
        //we create an object and the values are the ones entered on input
        name: this.name,
        review: this.review,
        rating: this.rating,
      };
      //now we emit the productReview up as we want them on the product not in the reviewform
      //review-submitted is the event that is being emitted and the productReview is the payload
      this.$emit("review-submitted", productReview),
        (this.name = ""), //values are reset after submit
        (this.review = ""),
        (this.rating = null);
    },
  },
});
