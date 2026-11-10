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
