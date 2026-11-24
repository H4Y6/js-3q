/**  MODULE 5 */

{
  /*    # 1
 *
 *  Контекст вызова функции
Внутри функций можно использовать зарезервированное ключевое слово this. Во время исполнения функции, в this записывается ссылка на объект, в контексте которого она была вызвана. Таким образом, в теле функции мы можем получить доступ к свойствам и методам этого объекта.

const bookShelf = { authors: ["Bernard Cornwell", "Robert Sheckley"], getAuthors() { return this.authors; }, addAuthor(authorName) { this.authors.push(authorName); }, }; console.log(bookShelf.getAuthors()); // ["Bernard Cornwell", "Robert Sheckley"] bookShelf.addAuthor("Tanith Lee"); console.log(bookShelf.getAuthors()); // ["Bernard Cornwell", "Robert Sheckley", "Tanith Lee"]
Методы getAuthors и addAuthor это функции (методы объекта), которые вызываются в контексте объекта bookShelf. Во время их выполнения в this записывается ссылка на объект bookShelf и мы можем обратиться к его свойствам и методам.

Задание
Выполни рефакторинг методов объекта pizzaPalace, расставив отсутствующие this в местах обращения к свойствам и методам объекта.

Тесты
Метод checkPizza объекта pizzaPalace использует this.
Метод order объекта pizzaPalace использует this
Вызов pizzaPalace.order("Smoked") возвращает строку "Order accepted, preparing «Smoked» pizza"
Вызов pizzaPalace.order("Four meats") возвращает строку "Order accepted, preparing «Four meats» pizza"
Вызов pizzaPalace.order("Big Mike") возвращает строку "Sorry, there is no pizza named «Big Mike»"
Вызов pizzaPalace.order("Viennese") возвращает строку "Sorry, there is no pizza named «Viennese»"
 */

  const pizzaPalace = {
    pizzas: ["Supercheese", "Smoked", "Four meats"],
    // Change code below this line
    checkPizza(pizzaName) {
      return this.pizzas.includes(pizzaName);
    },
    order(pizzaName) {
      const isPizzaAvailable = this.checkPizza(pizzaName);

      if (!isPizzaAvailable) {
        return `Sorry, there is no pizza named «${pizzaName}»`;
      }

      return `Order accepted, preparing «${pizzaName}» pizza`;
    },
    // Change code above this line
  };
}

{
  /**  # 2
   * 
   * Задача: аккаунт пользователя
Задание
Перед увольнением разработчик сломал исходный код управления аккаунтами пользователей нашего сервиса доставки еды. Выполни рефакторинг методов объекта customer, расставив отсутствующие this при обращении к свойствам объекта.

После объявления объекта мы добавили вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

Тесты
Объявлена переменная customer
Значение переменной customer это объект со свойствами и методами
Вызов customer.getDiscount() возвращает текущее значение свойства discount
Вызов customer.setDiscount(0.15) обновляет значение свойства discount
Вызов customer.getBalance() возвращает текущее значение свойства balance.
Вызов customer.getOrders() возвращает текущее значение свойства orders
Вызов customer.addOrder(5000, "Steak") добавляет "Steak" в массив значений свойства orders и обновляет баланс
Метод getBalance объекта customer использует this
Метод getDiscount объекта customer использует this
Метод setDiscount объекта customer использует this
Метод getOrders объекта customer использует this
Метод addOrder объекта customer использует this
   */

  const customer = {
    username: "Mango",
    balance: 24000,
    discount: 0.1,
    orders: ["Burger", "Pizza", "Salad"],
    // Change code below this line
    getBalance() {
      return this.balance;
    },
    getDiscount() {
      return this.discount;
    },
    setDiscount(value) {
      this.discount = value;
    },
    getOrders() {
      return this.orders;
    },
    addOrder(cost, order) {
      this.balance -= cost - cost * this.discount;
      this.orders.push(order);
    },
    // Change code above this line
  };

  customer.setDiscount(0.15);
  // console.log(customer.getDiscount()); // 0.15
  customer.addOrder(5000, "Steak");
  // console.log(customer.getBalance()); // 19750
  // console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
}

{
  /**  # 3
   * 
   *   Задача: история заказов
Задание
Тестировщики нашли баги в коде сервиса хранения истории заказов еды. Тебе необходимо исправить их, правильно расставив this в методах объекта historyService, чтобы методы начали работать правильно.

Тесты
Объявлена переменная historyService
Значение переменной historyService это объект с исходными свойствами и методами
Вызов historyService.getOrdersLog() возвращает строку с перечислением данных всех заказов из свойства orders
Вызов historyService.getEmails() возвращает массив всех уникальных почтовых адресов из свойства orders
Вызов historyService.getOrdersByEmail("solomon@topmail.net") возвращает [{ email: "solomon@topmail.net", dish: "Burger" }, { email: "solomon@topmail.net", dish: "Apple pie" }]
Вызов historyService.getOrdersByEmail("artemis@coldmail.net") возвращает [{ email: "artemis@coldmail.net", dish: "Pizza" }]
Метод getOrdersLog объекта historyService использует this
Метод getEmails объекта historyService использует this
Метод getOrdersByEmail объекта historyService использует this
   */

  const historyService = {
    orders: [
      { email: "jacob@hotmail.com", dish: "Burrito" },
      { email: "solomon@topmail.net", dish: "Burger" },
      { email: "artemis@coldmail.net", dish: "Pizza" },
      { email: "solomon@topmail.net", dish: "Apple pie" },
      { email: "jacob@hotmail.com", dish: "Taco" },
    ],
    // Change code below this line
    getOrdersLog() {
      return this.orders
        .map((order) => `email: ${order.email} dish: ${order.dish}`)
        .join(" - ");
    },
    getEmails() {
      const emails = this.orders.map((order) => order.email);
      const uniqueEmails = new Set(emails);
      return [...uniqueEmails];
    },
    getOrdersByEmail(email) {
      return this.orders.filter((order) => order.email === email);
    },
    // Change code above this line
  };
}

{
  /**  # 4
   * 
   * Прототип объекта
Объекты можно организовать в цепочки так, чтобы свойство не найденное в одном объекте, автоматически искалось бы в другом. Связующим звеном выступает специальное скрытое свойство [[Prototype]], которое в консоли браузера отображается как __proto__.

const animal = { legs: 4, }; const dog = Object.create(animal); dog.name = "Mango"; console.log(dog); // { name: 'Mango', __proto__: animal } console.log(animal.isPrototypeOf(dog)); // true
Метод Object.create(obj) создаёт и возвращает новый объект, связывая его с объектом obj. Объект, на который указывает ссылка в __proto__, называется прототипом. В нашем примере объект animal это прототип для объекта dog. Метод isPrototypeOf() проверяет является ли объект animal прототипом для dog и возвращает true или false.

console.log(dog.hasOwnProperty("name")); // true console.log(dog.name); // 'Mango' console.log(dog.hasOwnProperty("legs")); // false console.log(dog.legs); // 4
Обращение dog.name работает очевидным образом - возвращает собственное свойство name объекта dog. При обращении к dog.legs интерпретатор ищет свойство legs в объекте dog, не находит и продолжает поиск в объекте по ссылке из dog.__proto__, то есть, в данном случае, в объекте animal - его прототипе.

То есть прототип - это резервное хранилище свойств и методов объекта, автоматически используемое при их поиске. У объекта, который выступает прототипом может также быть свой прототип, у того свой, и так далее.

Поиск свойства выполняется до первого совпадения. Интерпретатор ищет свойство по имени в объекте, если не находит, то обращается к свойству __proto__, т. е. переходит по ссылке к объекту-прототипу, а затем и прототипу прототипа. Если интерпретатор доберется до конца цепочки и не найдет свойства с таким именем, то вернёт undefined.

Задание
Измени код так, чтобы объект parent стал прототипом для объекта в переменной сhild.

Тесты
Объявлена переменная parent
Значение переменной parent это объект
Вызов parent.hasOwnProperty("surname") возвращает true
Вызов parent.hasOwnProperty("heritage") возвращает true
Объявлена переменная child
Значение переменной child это объект
Вызов child.hasOwnProperty("name") возвращает true
Обращение к child.name возвращает "Jason"
Вызов child.hasOwnProperty("age") возвращает true
Обращение к child.age возвращает 27
Вызов child.hasOwnProperty("surname") возвращает false
Обращение к child.surname возвращает "Moore"
Вызов child.hasOwnProperty("heritage") возвращает false
Обращение к child.heritage возвращает "Irish"
Вызов parent.isPrototypeOf(child) возвращает true
Используется метод Object.create()
   */

  const parent = {
    name: "Stacey",
    surname: "Moore",
    age: 54,
    heritage: "Irish",
  };
  // Change code below this line

  const child = Object.create(parent);

  // Change code above this line
  child.name = "Jason";
  child.age = 27;
}
