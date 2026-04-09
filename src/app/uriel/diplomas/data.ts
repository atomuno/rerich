export interface DiplomaGroup {
  year: number;
  count: number;
  // Мы предполагаем, что файлы названы "ГОД.jpg", "ГОД_2.jpg" и т.д.
}

export const diplomasData: DiplomaGroup[] = [
  { year: 1997, count: 2 }, // Файлы 1997.jpg, 1997_2.jpg
  { year: 1999, count: 1 },
  { year: 2000, count: 1 },
  { year: 2004, count: 1 },
  { year: 2005, count: 1 },
  { year: 2008, count: 1 },
  { year: 2009, count: 4 }, // До 2009_4.jpg включительно
  { year: 2011, count: 1 },
  { year: 2012, count: 3 }, // До 2012_3.jpg включительно
  { year: 2013, count: 3 }, // До 2013_3.jpg включительно
  { year: 2014, count: 1 },
  { year: 2015, count: 1 },
  { year: 2016, count: 3 }, // До 2016_3.jpg включительно
  { year: 2017, count: 1 },
  { year: 2018, count: 1 },
  { year: 2020, count: 3 }, // До 2020_3.jpg включительно
  { year: 2021, count: 1 },
];
