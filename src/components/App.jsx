import ContactList from './phonebookSection/contactList/ContactList';
import { ContactForm } from './contactForm/ContactForm';
import Filter from './filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectContact, selectLoader } from 'redux/contacts/selector';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { Loader } from './loader/loader';

export function App() {
  const contacts = useSelector(selectContact);
  const isLoading = useSelector(selectLoader);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length > 0 && (
        <>
          <Filter />
          <ContactList />
        </>
      )}
      {!isLoading && contacts.length === 0 && (
        <p>There are no contacts in your contact list. Try to make one.</p>
      )}
      {isLoading && <Loader />}
    </div>
  );
}
