import { Card, Divider, Space } from 'antd'
import {
  CalendarOutlined as CalendarIcon,
  GlobalOutlined as GlobeIcon,
} from '@ant-design/icons'

const { Meta } = Card

export const SummaryTab = ({ event, markdown }) => {
  return (
    <Space direction="vertical">
      <div className="where-and-when">
        <Meta
          avatar={ <CalendarIcon style={{ fontSize: '30pt', color: 'var(--color-unc-basin-slate)', margin: '0.25rem 0 0.25rem 1rem' }} /> }
          title="Date"
          description={ event.date }
        />
        <br />
        <Meta
          avatar={ <GlobeIcon style={{ fontSize: '30pt', color: 'var(--color-unc-basin-slate)', margin: '0.25rem 0 0.25rem 1rem' }} /> }
          title="Location"
          description={ <div dangerouslySetInnerHTML={{ __html: event.location }} /> }
        />
      </div>
      <Divider />
      <div className="details">
        { markdown }
      </div>
    </Space>
  )
}

