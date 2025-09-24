# Dynamic Dashboard Application

A modern, responsive React dashboard application that allows users to dynamically manage widgets across different categories. Built with React, Context API for state management, and modern CSS for a beautiful user interface.

## Features

- **Dynamic Widget Management**: Add and remove widgets from categories
- **Dual Widget Removal Methods**: 
  - Remove widgets using the "×" cross icon on each widget
  - Remove widgets from the "Category Management" section by unchecking them
- **Search Functionality**: Search across all widgets by name or content
- **Category-based Organization**: Organize widgets into different categories
- **Category Management Panel**: Expandable section to manage all widgets across categories
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Beautiful gradient designs and smooth animations
- **State Management**: Uses React Context API for efficient state management

## Project Structure

```
src/
├── components/
│   ├── Dashboard.js          # Main dashboard component
│   ├── Category.js           # Category component with widgets
│   ├── Widget.js             # Individual widget component
│   ├── SearchBar.js          # Search functionality
│   ├── CategoryManagement.js # Category management panel
│   └── AddWidgetModal.js     # Modal for adding new widgets
├── context/
│   └── DashboardContext.js   # Context API for state management
├── data/
│   └── initialData.js        # Initial JSON data structure
├── App.js                    # Main app component
├── App.css                   # Main styles
├── index.js                  # App entry point
└── index.css                 # Global styles
```

## JSON Data Structure

The application uses a JSON structure to build the dashboard dynamically:

```json
{
  "categories": [
    {
      "id": "cspm-executive",
      "name": "CSPM Executive Dashboard",
      "widgets": [
        {
          "id": "widget-1",
          "name": "Security Score",
          "text": "Current security posture score: 85/100..."
        }
      ]
    }
  ]
}
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   # If you have the project files, navigate to the project directory
   cd ASSIGNMENT_FE
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## How to Use

### Adding a Widget

1. Click the **"+ Add Widget"** button in any category
2. Fill in the widget name and text content
3. Click **"Add Widget"** to save

### Removing a Widget

**Method 1: Using the Cross Icon**
1. Click the **"×"** button on any widget to remove it
2. The widget will be immediately removed from the category

**Method 2: Using Category Management**
1. Click on **"Category Management"** to expand the management panel
2. Find the widget you want to remove in the appropriate category section
3. Uncheck the checkbox next to the widget name
4. The widget will be immediately removed from the category

### Searching Widgets

1. Use the search bar at the top of the dashboard
2. Type any text to search across widget names and content
3. The dashboard will filter to show only matching widgets

### Categories

The application comes with three pre-configured categories:
- **CSPM Executive Dashboard** - Security and compliance metrics
- **Performance Metrics** - System performance data
- **User Analytics** - User engagement statistics

## Technical Implementation

### State Management

The application uses React Context API with useReducer for state management:

- **Actions**: ADD_WIDGET, REMOVE_WIDGET, UPDATE_SEARCH_TERM
- **State**: Categories, widgets, and search functionality
- **Provider**: DashboardProvider wraps the entire application

### Component Architecture

- **Dashboard**: Main container component
- **Category**: Displays a category with its widgets
- **Widget**: Individual widget component with remove functionality
- **SearchBar**: Handles search input and filtering
- **CategoryManagement**: Expandable panel for managing widgets across categories
- **AddWidgetModal**: Modal form for adding new widgets

### Styling

- Modern CSS with flexbox and grid layouts
- Responsive design with mobile-first approach
- Beautiful gradients and smooth animations
- Hover effects and transitions for better UX

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

### Adding New Features

1. **New Widget Types**: Extend the widget structure in `initialData.js`
2. **New Categories**: Add categories to the initial data
3. **Enhanced Search**: Modify the search logic in `Dashboard.js`
4. **Custom Styling**: Update `App.css` for new visual elements

### Code Organization

- Components are organized by functionality
- Context API provides centralized state management
- CSS follows BEM-like naming conventions
- Responsive design principles are applied throughout

## Production Build

To create a production build:

```bash
npm run build
```

This creates an optimized build in the `build` folder that can be deployed to any static hosting service.

## License

This project is created for educational purposes as part of an assignment.

## Support

For any questions or issues, please refer to the code comments or create an issue in the project repository.
