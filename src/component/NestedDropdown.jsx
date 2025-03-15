import React, { useState } from 'react';

export const NestedDropdown = ({ items, level = 0 }) => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (itemId) => {
    setOpenItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  return (
    <ul className="list-none p-0 bg-white rounded-lg shadow ">
      {items.map((item) => (
        <li key={item.id} className="border-b last:border-b-0">
          <div
            className="flex items-center justify-between p-2 cursor-pointer hover:bg-gray-50"
            onClick={() => item.children && toggleItem(item.id)}
          >
            <span>{item.label}</span>
            {item.children && (
              <span>{openItems[item.id] ? '▼' : '▶'}</span>
            )}
          </div>
          {item.children && openItems[item.id] && (
            <div className="ml-4">
              <NestedDropdown
                items={item.children}
                level={level + 1}
              />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};
