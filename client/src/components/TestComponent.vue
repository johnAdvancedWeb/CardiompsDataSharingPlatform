<template>
  <div @click.stop>
    <div class="bg-white p-16 rounded shadow-2xl" style="cursor: default">
      <h2 class="text-3xl font-bold mb-10 text-purple-500">Add Experimental Data</h2>
      <form class="space-y-6">
        <div>
          <label class="block mb-2 font-bold text-gray-500" for="name">Experiment Name</label>
          <input type="text" id="name" class="w-full border-2 border-gray-200 p-2 rounded outline-none focus:border-purple-500">
        </div>

        <div>
          <label class="block mb-2 font-bold text-gray-500" for="email">Experiment Date</label>
          <input type="date" id="email" class="w-full border-2 border-gray-200 p-2 rounded outline-none focus:border-purple-500">
        </div>

        <div>
          <label class="block mb-2 font-bold text-gray-500" for="password">Results to Note</label>
          <input type="text" id="password" class="w-full border-2 border-gray-200 p-2 rounded outline-none focus:border-purple-500">
        </div>

        <button class="block w-full bg-yellow-300 text-black hover:bg-gray-200 hover:bg-purple-500 hover:text-white transition duration-300 p-4 rounded">Save</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
name: "TestComponent"
}
</script>

<style scoped>

</style>