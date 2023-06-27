import { isEmpty } from "lodash";

type FormData = {
  name: string;
  whatsapp: string;
  email: string;
  subject: string;
  suggestion: string;
};

export const sendForm = async (data: FormData) => {
  if (isEmpty(Object.values(data).join(''))) return false;
  await fetch('/.netlify/functions/emails/subscribed', {
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
