// Dummy.jsx

import React, { useState, useRef } from 'react';
import './Dummy.css';

const EditableComponent = ({ title, initialContent, editMode, onToggleEditMode, onUpdateContent }) => {
  const [content, setContent] = useState(initialContent);
  const editableRef = useRef(null);

  const handleSave = () => {
    onUpdateContent(content);
  };

  const handleInput = () => {
    setContent(editableRef.current.innerText);
  };

  return (
    <div className="editable">
      <h2>{title}</h2>
      <div
        ref={editableRef}
        className={`editable-content ${editMode ? 'edit-mode' : ''}`}
        contentEditable={editMode}
        onBlur={handleSave}
        onInput={handleInput}
      >
        {content}
      </div>
    </div>
  );
};

const Dummy = () => {
  const [editMode, setEditMode] = useState(false);
  const [content1, setContent1] = useState('Initial content for Component 1.');
  const [content2, setContent2] = useState('Initial content for Component 2.');

  const handleToggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleUpdateContent = (content) => {
    // Update content based on your requirements
    console.log(content);
  };

  return (
    <div>
      <EditableComponent
        title="Component 1"
        initialContent={content1}
        editMode={editMode}
        onToggleEditMode={handleToggleEditMode}
        onUpdateContent={handleUpdateContent}
      />
      <EditableComponent
        title="Component 2"
        initialContent={content2}
        editMode={editMode}
        onToggleEditMode={handleToggleEditMode}
        onUpdateContent={handleUpdateContent}
      />
      <button className="edit-save-btn" onClick={handleToggleEditMode}>
        {editMode ? 'Save' : 'Edit'}
      </button>
    </div>
  );
};

export default Dummy;
