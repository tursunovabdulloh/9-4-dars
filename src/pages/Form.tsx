import React, { useState } from "react";
import { Form, Input, Button, Steps, message } from "antd";

const { Step } = Steps;

const SubForm: React.FC = () => {
  // Bosqichlarni boshqarish uchun `useState`dan foydalanamiz
  const [currentStep, setCurrentStep] = useState<number>(0);

  // Bosqichlar
  const steps = [
    { title: "Personal Info", content: <Step1 /> },
    { title: "Contact Info", content: <Step2 /> },
    { title: "Additional Info", content: <Step3 /> },
    { title: "Education", content: <Step4 /> },
    { title: "Work Experience", content: <Step5 /> },
    { title: "Confirmation", content: <Step6 /> },
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
const Step1: React.FC = () => {
  return (
    <Form layout="vertical">
      <Form.Item label="Name" name="name" rules={[{ required: true }]}>
        <Input placeholder="Enter your name" />
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
