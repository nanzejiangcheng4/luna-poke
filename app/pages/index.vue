<script setup lang="ts">
import { onMounted } from "vue";
import { useRandomQuote } from "~/composables/useRandomQuote";

const { randomQuote, isLoading, updateQuote } = useRandomQuote();

onMounted(() => {
  updateQuote();
});
</script>

<template>
  <div class="fixed bottom-4 right-4">
    <div class="flex flex-col items-center text-center">
      <div class="mb-4 rounded-2xl bg-white p-4 shadow-lg hover:shadow-xl">
        {{ isLoading ? "更新中。。。" : randomQuote }}
      </div>
      <div class="animate-float">
        <button
          @click="updateQuote"
          :disabled="isLoading"
          class="cursor-pointer transition-transform duration-200 hover:scale-105 hover:rotate-[-2deg] active:scale-95"
        >
          <img
            src="/images/luna-pen-happy.png"
            alt="Luna"
            class="size-40 object-cover"
          />
        </button>
      </div>
    </div>
  </div>
</template>
