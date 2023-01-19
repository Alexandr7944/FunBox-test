export interface Product {
  id: number;
  type: string;
  portions: string;
  action: string;
  mass: string;
  status: boolean;
  selected: string;
  disabled: string;
}

export const options = [
  {
    id: 1,
    type: 'с фуа-гра',
    portions: '10 порций',
    action: 'мышь в подарок',
    mass: '0,5',
    status: true,
    selected: 'Печень утки разварная с артишоками.',
    disabled: 'Печалька, с фуа-гра закончился.',
  },
  {
    id: 2,
    type: 'с рыбой',
    portions: '40 порций',
    action: '2 мыши в подарок',
    mass: '2',
    status: true,
    selected: 'Головы щучьи с чесноком да свежайшая семгушка.',
    disabled: 'Печалька, с рыбой закончился.',
  },
  {
    id: 3,
    type: 'с курой',
    portions: '100 порций',
    action: '5 мышей в подарок заказчик доволен',
    mass: '5',
    status: false,
    selected: 'Филе из цеплят с трюфелями в бульоне.',
    disabled: 'Печалька, с курой закончился.',
  },
];
