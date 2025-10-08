import { validateEmail, validateName, validatePassword } from '@/lib/auth';
import { useState } from 'react';

const SignUpForm = ({ onClose, switchToLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    const nameError = validateName(formData.name);
    if (nameError !== true) newErrors.name = nameError;

    const emailError = validateEmail(formData.email);
    if (emailError !== true) newErrors.email = emailError;

    const passwordError = validatePassword(formData.password);
    if (passwordError !== true) newErrors.password = passwordError;

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      console.log('Sign up submitted:', formData);
      alert('Account created successfully!');
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  const isPasswordValid = formData.password.length >= 8;
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(formData.password);

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-gray-900 font-medium mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-0 py-3 border-b-2 ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          } focus:border-yellow-600 outline-none transition-colors bg-transparent`}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      <div>
        <label className="block text-gray-900 font-medium mb-2">Email</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-0 py-3 border-b-2 ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          } focus:border-yellow-600 outline-none transition-colors bg-transparent`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-900 font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full px-0 py-3 border-b-2 ${
              errors.password ? 'border-red-500' : 'border-gray-300'
            } focus:border-yellow-600 outline-none transition-colors bg-transparent`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-900 font-medium mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`w-full px-0 py-3 border-b-2 ${
              errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
            } focus:border-yellow-600 outline-none transition-colors bg-transparent`}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <div
            className={`w-4 h-4 rounded-full flex items-center justify-center ${
              isPasswordValid ? 'bg-green-500' : 'bg-gray-300'
            }`}
          >
            {isPasswordValid && <span className="text-white text-xs">✓</span>}
          </div>
          <span
            className={isPasswordValid ? 'text-green-600' : 'text-gray-600'}
          >
            Must be at least 8 characters
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div
            className={`w-4 h-4 rounded-full flex items-center justify-center ${
              hasSpecialChar ? 'bg-green-500' : 'bg-gray-300'
            }`}
          >
            {hasSpecialChar && <span className="text-white text-xs">✓</span>}
          </div>
          <span className={hasSpecialChar ? 'text-green-600' : 'text-gray-600'}>
            Must contain one special character
          </span>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="w-full px-8 py-4 bg-[#CF9645] text-white rounded-lg"
      >
        {isSubmitting ? 'Creating Account...' : 'Sign Up'}
      </button>

      <button
        onClick={() => alert('Google Sign Up')}
        className="w-full bg-white border-2 border-gray-200 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
        Sign Up with Google
      </button>

      <p className="text-center text-gray-600">
        Already have an account?{' '}
        <button
          type="button"
          onClick={switchToLogin}
          className="text-yellow-600 font-semibold hover:text-yellow-700"
        >
          Log In
        </button>
      </p>
    </div>
  );
};

export default SignUpForm;
