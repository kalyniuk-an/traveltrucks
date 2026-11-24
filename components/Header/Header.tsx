'use client';

import Link from 'next/link';
import Image from 'next/image';
import css from './Header.module.css';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isHome = pathname === '/';
  const isCatalog = pathname.startsWith('/catalog');
  return (
    <header className={css.header}>
      <div className={`container ${css.inner}`}>
        <Link href="/" className={css.logo}>
          <Image src="/logo.svg" alt="TravelTrucks" width={136} height={16} loading="eager" />
        </Link>

        <nav aria-label="Main navigation">
          <ul className={css.navList}>
            <li>
              <Link
                href="/"
                className={`${css.navLink} ${isHome ? css.active : ''}`}
                aria-current={isHome ? 'page' : undefined}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/catalog"
                className={`${css.navLink} ${isCatalog ? css.active : ''}`}
                aria-current={isCatalog ? 'page' : undefined}
              >
                Catalog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
