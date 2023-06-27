import { isEmpty } from 'lodash';

type FormDataProps = {
  name: string;
  whatsapp: string;
  email: string;
  subject: string;
  suggestion: string;
};

export const sendForm2 = async (data: FormDataProps) => {
  if (isEmpty(Object.values(data).join(''))) return false;
  await fetch('../.netlify/functions/emails/subscribed', {
    headers: {
      'netlify-emails-secret': process.env.NETLIFY_EMAILS_SECRET,
    },
    method: 'POST',
    body: JSON.stringify({
      from: data.email,
      to: 'alex39396@gmail.com',
      subject: `Site B2L - ${data.subject}`,
      parameters: {
        name: data.name,
        email: data.email,
        whatsapp: data.whatsapp,
        suggestion: data.suggestion,
      },
    }),
  });
};
const encode = (bodyData) => {
  return Object.keys(bodyData)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(bodyData[key]))
    .join('&');
};
export const sendForm = async (data: FormDataProps) => {
  if (isEmpty(Object.values(data).join(''))) return false;

  await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({ 'form-name': 'contact', ...data }),
  });
};
