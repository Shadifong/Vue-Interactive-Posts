
<template>
  <div class="comments">
     <div class="comment col-sm-4"  >

        <div id="title">
          {{name}}
          </div>
        <div class="email">
        {{email}}
        </div>
          <p>{{body}}</p>
        </div>
    
      </div>
  </div>
</template>


<style lang="scss" src="./comment.scss" scoped>
</style>
<script>
export default {
  name: "comment",
  props: {
    name: String,
    email: String,
    body: String
  }
};
</script>
