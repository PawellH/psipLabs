let arr1 = [1, 2, 3, 4, 5];
let arr2 = new Array(6, 7);
let arr3 = Array.of(8, 9, 10);
let arr4 = [
  ...arr1,
  ...arr2,
  ...arr3
];
function arrayFill(){
    //2
    alert(`2) ${arr4.join(", ")};Длина массива = ${arr4.length}`); 
    //3
    arr4.splice(Math.round(arr4.length / 2), 2);
    arr4.splice(4,0,11,12,13);
    alert(`3)Длина массива = ${arr4.length}`);
    //4
    arr4.splice(arr4.length - 1,1);
    alert(`4)Массив после удаления последнего удаления: ${arr4.join(", ")}`);
    // delete arr4[arr4.length - 1];
    //5
    delete arr4[0];
    delete arr4[3];
    delete arr4[5];
    alert(`5)Массив после удалений трех элементов: ${arr4.join(", ")}`);
    //6-7
    alert(`6)Длина массива = ${arr4.length}`);
    let sum = 0;
    for(let i = 0; i < arr4.length; i++){
        if(arr4[i] !== undefined){
            alert("arr4["+i+"]= "+arr4[i]);
            sum += arr4[i];
        }
    }
    //7-среднее
    alert(`7)Массив на 7 задании: ${arr4.join(", ")}`);    
    let avg = sum / arr4.length;
    if(arr4.includes(avg)){
        alert(`Есть элемент = ${avg} в массиве`);
    }
    else{
        alert(`Нету элемента = ${avg} в массиве`);
    }
    //8
    arr4.length = 0;
    alert(`8)Массив(очистен): ${arr4.join(", ")}`);
    // arr4 = [];
    arr4.splice(0, arr4.length);
}
arrayFill();