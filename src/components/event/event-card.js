import { useMemo, useState } from 'react'
import './event-card.scss'
import { Tab } from './tab'
import { SummaryTab, AgendaTab, RegistrationTab, CodeOfConductTab } from './tabs'

const { Header, Content, Footer, Sider } = Layout

import { Card, Divider, Layout, Space, Tabs, Typography } from 'antd'
const { Text, Title } = Typography
const { Meta } = Card

export const EventCard = ({ event, markdown, projectGoalsMarkdown, whoShouldAttendMarkdown }) => {
  const [currentTab, setCurrentTab] = useState(0)

  const tabs = useMemo(() => [
    { title: 'Summary',         content: <SummaryTab event={ event } markdown={ markdown } />, },
    { title: `Mission & Vision`,    content: <RegistrationTab url={ event.registrationFormURL } /> },
    { title: `Agenda`,          content: <AgendaTab url={ event.agendaURL } /> },
    { title: `Project Goals`, content: <Tab title="Project Goals" markdown={ projectGoalsMarkdown } /> },
    { title: `Who Should Attend`,   content: <Tab title="Who Should Attend" markdown={ whoShouldAttendMarkdown } /> },
  ], [])
  const tabList = useMemo(() => Object.keys(tabs).map(key => tabs[key].content ? ({ key, tab: tabs[key].title }) : null).filter(tab => tab !== null), [tabs])
  const tabContents = useMemo(() => Object.keys(tabs).reduce((obj, key) => tabs[key].content ? ({ ...obj, [key]: tabs[key].content }) : obj, {}), [tabs])

  const handleChangeTab = key => setCurrentTab(key)

  return (
    <Card
      className="event"
      title={ event.title }
      headStyle={{ fontSize: '175%', textAlign: 'center' }}
      tabList={ tabList }
      onTabChange={ key => handleChangeTab(key, 'key') }
    >
      { tabContents[currentTab] }
    </Card>
  )
}

