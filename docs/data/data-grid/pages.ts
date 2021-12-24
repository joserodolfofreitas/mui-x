const pages = [
  {
    pathname: '/x/react-data-grid',
    title: 'Components',
    icon: 'ToggleOnIcon',
    children: [
      {
        pathname: '/x/react-data-grid',
        subheader: '/x/react-data-grid/overview',
        title: 'Overview',
      },
      { pathname: '/x/react-data-grid/demo' },
      { pathname: '/x/react-data-grid/getting-started' },
      { pathname: '/x/react-data-grid/migration-v4', title: 'Migration From v4' },
      { pathname: '/x/react-data-grid/layout' },
      { pathname: '/x/react-data-grid/columns' },
      { pathname: '/x/react-data-grid/rows' },
      { pathname: '/x/react-data-grid/editing' },
      { pathname: '/x/react-data-grid/sorting' },
      { pathname: '/x/react-data-grid/filtering' },
      { pathname: '/x/react-data-grid/pagination' },
      { pathname: '/x/react-data-grid/selection' },
      { pathname: '/x/react-data-grid/events' },
      { pathname: '/x/react-data-grid/export' },
      { pathname: '/x/react-data-grid/components' },
      { pathname: '/x/react-data-grid/style' },
      { pathname: '/x/react-data-grid/localization' },
      { pathname: '/x/react-data-grid/scrolling' },
      { pathname: '/x/react-data-grid/virtualization' },
      { pathname: '/x/react-data-grid/accessibility' },
      { pathname: '/x/react-data-grid/group-pivot', title: 'Group & Pivot' },
    ],
  },
  {
    pathname: '/x/api/mui-data-grid',
    title: 'API',
    icon: 'CodeIcon',
    children: [
      { pathname: '/x/api/mui-data-grid', title: 'API Reference' },
      { pathname: '/x/api/mui-data-grid/data-grid', title: 'DataGrid' },
      { pathname: '/x/api/mui-data-grid/data-grid-pro', title: 'DataGridPro' },
      { pathname: '/x/api/mui-data-grid/grid-api', title: 'GridApi' },
      { pathname: '/x/api/mui-data-grid/grid-col-def', title: 'GridColDef' },
      { pathname: '/x/api/mui-data-grid/grid-cell-params', title: 'GridCellParams' },
      { pathname: '/x/api/mui-data-grid/grid-row-params', title: 'GridRowParams' },
      { pathname: '/x/api/mui-data-grid/grid-csv-export-options', title: 'GridCSVExportOptions' },
      {
        pathname: '/x/api/mui-data-grid/grid-print-export-options',
        title: 'GridPrintExportOptions',
      },
    ],
  },
];

export default pages;
