import { nanoid } from 'nanoid';
import styles from './PhoneBook.module.css';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { SearchFilter } from './SearchFilter';
import { Notification } from './Notification/Notification';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, setFilter } from '../redux/store';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const handleChange = event => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.hero}>Phonebook</h1>
      <ContactForm
        addContact={(name, number) =>
          dispatch(addContact({ id: nanoid(), name, number }))
        }
      />
      <h2 className={styles.title}>Contacts</h2>
      <SearchFilter value={filter} onChange={handleChange} />
      {!contacts.length ? (
        <Notification message="You don't have any contacts yet"></Notification>
      ) : (
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={id => dispatch(deleteContact(id))}
        />
      )}
    </div>
  );
};
