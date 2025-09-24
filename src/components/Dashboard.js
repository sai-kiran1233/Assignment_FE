import React, { useState } from 'react';
import { useDashboard } from '../context/DashboardContext';
import SearchBar from './SearchBar';
import Category from './Category';
import CategoryManagement from './CategoryManagement';
import AddWidgetModal from './AddWidgetModal';

const Dashboard = () => {
  const { categories, searchTerm } = useDashboard();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const handleAddWidget = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCategoryId(null);
  };

  // Filter categories and widgets based on search term
  const filteredCategories = categories.map(category => {
    if (!searchTerm) return category;
    
    const filteredWidgets = category.widgets.filter(widget =>
      widget.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      widget.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return {
      ...category,
      widgets: filteredWidgets
    };
  }).filter(category => category.widgets.length > 0 || !searchTerm);

  return (
    <div className="dashboard-container">
      <SearchBar />
      <CategoryManagement />
      
      <div className="categories-grid">
        {filteredCategories.map(category => (
          <Category
            key={category.id}
            category={category}
            onAddWidget={handleAddWidget}
          />
        ))}
      </div>

      {isModalOpen && (
        <AddWidgetModal
          categoryId={selectedCategoryId}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Dashboard;
