import { EventCard } from './event/event-card'
import './app.scss'
import { Layout } from 'antd'
import * as event from '../content/event-info.md'
import MissionVisionMarkdown from '../content/mission-vision.md'
import ProjectGoalsMarkdown from '../content/project-goals.md'
import WhoShouldAttendMarkdown from '../content/who-should-attend.md'
import { Icon } from './icons'

const { Footer } = Layout

export const App = () => {
  console.log(event.registrationFormURL)
  return (
    <div className="app">
      <Layout className="layout">
        <EventCard
          event={ event }
          markdown={ <MissionVisionMarkdown /> }
          projectGoalsMarkdown={ <ProjectGoalsMarkdown /> }
          whoShouldAttendMarkdown={ <WhoShouldAttendMarkdown /> }
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
