// import { nanoid } from 'nanoid';
import styles from './PhoneBook.module.css';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { SearchFilter } from './SearchFilter';
import { Notification } from './Notification/Notification';
import { useSelector } from 'react-redux';
import { getContacts } from '../redux/selector';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <div className={styles.container}>
      <h1 className={styles.hero}>Phonebook</h1>
      <ContactForm/>
      <h2 className={styles.title}>Contacts</h2>
      <SearchFilter value={'filter'}/>
      {!contacts.length ? (
        <Notification message="You don't have any contacts yet"></Notification>
      ) : (
        <ContactList />
      )}
    </div>
  );
};
