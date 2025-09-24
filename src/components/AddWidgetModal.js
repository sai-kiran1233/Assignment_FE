import React, { useState } from 'react';
import { useDashboard } from '../context/DashboardContext';

const AddWidgetModal = ({ categoryId, onClose }) => {
  const { addWidget, categories } = useDashboard();
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');

  const category = categories.find(cat => cat.id === categoryId);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!widgetName.trim() || !widgetText.trim()) {
      alert('Please fill in all fields');
      return;
    }

    const newWidget = {
      id: `widget-${Date.now()}`,
      name: widgetName.trim(),
      text: widgetText.trim()
    };

    addWidget(categoryId, newWidget);
    
    // Reset form
    setWidgetName('');
    setWidgetText('');
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <div className="modal-header">
          <h2 className="modal-title">
            Add Widget to {category?.name}
          </h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="widgetName" className="form-label">
              Widget Name
            </label>
            <input
              type="text"
              id="widgetName"
              className="form-input"
              value={widgetName}
              onChange={(e) => setWidgetName(e.target.value)}
              placeholder="Enter widget name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="widgetText" className="form-label">
              Widget Text
            </label>
            <textarea
              id="widgetText"
              className="form-input form-textarea"
              value={widgetText}
              onChange={(e) => setWidgetText(e.target.value)}
              placeholder="Enter widget content"
              required
            />
          </div>

          <div className="modal-actions">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Add Widget
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWidgetModal;
