import { Space, Typography } from 'antd'

const { Title } = Typography

export const Tab = ({ title, markdown }) => {
  return (
    <Space direction="vertical">
      <Title level={ 2 }>{ title }</Title>
      <div className="details">
        { markdown }
      </div>
    </Space>
  )
}

