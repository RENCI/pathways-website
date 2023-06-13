import { EventCard } from './event/event-card'
import './app.scss'
import { Layout } from 'antd'
import EventMarkdown, * as event from '../content/event-summary.md'
import CodeOfConductMarkdown from '../content/code-of-conduct.md'
import ReimbursementMarkdown from '../content/reimbursement.md'
import { Icon } from './icons'

const { Footer } = Layout

export const App = () => {
  console.log(event.registrationFormURL)
  return (
    <div className="app">
      <Layout className="layout">
        <EventCard
          event={ event }
          markdown={ <EventMarkdown /> }
          codeOfConductMarkdown={ <CodeOfConductMarkdown /> }
          reimbursementMarkdown={ <ReimbursementMarkdown /> }
        />
      </Layout>
      <Footer className="footer">
        <div>RENCI &copy; 2021</div>
        <div>
          <a
            href="https://github.com/RENCI/sbdh-scidas-workshop/"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="View source for this page"
          >
            <Icon icon="github" fill="var(--color-unc-white)" className="github-icon" />
          </a>
        </div>
      </Footer>
    </div>
  )
}
