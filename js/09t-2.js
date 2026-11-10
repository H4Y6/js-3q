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
