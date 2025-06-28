
export interface Product {
    id: number;
    code: string;
    name: string;
    capacity: string; 
    image: string;
    usageIntensity: number;
    transportDistance: number;
    loadCapacity: number;
  }
  
  export interface ProductApiRaw {
    id: number;
    code: string;
    name: string;
    slug: string;
    description: string;
    featured_image: string;
    gallery: string[];
    selectTypes: SelectType[];
    numericTypes: NumericType[];
    seo?: any;
  }
  
  export interface SelectType {
    id: number;
    name: string;
    slug: string;
    is_multi: boolean;
    values: {
      name: string;
      id: string;
      value: string | null;
    };
  }
  
  export interface NumericType {
    id: number;
    name: string;
    slug: string;
    value: string;
  }
  