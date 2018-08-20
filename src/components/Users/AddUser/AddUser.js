import React from 'react';
import AddUserWrapper from './AddUser.style';

class AddUser extends React.Component {
  render() {
    return(
      <AddUserWrapper>
        <form className="flex add-user-form">
          <div className="form-group">
            <input type="email" className="form-input" name="new_user_email" placeholder="Enter Email" />
            <p className="error-message">Please Enter Correct Email ID</p>
          </div>
          <div className="form-group">
            <select name="new_user_role" className="form-select">
              <option value="" selected disabled hidden>Choose</option>
              <option value="admin">Admin</option>
              <option value="non-admin">Non-Admin</option>
            </select>
          </div>
          <button className="submit-add-user-form" type="submit">Add User</button>
        </form>
      </AddUserWrapper>
    )
  }
}

export default AddUser;