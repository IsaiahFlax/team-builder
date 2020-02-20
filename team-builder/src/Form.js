import React, {useState} from 'react';


const Form = props => {
    const [memberList, setMemberList] = useState({
        name: '',
        email: '',
        role: ''
      });

const handleChanges = event => {
    setMemberList({ ...memberList, [event.target.name]: event.target.value });
};

const submitForm = event => {
    console.log("submitting!");
    event.preventDefault(); // required so that we don't trigger form's default HTTP request
    props.addNewMember(memberList); // update parent state notes
    setMemberList({ name: "", email: "", role: "" }); // reset form to no value so it's easier to submit new input
  };
  // Step 13: Clear form onSubmit
  return (
    <form onSubmit={submitForm}>
      {/* Step 2: Add <label> with htmlFor & update <input> id to create relationship b/t input and label*/}
      <label htmlFor="name">Name</label>
      {/* Step 1: Create a basic <form> with <input> type=text inside to set up HTML form */}
      <input
        type="text"
        placeholder={`Enter name`}
        id="name"
        name="name"
        value={memberList.name}
        onChange={handleChanges}
      />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Add your note"
        value={memberList.email}
        onChange={handleChanges}
      />
      <label htmlFor="role">Role</label>
      <input
        id="role"
        name="role"
        placeholder="Add your note"
        value={memberList.role}
        onChange={handleChanges}
      />

      {/* Step 9: Submit form with button and onSubmit */}
      <button type="submit">Add Team Member</button>
    </form>
  );
};

export default Form;