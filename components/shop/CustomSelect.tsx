'use client';

import React, { useState, useRef, useEffect } from 'react';

interface CustomSelectProps {
  value: string;
  onChange: (val: string) => void;
  options: Array<{ label: string; value: string }>;
  placeholder: string;
}

export function CustomSelect({ value, onChange, options, placeholder }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const selectedOption = options.find((o) => o.value === value);
  const displayValue = selectedOption?.label || placeholder;
  const showScrollbar = options.length > 7;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div
      ref={wrapperRef}
      className="custom-select-wrapper"
      onClick={toggleOpen}
      tabIndex={0}
      role="combobox"
      aria-expanded={isOpen}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') toggleOpen();
      }}
    >
      <span className="custom-select-value">
        <span className="custom-select-text">{displayValue}</span>
        <span
          className={`custom-select-arrow ${isOpen ? 'open' : ''}`}
          aria-hidden="true"
        >
          {isOpen ? '▲' : '▼'}
        </span>
      </span>

      {isOpen && (
        <div className={`custom-select-options ${showScrollbar ? 'with-scroll' : ''}`}>
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              className={`custom-option ${opt.value === value ? 'selected' : ''}`}
              onClick={() => {
                onChange(opt.value);
                setIsOpen(false);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  onChange(opt.value);
                  setIsOpen(false);
                }
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}



