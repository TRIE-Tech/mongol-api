import { Box, Link, Stack, Typography } from '@mui/material';
import React from 'react';

type ResourcesBoxType = {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
};

export const ResourcesBox = (props: ResourcesBoxType) => {
  const { icon, title, description, href } = props;
  return (
    <Stack px={12} py={6} bgcolor="#00C0CC" borderRadius="20px">
      <Stack direction="row" spacing={6} pb={6}>
        <Box p={3}>{icon}</Box>
        <Box display="flex" alignItems="center">
          <Typography variant="subtitle2" color="secondary.500">
            {title}
          </Typography>
        </Box>
      </Stack>
      <Stack>
        <Typography variant="body1" color="secondary.500">
          {description}
        </Typography>
        <Stack alignItems="flex-end">
          <Link sx={{ cursor: 'pointer' }} href={href}>
            <Typography
              fontWeight="300"
              fontStyle="italic"
              lineHeight="19.07px"
              fontSize="16px"
            >
              Learn more
            </Typography>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};
