<script setup lang="ts">
import { ref, onMounted } from "vue";
import { quotes } from "~/data/quotes";

const randomQuote = ref("");
const isLoading = ref(false);
const currentIndex = ref(-1);

const updateQuote = async () => {
  isLoading.value = true;
  // アニメーション表示の時間
  await new Promise((resolve) => setTimeout(resolve, 300));

  let randomIndex: number;
  // 前と異なるインデックスを選ぶ
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === currentIndex.value && quotes.length > 1);

  currentIndex.value = randomIndex;
  randomQuote.value = quotes[randomIndex] ?? "なのら〜！";
  isLoading.value = false;
};

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
      class="rounded-lg bg-blue-500 px-6 py-2 text-white font-semibold hover:bg-blue-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {{ isLoading ? "更新中。。。" : "もう一回" }}
    </button>
  </div>
</template>
