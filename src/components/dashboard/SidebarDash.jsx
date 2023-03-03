import { Sidebar } from 'flowbite-react';
import Link from 'next/link';
import {
  HiChartPie,
  HiViewBoards,
  HiInbox,
  HiUser,
  HiShoppingBag,
  HiArrowSmRight,
  HiTable,
} from 'react-icons/hi';
import { BiBuoy } from 'react-icons/bi';
const SidebarDash = () => (
  <div className="w-fit">
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item icon={HiViewBoards}>Kanban</Sidebar.Item>
          <Sidebar.Item icon={HiInbox}>Inbox</Sidebar.Item>
          <Sidebar.Item icon={HiUser}>Users</Sidebar.Item>

          <Sidebar.Item href="" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>

          <Sidebar.Item icon={HiShoppingBag}>Blogs</Sidebar.Item>

          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  </div>
);

export default SidebarDash;
