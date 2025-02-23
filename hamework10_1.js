var arr = [ 
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

var emailRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@[a-zA-Z]+\.(gmail\.com|yahoo\.com)$/;

var trustedEmails = arr
    .map(user => user.email)
    .filter(email => emailRegex.test(email));

console.log(trustedEmails);
