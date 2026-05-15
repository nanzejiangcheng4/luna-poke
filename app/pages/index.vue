<script setup lang="ts">
import { onMounted } from "vue";
import { useRandomQuote } from "~/composables/useRandomQuote";

const { randomQuote, isLoading, updateQuote } = useRandomQuote();

onMounted(() => {
  updateQuote();
});
</script>

<template>
  <div class="flex h-screen flex-col items-center justify-center text-center">
    <div class="text-2xl font-bold mb-8">
      {{ randomQuote }}
    </div>
    <button
      @click="updateQuote"
      :disabled="isLoading"
      class="bg-luna-purple hover:bg-luna-pink text-white px-4 py-2 rounded-xl transition-colors duration-300 shadow-lg"
    >
      {{ isLoading ? "更新中。。。" : "もう一回" }}
    </button>
  </div>
</template>
