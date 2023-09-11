import { ResourcesBox } from '@components';
import { ClothesIcon, GroupsIcon, InstrumentsIcon, ProvinceIcon } from '@icons';
import { Box, Container, Stack, Typography, useTheme } from '@mui/material';

const resourcesData = [
  {
    icon: <ClothesIcon />,
    title: 'Clothes',
    description:
      'Lorem ipsum dolor sit amet consectetur. Venenatis maecenas lobortis turpis velit diam felis venenatis faucibus.',
    href: '',
  },
  {
    icon: <ProvinceIcon />,
    title: 'Provinces',
    description:
      'Lorem ipsum dolor sit amet consectetur. Venenatis maecenas lobortis turpis velit diam felis venenatis faucibus.',
    href: '',
  },
  {
    icon: <InstrumentsIcon />,
    title: 'Instruments',
    description:
      'Lorem ipsum dolor sit amet consectetur. Venenatis maecenas lobortis turpis velit diam felis venenatis faucibus.',
    href: '',
  },
  {
    icon: <GroupsIcon />,
    title: 'Ethnic Groups',
    description:
      'Lorem ipsum dolor sit amet consectetur. Venenatis maecenas lobortis turpis velit diam felis venenatis faucibus.',
    href: '',
  },
];

export const Resources = () => {
  const { palette } = useTheme();
  return (
    <Box bgcolor="primary.500" width="100vw" minHeight="calc(100% - 77px)">
      <Container disableGutters maxWidth="lg">
        <Stack alignItems="center" pt={6} spacing={8} pb={14}>
          <Typography color={palette.primary[100]} variant="h1">
            Resources
          </Typography>
          <Typography color={palette.primary[100]} variant="subtitle2">
            Lorem ipsum dolor sit amet consectetur.
          </Typography>
        </Stack>
        <Stack spacing={11} px={22} pb={12}>
          <Stack direction="row" spacing={25}>
            {resourcesData
              .slice(0, 2)
              .map(({ icon, title, description, href }, index) => {
                return (
                  <ResourcesBox
                    key={index}
                    icon={icon}
                    title={title}
                    description={description}
                    href={href}
                  />
                );
              })}
          </Stack>
          <Stack direction="row" spacing={25}>
            {resourcesData
              .slice(2, 4)
              .map(({ icon, title, description, href }, index) => {
                return (
                  <ResourcesBox
                    key={index}
                    icon={icon}
                    title={title}
                    description={description}
                    href={href}
                  />
                );
              })}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
