export const columns = [
  {
    displayName: 'Name',
    field: 'full_name',
    type: 'string',
    editable: true,
  },
  {
    displayName: 'Job Title',
    field: 'job_title',
    type: 'string',
    editable: true,
  },
  {
    displayName: 'Email',
    field: 'assignee',
    type: 'string',
    editable: true,
  },
];

export const suggestedColumns = [
  {
    displayName: 'Engagement',
    field: 'target',
    type: 'percentage',
    editable: true,
  },
  {
    displayName: 'Interim Position',
    field: 'interim_title',
    type: 'string',
    editable: true,
  },
  {
    displayName: 'Due Date',
    field: 'duedate',
    type: 'date',
    editable: true,
  },
]
