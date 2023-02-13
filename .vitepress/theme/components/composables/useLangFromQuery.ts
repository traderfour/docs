import { onMounted, ref } from "vue";
import type { Ref } from "vue";

export const useLangFromQuery = (): Ref<string> => {
  const langFromQuery = ref("");

  onMounted(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    langFromQuery.value = params.lang;
  });
  return langFromQuery;
};
