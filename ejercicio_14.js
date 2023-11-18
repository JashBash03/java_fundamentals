let numeros1 = [21, 67, 89, 92, 99, 0.9, 13]

function minimo(arr) {
  let min = arr[0]
  for (i = 0; i < arr.length; i++)
    if (min > arr[i]) {
      min = arr[i]
      console.log(`El numero ${min} es mayor que ${arr[i]}`)
    } else {
      console.log(`El numero ${min} es menor que ${arr[i]}`)
    }
}
function maximo(arr) {
  let max = arr[0]
  for (i = 0; i < arr.length; i++)
    if (max < arr[i]) {
      max = arr[i]
      console.log(`El numero ${max} es menor que ${arr[i]}`)
    } else {
      console.log(`El numero ${max} es mayor que ${arr[i]}`)
    }
}
function media() {
  let suma = numeros1.reduce((previous, current) => current += previous);
  let media = suma /numeros1.length;
  console.log(media)
}
minimo(numeros1)
maximo(numeros1)
media()