import { useDispatch, useSelector } from 'react-redux';
import { ItemBtn, List, ListItem } from './ContactList.styled';
import { selectFilteredList } from 'redux/contacts/selector';
import { deleteContact } from 'redux/contacts/operations';

export default function ContactList() {
  const filteredList = useSelector(selectFilteredList);
  const dispatch = useDispatch();

  return (
    <>
      <List>
        {filteredList.map(el => (
          <ListItem key={el.id}>
            <p>
              {el.name}: {el.number}
            </p>
            <ItemBtn
              type="button"
              onClick={() => dispatch(deleteContact(el.id))}
            >
              Delete
            </ItemBtn>
          </ListItem>
        ))}
      </List>
    </>
  );
}
