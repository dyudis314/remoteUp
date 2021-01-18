/* Search Autocomplete Data */

export const positionOptions = [
  { value: 'Data Science', label: 'Data Science', color: '#FF8B00' },
  { value: 'DevOps', label: 'DevOps', color: '#FF5630', isFixed: true },
  { value: 'Front End Developer', label: 'Front End Developer', color: '#00B8D9', isFixed: true },
  { value: 'Full Stack', label: 'Full Stack', color: '#5243AA' },
  { value: 'Sales Development Representative', label: 'Sales Development Representative', color: '#FFC400' },
  { value: 'Software Engineer', label: 'Software Engineer', color: '#0052CC', isFixed: true },
  { value: 'QA', label: 'QA', color: '#0052CC', isFixed: true }
];

export const languageOptions = [
  { value: 'C', label: 'C', rating: 'crazy' },
  { value: 'C#', label: 'C#', rating: 'crazy' },
  { value: 'Go', label: 'Go', rating: 'crazy' },
  { value: 'Java', label: 'Java', rating: 'safe' },
  { value: 'JavaScript', label: 'JavaScript', rating: 'safe' },
  { value: 'Python', label: 'Python', rating: 'good' },
  { value: 'React', label: 'React', rating: 'wild' },
  { value: 'React Native', label: 'React Native', rating: 'wild' },
  { value: 'Ruby', label: 'Ruby', rating: 'crazy' }
  
];

export const optionLength = [
  { value: 1, label: 'general' },
  {
    value: 2,
    label:
      'Evil is the moment when I lack the strength to be true to the Good that compels me.',
  },
  {
    value: 3,
    label:
      "It is now an easy matter to spell out the ethic of a truth: 'Do all that you can to persevere in that which exceeds your perseverance. Persevere in the interruption. Seize in your being that which has seized and broken you.",
  },
];

export const groupedOptions = [
  {
    label: 'Positions',
    options: positionOptions,
  },
  {
    label: 'Languages',
    options: languageOptions,
  },
];