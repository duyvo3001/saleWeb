export class User {
  id?: number;
  name?: string;
  email?: string;
  phoneNumber?: string;
  constructor({ id, name, email, phoneNumber }) {
    if (id !== null) this.id = id;
    if (name !== null) this.name = name;
    if (email !== null) this.email = email;
    if (phoneNumber !== null) this.phoneNumber = phoneNumber;
  }
}
