import React from 'react';

import { Header, Footer } from '../header-footer';
import { Categories } from '../products';

export default function MainPage() {
  return (
    <div>
      <Header />
      <Categories />
      <Footer />
    </div>
  )
}
