import Dashboard from "views/Dashboard.js";
import Personnel from "views/Personnel.js";
import Calender from "views/Calender.js";
import News  from "views/News";
import Paybill from "views/Paybill";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    name: "บริการต่างๆ",
    icon: "nc-icon nc-briefcase-24",
    layout: "/admin",
    dropdown: [
      {
        path: "/dashboard",
        name: "บริการ 1",
        layout: "/admin",
        component: <Dashboard />, 
      },
      {
        path: "/service2",
        name: "บริการ 2",
        layout: "/admin",
        component: <Dashboard />, 
      },
      {
        path: "/service2",
        name: "บริการ 3",
        layout: "/admin",
        component: <Dashboard />, 
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
    component: "",
    layout: "/admin",
  },
  {
    path: "/rr",
    name: "จ่ายบิล",
    icon: "nc-icon nc-laptop",
    component: <Paybill />,
    layout: "/admin",
  },
  {
    path: "/cc",
    name: "บอร์ดข่าวสาร",
    icon: "nc-icon nc-paper",
    component: <News />,
    layout: "/admin",
  },
  {
    path: "/bb",
    name: "ปฏิทินหอพัก",
    icon: "nc-icon nc-calendar-60",
    component: <Calender />,
    layout: "/admin",
  },
  {
    path: "/Personnel",
    name: "บุคลากร",
    icon: "nc-icon nc-single-02",
    component: <Personnel />,
    layout: "/admin",
  },
];
export default routes;
