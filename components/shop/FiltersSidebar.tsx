'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { CustomSelect } from './CustomSelect';

export default function FiltersSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get('category') || '';
  const currentPriceRaw = searchParams.get('price') || '';
  const currentSort = searchParams.get('sort') || 'default';

  const [minPrice, setMinPrice] = useState(currentPriceRaw.split('-')[0] || '');
  const [maxPrice, setMaxPrice] = useState(currentPriceRaw.split('-')[1] || '');

  const applyFilters = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (currentCategory) params.set('category', currentCategory);
    else params.delete('category');

    if (currentSort !== 'default') params.set('sort', currentSort);
    else params.delete('sort');

    if ((minPrice && minPrice !== '') || (maxPrice && maxPrice !== '')) {
      const priceString = `${minPrice || '0'}-${maxPrice || '99999'}`;
      params.set('price', priceString);
    } else {
      params.delete('price');
    }

    router.push(`/shop${params.toString() ? '?' + params.toString() : ''}`);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      applyFilters();
    }, 500);

    return () => clearTimeout(timer);
  }, [minPrice, maxPrice]);

  const handleCategoryChange = (val: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    if (val) newParams.set('category', val);
    else newParams.delete('category');
    
    newParams.delete('sort'); 

    router.push(`/shop${newParams.toString() ? '?' + newParams.toString() : ''}`);
  };

  const handleSortChange = (val: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    if (val !== 'default') newParams.set('sort', val);
    else newParams.delete('sort');

    router.push(`/shop${newParams.toString() ? '?' + newParams.toString() : ''}`);
  };

  const categoryOptions = [
    { label: 'All Categories', value: '' },
    { label: 'Coats', value: 'Coats' },
    { label: 'Knitwear', value: 'Knitwear' },
    { label: 'Accessories', value: 'Accessories' },
    { label: 'Bottoms', value: 'Bottoms' },
    { label: 'Shoes', value: 'Shoes' },
    { label: 'Layering', value: 'Layering' },
  ];

  const sortOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Low to High', value: 'low-high' },
    { label: 'High to Low', value: 'high-low' },
  ];

  return (
    <aside className="filters-sidebar">
      <h3 className="filter-title">Filters</h3>

      <div className="filter-group">
        <label className="filter-label">Category</label>
        <CustomSelect
          value={currentCategory}
          onChange={handleCategoryChange}
          options={categoryOptions}
          placeholder="All Categories"
        />
      </div>

      <div className="filter-group">
        <label className="filter-label">Price, $</label>
        <div className="price-vertical-stack">
          <div className="price-input-wrapper">
            <span className="price-label">From</span>
            <input
              type="number"
              placeholder="0"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="price-input"
            />
          </div>
          <div className="price-input-wrapper">
            <span className="price-label">To</span>
            <input
              type="number"
              placeholder="9999"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="price-input"
            />
          </div>
        </div>
      </div>

      <div className="filter-group">
        <label className="filter-label">Sort By</label>
        <CustomSelect
          value={currentSort}
          onChange={handleSortChange}
          options={sortOptions}
          placeholder="Default"
        />
      </div>
    </aside>
  );
}







