import React, { createContext, useContext, useReducer } from 'react';
import { initialDashboardData } from '../data/initialData';

const DashboardContext = createContext();

// Action types
const ACTIONS = {
  ADD_WIDGET: 'ADD_WIDGET',
  REMOVE_WIDGET: 'REMOVE_WIDGET',
  ADD_CATEGORY: 'ADD_CATEGORY',
  REMOVE_CATEGORY: 'REMOVE_CATEGORY',
  UPDATE_SEARCH_TERM: 'UPDATE_SEARCH_TERM'
};

// Reducer function
const dashboardReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_WIDGET:
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: [...category.widgets, action.payload.widget]
              }
            : category
        )
      };

    case ACTIONS.REMOVE_WIDGET:
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: category.widgets.filter(
                  widget => widget.id !== action.payload.widgetId
                )
              }
            : category
        )
      };

    case ACTIONS.ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload.category]
      };

    case ACTIONS.REMOVE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(
          category => category.id !== action.payload.categoryId
        )
      };

    case ACTIONS.UPDATE_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload.searchTerm
      };

    default:
      return state;
  }
};

// Initial state
const initialState = {
  ...initialDashboardData,
  searchTerm: ''
};

// Provider component
export const DashboardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);

  const addWidget = (categoryId, widget) => {
    dispatch({
      type: ACTIONS.ADD_WIDGET,
      payload: { categoryId, widget }
    });
  };

  const removeWidget = (categoryId, widgetId) => {
    dispatch({
      type: ACTIONS.REMOVE_WIDGET,
      payload: { categoryId, widgetId }
    });
  };

  const addCategory = (category) => {
    dispatch({
      type: ACTIONS.ADD_CATEGORY,
      payload: { category }
    });
  };

  const removeCategory = (categoryId) => {
    dispatch({
      type: ACTIONS.REMOVE_CATEGORY,
      payload: { categoryId }
    });
  };

  const updateSearchTerm = (searchTerm) => {
    dispatch({
      type: ACTIONS.UPDATE_SEARCH_TERM,
      payload: { searchTerm }
    });
  };

  const value = {
    ...state,
    addWidget,
    removeWidget,
    addCategory,
    removeCategory,
    updateSearchTerm
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

// Custom hook to use the context
export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};
