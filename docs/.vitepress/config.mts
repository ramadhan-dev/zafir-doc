import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Zafir HRIS",
  description: "Dokumentasi resmi HRIS API",
  base: 'zafir-doc',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Fitur', link: '/fitur/overview' },
      { text: 'API Dokumentasi', link: '/api/overview' }
    ],

    // 👇 Sidebar dipetakan berdasarkan prefix path
    sidebar: {
      '/fitur/': [
        {
          text: 'Superadmin',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/fitur/superadmin/overview' },
            { text: 'Dashboard', link: '/fitur/superadmin/dashboard' },
            { text: 'Manajemen Karyawan', link: '/fitur/superadmin/manajemen-karyawan' },
            { text: 'Laporan', link: '/fitur/superadmin/laporan' },
          ]
        },
        {
          text: 'Employee',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/fitur/employee/overview' },
            { text: 'Absensi', link: '/fitur/employee/absensi' },
            { text: 'Cuti & Izin', link: '/fitur/employee/cuti-izin' },
            { text: 'Slip Gaji', link: '/fitur/employee/slip-gaji' },
          ]
        }
      ],

      '/api/': [
        {
          text: 'API Reference',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/api/overview' },
            { text: 'Authentication', link: '/api/auth' },
            { text: 'Employee', link: '/api/employees' },
            { text: 'Attendance', link: '/api/attendance' },
            { text: 'Payroll', link: '/api/payroll' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ifindev' }
    ]
  }
})
