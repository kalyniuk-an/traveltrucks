export type CamperForm = 'alcove' | 'panel_van' | 'integrated' | 'semi_integrated';
export type CamperEngine = 'diesel' | 'petrol' | 'hybrid' | 'electric';
export type CamperTransmission = 'automatic' | 'manual';

export type CamperAmenity =
  | 'ac'
  | 'bathroom'
  | 'kitchen'
  | 'tv'
  | 'radio'
  | 'refrigerator'
  | 'microwave'
  | 'gas'
  | 'water';

// CamperListItemDto
export interface CamperListItem {
  id: string;
  name: string;
  price: number;
  rating: number;
  totalReviews: number;
  location: string;
  // У схемі Swagger немає, але API його повертає
  description: string;
  form: CamperForm;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: CamperTransmission;
  engine: CamperEngine;
  amenities: CamperAmenity[];
  coverImage: string;
}

// CamperListResponseDto
export interface CampersResponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: CamperListItem[];
}

// CamperImageEntity
export interface CamperImage {
  id: string;
  camperId: string;
  thumb: string;
  original: string;
  order: number;
}

// CamperDetailsEntity
export interface CamperDetails extends Omit<CamperListItem, 'coverImage'> {
  gallery: CamperImage[];
  createdAt: string;
  updatedAt: string;
}

// ReviewEntity
export interface Review {
  id: string;
  camperId: string;
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
  createdAt: string;
}

// FiltersResponseDto
export interface FiltersResponse {
  forms: CamperForm[];
  transmissions: CamperTransmission[];
  engines: CamperEngine[];
}

// BookingRequestDto
export interface BookingRequest {
  name: string;
  email: string;
}

// BookingRequestResponseDto
export interface BookingResponse {
  message: string;
}