import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import './ContactForm.scss';

export default function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  const allContacts = useSelector(contactsSelectors.getItems);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      const getName = allContacts.map(contact => contact.name.toLowerCase());

      if (getName.includes(name.toLowerCase())) {
        alert(`${name} is already in contacts`);
      } else {
        dispatch(contactsOperations.addContact({ name, number }));
      }

      reset();
    },
    [name, number, dispatch, allContacts],
  );

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="input_label">
        Name
        <input
          className="contactform_input"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label className="input_label">
        Number
        <input
          className="contactform_input"
          type="tel"
          name="number"
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleNumberChange}
        />
      </label>
      <button className="submit_button" type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};
