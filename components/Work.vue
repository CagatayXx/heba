<template>
  <div
    class=" overflow-hidden flex deadline w-full mr-3 bg-white rounded-md shadow-lg border-solid border-2 border-gray-100"
    :class="type == 'deadline' ? 'h-36' : 'h-40'"
  >
    <div v-if="type == 'normal'" class="w-41 p-2">
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
    <div class="w-36">
      <img
        v-if="type == 'deadline'"
        src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
        class="w-full h-32 mt-2 mr-1 pr-1"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      required: true,
      type: String
    }
  }
};
</script>
