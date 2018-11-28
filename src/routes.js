/**
 * React Router
 */
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import App from './containers/app/app';

// Map components to different routes.
// The parent component wraps other components and thus serves as  the entrance to 
// other React components.
const RoutingConfig = () => (
  <Router basename="/testApp">
    <div>
      <App /> 
    </div>
  </Router>
);
export default RoutingConfig;