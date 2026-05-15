import { ref } from "vue";
import { quotes } from "~/data/quotes";

export const useRandomQuote = () => {
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

  return {
    randomQuote,
    isLoading,
    updateQuote,
  };
};
