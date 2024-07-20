import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  Button,
} from '@mui/material';
import styled from '@emotion/styled';

const BenefitsBox = styled(Box)`
  padding: 50px 0;
  background-color: #f0f4ff;
`;

const Sidebar = styled(Paper)`
  padding: 20px;
  margin-right: 20px;
`;

const ReferralBenefits = ({ onOpenModal }) => {
  const programs = [
    {
      category: 'Product Management',
      courses: [
        { name: 'Professional Certificate Program in Product Management', referrerBonus: '₹ 7,000', refereeBonus: '₹ 9,000' },
        { name: 'PG Certificate Program in Strategic Product Management', referrerBonus: '₹ 9,000', refereeBonus: '₹ 11,000' },
      ],
    },
    {
      category: 'Business Analytics',
      courses: [
        { name: 'Executive Program in Data Driven Product Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
        { name: 'Executive Program in Product Management and Digital Transformation', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
      ],
    },
    {
      category: 'Digital Transformation',
      courses: [
        { name: 'Executive Program in Product Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
        { name: 'Advanced Certification in Product Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
      ],
    },
    {
      category: 'Data Science',
      courses: [
        { name: 'Executive Program in Product Management and Project Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
        { name: 'Advanced Data Science Program', referrerBonus: '₹ 8,000', refereeBonus: '₹ 9,000' },
      ],
    },
    {
      category: 'Fintech',
      courses: [
        { name: 'Certificate Program in Fintech', referrerBonus: '₹ 6,000', refereeBonus: '₹ 7,000' },
        { name: 'Advanced Fintech Course', referrerBonus: '₹ 7,000', refereeBonus: '₹ 8,000' },
      ],
    },
    {
      category: 'Strategy & Leadership',
      courses: [
        { name: 'Executive Leadership Program', referrerBonus: '₹ 10,000', refereeBonus: '₹ 12,000' },
        { name: 'Strategic Management Certification', referrerBonus: '₹ 9,000', refereeBonus: '₹ 10,000' },
      ],
    },
    {
      category: 'Business Management',
      courses: [
        { name: 'MBA in Business Management', referrerBonus: '₹ 15,000', refereeBonus: '₹ 20,000' },
        { name: 'Advanced Business Management Program', referrerBonus: '₹ 12,000', refereeBonus: '₹ 15,000' },
      ],
    },
    {
      category: 'Senior Management',
      courses: [
        { name: 'Executive Program for Senior Management', referrerBonus: '₹ 18,000', refereeBonus: '₹ 20,000' },
        { name: 'Senior Management Certification', referrerBonus: '₹ 16,000', refereeBonus: '₹ 18,000' },
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('ALL PROGRAMS');
  const [showAll, setShowAll] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowAll(false); // Reset showAll when changing categories
  };

  const handleShowMore = () => {
    setShowAll(true);
  };

  const filteredCourses = selectedCategory === 'ALL PROGRAMS'
    ? programs.flatMap((program) => program.courses)
    : programs.find((program) => program.category === selectedCategory)?.courses || [];

  const displayedCourses = showAll ? filteredCourses : filteredCourses.slice(0, 8);

  return (
    <BenefitsBox>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          What Are The Referral Benefits?
        </Typography>
        <Grid container>
          <Grid item xs={12} md={3}>
            <Sidebar>
              <List>
                <ListItem button onClick={() => handleCategoryClick('ALL PROGRAMS')}>
                  <ListItemText primary="ALL PROGRAMS" />
                </ListItem>
                {programs.map((program, index) => (
                  <ListItem button key={index} onClick={() => handleCategoryClick(program.category)}>
                    <ListItemText primary={program.category} />
                  </ListItem>
                ))}
              </List>
            </Sidebar>
          </Grid>
          <Grid item xs={12} md={9}>
            <Paper>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Programs</TableCell>
                    <TableCell align="right">Referrer Bonus</TableCell>
                    <TableCell align="right">Referee Bonus</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {displayedCourses.map((course, index) => (
                    <TableRow key={index}>
                      <TableCell>{course.name}</TableCell>
                      <TableCell align="right">{course.referrerBonus}</TableCell>
                      <TableCell align="right">{course.refereeBonus}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
            <Box mt={2} textAlign="center">
              {!showAll && filteredCourses.length > 8 && (
                <Button variant="contained" color="primary" onClick={handleShowMore}>
                  See More
                </Button>
              )}
              <Button variant="contained" color="primary" onClick={onOpenModal} style={{ marginLeft: '10px' }}>
                Refer Now
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </BenefitsBox>
  );
};

export default ReferralBenefits;
