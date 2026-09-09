/**
 * Product catalogue. Prices are plain numbers in BRL — `formatBRL()` in
 * cards.js owns how they are written, so the cart and the cards can never drift
 * apart. `mobileOnly` items exist purely to keep the 2-up mobile grid even.
 */
export const PRODUCTS = {
  // NEW COLLECTION — row 1 (next to the AURORA feature card)
  new: [
    {
      img: '/product/cut/1.png',
      name: 'AURORA SILVER',
      sub: 'JAQUETA PUFFER REFLETIVA',
      price: 999.99,
      colors: [
        { label: 'BRANCO', hex: '#f2f7fb' },
        { label: 'AZUL', hex: '#8fb3cf' },
      ],
    },
    {
      img: '/product/cut/2.png',
      name: 'ORBIT SILVER',
      sub: 'PUFFER ALTO BRILHO',
      price: 1299.99,
      colors: [{ label: 'PRATA', hex: '#cdd7de' }],
    },
    {
      img: '/product/cut/3.png',
      name: 'STEALTH BLACK',
      sub: 'PUFFER BLINDADA PESADA',
      price: 1199.99,
      dark: true,
      colors: [
        { label: 'PRETO', hex: '#12171c' },
        { label: 'BRANCO', hex: '#f2f7fb' },
      ],
    },
  ],

  // NEW COLLECTION — row 2
  new2: [
    {
      img: '/product/cut/4.png',
      name: 'GLACIER WHITE',
      sub: 'JAQUETA PUFFER TÉRMICA',
      price: 1299.99,
      colors: [{ label: 'CINZA', hex: '#b7c3cc' }],
    },
    {
      img: '/product/cut/5.png',
      name: 'POLAR GLOSS',
      sub: 'JAQUETA PUFFER AZUL',
      price: 899.99,
      colors: [{ label: 'AZUL GLOSS', hex: '#a9c3da' }],
    },
    {
      img: '/product/cut/6.png',
      name: 'STEALTH BLACK',
      sub: 'JAQUETA PUFFER PESADA',
      price: 1199.99,
      dark: true,
      colors: [
        { label: 'AZUL MARINHO', hex: '#1d2b3d' },
        { label: 'PRETO', hex: '#12171c' },
      ],
    },
    {
      img: '/product/cut/7.png',
      name: 'ICEFIELD BLUE',
      sub: 'JAQUETA PUFFER TECH',
      price: 999.99,
      colors: [{ label: 'AZUL', hex: '#9dbad2' }],
    },
    {
      img: '/product/cut/8.png',
      name: 'POLAR WHITE',
      sub: 'JAQUETA PUFFER SHELL',
      price: 1499.99,
      colors: [{ label: 'BRANCO', hex: '#f2f7fb' }],
    },
  ],

  // COLD OPS INVENTORY
  ops: [
    {
      img: '/product/cut/9.png',
      name: 'FROST BLUE',
      sub: 'JAQUETA PUFFER UNIT',
      price: 999.99,
      colors: [
        { label: 'AZUL FROST', hex: '#b9cddd' },
        { label: 'AZUL FRIO', hex: '#7f9fbb' },
      ],
    },
    {
      img: '/product/cut/10.png',
      name: 'LITE FIELD',
      sub: 'JAQUETA PUFFER BRANCA',
      price: 1299.99,
      colors: [{ label: 'BRANCO', hex: '#f2f7fb' }],
    },
    {
      img: '/product/cut/11.png',
      name: 'GLACIAL BLUE',
      sub: 'JAQUETA PUFFER REFLETIVA',
      price: 899.99,
      colors: [{ label: 'AZUL GELO', hex: '#a6c2d9' }],
    },
    {
      img: '/product/cut/12.png',
      name: 'VOID BLACK',
      sub: 'JAQUETA PUFFER OPS',
      price: 1599.99,
      dark: true,
      colors: [
        { label: 'PRETO TOTAL', hex: '#0f1418' },
        { label: 'BRANCO', hex: '#f2f7fb' },
      ],
    },
    {
      img: '/product/cut/2.png',
      name: 'SILVER REFLECTOR X',
      sub: 'JAQUETA PUFFER',
      price: 1299.99,
      colors: [
        { label: 'CINZA', hex: '#b7c3cc' },
        { label: 'BRANCO', hex: '#f2f7fb' },
      ],
    },
    {
      img: '/product/cut/5.png',
      name: 'POLAR GLOSS II',
      sub: 'JAQUETA PUFFER',
      price: 949.99,
      mobileOnly: true,
      colors: [{ label: 'AZUL GLOSS', hex: '#a9c3da' }],
    },
  ],

  // PRODUCT CARD DESIGN showcase
  lab: [
    {
      img: '/product/cut/10.png',
      name: 'AURORA SILVER',
      sub: 'JAQUETA PUFFER REFLETIVA',
      price: 999.99,
      colors: [
        { label: 'BRANCO', hex: '#f2f7fb' },
        { label: 'AZUL', hex: '#8fb3cf' },
      ],
    },
    {
      img: '/product/cut/7.png',
      name: 'ICEFIELD BLUE',
      sub: 'JAQUETA PUFFER TECH',
      price: 999.99,
      colors: [{ label: 'AZUL', hex: '#9dbad2' }],
    },
  ],

  lab2: [
    {
      img: '/product/cut/6.png',
      name: 'STEALTH BLACK',
      sub: 'JAQUETA PUFFER PESADA',
      price: 1199.99,
      dark: true,
      colors: [
        { label: 'AZUL MARINHO', hex: '#1d2b3d' },
        { label: 'PRETO', hex: '#12171c' },
      ],
    },
    {
      img: '/product/cut/11.png',
      name: 'GLACIAL BLUE',
      sub: 'JAQUETA PUFFER REFLETIVA',
      price: 899.99,
      mobileOnly: true,
      colors: [{ label: 'AZUL GELO', hex: '#a6c2d9' }],
    },
  ],
};
