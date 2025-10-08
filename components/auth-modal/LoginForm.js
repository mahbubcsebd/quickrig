import { validateEmail, validatePassword } from '@/lib/auth';
import { useState } from 'react';

const LoginForm = ({ onClose, switchToSignup }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    const emailError = validateEmail(formData.email);
    if (emailError !== true) newErrors.email = emailError;

    const passwordError = validatePassword(formData.password);
    if (passwordError !== true) newErrors.password = passwordError;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      console.log('Login submitted:', formData);
      alert('Login successful!');
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="space-y-6">
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

      <div>
        <label className="block text-gray-900 font-medium mb-2">Password</label>
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

      <div className="flex items-center justify-between flex-wrap gap-2">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            name="remember"
            checked={formData.remember}
            onChange={handleChange}
            className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
          />
          <span className="ml-2 text-gray-700 text-sm">
            Remember for 30 days
          </span>
        </label>
        <button
          type="button"
          onClick={() => alert('Forgot password')}
          className="text-yellow-600 hover:text-yellow-700 font-medium text-sm"
        >
          Forgot password
        </button>
      </div>

      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="w-full px-8 py-4 bg-[#CF9645] text-white rounded-lg"
      >
        {isSubmitting ? 'Signing In...' : 'Sign In'}
      </button>

      <button
        onClick={() => alert('Google Sign In')}
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
        Sign in with Google
      </button>

      <p className="text-center text-gray-600">
        Don't have an account?{' '}
        <button
          type="button"
          onClick={switchToSignup}
          className="text-yellow-600 font-semibold hover:text-yellow-700"
        >
          Sign up
        </button>
      </p>
    </div>
  );
};

export default LoginForm;
