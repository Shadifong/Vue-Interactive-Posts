
<template>
  <div class="comments">
    <div class="comment">
      <span class="info" style="
    font-size: 18px;">{{name}}</span>
      <span class="email">{{email}}</span>
      {{body}}
    </div>
  </div>
</template>


<style lang="sass" scoped>



.comments
  width: 60%
  margin: 15px auto

.email
  font-size: 12px
  height: 100px
  margin-top: auto
  border-radius: 14px
  font-weight: bold
  display: flex
  justify-content: center
  font-weight: bold
  text-align: center
  margin-bottom: -60px
  font-size: 16px

span.info
  display: block
  border-bottom: 1px solid #ddd
  height: 10%
  font-size: 22px
  margin: 0px 0px 12px 5px
  font-size: 13px
  font-style: italic

.comment
  position: relative
  color: #333
  min-height: 77px
  padding: 5px
  border-radius: 10px
  border-radius: 10px
  border: #bbb solid 1px
  border-width: 0px 1px 3px 0px
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
