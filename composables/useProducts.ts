import { useFetch } from "#app";
import { computed } from "vue";
import type { Product, ProductApiRaw } from "@/types/product";
import type { ApiResponse } from "@/types/api";

export async function useProductList() {
  const config = useRuntimeConfig();

  const {
    data: apiData,
    pending,
    error,
  } = await useFetch<ApiResponse<ProductApiRaw[]>>(
    `${config.public.apiBase}/v1/products/getJson`
  );

  const products = computed<Product[]>(() => {
    if (!apiData.value?.data) return [];

    return apiData.value.data.map((item) => ({
      id: item.id,
      code: item.code,
      name: item.name,
      capacity: `${Math.round(
        parseFloat(
          item.numericTypes.find((x) => x.slug === "load-capacity")?.value ||
            "0"
        )
      )} Kg`,
      image: item.featured_image || "/images/forklift.png",
      usageIntensity: parseInt(
        item.selectTypes.find((x) => x.slug === "usage-intensity")?.values
          ?.value || "0"
      ),
      transportDistance: parseInt(
        item.selectTypes.find((x) => x.slug === "transport-distance")?.values
          ?.value || "0"
      ),
      loadCapacity: parseFloat(
        item.numericTypes.find((x) => x.slug === "load-capacity")?.value || "0"
      ),
    }));
  });

  return { products, pending, error };
}
