export const initialDashboardData = {
  categories: [
    {
      id: 'cspm-executive',
      name: 'CSPM Executive Dashboard',
      widgets: [
        {
          id: 'widget-1',
          name: 'Security Score',
          text: 'Current security posture score: 85/100. Critical vulnerabilities identified in 3 systems.'
        },
        {
          id: 'widget-2',
          name: 'Compliance Status',
          text: 'SOC 2 Type II: Compliant, ISO 27001: In Progress, PCI DSS: Compliant'
        },
        {
          id: 'widget-3',
          name: 'Risk Assessment',
          text: 'High risk items: 2, Medium risk: 8, Low risk: 15. Total assets monitored: 1,247'
        }
      ]
    },
    {
      id: 'performance-metrics',
      name: 'Performance Metrics',
      widgets: [
        {
          id: 'widget-4',
          name: 'System Uptime',
          text: '99.9% uptime achieved this month. Last incident resolved in 15 minutes.'
        },
        {
          id: 'widget-5',
          name: 'Response Time',
          text: 'Average API response time: 120ms. 95th percentile: 250ms'
        }
      ]
    },
    {
      id: 'user-analytics',
      name: 'User Analytics',
      widgets: [
        {
          id: 'widget-6',
          name: 'Active Users',
          text: 'Daily active users: 2,847. Weekly active users: 12,456. Growth rate: +15%'
        },
        {
          id: 'widget-7',
          name: 'User Engagement',
          text: 'Average session duration: 8.5 minutes. Pages per session: 4.2'
        }
      ]
    }
  ]
};
