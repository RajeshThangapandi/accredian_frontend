import React from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import styled from '@emotion/styled';

const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 500px;
  background-color: #fff;
  padding: 20px;
  box-shadow: 24px;
`;

const ReferModal = ({ open, onClose, form, handleChange, handleSubmit }) => (
  <Modal open={open} onClose={onClose}>
    <ModalBox>
      <Typography variant="h6" gutterBottom>
        Refer a Friend
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
        required
          name="yourName"
          label="Your Name"
          value={form.yourName}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
        required
          name="yourEmail"
          label="Your Email"
          value={form.yourEmail}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
        required
          name="friendsName"
          label="Friend's Name"
          value={form.friendsName}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
        required
          name="friendsEmail"
          label="Friend's Email"
          value={form.friendsEmail}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
        required
          name="courseId"
          label="Course ID"
          value={form.courseId}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Box mt={2} textAlign="right">
          <Button onClick={onClose} color="secondary">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </form>
    </ModalBox>
  </Modal>
);

export default ReferModal;
