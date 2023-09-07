import Dashboard from "views/Dashboard.js";
import Personnel from "views/Personnel.js";
import Calender from "views/Calender.js";
import News  from "views/News";
import Paybill from "views/Paybill";
import Notifybill from "views/Notifybill";
import Detail from "views/Detail";
import Clean from "views/Clean";

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
        path: " ",
        name: "เเจ้งซ่อม",
        component: " ",
        layout: "/admin",
      },
      {
        path: "/clean",
        name: "ทำความสะอาด",
        layout: "/admin",
        component: <Clean />, 
      },
      {
        path: " ",
        name: "รักษาความปลอดภัย",
        layout: "/admin",
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
    path: "/detail",
    name: "รายละเอียดผู้เช่า",
    icon: "nc-icon nc-email-85",
    component: <Detail />,
    layout: "/admin",
  },
  {
    name: "จดมิเตอร์",
    icon: "nc-icon nc-refresh-69",
    layout: "/admin",
    dropdown: [
      {
        path: " ",
        name: "ค่าน้ำ",
        layout: "/admin",
        component: " ",
      },
      {
        path: " ",
        name: "ค่าไฟฟ้า",
        layout: "/admin",
        component: " ",
      },
    ],
  },
  {
    path: "/notifybill",
    name: "แจ้งบิล",
    icon: "nc-icon nc-cloud-upload-94",
    component: <Notifybill/>,
    layout: "/admin",
  },
  {
    path: "/paybill",
    name: "จ่ายบิล",
    icon: "nc-icon nc-laptop",
    component: <Paybill />,
    layout: "/admin",
  },
  {
    path: "/news",
    name: "บอร์ดข่าวสาร",
    icon: "nc-icon nc-paper",
    component: <News />,
    layout: "/admin",
  },
  {
    path: "/calender",
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