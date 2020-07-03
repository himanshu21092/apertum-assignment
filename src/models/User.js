export function User(user) {
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.fullName = user.firstName + ' ' + user.lastName;
    this.age = user.age;
    this.userId = user.accountId;
}