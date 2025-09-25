import { Link } from "react-router-dom";
import {
  UsersRound,
  MapPinned,
  File,
  BadgeDollarSign,
  FileChartLine,
  FolderClosed,
} from "lucide-react";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <UsersRound /> clients
          </Link>
        </li>
        <li>
          <Link to="/sites">
            <MapPinned />
            sites
          </Link>
        </li>
        <li>
          <Link to="/sitePlans">
            <File />
            site plans
          </Link>
        </li>
        <li>
          <Link to="/sales">
            <BadgeDollarSign />
            sales
          </Link>
        </li>
        <li>
          <Link to="/reports">
            <FileChartLine />
            reports
          </Link>
        </li>
        <li>
          <Link to="/documents">
            <FolderClosed />
            documents
          </Link>
        </li>
      </ul>
    </nav>
  );
}
