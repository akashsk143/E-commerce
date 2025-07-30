import React, { useState, useEffect } from 'react';
import { X, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';

export function AuthModal({ isOpen, onClose, mode = 'login' }) {
  const [authMode, setAuthMode] = useState(mode);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  useEffect(() => {
    if (!isOpen) {
      setWelcomeMessage('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage('');
    setSuccessMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    setWelcomeMessage('');

    if (authMode === 'register' && formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    try {
      setLoading(true);

      // Simulate API delay
      await new Promise((res) => setTimeout(res, 1500));

      // Simulated error
      if (formData.email === 'fail@example.com') {
        throw new Error('Simulated failure. Try again.');
      }

      if (authMode === 'login') {
        setSuccessMessage('Signed in successfully!');
        const name = formData.name || 'User';
        localStorage.setItem('username', name);
        setWelcomeMessage(`Welcome, ${name}!`);
      } else {
        setSuccessMessage('Account created!');
        localStorage.setItem('username', formData.name);
        setWelcomeMessage(`Welcome, ${formData.name}!`);
      }

      setTimeout(() => {
        onClose();
        setFormData({ name: '', email: '', password: '', confirmPassword: '' });
        setAuthMode('login');
        setWelcomeMessage('');
      }, 1500);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full">
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">
            {authMode === 'login' ? 'Sign In' : 'Create Account'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {errorMessage && (
            <div className="bg-red-100 text-red-700 px-4 py-2 rounded">
              {errorMessage}
            </div>
          )}
          {successMessage && (
            <div className="bg-green-100 text-green-700 px-4 py-2 rounded">
              {successMessage}
            </div>
          )}
          {welcomeMessage && (
            <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded text-center font-medium">
              {welcomeMessage}
            </div>
          )}

          {authMode === 'register' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="Enter your full name"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                autoComplete="off"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                autoComplete="off"
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {authMode === 'register' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  autoComplete="off"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="Confirm your password"
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${
              loading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {loading
              ? 'Please wait...'
              : authMode === 'login'
              ? 'Sign In'
              : 'Create Account'}
          </button>

          <div className="text-center">
            <button
              type="button"
              onClick={() => {
                setAuthMode(authMode === 'login' ? 'register' : 'login');
                setFormData({
                  name: '',
                  email: '',
                  password: '',
                  confirmPassword: ''
                });
                setShowPassword(false);
                setErrorMessage('');
                setSuccessMessage('');
                setWelcomeMessage('');
              }}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              {authMode === 'login'
                ? "Don't have an account? Sign up"
                : 'Already have an account? Sign in'}
            </button>
          </div>

          {authMode === 'login' && (
            <div className="text-center">
              <button
                type="button"
                className="text-gray-600 hover:text-gray-700 text-sm"
              >
                Forgot your password?
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
