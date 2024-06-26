import React, { useState } from 'react';

interface SimpleMathCaptchaProps {
  onChange: (isValid: boolean) => void;
}

const SimpleMathCaptcha: React.FC<SimpleMathCaptchaProps> = ({ onChange }) => {
  const [captchaQuestion, setCaptchaQuestion] = useState<string>('');
  const [captchaAnswer, setCaptchaAnswer] = useState<number | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>('');

  React.useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    setCaptchaQuestion(`${num1} + ${num2} = ?`);
    setCaptchaAnswer(num1 + num2);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(e.target.value);
    if (parseInt(e.target.value) === captchaAnswer) {
      onChange(true);
    } else {
      onChange(false);
    }
  };

  return (
    <div>
      <label htmlFor="captcha" className="block text-sm font-medium text-gray-700">
        {captchaQuestion}
      </label>
      <input
        type="text"
        id="captcha"
        name="captcha"
        value={userAnswer}
        onChange={handleChange}
        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
    </div>
  );
};

export default SimpleMathCaptcha;
