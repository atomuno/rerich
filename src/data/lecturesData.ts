/** Источник для сида Payload (`lectures`) и при необходимости — для сайта. */
export type LectureSeedRow = {
  id: number;
  title: string;
  speaker: string;
  date: string;
  url: string;
  tag?: string;
};

export const lecturesData: LectureSeedRow[] = [
  {
    id: 100,
    title: "Презентация монографии: Севастопольские летописи (1783-2024)",
    speaker: "Головина Н.М., Головин В.В.",
    date: "10 апреля 2026",
    url: "https://rutube.ru/video/private/f9540b724c2ef6447a77d0e052da9b62/?p=5M2eM6aIenejVPI8GTpf5w",
    tag: "Монография",
  },
  {
    id: 200,
    title: "Идеи Пакта Рериха в социалистической Болгарии",
    speaker: "Лебеденко Анатолий Андреевич",
    date: "10 апреля 2026",
    url: "https://rutube.ru/video/private/19e69784aa5cc838563836a1db791ea1/?p=yWItpeQA4EEvXu4KdVMJuQ",
    tag: "Доклад 1",
  },
  {
    id: 300,
    title: "Культура как Знамя Мира и Победы!",
    speaker: "Расулова Татьяна Салиховна",
    date: "10 апреля 2026",
    url: "https://rutube.ru/video/private/ff2c7cb86d631b71e648a2054a72c630/?p=Z9FPwSTtQyEIFyENiSsiQQ",
    tag: "Доклад 2",
  },
  {
    id: 400,
    title:
      "Проблематика воспитания и созидания истинных людей в трудах Е.И. Рерих",
    speaker: "Головина Наталья Михайловна",
    date: "10 апреля 2026",
    url: "https://rutube.ru/video/private/19e021e7dc28128aacc129214bd8fce2/?p=voeBEf298LbDc8FaZtfsVg",
    tag: "Доклад 3",
  },
  {
    id: 500,
    title: "Метаморфозы ответственности в современную эпоху",
    speaker: "Тупиленко Анастасия Бахтиеровна",
    date: "10 апреля 2026",
    url: "https://rutube.ru/video/private/fb1633bf33e30a3fc4b32942b100d0bf/?p=o0RMAge3ao8KFBtWUo4UXA",
    tag: "Доклад 4",
  },
  {
    id: 600,
    title: "Общезначное время как онтологическая мера реальности",
    speaker: "Григорьев Павел Евгеньевич",
    date: "11 апреля 2026",
    url: "https://rutube.ru/video/private/447531b2556bb41b3bbedaa3f8229ce0/?p=TS_7nVpH3HJ83HPKnXSxBQ",
    tag: "Доклад 5",
  },
  {
    id: 700,
    title:
      "Ретропричинность как эффект физико-семантической связности событий",
    speaker: "Григорьев Павел Евгеньевич",
    date: "11 апреля 2026",
    url: "https://rutube.ru/video/private/5bc0a9d74ba09d7585f513e345c26656/?p=kAXdruaFj_I6TIGwwwgunQ",
    tag: "Доклад 6",
  },
  {
    id: 800,
    title:
      "Формирование консорций при помощи ИИ как перспективная социальная технология",
    speaker: "Сулейменов Ибрагим Эсенович",
    date: "11 апреля 2026",
    url: "https://rutube.ru/video/private/15aeb821e3b4465934531a79c4a3170b/?p=F5U5axyQMV55SwLfqSvkZg",
    tag: "Доклад 7",
  },
  {
    id: 900,
    title:
      "Значение наследия Н.К. Рериха при обсуждении новой модели развития России",
    speaker: "Головин Владислав Викторович",
    date: "11 апреля 2026",
    url: "https://rutube.ru/video/private/4d55752f8f52c52987415ee64830c2d1/?p=pH_W52Py-aSkaakk31dGOw",
    tag: "Доклад 8",
  },
  {
    id: 1000,
    title: "Идеи космизма Рериха в социалистической Болгарии",
    speaker: "Лебеденко А.А.",
    date: "07 февраля 2026",
    url: "https://rutube.ru/video/private/97fda97b6aa1586efc8cfef211441b56/?p=7nMdP1Y5pEEAb-jZaNXMtA",
  },
  {
    id: 1100,
    title: "Понятие 'Карма': возможность рациональной интерпретации",
    speaker: "Сулейменов И.Э.",
    date: "09 апреля 2025",
    url: "https://rutube.ru/video/private/806c58dbd64e01b45764be2ed2ba4fea/?p=oz7uokrT3gJ6at5dBzplew",
  },
  {
    id: 1200,
    title: "Знамя Мира в творчестве Рерихов",
    speaker: "Захарова Т.С.",
    date: "06 апреля 2025",
    url: "https://rutube.ru/video/private/bc4bc037c15a040cbf7fc533049b0a04/?p=N-TSlEu7ch5WJ5wHrjer1g",
  },
  {
    id: 1300,
    title: "Литературное наследие Е.И. Рерих",
    speaker: "Лебеденко А.А.",
    date: "16 февраля 2025 г",
    url: "https://rutube.ru/video/private/34f499ee59f66d4a8c8eeecd1fb296ad/?p=XEKgYNJyyRgr2f3Uc8VGWg",
  },
  {
    id: 1400,
    title: "С.Н. Рерих об основах воспитания красотой: Бангалорский период",
    speaker: "Лебеденко А.А.",
    date: "21 апреля 2024",
    url: "https://rutube.ru/video/private/380f14d7a3fc9b58f61e7fd6cd65a5aa/?p=OnTvpkEnG6tjMWo3P3N80g",
  },
  {
    id: 1500,
    title: "Экранная культура: альтернативные формы познания",
    speaker: "Сулейменов И.Э.",
    date: "10 апреля 2024",
    url: "https://rutube.ru/video/private/39414878d086f390ec3ea193849fb9eb/?p=Bc1QZc5u03eRzDHU6uNQIQ",
  },
  {
    id: 1600,
    title:
      "Искусство Людмилы Кирилловой как способ познания творчества Рерихов",
    speaker: "Захарова Т.С.",
    date: "10 апреля 2024",
    url: "https://rutube.ru/video/private/1da08cde788b575be2f6a9c45e4e8f4e/?p=83ARXt0lCyTthvvptwGxog",
  },
  {
    id: 1700,
    title:
      "Николай Рерих и Валентин Булгаков: добротворчество во благо культуры России",
    speaker: "Кулакова Е.С.",
    date: "10 апреля 2024",
    url: "https://rutube.ru/video/private/5b7d35b221f24740c010a108156c60f8/?p=WgC5V3bj1nlOfnNvPF6Atw",
  },
  {
    id: 1800,
    title: "Подвиг героя духа земли русской",
    speaker: "Лебеденко А.А.",
    date: "01 апреля 2023",
    url: "https://rutube.ru/video/private/948b41eaa03b709d0cb1b4ca159ca596/?p=oecL08Ag37fWHLGKr6lMmg",
  },
  {
    id: 1900,
    title: "Философия сердца в русской культуре",
    speaker: "Лебеденко А.А.",
    date: "27 ноября 2023 г",
    url: "https://rutube.ru/video/private/b99cefc0221eabbdf1a1b7c205a07238/?p=b_4EWljxeqDpk9BlSV1fcQ",
  },
  {
    id: 2000,
    title:
      "Философия космической реальности о духовных задачах России на пути в будущее",
    speaker: "Лебеденко А.А.",
    date: "03 ноября 2023",
    url: "https://rutube.ru/video/private/c5afd6c2808aab1c3ac3700e55e4dc96/?p=q3UlZp0MfgLBnquzcGqmCg",
  },
  {
    id: 2100,
    title: "Древнерусская культура в монументальной живописи Н.К. Рериха",
    speaker: "Лебеденко А.А.",
    date: "03 ноября 2023",
    url: "https://rutube.ru/video/private/62ee9d6e7d7d48f61b75ed457a69a859/?p=iWhYYhDfOCdaL46Wuf7vFg",
  },
  {
    id: 2200,
    title:
      "Синтез Философских концептов Востока и Запада: Дионисийство серебряного века",
    speaker: "Сулейменов И.Э.",
    date: "13 апреля 2023",
    url: "https://rutube.ru/video/private/1e9a7e90ce3bbeebca2aabefe2849e26/?p=fKcH36ErkfHiaDCBx3biDg",
  },
  {
    id: 2300,
    title: "Светочи человечества: Ю.Н. Рериху и Б.Н. Абрамову посвящается",
    speaker: "Лебеденко А.А.",
    date: "06 августа 2022",
    url: "https://rutube.ru/video/private/141adeee618fc0ce559f14250fac0806/?p=imi3pTzQp7hUes2PYsnMPg",
  },
  {
    id: 2400,
    title: "The Roerichs founders of the 'Urusvati' Institute",
    speaker: "Lebedenko A.A., Lenia E.N.",
    date: "August 27, 2022",
    url: "https://rutube.ru/video/private/c178ce4a7ac2fab4f96db225d6d1fb4a/?p=203N-4R1NXyIDKBa4zp_kA",
  },
  {
    id: 2500,
    title: "Институт 'Урусвати': история и современность",
    speaker: "Лебеденко А.А.",
    date: "01 октября 2022",
    url: "https://rutube.ru/video/private/eb99e074a8e6ad7d956efc227a08985d/?p=TiQ0VHfNHcX20J8n1tdx9Q",
  },
  {
    id: 2600,
    title: "Святослав Рерих – вестник Красоты",
    speaker: "Головина Н.М.",
    date: "17 апреля 2022",
    url: "https://rutube.ru/video/private/ef60a929d3eaa75c477eecb666938b09/?p=c5Qz99s7gPp0BwjiUcUokQ",
  },
  {
    id: 2700,
    title: "Сердце культуры: современные аспекты кардиогносии",
    speaker: "Лебеденко А.А.",
    date: "09 октября 2021",
    url: "https://rutube.ru/video/private/c23d3a7b3a89ed1f739a0b9298ab79a2/?p=sDeGcJffrtkh4rjtDj_2Pg",
  },
  {
    id: 2800,
    title: "Основы сотрудничества и Общины",
    speaker: "Лебеденко А.А.",
    date: "23 января 2021",
    url: "https://rutube.ru/video/private/dacb63bd167c72a669fec267c88c9de5/?p=aHb2zv7b1lySOhbI2LevPA",
  },
  {
    id: 2900,
    title: "Идея Общины в творчестве Н.К. Рериха и Е.И. Рерих",
    speaker: "Лебеденко А.А.",
    date: "23.01.2021",
    url: "https://rutube.ru/video/private/f4abd161638f89a194c61a1d2ae7b70b/?p=UFHBBWgTQzniDQQkQIUp7Q",
  },
  {
    id: 3000,
    title:
      "Идея русского странничества и работы Л.В Шапошниковой 'Град Светлый'",
    speaker: "Лебеденко А.А.",
    date: "26.07.2021",
    url: "https://rutube.ru/video/private/540cf22758c3f6c2e207cab4b082bcbb/?p=NqRuGm9I-pTfkEPmnyD3vA",
  },
  {
    id: 3100,
    title: "Знамя Мира: объединяющая идея Знака Триединства",
    speaker: "Лебеденко А.А.",
    date: "10 апреля 2020",
    url: "https://rutube.ru/video/private/5e0425a7424c7580ae352af63bb22121/?p=C1qazTbK-Xd6Gph8Uc9o8A",
  },
  {
    id: 3200,
    title: "Образ Ленина в работах Л.В. Шапошниковой",
    speaker: "Лебеденко А.А.",
    date: "26 июля 2020",
    url: "https://rutube.ru/video/private/466e6da81f6b0c55cfdbab5aaeed0c8b/?p=5r46ffjsKDIXtdhnTMIlXg",
  },
  {
    id: 3300,
    title: "Живая Этика о внутренней природе человека",
    speaker: "Лебеденко А.А.",
    date: "19 ноября 2020",
    url: "https://rutube.ru/video/private/9a88b9328a0101944f79eae83ee8ead9/?p=VDhiOIhdRqkbiIEubPIrRg",
  },
  {
    id: 3400,
    title:
      "Гималайский институт научных исследований 'Урусвати': история и современность",
    speaker: "Лебеденко А.А.",
    date: "27 ноября 2020",
    url: "https://rutube.ru/video/private/2e22b6a88906c5a66e891254a7a4d9ba/?p=-MVNDHQIk9G89gw_C0PEtA",
  },
  {
    id: 3500,
    title: "Новейшая история Севастополя и Крыма — 'Русская весна' 2014 года",
    speaker: "Головина Н.М.",
    date: "10.04.2020",
    url: "https://rutube.ru/video/private/b222ad248c3bb1bf4d143587bc2bc8ce/?p=grTtZUJD_v1nwjiJ34vDeA",
  },
  {
    id: 3600,
    title: "Провидец благословенных путей",
    speaker: "Лебеденко А.А.",
    date: "09 октября 2019",
    url: "https://rutube.ru/video/private/26e232d6a38cad4bca57fc5d09b5ed28/?p=yTPaQRhCZyDcPSrMu3IsXQ",
  },
];
