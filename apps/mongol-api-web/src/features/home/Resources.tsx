import { ResourcesBox } from '@components';
import { Box, Container, Stack, Typography, useTheme } from '@mui/material';

const ClothesRestQuery = `fetch('https://mongol-api.vercel.app/api/clothes')
.then(res => res.json())
.then(json => console.log(json))`;

const TouristRestQuery = `fetch('https://mongol-api.vercel.app/api/tourist')
  .then(res => res.json())
  .then(json => console.log(json))`;

const ResourceData = [
  {
    title: 'Traditional Clothes API',
    href: '/traditional-clothes.png',
    codeSnippet: ClothesRestQuery,
  },
  {
    title: 'Tourist Attractions API',
    href: '/tourist-attractions.png',
    codeSnippet: TouristRestQuery,
  },
  {
    title: 'Mal Aj Ahui API',
    href: '/tourist-attractions.png',
    codeSnippet: TouristRestQuery,
  },
];

export const Resources = () => {
  const { palette } = useTheme();
  return (
    <Box bgcolor="#FAF8FB">
      <Container disableGutters sx={{ maxWidth: '1200px' }} maxWidth={false}>
        <Stack justifyContent="center" py="60px">
          <Stack alignItems="center">
            <Typography color={palette.blue[200]} variant="h2">
              Resources & Examples
            </Typography>
            <Typography color={palette.blue[200]} variant="subtitle1" py={8}>
              Lorem ipsum dolor sit amet consectetur.
            </Typography>
          </Stack>

          <Stack
            direction="row"
            spacing={15}
            sx={{
              overflowX: 'scroll',
              overflowY: 'hidden',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            }}
          >
            {ResourceData.map((item, index) => (
              <ResourcesBox
                key={index}
                title={item.title}
                href={item.href}
                codeSnippet={item.codeSnippet}
              />
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
