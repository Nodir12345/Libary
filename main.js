const books = [
  {
    firstName: "Джоан",
    lastName: "Роулинг",
    title: "Гарри Потер",
    rating: 4.707,
    genre: "child, fantastic",
  },
  {
    firstName: "Александр",
    lastName: "Дюма",
    title: "Граф Монте-Кристо",
    rating: 4.599,
    genre: "child",
  },
  {
    firstName: "Марио",
    lastName: "Пьюзо",
    title: "Крестный отец",
    rating: 4.577,
    genre: "detective",
  },
  {
    firstName: "Джон",
    lastName: "Толкиен",
    title: "Властелин колец",
    rating: 4.572,
    genre: "child, fantastic",
  },
  {
    firstName: "Дениэл",
    lastName: "Киз",
    title: "Цветы для Элджернона",
    rating: 4.566,
    genre: "child, fantastic",
  },
  {
    firstName: "Агата",
    lastName: "Кристи",
    title: "Десять негритят",
    rating: 4.55,
    genre: "detective",
  },
  {
    firstName: "Виктор",
    lastName: "Драгунский",
    title: "Денискины рассказы",
    rating: 4.543,
    genre: "child",
  },
  {
    firstName: "Артур Конан",
    lastName: "Дойль",
    title: "Рассказы о Шерлоке Холмсе",
    rating: 4.522,
    genre: "child, detective",
  },
  {
    firstName: "Джеймс",
    lastName: "Хэрриот",
    title: "О всех созданиях - больших и малых",
    rating: 4.5,
    genre: "child",
  },
  {
    firstName: "Вениамин",
    lastName: "Каверин",
    title: "Два капитана",
    rating: 4.493,
    genre: "child",
  },
  {
    firstName: "Александр",
    lastName: "Волков",
    title: "Волшебник Изумрудного города",
    rating: 4.491,
    genre: "child",
  },
  {
    firstName: "Джек",
    lastName: "Лондон",
    title: "Белый Клык",
    rating: 4.48,
    genre: "child",
  },
  {
    firstName: "Жюль",
    lastName: "Верн",
    title: "Таинственный остров",
    rating: 4.479,
    genre: "child, fantastic",
  },
  {
    firstName: "Туве",
    lastName: "Янсон",
    title: "Муми-тролль",
    rating: 4.456,
    genre: "child",
  },
  {
    firstName: "Астрид",
    lastName: "Линдгрен",
    title: "Малыш и Карлсон, который живёт на крыше",
    rating: 4.437,
    genre: "child",
  },
  {
    firstName: "Алан Александер",
    lastName: "Милн",
    title: "Винни Пух и все-все-все",
    rating: 4.391,
    genre: "child",
  },
  {
    firstName: "Александр",
    lastName: "Дюма",
    title: "Три мушкетёра",
    rating: 4.394,
    genre: "child",
  },
  {
    firstName: "Астрид",
    lastName: "Линдгрен",
    title: "Пеппи Длинныйчулок",
    rating: 4.394,
    genre: "child",
  },
  {
    firstName: "Марк",
    lastName: "Твен",
    title: "Приключения Тома Сойера",
    rating: 4.354,
    genre: "child",
  },
  {
    firstName: "Клайв",
    lastName: "Льюис",
    title: "Хроники Нарнии",
    rating: 4.363,
    genre: "child, fantastic",
  },
];

const ListBook = document.querySelector(".ListBook");
const PickAuthor = document.querySelector(".PickAuthor");
const PickLevel = document.querySelector(".PickLevel");
const List = document.querySelector(".list");

ListBook.addEventListener("click", () => {
  List.innerHTML = books
    .map((e, index) => {
      return `
        <p>${index + 1}. ${e.firstName} ${e.lastName} - ${e.title}</p>
    `;
    })
    .join("");
});

PickAuthor.addEventListener("click", () => {
  const sortedBooks = books
    .slice()
    .sort((a, b) => a.lastName.localeCompare(b.lastName));
  List.innerHTML = sortedBooks
    .map((book, index) => {
      return `
      <p>${index + 1}. ${book.lastName} ${book.firstName}  - ${book.title}</p>
    `;
    })
    .join("");
});

PickLevel.addEventListener("click", () => {
  const sortedLevel = books.slice().sort((a, b) => b.rating - a.rating);
  List.innerHTML = sortedLevel
    .map((book, index) => {
      return `
      <p>${index + 1}. ${book.lastName} ${book.firstName}  - ${
        book.title
      } - <strong>${book.rating}</strong></p>
    `;
    })
    .join("");
});

/// the next

const ChildButton = document.querySelector(".child");
const FantasticButton = document.querySelector(".fantastic");
const DetectiveButton = document.querySelector(".detective");
const List2 = document.querySelector(".list2");

ChildButton.addEventListener("click", () => {
  const childBooks = books.filter((book) => book.genre.includes("child"));
  List2.innerHTML = childBooks
    .map((book, index) => {
      return `
      <p>${index + 1}.${book.firstName} ${book.lastName}   - ${book.title} 
    `;
    })
    .join("");
});

FantasticButton.addEventListener("click", () => {
  const FantasticBooks = books.filter((book) =>
    book.genre.includes("fantastic")
  );
  List2.innerHTML = FantasticBooks.map((book, index) => {
    return `
        <p>${index + 1}.${book.firstName} ${book.lastName}   - ${book.title} 
      `;
  }).join("");
});

DetectiveButton.addEventListener("click", () => {
  const DetectiveBooks = books.filter((book) =>
    book.genre.includes("detective")
  );
  List2.innerHTML = DetectiveBooks.map((book, index) => {
    return `
          <p>${index + 1}.${book.firstName} ${book.lastName}   - ${book.title} 
        `;
  }).join("");
});
