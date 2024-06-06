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
      displayName: 'Assignee',
      field: 'assignee',
      type: 'createselect',
      options: [
        {
          value: 'johndoe@gmail.com',
          label: (
            <div>
              <img
                className="avatarImg"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                height="30px"
                width="30px"
              />
              John Doe
            </div>
          ),
        },
        {
          value: 'janedoe@gmail.com',
          label: (
            <div>
              <img
                className="avatarImg"
                src="https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png"
                height="30px"
                width="30px"
              />
              Jane Doe
            </div>
          ),
        },
        {
          value: 'mikesmith@gmail.com',
          label: (
            <div>
              <img
                className="avatarImg"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                height="30px"
                width="30px"
              />
              Mike Smith
            </div>
          ),
        },
      ],
      editable: true,
    },
    {
      displayName: 'Due Date',
      field: 'duedate',
      type: 'date',
      editable: true,
    },
  ];
  