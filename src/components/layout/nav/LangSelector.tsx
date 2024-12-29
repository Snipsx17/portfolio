import { useEffect, useState, type ChangeEvent } from 'react';

const langOptions = [
  { tag: 'ENG', value: 'en' },
  { tag: 'FRA', value: 'fr' },
  { tag: 'ESP', value: 'es' },
];

export const LangSelector = () => {
  const [url, setUrl] = useState('');
  const [lang, setLang] = useState('');

  const onSelectorChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.target.value === 'en'
      ? (window.location.href = `${url}`)
      : (window.location.href = `${url}/${e.target.value}`);
  };

  useEffect(() => {
    setUrl(window.location.origin);
    setLang(window.location.pathname.slice(1));
  }, []);

  return (
    <select
      onChange={onSelectorChange}
      className="lang-selector bg-transparent outline-none font-bold"
    >
      {langOptions.map((option) => (
        <option
          key={option.value}
          value={option.value}
          selected={option.value === lang && true}
        >
          {option.tag}
        </option>
      ))}
    </select>
  );
};
