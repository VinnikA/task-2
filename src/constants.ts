import { noteType } from "./types";

export const topTableTitles = [
  'Name',
  'Created',
  'Category',
  'Content',
  'Dates'
];

export const bottomTableTitles = [
  'Note Category',
  'Active',
  'Archived'
];

export const categoryIcons = {
  ['Task']: 'shopping-cart',
  ['Random Thought']: 'random',
  ['Idea']: 'lightbulb-o',
  ['Quote']: 'quote-right',
};

export const categories = [
  'Task',
  'Random Thought',
  'Idea',
  'Quote'
]

export const notes: noteType[] = [
  {
    id: 1,
    category: 'Task',
    name: 'Shopping list',
    content: 'Tomatoes, bread',
    created: 'April 20, 2021',
    dates: ['', ''],
    archived: false
  },
  {
    id: 2,
    category: 'Random Thought',
    name: 'The theory of evolution',
    content: 'The evolution theory',
    created: 'April 27, 2021',
    dates: ['', ''],
    archived: false
  },
  {
    id: 3,
    category: 'Idea',
    name: 'New Feature',
    content: 'Implement new feature',
    created: 'May 05, 2021',
    dates: ['3/5/2021', '5/5/2021'],
    archived: false
  },
  {
    id: 4,
    category: 'Quote',
    name: 'William Gaddis',
    content: 'Power doesn\'t corrupt people, people corrupt power',
    created: 'May 07, 2021',
    dates: ['', ''],
    archived: false
  },
  {
    id: 5,
    category: 'Task',
    name: 'Books',
    content: 'Learn Startup',
    created: 'May 15, 2021',
    dates: ['', ''],
    archived: false
  },
  {
    id: 6,
    category: 'Task',
    name: 'Cat',
    content: 'Buy cat\'s food',
    created: 'Sep 22, 2022',
    dates: ['', ''],
    archived: false
  },
  {
    id: 7,
    category: 'Quote',
    name: 'Gandhi',
    content: 'Be the change that you wish to see in the world',
    created: 'Sep 23, 2022',
    dates: ['', ''],
    archived: false
  }
];

