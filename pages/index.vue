<template>
  <div class="mx-auto min-h-full w-full">
    <script src="https://hebaweb.herokuapp.com/fontawesome.min.js"></script>
    <link
      rel="stylesheet"
      href="https://hebaweb.herokuapp.com/fontawesome.min.css"
    />

    <Header />

    <div class="w-full h-56" style="overflow:auto">
      <div class="mx-auto Works w-80  mt-4 flex">
        <Work :type="'deadline'" />
        <Work :type="'deadline'" />
        <Work :type="'deadline'" />
        <p>
          <img src="./favicon.ico" alt="">
        </p>
      </div>
    </div>
    <div class="homeworks justify-center mx-auto" style="width:55vw">
      <!-- <div
        class=" overflow-hidden flex deadline w-full h-41 mr-3 bg-white rounded-md shadow-lg border-solid border-2 border-gray-100"
      >
        <div class="w-41 p-2">
          <img
            src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
            class="w-full h-full mt-1 mr-1 pr-1"
          />
        </div>
        <div class="w-4/6 truncate block pl-4 pt-3">
          <p class="text-2xl w-full truncate">
            Çocuklar Bu Önemli asd asd asd adasd asd asd asd asd asd asd asd sdi
          </p>
          <p class="text-sm text-gray-700">
            Cemal Halatcı
            <span class="uppercase text-xs ml-2">Kimya</span>
          </p>

          <div class="flex w-32 pl-8 mt-1 mx-auto text-gray-700">
            <div class="flex mr-2">
              <div class="text-center">
                <i class="fas fa-eye text-2/5xl block"></i
                ><span class=" font-bold">11</span>
              </div>
            </div>
            <div class="flex mr-2">
              <div class="text-center">
                <i class="far fa-edit text-2/5xl block"></i
                ><span class=" font-bold">11</span>
              </div>
            </div>
            <div class="flex">
              <div class="text-center">
                <i class="fas fa-user-graduate text-2/5xl block"></i
                ><span class=" font-bold">11</span>
              </div>
            </div>
          </div>
        </div>
      </div> -->
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
