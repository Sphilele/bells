
import { Link } from 'react-router-dom';
import { Sidebar } from './Sidebar'
import { MdOutlineAccountCircle } from "react-icons/md";

export const Navigation = () => {

  return (
    <nav className="flex items-center justify-between px-5 py-2 border-b-2 border-zinc-800 bg-green">
      <div className="flex items-center gap-3">
        <Sidebar />
          <Link to='/'>
        <p style={{ fontFamily: 'Montserat'}}>The Wedding</p>
        </Link>
      </div>

       <Link to='/chat' style={{ fontFamily: 'Montserat'}} 
      className="flex items-center gap-2 px-4 py-2 text-black text-black-400 bg-white-700/20 rounded-xl">
        <MdOutlineAccountCircle className="text-lg"/>Chat</Link>
    </nav>
  )
}

export default Navigation