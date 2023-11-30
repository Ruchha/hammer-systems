import {
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  BlockOutlined,
} from "@ant-design/icons"
import { APP_PREFIX_PATH } from 'configs/AppConfig'




const mainNavTree = [
  {
    key: "main",
    path: `${APP_PREFIX_PATH}/main`,
    title: "Основные",
    breadcrumb: false,
    submenu: [
      {
        key: "main-dashboard",
        path: `${APP_PREFIX_PATH}/main/dashboard`,
        title: "Дэшборд",
        icon: DashboardOutlined,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "main-catalog",
        path: `${APP_PREFIX_PATH}/main/catalog`,
        title: "Каталог",
        icon: ShoppingCartOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: "main-catalog-items",
            path: `${APP_PREFIX_PATH}/main/catalog/items`,
            title: "Товары",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "main-catalog-categories",
            path: `${APP_PREFIX_PATH}/main/catalog/categories`,
            title: "Категории",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "main-catalog-collections",
            path: `${APP_PREFIX_PATH}/main/catalog/collections`,
            title: "Коллекции",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "main-catalog-combo",
            path: `${APP_PREFIX_PATH}/main/catalog/combo`,
            title: "Комбо",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: "main-orders",
        path: `${APP_PREFIX_PATH}/main/orders`,
        title: "Заказы",
        icon: ShoppingOutlined,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "main-clients",
        path: `${APP_PREFIX_PATH}/main/clients`,
        title: "Клиенты",
        icon: UserOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: "main-clients-list",
            path: `${APP_PREFIX_PATH}/main/clients/client-list`,
            title: "Список клиентов",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "main-clients-groups",
            path: `${APP_PREFIX_PATH}/main/clients/client-groups`,
            title: "Группы клиентов",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: "main-planner",
        path: `${APP_PREFIX_PATH}/main/planner`,
        title: "Планировщик",
        icon: BlockOutlined,
        breadcrumb: true,
        submenu: [],
      },
    ],
  },
]


const navigationConfig = [
  ...mainNavTree
]

export default navigationConfig;
