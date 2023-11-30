import React, { Component } from "react"
import { Form, Button, Input, Row, Col, message } from "antd"
import { ROW_GUTTER } from "constants/ThemeConstant"
import Flex from "components/shared-components/Flex"

export class EditProfile extends Component {

  getBase64(img, callback) {
    const reader = new FileReader()
    reader.addEventListener("load", () => callback(reader.result))
    reader.readAsDataURL(img)
  }

	render() {
	const { close } = this.props
    const { name, username, email, address, phone, website, company } =
		  this.props.user
	const { street, city, zipcode } = address
		

    const onFinish = (values) => {
      const key = "updatable"
      message.loading({ content: "Updating...", key })
      setTimeout(() => {
        this.setState({
          name: values.name,
          email: values.email,
          userName: values.userName,
          dateOfBirth: values.dateOfBirth,
          phoneNumber: values.phoneNumber,
          website: values.website,
          address: values.address,
          city: values.city,
          postcode: values.postcode,
        })
		  message.success({ content: "Done!", key, duration: 2 })
	  }, 1000)
		setTimeout(() => {
			close()
		}, 2000)
    }

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo)
    }

    return (
      <>
        <Flex
          alignItems="center"
          mobileFlex={false}
          className="text-center text-md-left"
        >
          <div className="ml-md-3 mt-md-0 mt-3"></div>
        </Flex>
        <div className="mt-4">
          <Button className="ml-4" onClick={close}>
            Go Back
          </Button>
          <Form
            name="basicInformation"
					layout="vertical"
					className="p-4"
            initialValues={{
              name,
              username,
              email,
              street,
              city,
              zipcode,
              phone,
              website,
              company,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Row align={"center"}>
              <Col xs={24} sm={24} md={24} lg={16}>
                <Row gutter={ROW_GUTTER}>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Name"
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Please input your name!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Username"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Email"
                      name="email"
                      rules={[
                        {
                          required: true,
                          type: "email",
                          message: "Please enter a valid email!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item label="Phone Number" name="phone">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item label="Website" name="website">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={24}>
                    <Form.Item label="Street" name="street">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item label="City" name="city">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item label="Post code" name="zipcode">
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Button type="primary" htmlType="submit">
                  Save Change
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </>
    )
  }
}

export default EditProfile
