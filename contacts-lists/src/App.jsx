
import React, { useState } from "react";
import './App.css'
import ContactList from './components/ContactList'
import SelectedContact from "./components/selectedContact"; // Adjust the path as needed

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <div className="app-container">
      {
        selectedContactId ? (
          <SelectedContact
            selectedContactId={selectedContactId}
            setSelectedContactId={setSelectedContactId}
          />
        ) : (
          <ContactList setSelectedContactId={setSelectedContactId} />
        )
      }
    </div>
  )
}