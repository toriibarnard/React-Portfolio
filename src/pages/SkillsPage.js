import React, { useState } from 'react';
import './skillspage.css';

const skills = [
  { id: 1, category: 'Frontend', name: 'HTML' },
  { id: 2, category: 'Frontend', name: 'CSS' },
  { id: 3, category: 'Frontend', name: 'JavaScript' },
  { id: 4, category: 'Backend', name: 'Node.js' },
  { id: 5, category: 'Backend', name: 'Express' },
  { id: 6, category: 'Backend', name: 'Python' },
  { id: 7, category: 'Database', name: 'MongoDB' },
  { id: 8, category: 'Database', name: 'MySQL' },
  { id: 9, category: 'Other', name: 'Git' },
  { id: 10, category: 'Other', name: 'Docker' },
  // can add more if necessary
];

const SkillsPage = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // filter by search and category
  const filteredSkills = skills.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory ? skill.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="skills-page"> 
      <h2>Skills</h2>
      <input
        type="text"
        placeholder="Search skills"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        <label>
          <input
            type="checkbox"
            value="Frontend"
            onChange={() => setSelectedCategory(selectedCategory === 'Frontend' ? '' : 'Frontend')}
            checked={selectedCategory === 'Frontend'}
          />
          Frontend
        </label>
        <label>
          <input
            type="checkbox"
            value="Backend"
            onChange={() => setSelectedCategory(selectedCategory === 'Backend' ? '' : 'Backend')}
            checked={selectedCategory === 'Backend'}
          />
          Backend
        </label>
        <label>
          <input
            type="checkbox"
            value="Database"
            onChange={() => setSelectedCategory(selectedCategory === 'Database' ? '' : 'Database')}
            checked={selectedCategory === 'Database'}
          />
          Database
        </label>
        <label>
          <input
            type="checkbox"
            value="Other"
            onChange={() => setSelectedCategory(selectedCategory === 'Other' ? '' : 'Other')}
            checked={selectedCategory === 'Other'}
          />
          Other
        </label>
      </div>

      <ul>
        {filteredSkills.map(skill => (
          <li key={skill.id}>
            {skill.name} - {skill.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsPage;
