import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { contactsSelectors, changeFilter } from '../../redux/contacts';
import './Filter.scss';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);
  const onChange = e => dispatch(changeFilter(e.target.value));

  return (
    <div className="filterWrapper">
      <label className="filter_label">
        Find contacts by name
        <input
          className="filter_input"
          type="text"
          value={value}
          onChange={onChange}
        ></input>
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
