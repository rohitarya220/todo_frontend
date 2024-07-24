import React from 'react';
import { Modal, Form, Input, Button } from 'antd';
import { useStateContext } from '../context/ContextProvider';

const CreateTodoModal = ({ isModalVisible, handleCancel }) => {
    const { addTodo } = useStateContext();
    const [form] = Form.useForm();

    const handleFinish = (values) => {
        const { title, description } = values;
        if (title && description) {
            addTodo(title, description);
        }
        form.resetFields();
        handleCancel();
    };

    return (
        <Modal
            title="Create New Todo"
            open={isModalVisible}
            onCancel={handleCancel}
            footer={null}
        >
            <Form
                form={form}
                name="createTodo"
                initialValues={{ remember: true }}
                onFinish={handleFinish}
                layout="vertical"
            >
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[{ required: true, message: 'Please fill the title!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: 'Please fill the description!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="w-full">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default CreateTodoModal;
