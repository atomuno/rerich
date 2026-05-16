/** Русские названия групп в боковой панели Payload */
export const PAYLOAD_ADMIN_GROUP = {
  fund: "Фонд",
  uriel: "Уриэль",
} as const;

/** Подписи коллекций (единственное / множественное число) */
export const PAYLOAD_COLLECTION_LABELS = {
  books: { singular: "Книга", plural: "Книги" },
  exhibitionsFund: { singular: "Выставка", plural: "Выставки" },
  videos: { singular: "Видео", plural: "Видео" },
  lectures: { singular: "Лекция", plural: "Лекторий" },
  gallery: { singular: "Картина", plural: "Галерея" },
  crafts: { singular: "Поделка", plural: "Поделки" },
  clubGallery: { singular: "Фото", plural: "Галерея кружков" },
  diplomas: { singular: "Год", plural: "Дипломы и грамоты" },
  shipsModels: { singular: "Группа", plural: "Модели кораблей" },
  exhibitionsUriel: { singular: "Выставка", plural: "Выставки" },
  media: { singular: "Файл", plural: "Медиа" },
  users: { singular: "Пользователь", plural: "Пользователи" },
} as const;

/** Подписи globals */
export const PAYLOAD_GLOBAL_LABELS = {
  fundAbout: "О нас",
  fundMuseum: "Музей",
  fundConferences: "Конференции",
  fundLibrary: "Библиотека",
  urielAbout: "О нас",
} as const;
