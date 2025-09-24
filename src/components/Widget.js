import React from 'react';

const Widget = ({ widget, onRemove }) => {
  return (
    <div className="widget">
      <div className="widget-header">
        <h3 className="widget-title">{widget.name}</h3>
        <button
          className="remove-widget-btn"
          onClick={onRemove}
          title="Remove Widget"
        >
          ×
        </button>
      </div>
      <div className="widget-content">
        {widget.text}
      </div>
    </div>
  );
};

export default Widget;
