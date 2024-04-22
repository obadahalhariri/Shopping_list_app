import React from "react";
import shoppingListsData from "../../data/shoppingLists.json";

const ShoppingListDetail = ({ id }) => {
  const shoppingList = shoppingListsData.lists.find(list => list.id === parseInt(id));

  if (!shoppingList) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{shoppingList.name}</h1>
      <p>Owner: {shoppingList.owner}</p>
      <h2>Items:</h2>
      <ul>
        {shoppingList.items.map((item, index) => (
          <li key={index}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingListDetail;