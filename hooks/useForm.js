import { useEffect, useState } from 'react';

export default function useForm(initial = {}) {
  const initialValues = Object.values(initial).join('');
  const [inputs, setInputs] = useState(initial);

  useEffect(() => setInputs(initial), [initialValues]);

  function handleChange(e) {
    let { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const clearedInputs = Object.fromEntries(
      Object.entries(inputs).map(([key]) => [key, ''])
    );
    setInputs(clearedInputs);
  }

  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}