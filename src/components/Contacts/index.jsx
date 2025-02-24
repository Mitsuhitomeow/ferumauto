'use client';
import React from 'react';
import styles from './Contacts.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function Contacts() {
  return (
    <>
      <div className={styles.container}>
        <h1>КОНТАКТЫ</h1>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftGrid}>
          <p>КАРТА</p>
          <YMaps
            query={{
              ns: 'use-load-option',
              load: 'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon',
            }}>
            <Map
              className={styles.map}
              defaultState={{
                center: [52.386932, 31.022555],
                zoom: 17,
                controls: ['zoomControl'],
              }}>
              <Placemark
                defaultGeometry={[52.386932, 31.022555]}
                properties={{
                  balloonContentBody: 'Мы находимся тут:)',
                }}
              />
            </Map>
          </YMaps>
        </div>
        <div className={styles.rightGrid}>
          <div className={styles.gridElement}>
            <Link href="https://yandex.by/maps/-/CDQKqA4h" target="_blank">
              <Image
                className={styles.image_right}
                src="/svg_red/adress.svg"
                alt="Адрес"
                width={50}
                height={50}
              />
            </Link>
            <Link href="https://yandex.by/maps/-/CDQKqA4h" target="_blank">
              <h1>
                ГДЕ МЫ НАХОДИМСЯ <p>Гомель Достоевского 1в</p>
              </h1>
            </Link>
          </div>
          <div className={styles.gridElement}>
            <Link href="mailto:ferummavto@mail.ru">
              <Image
                className={styles.image_right}
                src="/svg_red/mail.svg"
                alt="Почта"
                width={50}
                height={50}
              />
            </Link>
            <Link href="mailto:ferummavto@mail.ru">
              <h1>FERUMMAVTO@MAIL.RU</h1>
            </Link>
          </div>
          <div className={styles.gridElement}>
            <Link href="tel:375293636020">
              {' '}
              <Image
                className={styles.image_right}
                src="/svg_red/phone.svg"
                alt="Телефон"
                width={50}
                height={50}
              />
            </Link>
            <Link href="tel:375293636020">
              <h1>+375293636020</h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
