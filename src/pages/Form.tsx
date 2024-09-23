import React, { useState } from "react";
import { Form, Input, Button, Steps, message, Select } from "antd";

const { Step } = Steps;

const SubForm: React.FC = () => {
  // Bosqichlarni boshqarish uchun `useState`dan foydalanamiz
  const [currentStep, setCurrentStep] = useState<number>(0);

  // Bosqichlar
  const steps = [
    { title: "Business structure", content: <Step1 /> },
    { title: "Business representative", content: <Step2 /> },
    { title: "Business details", content: <Step3 /> },
    { title: "Bank details", content: <Step4 /> },
    { title: "Bank details", content: <Step5 /> },
    { title: "Bank details", content: <Step6 /> },
  ];

  // Keyingi va avvalgi bosqichlar o'rtasida almashish
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    message.success("Form submitted successfully!");
  };

  return (
    <div className="container ">
      {/* Step Indicator */}
      <div className="flex ">
        <div className="p-14">
          <Steps current={currentStep} direction="vertical">
            {steps.map((step, index) => (
              <Step key={index} title={step.title} />
            ))}
          </Steps>
        </div>

        {/* Form content */}
        <div className="w-[410px]   p-14 rounded-lg ">
          <h2 className="text-2xl font-semibold mb-6">Step Form</h2>
          <div className="steps-content mb-6">{steps[currentStep].content}</div>

          {/* Navigatsiya tugmalari */}
          <div className="steps-action flex justify-between">
            {currentStep > 0 && (
              <Button onClick={prevStep} className="mr-4">
                Previous
              </Button>
            )}
            {currentStep < steps.length - 1 ? (
              <Button type="primary" onClick={nextStep}>
                Next
              </Button>
            ) : (
              <Button type="primary" onClick={handleSubmit}>
                Submit
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Step 1
const { Option } = Select;

const Step1: React.FC = () => {
  return (
    <Form layout="vertical">
      {/* Business Address Section */}
      <h3 className="text-lg font-semibold mb-2">Business Address</h3>

      <Form.Item
        label="Business address"
        name="businessAddress"
        rules={[{ required: true }]}
      >
        <Select
          placeholder="Select your business address"
          className="w-full md:w-3/4"
        >
          <Option value="office1">Office 1</Option>
          <Option value="office2">Office 2</Option>
          <Option value="office3">Office 3</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Type" name="type" rules={[{ required: true }]}>
        <Select placeholder="Select type" className="w-[400px] ">
          <Option value="type1">Type 1</Option>
          <Option value="type2">Type 2</Option>
          <Option value="type3">Type 3</Option>
        </Select>
      </Form.Item>

      {/* Address Section */}
      <h3 className="text-lg font-semibold mt-4 mb-2">Address</h3>

      <Form.Item name="addressLine1" rules={[{ required: true }]}>
        <Input placeholder="Address line 1" className="w-[310px] " />
      </Form.Item>

      <Form.Item name="addressLine2">
        <Input placeholder="Address line 2" className="w-[310px] " />
      </Form.Item>

      <Form.Item label="City" name="city" rules={[{ required: true }]}>
        <Input placeholder="Enter city" className="w-[310px] " />
      </Form.Item>

      <Form.Item label="Zip" name="zip" rules={[{ required: true }]}>
        <Input placeholder="Enter zip code" className="w-[310px] " />
      </Form.Item>
    </Form>
  );
};

// Step 2
const Step2: React.FC = () => {
  return (
    <Form layout="vertical">
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, type: "email" }]}
      >
        <Input placeholder="Enter your email" />
      </Form.Item>
    </Form>
  );
};

// Step 3
const Step3: React.FC = () => {
  return (
    <Form layout="vertical">
      <Form.Item label="Age" name="age" rules={[{ required: true }]}>
        <Input type="number" placeholder="Enter your age" />
      </Form.Item>
    </Form>
  );
};

// Step 4 - Education Info
const Step4: React.FC = () => {
  return (
    <Form layout="vertical">
      <Form.Item
        label="Highest Education"
        name="education"
        rules={[{ required: true }]}
      >
        <Input placeholder="Enter your highest education" />
      </Form.Item>
    </Form>
  );
};

// Step 5 - Work Experience
const Step5: React.FC = () => {
  return (
    <Form layout="vertical">
      <Form.Item
        label="Work Experience"
        name="workExperience"
        rules={[{ required: true }]}
      >
        <Input placeholder="Enter your work experience" />
      </Form.Item>
    </Form>
  );
};

// Step 6 - Confirmation
const Step6: React.FC = () => {
  return (
    <div>
      <h3>Confirm your details</h3>
      <p>
        Please review all the information and click submit if everything is
        correct.
      </p>
    </div>
  );
};

export default SubForm;
