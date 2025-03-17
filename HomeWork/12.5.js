let num = [];
// Верные номера
num[0] = '89103235356';
num[1] = '+79103235356';
num[2] = '+7(910)3235356';
num[3] = '+7(910) 323-53-56';
num[4] = ' +7(910) 323-53-56';

// Неверные номера
num[5] = '89103235';
num[6] = '+7d910d323-53-56';
num[7] = '9+7103235356';
num[8] = '89103g35356';

function isValidPhoneNumber(numberPhone) {
    numberPhone = numberPhone.trim()
    numberPhone = numberPhone.replace('+7', '8')
    numberPhone = numberPhone.replaceAll(' ', '')
    numberPhone = numberPhone.replaceAll('(', '')
    numberPhone = numberPhone.replaceAll(')', '')
    numberPhone = numberPhone.replaceAll('-', '')

    if (!numberPhone.startsWith('8') || numberPhone.length != 11 || isNaN(Number(numberPhone))) {
        return false;
    }

    console.log(numberPhone)
}

isValidPhoneNumber(num[8])