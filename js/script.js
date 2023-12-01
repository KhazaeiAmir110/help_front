const user = {
    firstname : 'Ahmad',
    lastname : 'Ahmadi',
    age : 36,
}

const user1 = {
    test : function red(city) {
        alert(this.firstname + city)
    }
}

// Difference call and apply
user1.test.call(user, 'Qom')
user1.test.apply(user, ['qom'])