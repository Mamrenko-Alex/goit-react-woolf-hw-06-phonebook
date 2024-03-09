import styles from './PhoneBook.module.css';
import { useState } from 'react';

export const ContactForm = ({ addContact }) => {
  const [fields, setFields] = useState({ name: '', number: '' });
  const { name, number } = fields;

  const handleChange = event => {
    const { name, value } = event.target;
    setFields(prevFields => ({ ...prevFields, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    addContact(name, number);
    setFields({ name: '', number: '' });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor="name_input">
        Name{' '}
      </label>
      <input
        className={styles.input}
        onChange={handleChange}
        id="name_input"
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <br />
      <label className={styles.label} htmlFor="number_input">
        Number{' '}
      </label>
      <input
        className={styles.input}
        onChange={handleChange}
        id="number_input"
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
};
