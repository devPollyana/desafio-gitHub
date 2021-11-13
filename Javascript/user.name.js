const user = { 
    name: 'pollyana',
    LastName: 'rocha'
};
function getUserWithFullName(user) {
    return {
        ...user,
        fullName:  `${user.name} ${user.LastName}`
    }
}
const userWithFullName = getUserWithFullName(user);
console.log(userWithFullName);

/////////////////////////////////////////////////////
const persons = ['guilherme', 'pedro', 'jennifer']; //array 

persons.push('joao');//adicionar novo item


persons.shift();//apaga o primeiro item

persons[1] = 'james';//muda o valor do segundo item para o outro nome

console.log('\narray apos as alteracoes: ', persons);