import { computed } from "vue";
import type {
  FiltersData,
  FilterOption,
  CapacityRange,
  FilterSlug,
} from "~/types/filter";
import type { ApiResponse } from "~/types/api";

export function useFilters() {
    const config = useRuntimeConfig(); 

  const {
    data: response,
    pending,
    error,
  } = useFetch<ApiResponse<FiltersData>>(`${config.public.apiBase}/v1/products/filters`);

  const filters = computed(() => response.value?.data || null);

  const findSelectFilter = (slug: FilterSlug) =>
    filters.value?.["Select-Type"]?.find((filter) => filter.slug === slug);

  const findNumericFilter = (slug: FilterSlug) =>
    filters.value?.["Numeric-Type"]?.find((filter) => filter.slug === slug);

  const transformFilterValues = (values: any[] = []): FilterOption[] =>
    values.map((value) => ({
      id: parseInt(value.fields.id),
      value: parseInt(value.fields.value),
      name: value.fields.name,
    }));

  const getUsageIntensityFilter = computed(() =>
    findSelectFilter("usage-intensity")
  );
  const getTransportDistanceFilter = computed(() =>
    findSelectFilter("transport-distance")
  );
  const getPowerTypeFilter = computed(() => findSelectFilter("power-type"));
  const getLoadCapacityFilter = computed(() =>
    findNumericFilter("load-capacity")
  );

  const getUsageIntensityOptions = computed(() =>
    transformFilterValues(getUsageIntensityFilter.value?.values)
  );
  const getTransportDistanceOptions = computed(() =>
    transformFilterValues(getTransportDistanceFilter.value?.values)
  );
  const getPowerTypeOptions = computed(() =>
    transformFilterValues(getPowerTypeFilter.value?.values)
  );

  const getLoadCapacityRange = computed<CapacityRange>(() => {
    const filter = getLoadCapacityFilter.value;
    return filter
      ? { min: filter.from, max: filter.to }
      : { min: 0, max: 7000 };
  });

  return {
    filters,
    pending,
    error,
    getUsageIntensityFilter,
    getTransportDistanceFilter,
    getPowerTypeFilter,
    getLoadCapacityFilter,
    getUsageIntensityOptions,
    getTransportDistanceOptions,
    getPowerTypeOptions,
    getLoadCapacityRange,
  };
}
