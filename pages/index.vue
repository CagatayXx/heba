<template>
  <div class="mx-auto min-h-full w-full">
    <Header />

    <div class="w-full h-56" style="overflow:auto">
      <div class="mx-auto Works w-80  mt-4 flex">
        <Work :type="'deadline'" />
        <Work :type="'deadline'" />
        <Work :type="'deadline'" />
        <p>
        </p>
      </div>
    </div>
    <div class="homeworks justify-center mx-auto" style="width:55vw">
      <work :type="'normal'" />
    </div>
  </div>
</template>

<script>
import Work from "@/components/Work";
import Header from "@/components/Header";

export default {
  components: {
    Work,
    Header
  },
  created(){
    this.$axios.post("/api/deneme", {asd: 'selamlar'})
    .then(result => {
      console.log(result.data)
    })
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  width: 100vw;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
