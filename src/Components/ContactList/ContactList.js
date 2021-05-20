import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import PropTypes from 'prop-types';
import './ContactList.scss';

export default function ContactList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(contactsSelectors.getfilterContacts);
  const isLoadingContacts = useSelector(contactsSelectors.getLoading);

  return (
    <>
      {isLoadingContacts && <h1>Loading...</h1>}
      <ul className="contact_list">
        {contacts.map(({ id, name, number }) => (
          <li className="contact_item" key={id}>
            <p className="contact_info">
              {name}: {number}
            </p>
            <button
              className="add_button"
              type="button"
              onClick={() => dispatch(contactsOperations.deleteContact(id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number,
  onDeleteContact: PropTypes.func,
};
