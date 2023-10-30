import { ResourcesBox } from '@components';
import { Box, Container, Stack, Typography, useTheme } from '@mui/material';

const ClothesRestQuery = `fetch('https://mongol-api-rest.vercel.app
/clothes')
    .then(res => res.json())
    .then(json => console.log(json))`;

const TouristRestQuery = `fetch('https://mongol-api-rest.vercel.app
/touristAttractions')
    .then(res => res.json())
    .then(json => console.log(json))`;

const EthnicGroupRestQuery = `fetch('https://mongol-api-rest.vercel.app
/ethnicGroups')
    .then(res => res.json())
    .then(json => console.log(json))`;

const ResourceData = [
  {
    title: 'Tourist Attractions API',
    href: '/tourist-attractions.png',
    codeSnippet: TouristRestQuery,
  },
  {
    title: 'Ethnic Groups API',
    href: '/buryat.jpg',
    codeSnippet: EthnicGroupRestQuery,
  },

  {
    title: 'Traditional Clothes API',
    href: '/clothes.png',
    codeSnippet: ClothesRestQuery,
  },
];

export const Resources = () => {
  const { palette } = useTheme();
  return (
    <Box bgcolor="#FAF8FB">
      <Container disableGutters sx={{ maxWidth: '1200px' }} maxWidth={false}>
        <Stack justifyContent="center" py="100px">
          <Stack alignItems="center">
            <Typography color={palette.blue[200]} variant="h2">
              Resources & Examples
            </Typography>
            <Typography
              color={palette.blue[200]}
              variant="subtitle1"
              py={10}
              pb={12}
            >
              Here are some resources and examples to help you get started.
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
