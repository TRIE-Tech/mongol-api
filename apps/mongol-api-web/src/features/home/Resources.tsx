import { ResourcesBox } from '@components';
import { ClothesIcon, GroupsIcon, InstrumentsIcon, ProvinceIcon } from '@icons';
import { Box, Container, Stack, Typography, useTheme } from '@mui/material';

const resourcesData = [
  {
    icon: <ClothesIcon />,
    title: 'Clothes',
    description:
      'Lorem ipsum dolor sit amet consectetur. Venenatis lobortis turpis.',
    href: '',
  },
  {
    icon: <ProvinceIcon />,
    title: 'Provinces',
    description:
      'Lorem ipsum dolor sit amet consectetur. Venenatis lobortis turpis.',
    href: '',
  },
  {
    icon: <InstrumentsIcon />,
    title: 'Instruments',
    description:
      'Lorem ipsum dolor sit amet consectetur. Venenatis lobortis turpis.',
    href: '',
  },
  {
    icon: <GroupsIcon />,
    title: 'Ethnic Groups',
    description:
      'Lorem ipsum dolor sit amet consectetur. Venenatis lobortis turpis.',
    href: '',
  },
];

export const Resources = () => {
  const { palette } = useTheme();
  return (
    <Box bgcolor="#FAF8FB">
      <Container disableGutters sx={{ maxWidth: '1200px' }} maxWidth={false}>
        <Stack justifyContent="center" py="108px">
          <Stack alignItems="center">
            <Typography color={palette.blue[200]} variant="h2">
              Resources & Examples
            </Typography>
            <Typography color={palette.blue[200]} variant="subtitle1" py={8}>
              Lorem ipsum dolor sit amet consectetur.
            </Typography>
          </Stack>
          <Stack width="100%" justifyContent="center" alignItems="center">
            <Stack maxWidth="680px" spacing={11}>
              <Stack direction="row" spacing={22}>
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
              <Stack direction="row" spacing={22}>
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
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
