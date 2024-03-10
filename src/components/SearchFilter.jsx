import { useDispatch, useSelector } from 'react-redux';
import styles from './PhoneBook.module.css';
import { setFilter } from '../redux/slices';
import { getFilter } from '../redux/selector';

export const SearchFilter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(setFilter(normalizedValue));
  };

  return (
    <>
      <label className={styles.label_search} htmlFor="search_input">
        Find the contacts by name{' '}
      </label>
      <input
        type="text"
        className={styles.search}
        onChange={handleChange}
        id="search_input"
        name="filter"
        value={value}
        title="Find the numer in yor phonebook by name"
      />
    </>
  );
};
