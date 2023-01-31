import ContactList from 'components/contactList/ContactList';
import { ContactForm } from 'components/contactForm/ContactForm';
import Filter from 'components/filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectContact, selectLoader } from 'redux/contacts/selector';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { Loader } from 'components/loader/loader';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import {
  ContactsContainer,
  ContactsSubTitle,
  ContactsTitle,
} from './Contacts.styled';

export default function Contacts() {
  const contacts = useSelector(selectContact);
  const isLoading = useSelector(selectLoader);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [isLoggedIn, dispatch]);

  return (
    <ContactsContainer>
      <ContactsTitle>Phonebook</ContactsTitle>
      <ContactForm />
      <ContactsSubTitle>Contacts</ContactsSubTitle>
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
    </ContactsContainer>
  );
}
