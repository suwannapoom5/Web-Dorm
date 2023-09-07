import Dashboard from "views/Dashboard.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "บริการต่างๆ",
    icon: "nc-icon nc-briefcase-24",
    layout: "/admin",
    dropdown: [
      {
        path: "/service1",
        name: "บริการ 1",
        component: " ", 
      },
      {
        path: "/service2",
        name: "บริการ 2",
        component: " ", 
      },
    ],
  },
  {
    path: "/maps",
    name: "ผังห้องพัก",
    icon: "nc-icon nc-box",
    component: " ",
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "รายละเอียดผู้เช่า",
    icon: "nc-icon nc-email-85",
    component: " ",
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "จดมิเตอร์",
    icon: "nc-icon nc-refresh-69",
    component: " ",
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "แจ้งบิล",
    icon: "nc-icon nc-cloud-upload-94",
    component: " ",
    layout: "/admin",
  },
  {
    path: "/rr",
    name: "จ่ายบิล",
    icon: "nc-icon nc-laptop",
    component: " ",
    layout: "/admin",
  },
  {
    path: "/cc",
    name: "บอร์ดข่าวสาร",
    icon: "nc-icon nc-paper",
    component: " ",
    layout: "/admin",
  },
  {
    path: "/bb",
    name: "ปฏิทินหอพัก",
    icon: "nc-icon nc-calendar-60",
    component: " ",
    layout: "/admin",
  },
  {
    path: "/aa",
    name: "บุคลากร",
    icon: "nc-icon nc-single-02",
    component: " ",
    layout: "/admin",
  },
];
export default routes;
