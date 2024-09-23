import React, { useState } from "react";
import { Form, Input, Button, Steps, message, Select } from "antd";

const { Step } = Steps;

const SubForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const steps = [
    { title: "Business Structure", content: <Step1 /> },
    { title: "Business Representative", content: <Step2 /> },
    { title: "Business Details", content: <Step3 /> },
    { title: "Bank Details", content: <Step4 /> },
    { title: "Work Experience", content: <Step5 /> },
    { title: "Confirmation", content: <Step6 /> },
  ];

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
    <div className="container flex">
      <div className="p-14">
        <Steps current={currentStep} direction="vertical">
          {steps.map((step, index) => (
            <Step key={index} title={step.title} />
          ))}
        </Steps>
      </div>

      <div className="w-[410px] p-14 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Step Form</h2>
        <div className="steps-content mb-6">{steps[currentStep].content}</div>
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
  );
};

// Step 1
const { Option } = Select;

const Step1: React.FC = () => {
  return (
    <Form layout="vertical">
      <h3 className="text-lg font-semibold mb-2">Business Address</h3>
      <Form.Item
        label="Business Address"
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
        <Select placeholder="Select type" className="w-[400px]">
          <Option value="type1">Type 1</Option>
          <Option value="type2">Type 2</Option>
          <Option value="type3">Type 3</Option>
        </Select>
      </Form.Item>

      <h3 className="text-lg font-semibold mt-4 mb-2">Address</h3>
      <Form.Item name="addressLine1" rules={[{ required: true }]}>
        <Input placeholder="Address line 1" className="w-[310px]" />
      </Form.Item>
      <Form.Item name="addressLine2">
        <Input placeholder="Address line 2" className="w-[310px]" />
      </Form.Item>
      <Form.Item label="City" name="city" rules={[{ required: true }]}>
        <Input placeholder="Enter city" className="w-[310px]" />
      </Form.Item>
      <Form.Item label="Zip" name="zip" rules={[{ required: true }]}>
        <Input placeholder="Enter zip code" className="w-[310px]" />
      </Form.Item>
    </Form>
  );
};

// Step 2
const Step2: React.FC = () => {
  return (
    <Form layout="vertical">
      <h3 className="text-lg font-semibold mb-2">Name</h3>
      <div className="flex space-x-4 mb-4">
        <Form.Item name="firstName" rules={[{ required: true }]}>
          <Input placeholder="First Name" />
        </Form.Item>
        <Form.Item name="lastName" rules={[{ required: true }]}>
          <Input placeholder="Last Name" />
        </Form.Item>
      </div>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, type: "email" }]}
      >
        <Input placeholder="Enter your email" />
      </Form.Item>

      <h3 className="text-lg font-semibold mt-4 mb-2">Address</h3>
      <Form.Item name="addressLine1" rules={[{ required: true }]}>
        <Input placeholder="Address line 1" />
      </Form.Item>
      <Form.Item name="addressLine2">
        <Input placeholder="Address line 2" />
      </Form.Item>
      <Form.Item label="City" name="city" rules={[{ required: true }]}>
        <Input placeholder="Enter city" />
      </Form.Item>
      <Form.Item label="Zip" name="zip" rules={[{ required: true }]}>
        <Input placeholder="Enter zip code" />
      </Form.Item>

      <Form.Item
        label="Phone"
        name="phone"
        rules={[{ required: true, message: "Phone number is required" }]}
      >
        <Input placeholder="Enter your phone number" />
      </Form.Item>
    </Form>
  );
};

// Step 3
const Step3: React.FC = () => {
  return (
    <Form layout="vertical">
      <Form.Item
        label="VAT Number"
        name="vatNumber"
        rules={[{ required: true }]}
      >
        <Input placeholder="Enter your VAT number" />
      </Form.Item>
      <Form.Item label="Industry" name="industry" rules={[{ required: true }]}>
        <Select placeholder="Select your industry">
          <Option value="tech">Technology</Option>
          <Option value="finance">Finance</Option>
          <Option value="health">Healthcare</Option>
          <Option value="education">Education</Option>
          <Option value="retail">Retail</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Organization Website"
        name="website"
        rules={[{ required: true }]}
      >
        <Input placeholder="www.example.com" />
      </Form.Item>
    </Form>
  );
};

// Step 4
const Step4: React.FC = () => {
  return (
    <Form layout="vertical">
      <Form.Item label="Currency" name="currency" rules={[{ required: true }]}>
        <Select placeholder="Your currency">
          <Option value="usd">USD</Option>
          <Option value="eur">EUR</Option>
          <Option value="gbp">GBP</Option>
          <Option value="jpy">JPY</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Country of Bank Account"
        name="bankCountry"
        rules={[{ required: true }]}
      >
        <Input placeholder="Enter country of your bank account" />
      </Form.Item>
      <h3 className="text-lg font-semibold mb-2">IBAN</h3>
      <Form.Item
        label="Enter your IBAN"
        name="iban"
        rules={[{ required: true }]}
      >
        <Input placeholder="Enter your IBAN" />
      </Form.Item>
      <Form.Item
        label="IBAN Confirm"
        name="ibanConfirm"
        rules={[{ required: true }]}
      >
        <Input placeholder="Confirm your IBAN" />
      </Form.Item>
    </Form>
  );
};

// Step 5
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
      <h3 className="text-lg font-semibold mt-4 mb-2">
        Keep Your Account Secure
      </h3>
      <Form.Item
        label="Use SMS"
        name="smsSecurity"
        rules={[{ required: true }]}
      >
        <Input placeholder="Enter your phone number for SMS" />
      </Form.Item>
      <Form.Item
        label="Use an Authenticator App"
        name="authenticatorApp"
        rules={[{ required: true }]}
      >
        <Input placeholder="Enter the code from your authenticator app" />
      </Form.Item>
    </Form>
  );
};

// Step 6
const Step6: React.FC = () => {
  return (
    <Form layout="vertical">
      <h3 className="text-lg font-semibold mb-4">Business Details</h3>
      <Form.Item
        label="Business Information"
        name="businessInfo"
        rules={[
          { required: true, message: "Missing required business information" },
        ]}
      >
        <Input placeholder="Missing required business information" />
      </Form.Item>
      <div>
        <h3>Confirm your details</h3>
      </div>
    </Form>
  );
};

export default SubForm;
