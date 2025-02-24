import styles from './page.module.css';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className={styles.main_found}>
      <h2>Упс! Ошибка 404 - Страница не найдена!</h2>
      <p>
        Перейти на главную:{' '}
        <Link href="/" className={styles.urlnotfound}>
          Главная
        </Link>
      </p>
    </div>
  );
}
