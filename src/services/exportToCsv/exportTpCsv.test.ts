import Animal from '@interfaces/animal';
import { convertToCsv } from './exportToCsv';
interface ItemContainer {
  [key: string]: Animal;
}

describe('convertToCsv', () => {
  const items: ItemContainer = {
    ANMA0000034899: {
      uid: 'ANMA0000034899',
      name: 'Aldebaran mud leech',
      earthAnimal: false,
      earthInsect: false,
      avian: false,
      canine: false,
      feline: false,
    },
    ANMA0000262167: {
      uid: 'ANMA0000262167',
      name: 'Albatross',
      earthAnimal: true,
      earthInsect: false,
      avian: false,
      canine: false,
      feline: false,
    },
    ANMA0000264633: {
      uid: 'ANMA0000264633',
      name: 'Abalone',
      earthAnimal: true,
      earthInsect: false,
      avian: false,
      canine: false,
      feline: false,
    },
    ANMA0000032315: {
      uid: 'ANMA0000032315',
      name: "'Owon",
      earthAnimal: false,
      earthInsect: false,
      avian: false,
      canine: false,
      feline: false,
    },
  };

  test('converts animal objects to CSV format', () => {
    const expectedOutput =
      'ANMA0000034899 - ANMA0000034899,Aldebaran mud leech,false,false,false,false,false,\n' +
      'ANMA0000262167 - ANMA0000262167,Albatross,true,false,false,false,false,\n' +
      'ANMA0000264633 - ANMA0000264633,Abalone,true,false,false,false,false,\n' +
      "ANMA0000032315 - ANMA0000032315,'Owon,false,false,false,false,false,";
    expect(convertToCsv(items)).toBe(expectedOutput);
  });

  test('handles special characters in names correctly', () => {
    const items: ItemContainer = {
      ['1']: {
        uid: '1',
        name: 'Quot"e, and, Comma',
        earthAnimal: true,
        earthInsect: false,
        avian: true,
        canine: false,
        feline: false,
      },
    };
    const expectedOutput =
      '1 - 1,Quot"e, and, Comma,true,false,true,false,false,';
    expect(convertToCsv(items)).toBe(expectedOutput);
  });
});
