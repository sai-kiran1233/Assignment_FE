import React, { useState } from 'react';
import { useDashboard } from '../context/DashboardContext';

const CategoryManagement = () => {
  const { categories, removeWidget } = useDashboard();
  const [isOpen, setIsOpen] = useState(false);

  const handleWidgetToggle = (categoryId, widgetId, isChecked) => {
    if (!isChecked) {
      removeWidget(categoryId, widgetId);
    }
  };

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="category-management">
      <button 
        className="category-management-toggle"
        onClick={toggleSection}
      >
        {isOpen ? '▼' : '▶'} Category Management
      </button>
      
      {isOpen && (
        <div className="category-management-content">
          <h3>Remove Widgets from Categories</h3>
          <p>Uncheck widgets to remove them from their categories:</p>
          
          {categories.map(category => (
            <div key={category.id} className="category-section">
              <h4 className="category-section-title">{category.name}</h4>
              <div className="widgets-list">
                {category.widgets.length > 0 ? (
                  category.widgets.map(widget => (
                    <label key={widget.id} className="widget-checkbox-item">
                      <input
                        type="checkbox"
                        defaultChecked={true}
                        onChange={(e) => handleWidgetToggle(category.id, widget.id, e.target.checked)}
                      />
                      <span className="widget-checkbox-label">
                        <strong>{widget.name}</strong>
                        <span className="widget-preview">
                          {widget.text.length > 50 
                            ? `${widget.text.substring(0, 50)}...` 
                            : widget.text
                          }
                        </span>
                      </span>
                    </label>
                  ))
                ) : (
                  <p className="no-widgets-message">No widgets in this category</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryManagement;
