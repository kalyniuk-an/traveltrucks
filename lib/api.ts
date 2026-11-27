import axios from 'axios';
import type { CamperFilters } from '@/types/filters';
import type {
  BookingRequest,
  BookingResponse,
  CamperDetails,
  CampersResponse,
  Review,
} from '@/types/camper';

const api = axios.create({
  baseURL: 'https://campers-api.goit.study',
});

export const PER_PAGE = 4;

export async function fetchCampers(
  page: number,
  filters: CamperFilters
): Promise<CampersResponse> {
  const { data } = await api.get<CampersResponse>('/campers', {
    params: {
      page,
      perPage: PER_PAGE,
      location: filters.location || undefined,
      form: filters.form || undefined,
      engine: filters.engine || undefined,
      transmission: filters.transmission || undefined,
    },
  });
  return data;
}

export async function fetchCamperById(camperId: string): Promise<CamperDetails> {
  const { data } = await api.get<CamperDetails>(`/campers/${camperId}`);
  return data;
}

export async function fetchReviews(camperId: string): Promise<Review[]> {
  const { data } = await api.get<Review[]>(`/campers/${camperId}/reviews`);
  return data;
}

export async function createBooking(
  camperId: string,
  booking: BookingRequest
): Promise<BookingResponse> {
  const { data } = await api.post<BookingResponse>(
    `/campers/${camperId}/booking-requests`,
    booking
  );
  return data;
}