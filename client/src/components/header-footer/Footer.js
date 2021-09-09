import React from 'react';
import { Link } from 'react-router-dom';
import './Header-Footer.css';

export default function Footer() {

  return (
    <footer>
      <Link to={'/contacts'} className={'headerLink'}> Контакти </Link>
      <Link to={'/rules'} className={'headerLink'}> Правила користування </Link>
      <Link to={'/delivery'} className={'headerLink'}> Доставка</Link>
      <Link to={'/payment'} className={'headerLink'}> Оплата </Link>
    </footer>
  )
}
