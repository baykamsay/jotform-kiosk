import React, { useState } from 'react';
import { Form, Input, Button, Layout } from 'antd';
import { shell } from 'electron';
import jotFormIcon from '../../resources/brand-resources/jotform-icon.png';

const { Content } = Layout;

export default function Login(props: {
  onLogin:
    | ((values: import('rc-field-form/lib/interface').Store) => void)
    | undefined;
}): JSX.Element {
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={props.onLogin}
          onFinishFailed={onFinishFailed}
          style={{ backgroundColor: '#f5f5f5', padding: 24, borderRadius: 4 }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 50,
            }}
          >
            <img src={jotFormIcon} alt="jotform icon" style={{ width: 200 }} />
          </div>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button
              type="link"
              onClick={() => {
                const url = 'https://www.jotform.com/signup/';
                shell.openExternal(url);
              }}
            >
              Don&apos;t have a JotForm account?
            </Button>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
}
