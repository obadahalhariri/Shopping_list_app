import React, { useState, useEffect } from "react";
import shoppingListsData from "../../data/shoppingLists.json";
import { Link, useLocation} from "react-router-dom"; 
import {Modal} from '../../components/index'
import {NewShoppingListForm} from '../../sections/index'
import "./ShoppingLists.css";

const ShoppingLists = () => {
  const [shoppingLists, setShoppingLists] = useState([]);
  const [filterArchived, setFilterArchived] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShoppingLists(shoppingListsData.lists);
  }, []);

  const handleDeleteList = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this shopping list?');
    if (confirmed) {
      const updatedLists = shoppingLists.filter(list => list.id !== id);
      setShoppingLists(updatedLists);
    }
  };

  const filteredLists = filterArchived ? shoppingLists.filter(list => !list.archived) : shoppingLists;

  const handleCreateList = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="shopping-lists-container">
      <h1>Shopping Lists</h1>
      <label>
        <input
          type="checkbox"
          checked={filterArchived}
          onChange={() => setFilterArchived(!filterArchived)}
        />
        Filter Archived Lists
      </label>
      <button onClick={handleCreateList}>Create Shopping List</button>
      <ul>
        {filteredLists.map((list) => (
          <li key={list.id} className="shopping-list">
            <h2>{list.name}</h2>
            <p>Owner: {list.owner}</p>
            <Link
              to={{
                pathname: `/list/${list.id}`,
                state: { id: list.id }
              }}
              className="detail-link"
            >
              View Details
            </Link>
            <button onClick={() => handleDeleteList(list.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Create New Shopping List</h2>
        <NewShoppingListForm />
      </Modal>
    </div>
  );
};

export default ShoppingLists;