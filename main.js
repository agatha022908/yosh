let name = prompt('Ismingizni yozing')
let nowyear = +prompt('Hozirgi yilni kiriting')
let birthdayyear = +prompt('tugilgan yilingizni kiriting')

alert(`Ism: ${name} yoshingiz ${nowyear - birthdayyear}`);

function tanishuv( name, nowyear, birthdayyear) {
    return(`Ism: ${name} yoshingiz ${nowyear - birthdayyear}`);
    
}