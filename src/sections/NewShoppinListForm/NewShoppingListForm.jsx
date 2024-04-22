import React, { useState } from "react";

const NewShoppingListForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [members, setMembers] = useState("");
  const [memberInput, setMemberInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, members.split(",").map(member => member.trim()));
    setName("");
    setMembers("");
    setMemberInput("");
  };

  const handleMemberInputChange = (e) => {
    setMemberInput(e.target.value);
  };

  const handleAddMember = () => {
    if (memberInput.trim() !== "") {
      setMembers((prevMembers) =>
        prevMembers === "" ? memberInput : `${prevMembers}, ${memberInput}`
      );
      setMemberInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Members:</label>
        <input
          type="text"
          value={memberInput}
          onChange={handleMemberInputChange}
        />
        <button type="button" onClick={handleAddMember}>
          Add Member
        </button>
      </div>
      <div>
        <button type="submit">Create</button>
      </div>
    </form>
  );
};

export default NewShoppingListForm;
