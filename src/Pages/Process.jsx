import React, { useState } from 'react';
import { Stepper, Step, StepButton, Typography, Button, Box } from '@mui/material';
import './CSS/Process.css';

const steps = [
    'Chuẩn bị nguyên liệu',
    'Trộn lô dầu và dung dịch kiềm',
    'Thêm tinh dầu nghệ',
    'Đổ khuôn',
    'Ủ xà phòng',
    'Đóng gói sản phẩm'
];

const stepDetails = [
    'Chuẩn bị các nguyên liệu như dầu dừa, dầu cọ, kiềm, nước và tinh dầu nghệ.',
    'Trộn dầu và kiềm với tỷ lệ chính xác để tạo ra xà phòng.',
    'Thêm tinh dầu nghệ vào hỗn hợp.',
    'Đổ hỗn hợp vào khuôn xà phòng.',
    'Ủ xà phòng trong vòng 4-6 tuần.',
    'Đóng gói sản phẩm sau khi hoàn thành.'
];

const stepImages = [
    'https://cdn.tgdd.vn/Files/2021/12/22/1406107/cong-thuc-lam-xa-phong-nghe-giam-tham-duong-am-cho-da-vao-mua-dong-202112221532144110.jpg',
    'https://cdn.tgdd.vn/Files/2021/12/22/1406107/cong-thuc-lam-xa-phong-nghe-giam-tham-duong-am-cho-da-vao-mua-dong-202112221532481002.jpg',
    'https://cdn.tgdd.vn/Files/2021/12/22/1406107/cong-thuc-lam-xa-phong-nghe-giam-tham-duong-am-cho-da-vao-mua-dong-202112221533099431.jpg',
    'https://cdn.tgdd.vn/Files/2021/12/22/1406107/cong-thuc-lam-xa-phong-nghe-giam-tham-duong-am-cho-da-vao-mua-dong-202112221533425643.jpg',
    'https://cdn.tgdd.vn/Files/2021/12/22/1406107/cong-thuc-lam-xa-phong-nghe-giam-tham-duong-am-cho-da-vao-mua-dong-202112221532144110.jpg',
    'https://cdn.tgdd.vn/Files/2021/12/22/1406107/cong-thuc-lam-xa-phong-nghe-giam-tham-duong-am-cho-da-vao-mua-dong-202112221534096623.jpg'
];

function Process() {
    const [activeStep, setActiveStep] = useState(0);

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    return (
        <Box className="container" style={{ marginTop: 100, width: "auto" }}>
            <Stepper nonLinear activeStep={activeStep} className="stepper-container">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepButton
                            onClick={handleStep(index)}
                            className={`step-button ${activeStep === index ? 'active' : ''}`}
                        >
                            {label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
            <Box className="step-details">
                <Typography variant="h6" className="step-details-title">
                    {steps[activeStep]}
                </Typography>
                {/* Hiển thị ảnh và mô tả bên cạnh nhau */}
                <Box className="step-content">
                    <img
                        src={stepImages[activeStep]}
                        alt={steps[activeStep]}
                        className="step-image"
                    />
                    <Typography className="step-description">{stepDetails[activeStep]}</Typography>
                </Box>
                <Box className="navigation-buttons">
                    <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={() => setActiveStep((prev) => prev - 1)}
                        className="button"
                    >
                        Quay lại
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button
                        variant="contained"
                        disabled={activeStep === steps.length - 1}
                        onClick={() => setActiveStep((prev) => prev + 1)}
                    >
                        Tiếp theo
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default Process;
