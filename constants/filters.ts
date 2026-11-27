import type { CamperEngine, CamperForm, CamperTransmission } from '@/types/camper';

export const CAMPER_FORMS: { label: string; value: CamperForm }[] = [
  { label: 'Alcove', value: 'alcove' },
  { label: 'Panel Van', value: 'panel_van' },
  { label: 'Integrated', value: 'integrated' },
  { label: 'Semi Integrated', value: 'semi_integrated' },
];

export const ENGINES: { label: string; value: CamperEngine }[] = [
  { label: 'Diesel', value: 'diesel' },
  { label: 'Petrol', value: 'petrol' },
  { label: 'Hybrid', value: 'hybrid' },
  { label: 'Electric', value: 'electric' },
];

export const TRANSMISSIONS: { label: string; value: CamperTransmission }[] = [
  { label: 'Automatic', value: 'automatic' },
  { label: 'Manual', value: 'manual' },
];