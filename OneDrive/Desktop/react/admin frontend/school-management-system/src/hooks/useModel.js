import { useState, useEffect, useCallback } from 'react';

// Generic hook for fetching data
export const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

// Hook for managing form state
export const useForm = (initialValues = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    callback(values);
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
  };

  const setFieldValue = (name, value) => {
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const setFieldError = (name, error) => {
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    reset,
    setFieldValue,
    setFieldError,
    setValues,
    setErrors
  };
};

// Hook for managing modal state
export const useModal = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen(prev => !prev), []);

  return { isOpen, open, close, toggle };
};

// Hook for managing pagination
export const usePagination = (data = [], itemsPerPage = 10) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page) => {
    const pageNumber = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(pageNumber);
  };

  const nextPage = () => goToPage(currentPage + 1);
  const prevPage = () => goToPage(currentPage - 1);

  return {
    currentPage,
    totalPages,
    currentData,
    goToPage,
    nextPage,
    prevPage,
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1
  };
};

// Hook for local storage
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  const removeValue = () => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue, removeValue];
};

// Hook for managing search/filter
export const useSearch = (data = [], searchKeys = []) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter(item => {
    if (!searchTerm) return true;
    
    return searchKeys.some(key => {
      const value = item[key];
      if (value === null || value === undefined) return false;
      return value.toString().toLowerCase().includes(searchTerm.toLowerCase());
    });
  });

  return {
    searchTerm,
    setSearchTerm,
    filteredData
  };
};

// Hook for managing sorting
export const useSort = (data = [], initialKey = '', initialDirection = 'asc') => {
  const [sortKey, setSortKey] = useState(initialKey);
  const [sortDirection, setSortDirection] = useState(initialDirection);

  const sortedData = [...data].sort((a, b) => {
    if (!sortKey) return 0;

    const aValue = a[sortKey];
    const bValue = b[sortKey];

    if (aValue === bValue) return 0;

    const comparison = aValue > bValue ? 1 : -1;
    return sortDirection === 'asc' ? comparison : -comparison;
  });

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  };

  return {
    sortedData,
    sortKey,
    sortDirection,
    handleSort
  };
};

// Hook for debouncing values
export const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Hook for managing async operations
export const useAsync = (asyncFunction) => {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const execute = useCallback(async (...params) => {
    setStatus('pending');
    setData(null);
    setError(null);

    try {
      const response = await asyncFunction(...params);
      setData(response);
      setStatus('success');
      return response;
    } catch (err) {
      setError(err);
      setStatus('error');
      throw err;
    }
  }, [asyncFunction]);

  return {
    execute,
    status,
    data,
    error,
    isIdle: status === 'idle',
    isPending: status === 'pending',
    isSuccess: status === 'success',
    isError: status === 'error'
  };
};

// Hook for toggling boolean values
export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => setValue(prev => !prev), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return [value, toggle, setTrue, setFalse];
};

// Hook for window dimensions
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default {
  useFetch,
  useForm,
  useModal,
  usePagination,
  useLocalStorage,
  useSearch,
  useSort,
  useDebounce,
  useAsync,
  useToggle,
  useWindowSize
};