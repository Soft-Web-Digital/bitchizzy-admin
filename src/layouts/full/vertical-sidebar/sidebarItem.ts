export interface menu {
  header?: string;
  group?: string;
  model?: boolean;
  title?: any;
  icon?: string;
  to?: any;
  children?: menu[];
  permissions?:string
  group_name?:string
}

const sidebarItem: menu[] = [
  { header: "Main", group_name:"" },

  {
    title: "Dashboard",
    icon: "pie-chart",
    to: "/dashboards/analytical",
    permissions:""
  },

  { header: "Transactions", group_name:"user"},

  {
    title: "Giftcard Transactions",
    icon: "gift",       
    to: "/giftcards/transaction",
    permissions:"manage_giftcards"
  },
  {
    title: "Asset Transaction",
    icon: "trending-down",
    to: "/asset/transaction",
    permissions:"manage_asset_transactions"
  },
  {
    title: "Withdrawals",
    icon: "credit-card",
    to: "/withdrawals/all",
    permissions:"manage_wallet_transactions"
  },
  {
    title: "Payements",
    icon: "dollar-sign",
    to: "/payments/all",
    permissions:"manage_wallet_transactions"
  },
  {
    title: "Transactions",
    icon: "trending-up",
    to: "/transactions/all",
    permissions:"manage_asset_transactions"
  },
 
  { header: "Management", group_name:"management"},

  {
    title: "Users",
    icon: "copy",
    to: "/user/all",
    permissions:"manage_users"
  },
  {
    title: "Admin",
    icon: "users",
    to: "/admin",
    permissions:"manage_admins"
  },
  {
    title: "Roles & Permissions",
    icon: "user-plus",
    to: "/roles",
    permissions:"manage_access_control_list"
  },
  // {
  //   title: "Referrals",
  //   icon: "user-check",
  //   to: "/referrals/all",
  //   permissions:"manage_access_control_list"
  // },

  { header: "News & Updates", group_name:"notification" },

  {
    title: "Announcements",
    icon: "bell",
    to: "/announcements",
    permissions:'manage_alerts'
  },
  {
    title: "Banners",
    icon: "flag",
    to: "/banners",
    permissions:"manage_system_data"
  },
  {
    title: "FAQ",
    icon: "help-circle",
    to: "/faq",
    permissions:"manage_system_data"
  },
  {
    title: "App Version",
    icon: "smartphone",
    to: "",
    permissions:"manage_system_data"
  },
  {
    title: "Referral Terms",
    icon: "user-plus",
    to: "/referral/terms/all",
    permissions:"manage_system_data"
  },

 { header: "Configuration", group_name:"giftcard" },

  {
    title: "System bank account",
    icon: "users",
    to: "/system-bank",
    permissions:"manage_system_bank_accounts"
  },
  {
    title:"GiftCard Management",
    icon:"gift",
    group_name:"giftcard",
    children: [

      {
        title: "Categories",
        icon: "",
        to: "/giftcards/categories",
        permissions:"manage_giftcard_categories"
      },
      {
        title: "Products",
        icon: "",
        to: "/giftcards/products",
        permissions:"manage_giftcard_products"
      },
],
  },
  {
    title:"Crypto Management",
    icon:"cpu",
    group_name:'crypto',
    children: [

      {
        title: "Networks",
        icon: "",
        to: "/networks/all",
        permissions:"manage_networks"
      },
      {
        title: "Assets",
        icon: "",
        to: "/assets/all",
        permissions:"manage_assets"
      },
      {
        title: "Currencies",
        icon: "",
        to: "/currencies/all",
        permissions:"manage_currencies"
      },
],
  },
  {
    title: "Service Provider",
    icon: "briefcase",
    to: "",
    permissions:"manage_system_bank_accounts"
  },
  {
    title: "Service Settings",
    icon: "settings",
    to: "",
    permissions:"manage_system_bank_accounts"
  },
  {
    title: "Trade Settings",
    icon: "trending-up",
    to: "/system-data",
    permissions:"manage_system_data"
  },



//   { header: "Notifications", group_name:"notification" },
  
//   {
//     title: "Notifications",
//     icon: "user-plus",
//     to: "/notifications/all",
//     permissions:"receive_notifications"
//   },

//   { header: "Settings",  group_name:"giftcard"  },

//   {
//     title:"GiftCard Mgt",
//     icon:"gift",
//     group_name:"giftcard",
//     children: [

//       {
//         title: "Categories",
//         icon: "",
//         to: "/giftcards/categories",
//         permissions:"manage_giftcard_categories"
//       },
//       {
//         title: "Products",
//         icon: "",
//         to: "/giftcards/products",
//         permissions:"manage_giftcard_products"
//       },
// ],
//   },
//   {
//     title:"Crypto",
//     icon:"cpu",
//     group_name:'crypto',
//     children: [

//       {
//         title: "Networks",
//         icon: "",
//         to: "/networks/all",
//         permissions:"manage_networks"
//       },
//       {
//         title: "Assets",
//         icon: "",
//         to: "/assets/all",
//         permissions:"manage_assets"
//       },
//       {
//         title: "Currencies",
//         icon: "",
//         to: "/currencies/all",
//         permissions:"manage_currencies"
//       },
// ],
//   },
//   {
//     title:"Configuration",
//     icon:"command",
//     group_name:'config',
//     children: [

//       {
//         title: "Banners",
//         icon: "",
//         to: "/banners",
//         permissions:"manage_system_data"
//       },
//       {
//         title: "App version",
//         icon: "",
//         to: "/system-data",
//         permissions:"manage_system_data"
//       },
//       {
//         title: "Countries Mgt",
//         icon: "",
//         to: "/countries/all",
//         permissions:"manage_countries"
//       },
//       {
//         title: "System bank account",
//         icon: "users",
//         to: "/system-bank",
//         permissions:"manage_system_bank_accounts"
//       },
// ],
//   }

 
];

export default sidebarItem;
