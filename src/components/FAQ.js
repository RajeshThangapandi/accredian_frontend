import React from 'react';
import { Box, Typography, Container, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from '@emotion/styled';

const FAQBox = styled(Box)`
  padding: 50px 0;
  background-color: #f7f9fc;
`;

const FAQ = () => (
  <FAQBox>
    <Container>
      <Typography variant="h4" align="center">Frequently Asked Questions</Typography>
      {[
        { question: 'How do I refer a friend?', answer: 'You can refer a friend by clicking the "Refer Now" button and filling out the form.' },
        { question: 'What rewards do I get?', answer: 'You can earn up to Rs. 15,000 based on the number of successful referrals.' },
      ].map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  </FAQBox>
);

export default FAQ;
