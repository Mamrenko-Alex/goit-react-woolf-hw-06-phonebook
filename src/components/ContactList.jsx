import styles from './PhoneBook.module.css';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.contacts_list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contact_item}>
          {name} {number}
          <button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
