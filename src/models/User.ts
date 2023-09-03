interface User {
    id: UserRef,
    displayName: string,
    firstName: string,
    lastName: string,
    middleName: string
}

export type UserRef = string;

export default User;