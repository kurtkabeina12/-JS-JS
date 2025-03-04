const url = 'https://purpleschool.ru/course/javascript';

function getUrlParts(url) {
    let urlArr = url.split('/');
    const [protocol, _, domen, ...others] = urlArr;
    if (protocol === 'https:' || protocol === 'http:') {
        if (!domen.includes('.')) {
            return;
        }
        console.log(protocol, domen, others.join('/'));
        console.log(`Протокол: ${protocol.split(':')[0]}`);
        console.log(`Домен: ${domen}`);
        console.log(`Путь: /${others.join('/')}`);
    }
}

getUrlParts(url)