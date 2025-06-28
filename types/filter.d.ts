
export interface FilterValue {
  type: string
  fields: {
    id: string
    value: string
    name: string
  }
}

export interface SelectTypeFilter {
  id: number
  name: string
  description: string
  slug: string
  is_multi: number
  values: FilterValue[]
}

export interface NumericTypeFilter {
  id: number
  name: string
  description: string
  slug: string
  from: number
  to: number
}

export interface FiltersData {
  'Select-Type': SelectTypeFilter[]
  'Numeric-Type': NumericTypeFilter[]
}

export interface FiltersResponse {
  status: boolean
  data: FiltersData
  message: string
}

// Formatted option types for UI components
export interface FilterOption {
  id: number
  value: number
  name: string
}

export interface CapacityRange {
  min: number
  max: number
}

// Filter state types
export interface FilterState {
  selectedUsageCircle: number | null
  selectedTransportCircle: number | null
  minCapacity: number
  maxCapacity: number
}

// Filter slug constants
export type FilterSlug = 
  | 'usage-intensity'
  | 'transport-distance'
  | 'power-type'
  | 'load-capacity'

// Filter type constants
export type FilterType = 'Select-Type' | 'Numeric-Type'

// Props interfaces for filter components
export interface UsageIntensityFilterProps {
  options: FilterOption[]
  selected: number | null
}

export interface TransportDistanceFilterProps {
  options: FilterOption[]
  selected: number | null
}

export interface LoadCapacityFilterProps {
  min: number
  max: number
  range: CapacityRange
  dragging?: boolean
  dragHandle?: string | null
  sliderRef?: any
}

export interface FilterChipProps {
  label?: string
  value: string
}
