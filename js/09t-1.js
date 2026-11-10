// const topSpeed = 160;
// const distance = 617.54;
// const login = "mango935";
// const isOnline = true;
// const isAdmin = false;

// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;

// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);

// function add(a, b, c) {
//   return a + b + c;
// }

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

function makeMessage(name, price) {
  const message = `You picked ${name}, price per item is ${price} credits`;
  return message;
}
// console.log(makeMessage("Radar", 6150));

function calculateTotalPrice(orderedQuantity, pricePerItem) {
  const totalPrice = orderedQuantity * pricePerItem;
  return totalPrice;
}
// console.log(calculateTotalPrice(3, 77));

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  return `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`;
}
// console.log(makeOrderMessage(2, 100, 50));

function isAdult(age) {
  const passed = age >= 18;
  return passed;
}

function isValidPassword(password) {
  const SAVED_PASSWORD = "jqueryismyjam";
  const isMatch = SAVED_PASSWORD === password;

  return isMatch;
}

// # 15
// Инструкция if...else

// Ветвления используются для выполнения различного кода в зависимсти от условия. Принцип работы простой - результат выражения в условии блока if приводится к булю true или false.

// if (условие) { // тело if } else { // тело else }

// Если условие приводится к true, то выполняется код в фигурных скобках тела if, а блок else игнорируется.

// let cost; const subscription = "pro"; if (subscription === "pro") { cost = 100; } else { cost = 0; } console.log(cost); // 100

// Если условие приводится к false, код блока if будет пропущен, и выполнится код в фигурных скобках после блока else.

// let cost; const subscription = "free"; if (subscription === "pro") { cost = 100; } else { cost = 0; } console.log(cost); // 0

// Добавь выражение проверки совершеннолетия пользователя, значения параметра age, в условие для инструкции if.
// Если пользователь совершеннолетний, должен выполняться блок if и в переменную message записывается строка "You are an adult".
// В противном случае должен выполняться блок else и записывается строка "You are a minor".

function checkAge(age) {
  let message;

  if (age >= 18) {
    message = "You are an adult";
  } else {
    message = "You are a minor";
  }

  return message;
}

// Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

//     available - общее количество товаров на складе
//     ordered - единиц товара в заказе

// Используя ветвления дополни код функции так, что:

//     Если в заказе указано число, превышающее количество товаров на складе, в переменную message записывается строка "Not enough goods in stock!".
//     В противном случае записывается строка "Order is processed, our manager will contact you.".

function checkStorage(available, ordered) {
  let message;
  if (available >= ordered) {
    message = "Order is processed, our manager will contact you.";
  } else {
    message = "Not enough goods in stock!";
  }

  return message;
}

/** Комбинированный оператор присвоения
 * 
 * Комбинированные операторы это более краткий способ присвоить переменной новое значение основываясь на её предыдущем значении.

Будем увеличивать значение переменной age на единицу от предыдущего, имитируя обновление возраста после дня рождения пользователя.

let age = 25; // Классическая запись age = age + 1; console.log(age); // 26

Сначала выполняется правая часть выражения. Вместо age подставляется 25, выполняется операция сложения и в переменную age записывается 26.

Выполним рефакторинг операции обновления возраста, используя комбинированный оператор присвоения с добавлением.

let age = 25; // Просто более краткая запись, работает также age += 1; console.log(age); // 26  */

let a = 5;
let b = 10;
let c = 15;
let d = 20;

a = a + 2;
b = b - 4;
c = c * 3;
d = d / 10;

a += 2;
b -= 4;
c *= 3;
d /= 10;

/** #18  Задача: проверка баланса
Задание

Станция по продаже ремонтных дроидов готова к запуску, осталось написать программное обеспечение для отдела продаж.

Функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits) выполняет транзакцию по продаже дроидов и возвращает сообщение о результате операции. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

    pricePerDroid - цена одного дроида
    orderedQuantity - кол-во заказанных дроидов
    customerCredits - сумма средств на счету клиента

Дополни её следующим функционалом:

    Объяви переменную totalPrice для хранения общей суммы заказа и присвой ей выражение расчёта этой суммы.
    Добавь проверку сможет ли клиент оплатить заказ:
        если сумма к оплате превышает количество кредитов на счету клиента, запиши в переменную message строку "Insufficient funds!";
        в противном случае, вычти сумму покупки со счёта клиента и запиши в переменную message сообщение: "You ordered <число> droids, you have <число> credits left".
 */

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  const totalPrice = pricePerDroid * orderedQuantity;
  if (totalPrice > customerCredits) {
    message = "Insufficient funds!";
  } else {
    message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
  }
  return message;
}
// console.log(makeTransaction(3000, 5, 23000));

/** # 19 
 
 * Блок else...if

Конструкция if...else может проверить и среагировать на выполнение или невыполнение только одного условия.

let cost; const subscription = "pro"; if (subscription === "pro") { cost = 100; } else { cost = 0; } console.log(cost); // 100

Блок else...if позволяет добавить после else еще один оператор if с условием. В конце цепочки может быть классический блок else, который выполнится только в случае, когда ни одно из условий не приведётся к true.

let cost; const subscription = "premium"; if (subscription === "free") { cost = 0; } else if (subscription === "pro") { cost = 100; } else if (subscription === "premium") { cost = 500; } else { console.log(`Invalid subscription type - ${subscription}`); } console.log(cost); // 500

При первом же удовлетворяющем условии проверки прекратятся и выполнится только тело соответствующего блока if. Поэтому подобную запись следует читать как: «ищу первое выполнение условия, игнорирую всё остальное».

Задание
Функция checkPassword(password) получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.

    Если значение параметра password равно null, значит пользователь отменил операцию и в message записывается строка "Canceled by user!".
    Если значение параметра password совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка "Welcome!".
    Если ни одно из предыдущих условий не выполнилось, в переменную message записывается строка "Access denied, wrong password!".

Тесты
    Объявлена функция checkPassword(password)
    Вызов checkPassword("mangohackzor") возвращает "Access denied, wrong password!"
    Вызов checkPassword(null) возвращает "Canceled by user!"
    Вызов checkPassword("polyhax") возвращает "Access denied, wrong password!"
    Вызов checkPassword("jqueryismyjam") возвращает "Welcome!"

 */

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;

  if (password === null) {
    // Change this line
    message = "Canceled by user!";
  } else if (password === ADMIN_PASSWORD) {
    // Change this line
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  }

  return message;
}
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("jqueryismyjam"));

/** # 20
 *
 * Задача: склад товаров 2.0
Задание

Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова.

    available - доступное количество товаров на складе
    ordered - единиц товара в заказе

Используя ветвления дополни код функции так, что:

    Если в заказе еще нет товаров, то есть значение параметра ordered равно 0, в переменную message присваивается строка "There are no products in the order!".
    Eсли товаров в заказе больше чем доступно товаров на складе, то в переменную message присваивается строка "Your order is too large, there are not enough items in stock!".
    В противном случае в переменную message присваевается строка "The order is accepted, our manager will contact you".

Тесты

    Объявлена функция checkStorage(available, ordered)
    Вызов checkStorage(100, 50) возвращает "The order is accepted, our manager will contact you"
    Вызов checkStorage(100, 130) возвращает "Your order is too large, there are not enough items in stock!"
    Вызов checkStorage(70, 0)возвращает "There are no products in the order!"
    Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"
    Вызов checkStorage(200, 250) возвращает "Your order is too large, there are not enough items in stock!"
    Вызов checkStorage(150, 0) возвращает "There are no products in the order!"   */

{
  function checkStorage(available, ordered) {
    let message;
    // Change code below this line
    if (!ordered) {
      message = "There are no products in the order!";
    } else if (ordered > available) {
      message = "Your order is too large, there are not enough items in stock!";
    } else {
      return "The order is accepted, our manager will contact you";
    }
    // Change code above this line
    return message;
  }

  // console.log(checkStorage(0));
}

/** # 21
 * Логическое «И» (оператор &&)

Логические операторы используются для проверки условий с множественными выражениями, например в ветвлениях.

Оператор && приводит все операнды к булю и возвращает значение одного из них. Левый операнд, если его можно привести к false, и правый в остальных случаях.

выражение && выражение

В следующем примере оба условия вернут true, поэтому результатом всего выражения будет true - вернётся значение правого операнда.

const age = 20; console.log(age > 10 && age < 30); // true && true -> true

Если хотя бы один из операндов будет приведён к false, результатом выражения будет этот операнд.

const age = 50; console.log(age > 10 && age < 30); // true && false -> false console.log(age > 80 && age < 120); // false && true -> false

             То есть логическое «И» запинается на лжи и возвращает то, на чём запнулось или последний операнд.             ===============

console.log(true && false); // false console.log(false && true); // false console.log(true && true); // true console.log(3 && false); // false console.log(false && 3); // false console.log(3 && true); // true console.log(true && 3); // 3

Полезно                                                  ======>
Запомните шесть значений, которые в булевом преобразовании приводятся к `false`: `0`, `NaN`, `null`, `undefined`, пустая строка `""` или `''` и само значение `false`. Абсолютно всё остальное приводится к `true`.         
                                                        ==============>

console.log(1 && 5); // true && true -> 5 console.log(5 && 1); // true && true -> 1 console.log(0 && 2); // false && true -> 0 console.log(2 && 0); // true && false -> 0 console.log("" && "Mango"); // false && true -> '' console.log("Mango" && ""); // true && false -> '' console.log("Mango" && "Poly"); // true && true -> 'Poly' console.log("Poly" && "Mango"); // true && true -> 'Mango'

Задание

Функция isNumberInRange(start, end, number) проверяет, входит ли число в промежуток. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

    number - число, вхождение которого проверяется
    start - начало числового промежутка
    end - конец числового промежутка

Присвой переменной isInRange выражение проверки вхождения number в числовой промеждуток от start до end. То есть число должно быть больше либо равно start и меньше либо равно end. Результатом выражения проверки будет буль true или false.
Тесты

    Объявлена функция isNumberInRange(start, end, number)
    В выражении проверки использован оператор &&
    Вызов isNumberInRange(10, 30, 17) возвращает true
    Вызов isNumberInRange(10, 30, 5) возвращает false
    Вызов isNumberInRange(20, 50, 24) возвращает true
    Вызов isNumberInRange(20, 50, 76) возвращает false
  */

function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end; // Change this line

  return isInRange;
}

/** # 22
 * Логическое «ИЛИ» (оператор ||)

Оператор || приводит все операнды к булю и возвращает значение одного из них. Левый операнд, если его можно привести к true, и правый в остальных случаях.

выражение || выражение

В следующем примере условие слева вернёт true, поэтому результатом всего выражения будет true - вернётся значение первого операнда, которое было приведено к true.

const age = 5; console.log(age < 10 || age > 30); // true || false -> true

Тут результатом тоже будет true, так как хотя бы один из операндов, в этом случае правый, был приведён к true.

const age = 40; console.log(age < 10 || age > 30); // false || true -> true

А здесь ни одно из условий не выполняется, поэтому получаем false - значение последнего операнда.

const age = 20; console.log(age < 10 || age > 30); // false || false -> false

То есть логическое «ИЛИ» запинается на правде и возвращает то, на чём запнулось или последний операнд.

console.log(true || false); // true console.log(false || true); // true console.log(true || true); // true console.log(3 || false); // 3 console.log(false || 3); // 3 console.log(3 || true); // 3 console.log(true || 3); // true

Задание

Функция checkIfCanAccessContent(subType) проверяет, может ли пользователь получить доступ к контенту. Проверка происходит по типу подписки. Получить доступ могут только пользователи с подпиской pro или vip.

Присвой переменной canAccessContent выражение проверки подписки. Если значение параметра subType равно строкам "pro" или "vip", пользователь получит доступ. Результатом выражения проверки будет буль true или false.
Тесты

    Объявлена функция checkIfCanAccessContent(subType)
    В выражении проверки использован оператор ||
    Вызов checkIfCanAccessContent("pro") возвращает true
    Вызов checkIfCanAccessContent("starter") возвращает false
    Вызов checkIfCanAccessContent("vip") возвращает true
    Вызов checkIfCanAccessContent("free") возвращает false

 */

function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === "pro" || subType === "vip"; // Change this line

  return canAccessContent;
}

/**  # 20 
 * Логическое «НЕ» (оператор !)

Все операторы, которые мы рассматривали до этого, были бинарными. Т.е. они содержали два операнда: левый и правый. Логическое «НЕ» - это унарный оператор, выполняющий операцию над одним операндом справа.

!выражение

Оператор ! приводит операнд к булю, если необходимо, а затем делает инверсию - заменяет его на противоположный true -> false или false -> true.

console.log(!true); // false console.log(!false); // true console.log(!3); // !3 -> !true -> false console.log(!"Mango"); // !'Mango' -> !true -> false console.log(!0); // !0 -> !false -> true console.log(!""); // !'' -> !false -> true const isOnline = true; const isNotOnline = !isOnline; // !isOnline -> !true -> false

Задание

Функция isNumberNotInRange(start, end, number) проверяет, не входит ли число в промежуток. То есть число должно быть меньше либо равно start и больше либо равно end. Результатом выражения проверки будет буль true или false.

Она объявляет три параметра, значения которых будут задаваться во время её вызова:

    number - число, не вхождение которого проверяется
    start - начало числового промежутка
    end - конец числового промежутка

Присвой переменной isNotInRange выражение инверсии значения переменной isInRange используя оператор !.
Тесты

    Объявлена функция isNumberNotInRange(start, end, number)
    В выражении использован оператор !
    Вызов isNumberNotInRange(10, 30, 17) возвращает false
    Вызов isNumberNotInRange(10, 30, 5) возвращает true
    Вызов isNumberNotInRange(20, 50, 24) возвращает false
    Вызов isNumberNotInRange(20, 50, 76) возвращает true
 */

function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; // Change this line

  return isNotInRange;
}

/** # 24
 *Задача: расчёт скидки
Задание

Функция getDiscount(totalSpent) определяет значение скидки в зависимости от общей суммы потраченных денег (параметр totalSpent) в магазине за всё время (партнёрская программа). Скидка записывается в переменную discount и возвращается из функции как результат её работы.

Используя ветвления и логические операторы, дополни код функции.

    Если потрачено от 50000 ( включительно ) или больше кредитов - скидка 10% (золотой партнёр)
    Если потрачено от 20000 (включительно) до 50000 кредитов - скидка 5% (серебрянный партнёр)
    Если потрачено от 5000 (включительно) до 20000 кредитов - скидка 2% (бронзовый партнёр)
    Если потрачено меньше чем 5000 кредитов - скидка 0 (базовый партнёр)

Значения скидок каждого уровня хранятся в одноимённых константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT и GOLD_DISCOUNT.
Тесты

    Объявлена функция getDiscount(totalSpent)
    Вызов getDiscount(137000) возвращает 0.1
    Вызов getDiscount(46900) возвращает 0.05
    Вызов getDiscount(8250) возвращает 0.02
    Вызов getDiscount(1300) возвращает 0
    Вызов getDiscount(5000) возвращает 0.02
    Вызов getDiscount(20000) возвращает 0.05
    Вызов getDiscount(50000) возвращает 0.1

 */

function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line
  if (totalSpent < 5000) {
    discount = BASE_DISCOUNT;
  } else if (totalSpent < 20000) {
    discount = BRONZE_DISCOUNT;
  } else if (totalSpent < 50000) {
    discount = SILVER_DISCOUNT;
  } else {
    discount = GOLD_DISCOUNT;
  }
  // Change code above this line
  return discount;
}
// console.log(getDiscount(57774));

{
  /**  # 25
 * 
 * Тернарный оператор

Тернарный оператор используется как более синтаксически краткая замена инструкции if...else, когда одной и той же переменной необходимо присвоить разные значения по условию.

<условие> ? <выражение если условие истинно> : <выражение если условие ложно>

Работает по такой схеме:

  Вычисляется условие.
  Если условие истинно, то есть приводится к true, вычисляется выражение после ?.
  Если условие ложно, то есть приводится к false, вычисляется выражение после :.
  Значение вычисленного выражения возвращается как результат работы тернарного оператора.

let type; const age = 20; if (age >= 18) { type = "adult"; } else { type = "child"; } console.log(type); // "adult"

Выполним рефакторинг, заменив if...else тернарным оператором.

const age = 20; const type = age >= 18 ? "adult" : "child"; console.log(type); // "adult"

Внимание

Тернарный оператор должен использоваться в простых операциях присваивания или возврата. Применять его для замены сложных ветвлений — плохая практика (антипаттерн).
Задание

Выполни рефакторинг решения задачи «Склад товаров», заменив инструкцию if...else тернарным оператором.
Тесты

  Объявлена функция checkStorage(available, ordered).
  Использован тернарный оператор.
  Вызов checkStorage(100, 50) возвращает "The order is accepted, our manager will contact you"
  Вызов checkStorage(100, 130) возвращает "Not enough goods in stock!"
  Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"
  Вызов checkStorage(200, 150) возвращает "The order is accepted, our manager will contact you"
  Вызов checkStorage(150, 180) возвращает "Not enough goods in stock!"
*/

  {
    function checkStorage(available, ordered) {
      let message;
      // Change code below this line

      if (ordered > available) {
        message = "Not enough goods in stock!";
      } else {
        message = "The order is accepted, our manager will contact you";
      }

      // Change code above this line
      return message;
    }
  }

  function checkStorage(available, ordered) {
    let message;
    // Change code below this line

    message =
      ordered > available
        ? "Not enough goods in stock!"
        : "The order is accepted, our manager will contact you";

    // Change code above this line
    return message;
  }
}

{
  /** # 26
   * Задача: проверка пароля
Задание

Функция checkPassword(password) сравнивает переданный ей пароль (параметр password) с сохранённым паролем администратора (константа ADMIN_PASSWORD) и возвращает строку с сообщением о результате.

Используя тернарный оператор дополни функцию так, что:

    Если значения password и ADMIN_PASSWORD совпадают, присвой переменной message строку "Access is allowed".
    В противном случае, присвой message строку "Access denied, wrong password!".

Тесты

    Объявлена функция checkPassword(password)
    Использован тернарный оператор
    Вызов checkPassword("jqueryismyjam") возвращает "Access is allowed"
    Вызов checkPassword("angul4r1sl1f3") возвращает "Access denied, wrong password!"
    Вызов checkPassword("r3actsux") возвращает "Access denied, wrong password!"
   */

  function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;
    // Change code below this line
    message =
      password === ADMIN_PASSWORD
        ? "Access is allowed"
        : "Access denied, wrong password!";
    // Change code above this line
    return message;
  }
}

/** # 27
 * Инструкция switch

В некоторых случаях неудобство чтения сложных ветвлений if...else можно избежать, используя более «плоский» синтаксис инструкции ветвления switch.

Область применения switch ограничена задачами с одним общим вопросом (что сравнивать) и множеством вариантов ответов (с чем сравнивать).

switch (значение) { case значение: инструкции; break; case значение: инструкции; break; }

Его синтаксис состоит из блока switch(значение) - что нужно сравнить и множества отдельных случаев case значение: - с чем нужно сравнить. Для сравнения используется оператор строгого равенства ===. То есть нельзя сравнить на больше или меньше, только на равенство.

Значение в блоке switch(значение) - строка или число, которое сравнивается на строгое равенство со всеми значениями в блоках case значение: по порядку, сверху вниз.

Оператор break в завершении каждого блока case необходим, чтобы прервать дальнейшие проверки и сразу перейти к коду за switch в том случае, когда проверка на равенство вернула true.
Задание

Функция getSubscriptionPrice(type) получает строку с типом подписки пользователя (параметр type), проверяет её на совпадение с тремя возможными типами ежемесячной подписки и возвращает цену хранящуюся в переменной price.

Если значение параметра type это строка:

    "starter" - цена подписки 0 кредитов.
    "professional" - цена подписки 20 кредитов.
    "organization" - цена подписки 50 кредитов.

Изначально в теле функции была инструкция if...else, которая выглядела вот так.

if (type === "starter") { price = 0; } else if (type === "professional") { price = 20; } else if (type === "organization") { price = 50; }

После рефакторинга инструкция if..else была заменена на switch. Дополни код инструкции switch, чтобы функция работала правильно.
Тесты

    Объявлена функция getSubscriptionPrice(type)
    Вызов getSubscriptionPrice("professional") возвращает число 20
    Вызов getSubscriptionPrice("organization") возвращает число 50
    Вызов getSubscriptionPrice("starter") возвращает число 0
 */

function getSubscriptionPrice(type) {
  let price;
  // Change code below this line

  switch (
    type // Change this line
  ) {
    case "starter": // Change this line
      price = 0; // Change this line
      break;

    case "professional": // Change this line
      price = 20; // Change this line
      break;

    case "organization": // Change this line
      price = 50; // Change this line
      break;
  }

  // Change code above this line
  return price;
}

/** # 28
 * Инструкция switch c блоком default

Если ни одного совпадения значений не произошло, необходимо выполнить код по умолчанию, как в блоке else для инструкции if...else. Для этого после всех блоков case добавляется блок default.

switch (значение) { case значение: инструкции; break; case значение: инструкции; break; default: инструкции; }

Оператор break после блока default не нужен, так как это и так последнее что будет выполнено в switch и управление будет передано коду за ним.
Задание

Функция checkPassword(password) получает пароль в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.

Если значение параметра password:

    равно null, значит пользователь отменил операцию и в message записывается строка "Canceled by user!".
    совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка "Welcome!".
    не удовлетворяет ни одному из предыдущих условий, в переменную message записывается строка "Access denied, wrong password!".

Проведи рефакторинг кода, заменив инструкцию if..else на switch, и не забудь о блоке default (аналог else).
Тесты

    Объявлена функция checkPassword(password)
    Вызов checkPassword("mangohackzor") возвращает "Access denied, wrong password!"
    Вызов checkPassword(null) возвращает "Canceled by user!"
    Вызов checkPassword("polyhax") возвращает "Access denied, wrong password!"
    Вызов checkPassword("jqueryismyjam") возвращает "Welcome!"
 */
{
  // function checkPassword(password) {
  //   const ADMIN_PASSWORD = "jqueryismyjam";
  //   let message;
  //   // Change code below this line

  //   if (password === null) {
  //     message = "Canceled by user!";
  //   } else if (password === ADMIN_PASSWORD) {
  //     message = "Welcome!";
  //   } else {
  //     message = "Access denied, wrong password!";
  //   }

  //   // Change code above this line
  //   return message;
  // }

  function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;
    // Change code below this line

    switch (password) {
      case ADMIN_PASSWORD:
        message = "Welcome!";
        break;

      case null:
        message = "Canceled by user!";
        break;

      default:
        message = "Access denied, wrong password!";
        "";
    }
    // Change code above this line
    return message;
  }
  // console.log(checkPassword("jqueryismyjam"));
}

/**  #29
 * Задача: доставка товара
Задание

Функция getShippingCost(country) должна проверять возможность доставки товара в страну пользователя (параметр country) и возвращать сообщение о результате хранящееся в переменной message. Обязательно используй инструкцию switch.

Формат возвращаемой строки "Shipping to <country> will cost <price> credits", где вместо <country> и <price> необходимо подставить соотвествующие значения.

Список стран и стоимость доставки:

    China - 100 кредитов
    Chile - 250 кредитов
    Australia - 170 кредитов
    Jamaica - 120 кредитов

Из списка видно, что доставка есть не везде. Если указанной страны нет в списке, то функция должна вернуть строку "Sorry, there is no delivery to your country"
Тесты

    Объявлена функция getShippingCost(country)
    В теле функции использована инструкция switch
    Вызов getShippingCost("Australia") возвращает "Shipping to Australia will cost 170 credits"
    Вызов getShippingCost("Germany") возвращает "Sorry, there is no delivery to your country"
    Вызов getShippingCost("China") возвращает "Shipping to China will cost 100 credits"
    Вызов getShippingCost("Chile") возвращает "Shipping to Chile will cost 250 credits"
    Вызов getShippingCost("Jamaica") возвращает "Shipping to Jamaica will cost 120 credits"
    Вызов getShippingCost("Sweden") возвращает "Sorry, there is no delivery to your country"
 */

function getShippingCost(country) {
  let message;
  // Change code below this line
  switch (country) {
    case "China":
      message = `Shipping to ${country} will cost 100 credits`;
      break;

    case "Chile":
      message = `Shipping to ${country} will cost 250 credits`;
      break;

    case "Australia":
      message = `Shipping to ${country} will cost 170 credits`;
      break;

    case "Jamaica":
      message = `Shipping to ${country} will cost 120 credits`;
      break;

    default:
      message = "Sorry, there is no delivery to your country";
  }
  // Change code above this line
  return message;
}

{
  function getShippingCost(country) {
    let message;
    // Change code below this line
    const ship = { China: 100, Chile: 250, Australia: 170, Jamaica: 120 };
    switch (country) {
      case country:
        message = !ship[country]
          ? "Sorry, there is no delivery to your country"
          : `Shipping to ${country} will cost ${ship[country]} credits`;
    }

    // Change code above this line
    return message;
  }

  // console.log(getShippingCost("uyt"));
}

{
  /** #30     Длина строки

Для того чтобы узнать длину строки, то есть количество её символов, у строк есть встроенное свойство length, значение которого можно получить обратившить к нему через точку после имени переменной или строкового литерала.

const productName = "Repair droid"; // Если в переменной хранится строка console.log(productName.length); // 12 // Если строковый литерал console.log("Repair droid".length); // 12

Задание

Функция getNameLength(name) принимает имя (параметр name) и возвращает строку, в которой указана его длина. Дополни шаблонную строку в переменной message длиной строки из параметра name.
Тесты

    Объявлена функция getNameLength(name)
    Вызов функции getNameLength("Poly") возвращает "Name Poly is 4 characters long"
    Вызов функции getNameLength("Harambe") возвращает "Name Harambe is 6 characters long"
    Вызов функции getNameLength("Billy") возвращает "Name Billy is 5 characters long"
    Вызов функции getNameLength("Joe") возвращает "Name Joe is 3 characters long"      */

  function getNameLength(name) {
    const message = `Name ${name} is ${name.length} characters long`; // Change this line

    return message;
  }

  // console.log(getNameLength("Poly"));
}
