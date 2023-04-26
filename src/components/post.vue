<script setup>

defineProps({
  title:{
      type: String,
      required: true,
  },
  body:{
      type: String,
      required: true,
  }
})

</script>

<template>

    <div>
        <pv-card class="myCard">
            <template #title>
                <h3 class="postTitle"> {{title}} </h3>
            </template>
            <template #content>

                <p class="postBody">{{body}}</p>

            </template>
        </pv-card>
    </div>

</template>

<script>
export default {
    name: "post"
}
</script>

<style scoped>

.myCard{
    margin-bottom: 5px;
}

.postTitle{
    background-color: grey;
    color: blue;
    font-weight: bold;
    border-radius: 3px;
}

.postBody {
    background-color: white;
    color: darkblue;
    border-radius: 3px;
}

</style>