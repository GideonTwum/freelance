import React, { useState } from 'react';
import { Button, Modal, Form, Input, Table } from 'antd';

const PostJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    setJobs(prev => [...prev, { ...values, id: Date.now() }]);
    form.resetFields();
    setIsModalOpen(false);
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Budget',
      dataIndex: 'budget',
      key: 'budget',
      render: (budget) => `$${budget}`,
    },
    {
      title: 'Deadline',
      dataIndex: 'deadline',
      key: 'deadline',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Post Jobs</h1>
        <Button 
          type="primary" 
          onClick={() => setIsModalOpen(true)}
          className="bg-green-600 hover:bg-green-700"
        >
          Add New Job
        </Button>
      </div>

      <Modal
        title="Add New Job"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
        >
          <Form.Item
            name="title"
            label="Job Title"
            rules={[{ required: true, message: 'Please input the job title!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="company"
            label="Company"
            rules={[{ required: true, message: 'Please input the company name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="location"
            label="Location"
            rules={[{ required: true, message: 'Please input the location!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="budget"
            label="Budget (USD)"
            rules={[
              { required: true, message: 'Please input the budget!' },
              { type: 'number', min: 0, message: 'Budget must be a positive number!' }
            ]}
          >
            <Input type="number" prefix="$" />
          </Form.Item>

          <Form.Item
            name="deadline"
            label="Deadline"
            rules={[{ required: true, message: 'Please input the deadline!' }]}
          >
            <Input type="date" />
          </Form.Item>

          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: 'Please input the job description!' }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>

          <Form.Item>
            <div className="flex justify-end gap-2">
              <Button onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button type="primary" htmlType="submit" className="bg-green-600 hover:bg-green-700">
                Save
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>

      <Table 
        columns={columns} 
        dataSource={jobs} 
        rowKey="id"
        pagination={{ pageSize: 10 }}
        className="bg-white rounded-lg shadow"
      />
    </div>
  );
};

export default PostJobs;