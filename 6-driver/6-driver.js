// 6.8 - Домашнее задание
const hasLicence = true;
const age = 18;
const isDrunk = true;

const canDrive = (age >= 18) && hasLicence && !isDrunk;
console.log(`Можно ли водить машину: ${canDrive ? 'Да' : 'Нет'}`)