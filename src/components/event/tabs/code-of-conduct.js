import { Space, Typography } from 'antd'

const { Title } = Typography

export const CodeOfConductTab = ({ markdown }) => {
  return (
    <Space direction="vertical">
      <Title level={ 2 }>Code of Conduct</Title>
      <div className="details">
        { markdown }
      </div>
    </Space>
  )
}

