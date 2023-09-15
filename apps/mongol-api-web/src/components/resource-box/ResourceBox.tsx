import { LeftVectorIcon } from '@icons';
import { Box, Link, Stack, Typography, useTheme } from '@mui/material';
import React from 'react';

type ResourcesBoxType = {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
};

export const ResourcesBox = (props: ResourcesBoxType) => {
  const { palette } = useTheme();
  const { icon, title, description, href } = props;
  return (
    <Stack p={2} bgcolor="#00C0CC" borderRadius="20px" height="100%">
      <Stack direction="row" spacing={4} pb={4}>
        <Box p={2}>{icon}</Box>
        <Box display="flex" alignItems="center">
          <Typography
            fontWeight="500"
            fontSize="24px"
            lineHeight="29.3px"
            color={palette.secondary[500]}
          >
            {title}
          </Typography>
        </Box>
      </Stack>
      <Stack>
        <Typography
          fontSize="16px"
          fontWeight="400"
          lineHeight="19.09px"
          color={palette.secondary[500]}
          pb={4}
        >
          {description}
        </Typography>
        <Stack alignItems="flex-end" justifyContent="center" py={2} px={4}>
          <Link sx={{ cursor: 'pointer' }} href={href}>
            <Typography
              fontWeight="300"
              fontStyle="italic"
              lineHeight="19.07px"
              fontSize="16px"
            >
              Learn more
              <Box component="span" pl={3}>
                <LeftVectorIcon />
              </Box>
            </Typography>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};
