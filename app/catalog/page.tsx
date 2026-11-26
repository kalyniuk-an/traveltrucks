import type { Metadata } from 'next';
import CatalogClient from './Catalog.client';

export const metadata: Metadata = {
  title: 'Catalog',
  description: 'Browse and filter campers by location, body type, engine and transmission.',
};

export default function CatalogPage() {
  return <CatalogClient />;
}
