import { Space, Typography } from 'antd'

const { Title } = Typography

export const RegistrationTab = ({ url }) => {
  console.log(url)
  return (
    <Space direction="vertical">
      <Title level={ 2 }>Registration</Title>
      <div className="iframe-wrapper" style={{ height: '1000px' }}>
        <iframe src={ url } width="780" height="1000" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
      </div>
      <div className="form-note">
        The Registration form should be embedded above.
        If it is not embedded correctly, 
        you may <a href={ url }>visit the form directly</a>.
      </div>
    </Space>
  )
}

