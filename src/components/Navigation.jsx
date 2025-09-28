import { useState } from "react";
import { Link } from "react-router-dom";
import {
  UsersRound,
  MapPinned,
  File,
  BadgeDollarSign,
  FileChartLine,
  FolderClosed,
  CircleHelp,
  Settings,
  PanelLeft,
  PanelRight,
} from "lucide-react";

export default function Navigation() {
  const [minimize, setMinimize] = useState(false);
  return (
    <nav className="border border-neutral-200 bg-white rounded-xl grid place-content-between place-items-start w-fit text-neutral-700">
      <div className="text-neutral-700 border-b border-neutral-200 p-4 w-full">
        <button onClick={() => setMinimize((prev) => !prev)} className="">
          {minimize ? <PanelLeft size={21} /> : <PanelRight size={21} />}
        </button>
      </div>

      <ul className="flex flex-col gap-6 capitalize [&>li]:text-neutral-700 [&>li]:hover:text-neutral-500 p-4">
        <li>
          <Link to="/" className="flex gap-2 place-items-center">
            <UsersRound size={19} /> {minimize && "clients"}
          </Link>
        </li>
        <li>
          <Link to="/sites" className="flex gap-2 place-items-center">
            <MapPinned size={19} />
            {minimize && "sites"}
          </Link>
        </li>
        <li>
          <Link to="/sitePlans" className="flex gap-2 place-items-center">
            <File size={19} />

            {minimize && "site plans"}
          </Link>
        </li>
        <li>
          <Link to="/sales" className="flex gap-2 place-items-center">
            <BadgeDollarSign size={19} />
            {minimize && "sales"}
          </Link>
        </li>
        <li>
          <Link to="/reports" className="flex gap-2 place-items-center">
            <FileChartLine size={19} />
            {minimize && "reports"}
          </Link>
        </li>
        <li>
          <Link to="/documents" className="flex gap-2 place-items-center">
            <FolderClosed size={19} />
            {minimize && "documents"}
          </Link>
        </li>
      </ul>

      <ul className="flex flex-col gap-6 capitalize border-t border-neutral-200 p-4 w-full [&>li]:text-neutral-700 [&>li]:hover:text-neutral-500">
        <li>
          <Link to="/help" className="flex gap-2 place-items-center">
            <CircleHelp size={19} />
            {minimize && "help"}
          </Link>
        </li>
        <li>
          <Link to="/settings" className="flex gap-2 place-items-center">
            <Settings size={19} />
            {minimize && "settings"}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
