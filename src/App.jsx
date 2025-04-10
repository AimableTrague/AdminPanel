import './index.css'
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import TopBar from './scenes/Global/Topbar'
import SideBar from './scenes/Global/Sidebar'
import Dashboard from './scenes/Dashboard'
import Team from './scenes/team/index'
import Invoices from './scenes/invoices/index'
import Contacts from './scenes/contacts/index'
import Calendar from './scenes/calendar/index'
import Form from './scenes/form/index'
import FAQ from './scenes/FAQ/index'
import Pie from './scenes/pie/index'
import Bar from './scenes/bar/index'
import Line from './scenes/line/index'
import Geography from './scenes/geography'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageTitleUpdater from './scenes/TitleUpdater/TitleUpdater'
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [theme, colorMode] = useMode()


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <PageTitleUpdater />
        <Analytics />
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className='content'>
            <TopBar />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/team' element={<Team />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/invoices' element={<Invoices />} />
              <Route path='/form' element={<Form />} />
              <Route path='/calendar' element={<Calendar />} />
              <Route path='/faq' element={<FAQ />} />
              <Route path='/bar' element={<Bar />} />
              <Route path='/pie' element={<Pie />} />
              <Route path='/line' element={<Line />} />
              <Route path='/geography' element={<Geography />} />
            </Routes>
            </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>

  )
}

export default App
