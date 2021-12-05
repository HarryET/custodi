import { useContext } from 'react';
import { AuthContext } from '../components/AuthProvider';

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined)
    throw Error('useAuth must be used within AuthProvider')
  return context
}