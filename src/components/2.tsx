import React from 'react';
// Assuming UserProfile, OrderHistory, and Settings components have been defined according to specifications.
import UserProfile from './UserProfile';
import OrderHistory from './OrderHistory';
import Settings from './Settings';

export const MyPage: React.FC = () => (
  <div>
    <UserProfile />
    <OrderHistory />
    <Settings />
  </div>
);