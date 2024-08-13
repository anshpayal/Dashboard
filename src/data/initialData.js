const initialData = [
    {
      id: 'category1',
      name: 'CSPM Executive Dashboard',
      widgets: [
        {
          id: 'widget1',
          name: 'Total Assets',
          text: 'This widget shows the total number of assets monitored.',
        },
        {
          id: 'widget2',
          name: 'Security Score',
          text: 'This widget displays the overall security score of your cloud infrastructure.',
        },
        {
          id: 'widget3',
          name: 'Open Alerts',
          text: 'This widget shows the number of open security alerts.',
        },
      ],
    },
    {
      id: 'category2',
      name: 'CWPP Dashboard',
      widgets: [
        {
          id: 'widget4',
          name: 'Compliance Status',
          text: 'This widget shows the overall compliance status across all frameworks.',
        },
        {
          id: 'widget5',
          name: 'Top Compliance Gaps',
          text: 'This widget displays the top compliance gaps that need attention.',
        },
      ],
    },
    {
      id: 'category3',
      name: 'Registry Scan',
      widgets: [
        {
          id: 'widget6',
          name: 'Threat Detection Trend',
          text: 'This widget shows the trend of detected threats over time.',
        },
        {
          id: 'widget7',
          name: 'Vulnerability Trend',
          text: 'This widget displays the trend of vulnerabilities in your infrastructure.',
        },
      ],
    },
  ];
  
  export default initialData;