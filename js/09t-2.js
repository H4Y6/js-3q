{
  /**   Module 2
 * # 1
 * Ранний возврат

В функции может быть больше одного оператора return. Главное помнить, что выполнение функции прерывается когда интерпретатор встречает возврат, и весь код после него будет проигнорирован в текущем вызове функции.

Возьмём уже знакомую нам функцию проверки совершеннолетия. Она работает, но здесь есть «лишний» код, то есть тело функции можно оптимизировать. В данном случае подойдёт приём (паттерн) «ранний возврат».

function checkAge(age) { let message; if (age >= 18) { message = "Вы совершеннолетний человек"; } else { message = "Вы несовершеннолетний человек"; } return message; }

    Если условие в if выполняется, то есть приводится к true, возвращаем строку "You are an adult" и код ниже уже не исполнится.
    Если условие в if не выполняется, то есть приводится к false, возвращаем строку "You are a minor".

Используя паттерн «ранний возврат» и то, что выполнение функции прерывается на операторе return, мы избавляемся от лишней переменной и блока else. То есть этот приём помогает «разгладить» ветвления.
Задание

Запиши условие в инструкции if так, чтобы функция работала правильно.
Тесты

    Объявлена функция checkAge(age).
    В выражении проверки возраста использован оператор >=
    Вызов checkAge(20) возвращает "You are an adult"
    Вызов checkAge(8) возвращает "You are a minor"
    Вызов checkAge(14) возвращает "You are a minor"
    Вызов checkAge(38) возвращает "You are an adult"
    В теле функции есть только одна инструкция if
    В теле функции нет инструкции else или else if    *  */

  function checkAge(age) {
    if (age >= 18) {
      // Change this line
      return "You are an adult";
    }

    return "You are a minor";
  }
  // console.log(checkAge(21));
}

{
  /**  #2
  Задача: проверка пароля (ранний возврат)
Задание

Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.

Проведи рефакторинг кода функции checkPassword используя паттерн «ранний возврат»:

    удали переменную message
    удали else
    код должен работать так же, как и до оптимизации

Тесты

    Объявлена функция checkPassword(password)
    Вызов checkPassword("mangohackzor") возвращает "Access denied, wrong password!"
    Вызов checkPassword("polyhax") возвращает "Access denied, wrong password!"
    Вызов checkPassword("jqueryismyjam") возвращает "Welcome!"
 */

  function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    // Change code below this line

    if (password === ADMIN_PASSWORD) {
      return "Welcome!";
    }
    return "Access denied, wrong password!";
  }

  // Change code above this line
}

{
  /** #3
   *  Задача: склад товаров 3.0
Задание

Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате. Она принимает два параметра, значения которых будут задаваться во время её вызова.

    available - доступное количество товаров на складе
    ordered - количество единиц товара в заказе

Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».
Тесты

    Объявлена функция checkStorage(available, ordered)
    Вызов checkStorage(100, 50) возвращает "The order is accepted, our manager will contact you"
    Вызов checkStorage(100, 130) возвращает "Your order is too large, not enough goods in stock!"
    Вызов checkStorage(70, 0) возвращает "Your order is empty!"
    Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"
    Вызов checkStorage(200, 250) возвращает "Your order is too large, not enough goods in stock!"
    Вызов checkStorage(150, 0) возвращает "Your order is empty!"
   */

  function checkStorage(available, ordered) {
    // Change code below this line

    if (ordered === 0) {
      return "Your order is empty!";
    }
    if (ordered > available) {
      return "Your order is too large, not enough goods in stock!";
    }
    return "The order is accepted, our manager will contact you";

    // Change code above this line
  }
}

{
  /**  #4
   *  Создание массива

Массив используется для хранения упорядоченной коллекции элементов. Он объявляется открывающей и закрывающей квадратной скобками [] - литералом массива. Внутри скобок каждый элемент массива разделяется запятой.

const planets = ["Earth", "Mars", "Venus"];

Полезно

При объявлении переменной для объекта или массива программисты обычно используют const. Они делают это для того, чтобы случайно не перезаписать значение, т.к. попытка перезаписи вызовет ошибку до того как код попадет к пользователю.
Задание

Объяви переменную fruits и присвой ей массив фруктов - строк "apple", "plum", "pear" и "orange".
Тесты

    Объявлена переменная fruits
    Значение переменной fruits это массив ["apple", "plum", "pear", "orange"]

   */

  const fruits = ["apple", "plum", "pear", "orange"];

  /**  #5
   *   Доступ к элементам по индексу

Для доступа к значению элемента массива применяют синтаксис квадратных скобок массив[индекс]. Между именем переменной массива и квадратными скобками не должно быть пробела.
Внимание

Индексация элементов массива начинается с нуля.

const planets = ["Earth", "Mars", "Venus"]; planets[0]; // "Earth" planets[2]; // "Venus"

Задание

Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных скобок.
Имя переменной 	Значение переменной
firstElement 	первый элемент массива
secondElement 	второй элемент массива
lastElement 	последний элемент массива
Тесты

    Объявлена переменная firstElement
    Значение переменной firstElement это строка "apple"
    Объявлена переменная secondElement
    Значение переменной secondElement это строка "plum"
    Объявлена переменная lastElement
    Значение переменной lastElement это строка "orange"
 */

  const firstElement = fruits[0];
  const secondElement = fruits[1];
  const lastElement = fruits[fruits.length - 1];

  /** #6 
   *  Переопределение значения элемента

В отличии от строк, элементы массива можно изменять обратившись к ним по индексу и присвоив другое значение.

const numbers = [1, 2, 3, 4, 5]; numbers[0] = 7; numbers[2] = 14; console.log(numbers); // [7, 2, 14, 4, 5];

Задание

Переопредели значения элементов с индексами 1 и 3. Замени "plum" на "peach", а "orange" на "banana".
Тесты

    Объявлена переменная fruits
    Значение переменной fruits это массив ["apple", "peach", "pear", "banana"]
 */

  fruits[1] = "peach";
  fruits[3] = "banana";

  // console.log(fruits);

  /** #7
   * Длина массива

Длина массива, то есть число его элементов, хранится в свойстве length. Это динамическая величина, которая изменяется автоматически при добавлении или удалении элементов.

const planets = ["Earth", "Mars", "Venus"]; console.log(planets.length); // 3

Задание

Объяви переменную fruitsArrayLength и присвой ей длину массива fruits используя свойство length.
Тесты

    Объявлена переменная fruitsArrayLength
    Значение переменной fruitsArrayLength это число 4

   */

  const fruitsArrayLength = fruits.length;
}

{
  /**  #8 
   * 
   * Индекс последнего элемента

Чаще всего, мы заранее в коде не знаем какая будет длина массива. Для того, чтобы получить значение последнего элемента применяется следующий подход - длина массива всегда на единицу больше, чем индекс последнего элемента. Используя формулу длина_массива - 1 можно получить значение последнего элемента массива произвольной длины.

const planets = ["Earth", "Mars", "Venus"]; const lastElementIndex = planets.length - 1; planets[lastElementIndex]; // "Venus"

Задание

Объяви две переменные:
Имя переменной 	Ожидаемое значение
lastElementIndex 	Индекс последнего элемента масcива fruits через длина_массива - 1
lastElement 	Значение последнего элемента массива
Тесты

    Объявлена переменная lastElementIndex
    Значение переменной lastElementIndex это число 3
    Объявлена переменная lastElement
    Значение переменной lastElement это строка "banana"

   */

  const fruits = ["apple", "peach", "pear", "banana"];

  // Change code below this line
  const lastElementIndex = fruits.length - 1;
  const lastElement = fruits[lastElementIndex];
  // console.log(lastElement);

  /** #9 
   * 
   * Задача: Крайние элементы массива
Задание

Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.
Тесты

    Объявлена функция getExtremeElements(array)
    Вызов getExtremeElements([1, 2, 3, 4, 5]) возвращает [1, 5]
    Вызов getExtremeElements(["Earth", "Mars", "Venus"]) возвращает ["Earth", "Venus"]
    Вызов getExtremeElements(["apple", "peach", "pear", "banana"]) возвращает ["apple", "banana"]
  */

  function getExtremeElements(array) {
    // Change code below this line

    // Change code above this line
    return [array[0], array[array.length - 1]];
  }
  // console.log(getExtremeElements(fruits));
}

{
  /**  #10
   *
   *Метод строк split()

Метод split(delimiter) позволяет превратить строку в массив, «разбив» его по разделителю delimiter. Если разделитель это пустая строка, то получится массив отдельных символов. Разделителем может быть один или несколько символов.

const name = "Mango"; console.log(name.split("")); // ["M", "a", "n", "g", "o"] const message = "JavaScript essentials"; console.log(message.split(" ")); // ["JavaScript", "essentials"]

Задание

Дополни код функции splitMessage(message, delimiter) так, чтобы она возвращала в переменной words результат разделения строки message по разделителю delimiter - массив строк.
Тесты

    Объявлена функция splitMessage(message, delimiter)
    Вызов splitMessage("Mango hurries to the train", " ") возвращает ["Mango", "hurries", "to", "the", "train"]
    Вызов splitMessage("Mango", "") возвращает ["M", "a", "n", "g", "o"]
    Вызов splitMessage("best_for_week", "_") возвращает ["best", "for", "week"]

   */

  function splitMessage(message, delimiter) {
    let words;
    // Change code below this line
    words = message.split(delimiter);
    // Change code above this line
    return words;
  }
}

{
  /** #11
   *
   *Задача: гравировка украшений
Задание

Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.

Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).

Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.
Тесты

    Объявлена функция calculateEngravingPrice(message, pricePerWord)
    Вызов calculateEngravingPrice("JavaScript is in my blood", 10) возвращает 50
    Вызов calculateEngravingPrice("JavaScript is in my blood", 20) возвращает 100
    Вызов calculateEngravingPrice("Web-development is creative work", 40) возвращает 160
    Вызов calculateEngravingPrice("Web-development is creative work", 20) возвращает 80

   */

  function calculateEngravingPrice(message, pricePerWord) {
    // Change code below this line
    return message.split(" ").length * pricePerWord;
    // Change code above this line
  }
}

{
  /**  #12
   *
   *  Метод массива join()

Метод массивов join(delimiter) позволяет соединить элементы массива в строку. В строке элементы будут разделены символом или группой символов указанных в delimiter. То есть это операция обратная методу строк split(delimiter).

const words = ["JavaScript", "is", "amazing"]; console.log(words.join("")); // 'JavaScriptisamazing' console.log(words.join(" ")); // 'JavaScript is amazing' console.log(words.join("*")); // 'JavaScript*is*amazing'

Задание

Дополни код функции makeStringFromArray(array, delimiter) так, чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimiter - строку.
Тесты

    Объявлена функция makeStringFromArray(array, delimiter)
    Вызов makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") возвращает "Mango hurries to the train"
    Вызов makeStringFromArray(["M", "a", "n", "g", "o"], "") возвращает "Mango"
    Вызов makeStringFromArray(["top", "picks", "for", "you"], "_") возвращает "top_picks_for_you"
   */

  function makeStringFromArray(array, delimiter) {
    let string;
    // Change code below this line
    string = array.join(delimiter);
    // Change code above this line
    return string;
  }
}

{
  /**  #13
   * 
   * Задача: генератор slug
Задание

Термин slug - это человеко-понятный уникальный идентификатор, который используется в веб-разработке для создания читабельных URL-адресов.

Например, вместо того чтобы пользователь увидел в адресной строке mysite.com/posts/1q8fh74tx, можно сделать slug из названия статьи. В результате адрес получится более приятным для восприятия: mysite.com/posts/arrays-for-begginers.
Внимание

Slug это всегда строка в нижнем регистре, слова которой разделены тире.

Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.

    Значением параметра title будут строки, слова которых разделены только пробелами
    Все символы slug должны быть в нижнем регистре
    Все слова slug должна быть разделены тире

Тесты

    Объявлена функция slugify(title)
    Вызов slugify("Arrays for begginers") возвращает "arrays-for-begginers"
    Вызов slugify("English for developer") возвращает "english-for-developer"
    Вызов slugify("Ten secrets of JavaScript") возвращает "ten-secrets-of-javascript"
    Вызов slugify("How to become a JUNIOR developer in TWO WEEKS") возвращает "how-to-become-a-junior-developer-in-two-weeks"
   */

  function slugify(title) {
    // Change code below this line

    return title.toLowerCase().split(" ").join("-");

    // Change code above this line
  }
}

{
  /** #14
   * 
   * Метод slice()

Метод slice(begin, end) возвращает новый массив, содержащий копию части исходного массива, не изменяя его. Копия делается от begin и до, но не включая, end - индексы элементов исходного массива.

    Если begin и end не указаны, будет создана полная копия исходного массива.
    Если не указан end, копирование будет от start и до конца исходного массива.
    Если значение start отрицательное, а end не указан, то будут скопированы последние N элементов.

const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"]; console.log(planets.slice(0, 2)); // ['Earth', 'Mars'] console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter'] console.log(planets.slice(1, 3)); // ['Mars', 'Venus'] console.log(planets.slice(-2)); // ['Jupiter', 'Saturn'] console.log(planets.slice()); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn']

Задание

Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.

    firstTwoEls - массив из первых двух элементов
    nonExtremeEls - массив из всех элементов кроме первого и последнего
    lastThreeEls - массив из трёх последних элементов

Тесты

    Объявлена переменная fruits
    Значение переменной fruits это массив ["apple", "plum", "pear", "orange", "banana"]
    Объявлена переменная firstTwoEls
    Значение переменной firstTwoEls это массив ["apple", "plum"]
    Объявлена переменная nonExtremeEls
    Значение переменной nonExtremeEls это массив ["plum", "pear", "orange"]
    Объявлена переменная lastThreeEls
    Значение переменной lastThreeEls это массив ["pear", "orange", "banana"]
    Переменной lastThreeEls присвоена копия части массива fruits после применения метода slice с правильными аргументами
   */

  const fruits = ["apple", "plum", "pear", "orange", "banana"];

  // Change code below this line
  const firstTwoEls = fruits.slice(0, 2);
  const nonExtremeEls = fruits.slice(1, -1);
  const lastThreeEls = fruits.slice(-3);

  // console.log(lastThreeEls);
}

{
  /**  #15
   * 
   * Метод concat()

Метод concat используется для объединения двух или более массивов. Он не изменяет массив на котором вызывается, а возвращает новый. Порядок аргументов метода влияет на порядок элементов нового массива.

const firstArray = ["Mercury", "Venus", "Earth"]; const secondArray = ["Mars", "Jupiter"]; const thirdArray = ["Saturn", "Uranus", "Neptune"]; const allPlanets = firstArray.concat(secondArray, thirdArray); console.log(firstArray); // ['Mercury', 'Venus', 'Earth']; console.log(allPlanets); // ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

Задание

Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.
Тесты

    Объявлена переменная oldClients
    Значение переменной oldClients это массив ["Mango", "Ajax", "Poly", "Kiwi"]
    Объявлена переменная newClients
    Значение переменной newClients это массив ["Peach", "Houston"]
    Объявлена переменная allClients
    Значение переменной allClients это массив ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]
    Переменной allClients присвоен массив после применения метода concat с правильными аргументами
   */

  const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
  const newClients = ["Peach", "Houston"];

  const allClients = oldClients.concat(newClients); // Change this line
}

{
  /** #16
   *
   *  Задача: композиция массивов
Задание

Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.

Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов. В противном случае функция должна вернуть новый массив целиком.
Тесты

    Объявлена функция makeArray(firstArray, secondArray, maxLength)
    Вызов makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) возвращает ["Mango", "Poly", "Ajax"]
    Вызов makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) возвращает ["Mango", "Poly", "Houston", "Ajax"]
    Вызов makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) возвращает ["Mango", "Ajax", "Chelsea"]
    Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) возвращает ["Earth", "Jupiter"]
    Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) возвращает ["Earth", "Jupiter", "Neptune", "Uranus"]
    Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) возвращает []
    Вызов функции makeArray() со случайными массивами и случайным числом возвращает правильный массив
   */

  function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
    return firstArray.concat(secondArray).slice(0, maxLength);
    // Change code above this line
  }
}

{
  /**  #17
   *
   *  Цикл for

Циклы используются для многократного повторения кода. Объявление цикла for состоит из трёх выражений.

for (Инициализация; Условие; Пост - выражение) { // Тело цикла }

    Инициализация - выполняется один раз перед началом цикла. Используется для создания переменной-счётчика и указания её начального значения.
    Условие - выражение, оцениваемое перед каждой итерацией (повторением) цикла. Тело цикла выполняется только тогда, когда выражение приводится к true. Цикл завершается, если значение будет false.
    Пост-выражение - выполняется в конце каждого повторения цикла, перед проверкой условия. Используется для обновления переменной-счётчика.
    Тело - набор инструкций для выполнения на каждом повторении. Выполняется, если выражение условия приводится к true.

for (let i = 0; i <= 20; i += 5) { console.log(i); }

В примере объявляется переменная i, инициализируется значением 0 и цикл выполняется (его тело) до тех пор, пока i <= 20, то есть условие приводится к true. После каждой итерации счётчик увеличивается на 5.
Задание

Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.
Тесты

    Объявлена переменная start
    Значение переменной start это число 3
    Объявлена переменная end
    Значение переменной end это число 7
    Объявлена переменная i - счётчик цикла
    Начальное значение переменной i равно 3
    Условие цикла приводится к true до тех пор, пока i меньше либо равно 7
    На каждой итерации значение переменной i увеличивается на единицу
    Вывод в консоль переменной i покажет числа 3, 4, 5, 6, 7
   */

  const start = 3;
  const end = 7;
  for (let i = start; i <= end; i += 1) {
    // console.log(i);
  }
}

{
  /** #18
   * 
   * Задача: сумма чисел (цикл for)
Задание

Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.
Тесты

    Объявлена функция calculateTotal(number)
    Вызов функции calculateTotal(1) возвращает 1
    Вызов функции calculateTotal(3) возвращает 6
    Вызов функции calculateTotal(7) возвращает 28
    Вызов функции calculateTotal(18) возвращает 171
    Вызов функции calculateTotal(24) возвращает 300
    Вызов функции calculateTotal() со случайным числом возвращает правильное значение
   */

  function calculateNumber(number) {
    let result = 0;
    for (let i = 1; i <= number; i += 1) {
      result += i;
    }
    console.log(result);
    return result;
  }
  // calculateNumber(5);
}

{
  /**  #19 
   * 
   * Итерация по массиву

Цикл for можно использовать для итерации по массиву, то есть «перебрать» его поэлементно.

const planets = ["Earth", "Mars", "Venus"]; for (let i = 0; i < planets.length; i += 1) { console.log(planets[i]); }

Для доступа к элементам используется синтаксис квадратных скобок массив[индекс], где индекс - это значение счётчика цикла от 0 и до последнего индекса массива, который на единицу меньше длины массива.
Задание

Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.
Тесты

    Объявлена переменная fruits
    Значение переменной fruits это массив ["apple", "plum", "pear", "orange"]
    Объявлена переменная i - счётчик цикла
    Начальное значение переменной i равно 0
    Условие цикла приводится к true до тех пор, пока i меньше 4
    На каждой итерации значение переменной i увеличивается на единицу
    В теле цикла for объявляется переменная const fruit и этой переменной присваивается значение - элемент массива
    В теле цикла for используется вывод в консоль переменной fruit
  */

  const fruits = ["apple", "plum", "pear", "orange"];

  for (let i = 0; i < fruits.length; i += 1) {
    // Change this line
    const fruit = fruits[i]; // Change this line
    // console.log(fruit);
  }
}

{
  /**  #20
   *
   *  Задача: подсчёт суммы покупки
Задание

Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.
Тесты

    Объявлена функция calculateTotalPrice(order)
    Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
    Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
    Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
    Вызов функции calculateTotalPrice() со случайным массивом возвращает правильное значение
   */

  function calculateTotalPrice(order) {
    let total = 0;
    // Change code below this line
    for (let i = 0; i < order.length; i += 1) {
      total += order[i];
    }
    // Change code above this line
    console.log(total);
    return total;
  }
  // calculateTotalPrice([3, 6, 4, 5, 9]);
}

{
  /**  #21
   *
   *  Задача: поиск самого длинного слова
Задание

Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.
Тесты

    Объявлена функция findLongestWord(string)
    Вызов функции findLongestWord("The quick brown fox jumped over the lazy dog") возвращает jumped
    Вызов функции findLongestWord("Google do a roll") возвращает Google
    Вызов функции findLongestWord("May the force be with you") возвращает force
    Вызов функции findLongestWord() со случайной строкой возвращает правильное значение
   */

  function findLongestWord(string) {
    // Change code below this line
    const words = string.split(" ");
    let longestWord = "";

    for (let i = 0; i < words.length; i += 1) {
      longestWord =
        longestWord.length > words[i].length ? longestWord : words[i];
    }
    return longestWord;
    // Change code above this line
  }
  // console.log(findLongestWord("er try"));
}

{
  /**  #22
   *
   *  Метод push()

Метод push() позволяет добавить один или несколько элементов в конец массива, без необходимости указывать индексы добавляемых элементов.

const planets = ["Earth", "Mars", "Venus"]; planets.push("Jupiter"); planets.push("Saturn", "Uranus", "Neptune"); console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']

Задание

Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.
Тесты

    Объявлена функция createArrayOfNumbers(min, max)
    Вызов функции createArrayOfNumbers(1, 3) возвращает [1, 2, 3]
    Вызов функции createArrayOfNumbers(14, 17) возвращает [14, 15, 16, 17]
    Вызов функции createArrayOfNumbers(29, 34) возвращает [29, 30, 31, 32, 33, 34]
    Вызов функции createArrayOfNumbers() со случайными min и max возвращает правильный массив
    В цикле for использовался метод push
   */

  function createArrayOfNumbers(min, max) {
    const numbers = [];
    // Change code below this line

    for (let i = min; i <= max; i += 1) {
      numbers.push(i);
    }
    // Change code above this line
    return numbers;
  }
  // console.log(createArrayOfNumbers(2, 4));
}

{
  /**  #23
   * 
   * Задача: фильтрация массива чисел
Задание

Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).
Тесты

    Объявлена функция filterArray(numbers, value)
    Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
    Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
    Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
    Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
    Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
    Вызов функции filterArray() со случайным массивом и числом возвращает правильный массив
    В цикле for использовался метод push
   */

  function filterArray(numbers, value) {
    // Change code below this line
    const array = [];
    for (let i = 0; i < numbers.length; i += 1) {
      numbers[i] > value ? array.push(numbers[i]) : null;
    }
    return array;
    // Change code above this line
  }
  console.log(filterArray([12, 24, 8, 41, 76], 38));
}
