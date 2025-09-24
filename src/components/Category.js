import React from 'react';
import { useDashboard } from '../context/DashboardContext';
import Widget from './Widget';

const Category = ({ category, onAddWidget }) => {
  const { removeWidget } = useDashboard();

  const handleRemoveWidget = (widgetId) => {
    removeWidget(category.id, widgetId);
  };

  return (
    <div className="category-card">
      <div className="category-header">
        <h2 className="category-title">{category.name}</h2>
        <button
          className="add-widget-btn"
          onClick={() => onAddWidget(category.id)}
          title="Add Widget"
        >
          <span>+</span>
          Add Widget
        </button>
      </div>
      
      <div className="widgets-container">
        {category.widgets.length > 0 ? (
          category.widgets.map(widget => (
            <Widget
              key={widget.id}
              widget={widget}
              onRemove={() => handleRemoveWidget(widget.id)}
            />
          ))
        ) : (
          <div className="no-widgets">
            No widgets in this category
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
