import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Topbar from './components/Topbar.jsx'
import Home from './pages/Home.jsx'
import HotelInfo from './pages/HotelInfo.jsx'
import Approvals from './pages/Approvals.jsx'
import Unanswered from './pages/Unanswered.jsx'
import BotPreview from './pages/BotPreview.jsx'
import Leads from './pages/Leads.jsx'
import Guests from './pages/Guests.jsx'
import Reservations from './pages/Reservations.jsx'
import Orders from './pages/Orders.jsx'
import ChatInbox from './pages/ChatInbox.jsx'
import Reports from './pages/Reports.jsx'
import Settings from './pages/Settings.jsx'
import Stub from './pages/Stub.jsx'
import { TITLES } from './data.js'

const PAGES = {
  home: <Home />,
  info: <HotelInfo />,
  approvals: <Approvals />,
  unanswered: <Unanswered />,
  preview: <BotPreview />,
  leads: <Leads />,
  guests: <Guests />,
  resv: <Reservations />,
  orders: <Orders />,
  chat: <ChatInbox />,
  reports: <Reports />,
  settings: <Settings />,
}

export default function App() {
  const [page, setPage] = useState('home')
  const [rtl, setRtl] = useState(false)

  return (
    <div className="app" dir={rtl ? 'rtl' : 'ltr'}>
      <Sidebar page={page} onNavigate={setPage} />
      <div className="main">
        <Topbar rtl={rtl} onToggle={() => setRtl(!rtl)} />
        {PAGES[page] || <Stub title={TITLES[page]} />}
      </div>
    </div>
  )
}
