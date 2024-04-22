import React from "react";
import shoppingListsData from "../../data/shoppingLists.json";
import './ShoppingListDetail.css'
import { useParams } from 'react-router-dom';



const ShoppingListDetail = () => {
  const { id } = useParams();  
  const shoppingList = shoppingListsData.lists.find(list => list.id === parseInt(id));

  if (!shoppingList) {
    return <div>Loading...</div>;
  }

  const handleArchiveList = () => {
    // Implementation for archiving the shopping list
    console.log("Archiving shopping list", shoppingList.name);
  };

  const handleLeaveList = () => {
    // Implementation for leaving the shopping list
    console.log("Leaving shopping list", shoppingList.name);
  };

  const handleEditName = () => {
    // Implementation for editing the name of the shopping list
    console.log("Editing name of shopping list", shoppingList.name);
  };

  const handleDeleteList = () => {
    // Implementation for deleting the shopping list
    console.log("Deleting shopping list", shoppingList.name);
  };

  const handleInviteMember = () => {
    // Implementation for inviting a member to the shopping list
    console.log("Inviting member to shopping list", shoppingList.name);
  };

  const handleRemoveMember = () => {
    // Implementation for removing a member from the shopping list
    console.log("Removing member from shopping list", shoppingList.name);
  };

  const handleAddItem = () => {
    // Implementation for adding an item to the shopping list
    console.log("Adding item to shopping list", shoppingList.name);
  };

  const handleRemoveItem = () => {
    // Implementation for removing an item from the shopping list
    console.log("Removing item from shopping list", shoppingList.name);
  };

  const handleResolveItem = () => {
    // Implementation for marking an item as resolved
    console.log("Resolving item in shopping list", shoppingList.name);
  };

  return (
    <div>
      <h1>{shoppingList.name}</h1>
      <div>
        <h2>Owner</h2>
        <p>{shoppingList.owner}</p>
      </div>
      <div>
        <h2>Members</h2>
        <ul>
          {shoppingList.members.map((member, index) => (
            <li key={index}>{member}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Archived</h2>
        <p>{shoppingList.archived ? 'Yes' : 'No'}</p>
      </div>
      <div>
        <h2>Items</h2>
        <ul>
          {shoppingList.items.map((item, index) => (
            <li key={index}>
              {item.name} - Quantity: {item.quantity} - Resolved: {item.resolved ? 'Yes' : 'No'}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button onClick={handleArchiveList}>Archive List</button>
        <button onClick={handleLeaveList}>Leave List</button>
        <button onClick={handleEditName}>Edit Name</button>
        <button onClick={handleDeleteList}>Delete List</button>
        <button onClick={handleInviteMember}>Invite Member</button>
        <button onClick={handleRemoveMember}>Remove Member</button>
        <button onClick={handleAddItem}>Add Item</button>
        <button onClick={handleRemoveItem}>Remove Item</button>
        <button onClick={handleResolveItem}>Resolve Item</button>
      </div>
    </div>
  );
};

export default ShoppingListDetail;