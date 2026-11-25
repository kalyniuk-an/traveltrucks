import type { Metadata } from 'next';
import Image from 'next/image';
import css from './page.module.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Campers of your dreams',
  description: 'You can find everything you want in our catalog.',
};

export default function Home() {
  return (
    <section className={css.hero}>
      <Image src="/hero.jpg" alt="" fill preload sizes="100vw" className={css.heroImage} />
      <div className={`container ${css.content}`}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.text}>You can find everything you want in our catalog</p>
        <Link href="/catalog" className="btn btn-primary">
          View Now
        </Link>
      </div>
    </section>
  );
}
