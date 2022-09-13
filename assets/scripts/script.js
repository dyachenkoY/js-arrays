"use strict";

/* 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе. */

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3);

/* 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1]. */

const arrReverse = [1, 2, 3];
const reversedArr = arrReverse.reverse();
console.log(reversedArr);

/* 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6. */

const arrPush = [1, 2, 3];
arrPush.push(4, 5, 6);
console.log(arrPush);

/* 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6. */

const arrUnsh = [1, 2, 3];
arrUnsh.unshift(4, 5, 6);
console.log(arrUnsh);

/* 5.  Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его. */

const arrShift = ['js', 'css', 'jq'];
const shifted = arrShift.shift();
console.log(shifted);
console.log(arrShift);


/* 6.  Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент и удалите его . */

const arrPop = ['js', 'css', 'jq'];
const poped = arrPop.pop();
console.log(poped);
console.log(arrPop);

/* 7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].*/

const arrSlice1 = [1, 2, 3, 4, 5];
const sliced1 = arrSlice1.slice(0, 3)
console.log(sliced1);


/* 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].*/

const arrSlice2 = [1, 2, 3, 4, 5];
const sliced2 = arrSlice2.slice(3, Infinity)
console.log(sliced2);

/* 9.  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].*/

const arrSplice1 = [1, 2, 3, 4, 5];
arrSplice1.splice(1, 2);
console.log(arrSplice1);

/* 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4]. */

const arrSplice2 = [1, 2, 3, 4, 5];
const arrSpliced2 = arrSplice2.splice(1, 3);
console.log(arrSpliced2);

/* 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5]. */

const arrSplice3 = [1, 2, 3, 4, 5];
arrSplice3.splice(3, 0, 'a', 'b', 'c');
console.log(arrSplice3);

/* 12.  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].*/

const arrSplice4 = [1, 2, 3, 4, 5];
arrSplice4.splice(1, 0, 'a', 'b');
arrSplice4.splice(6, 0, 'c');
arrSplice4.splice(9, 0, 'e');
console.log(arrSplice4);

/* 13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.*/

const arrSort = [3, 4, 1, 2, 7];
arrSort.sort(function (a, b) {
    return a - b;
});

console.log(arrSort);

/* 14.  Дан массив со следующими объектами внутри:  
{firstName: ‘Test’, lastName: ’Testovich’, age: 42, gender: ‘male’,}, 			
{firstName: ‘User’, lastName: ’Userovich’, age: 12, gender: ‘male’,},		
{firstName: ‘Test`ya’, lastName: ’Testovna’, age: 16, gender: ‘female’,},		
{firstName: ‘Logina’, lastName: ’Consol`evna’, age: 42, gender: ‘female’,} 		
Для каждого элемента выведите сообщение в консоль типа “Пользователь (имя) (фамилия) 
является (пол) и ему сейчас (возраст) лет”*/

const arrEach = [
    { firstName: 'Test', lastName: 'Testovich', age: 42, gender: 'male', },
    { firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male', },
    { firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female', },
    { firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female', }
];

arrEach.forEach(function (elem) {
    console.log(`Пользователь ${elem.firstName} ${elem.lastName} является ${elem.gender} и ему сейчас ${elem.age} лет`)
});


/* 15.  Дан массив со следующими объектами внутри:  
{firstName: ‘Test’, lastName: ’Testovich’, age: 42, gender: ‘male’,}, 			
{firstName: ‘User’, lastName: ’Userovich’, age: 12, gender: ‘male’,},		
{firstName: ‘Test`ya’, lastName: ’Testovna’, age: 16, gender: ‘female’,},		
{firstName: ‘Logina’, lastName: ’Consol`evna’, age: 42, gender: ‘female’,} 		
Создайте новый массив на основании старого массива, добавив каждому пользователю в новом 
массиве свойство telephoneNumber которое может быть или строкой или числом (на ваше усмотрение).*/

const arrMap = [
    { firstName: 'Test', lastName: 'Testovich', age: 42, gender: 'male', },
    { firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male', },
    { firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female', },
    { firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female', }
];

const arrMaped = arrMap.map(function (elem) {
    elem.telephoneNumber = 948984949;
});

console.log(arrMap);


/* 16.  Дан массив со следующими объектами внутри:  
{firstName: ‘Test’, lastName: ’Testovich’, age: 42, gender: ‘male’,}, 			
{firstName: ‘User’, lastName: ’Userovich’, age: 12, gender: ‘male’,},		
{firstName: ‘Test`ya’, lastName: ’Testovna’, age: 16, gender: ‘female’,},		
{firstName: ‘Logina’, lastName: ’Consol`evna’, age: 42, gender: ‘female’,}
{firstName: ‘Undefined’, lastName: ’Undefinovich’, age: 99},			
{firstName: ‘Null’, lastName: ’Nullovich’, gender: ‘male’}
Создайте новый массив на основании старого массива, в котором будут только те совершеннолетние пользователи, у которых будет определенный пол.
*/

const arrFilter = [
    { firstName: 'Test', lastName: 'Testovich', age: 42, gender: 'male', },
    { firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male', },
    { firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female', },
    { firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female', },
    { firstName: 'Undefined', lastName: 'Undefinovich', age: 99},
    { firstName: 'Null', lastName: 'Nullovich', gender: 'male' }
];

const filtered = arrFilter.filter(function (elem) {
    if(elem.age >= 18 && 'gender' in elem ) {
    return elem;
}
})

console.log(filtered);

/* 17. Дан следующий массив [1,2,3, [10,20,30, [100,200,300, 
[1000, 2000, 3000]]]]. Создайте новый массив на основании старого 
массива, в котором не будет вложенных массивов. */

const arrFlat = [1,2,3, [10,20,30, [100,200,300, [1000, 2000, 3000]]]];

const arrFlated = arrFlat.flat(Infinity);
console.log(arrFlated);