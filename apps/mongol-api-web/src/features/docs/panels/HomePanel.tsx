import { Alert, Stack, Typography } from '@mui/material';

export const HomePanel = () => {
  return (
    <Stack pl={20} data-cy="Docs-Page-Home-Panel">
      <Stack>
        <Typography variant="h3" color="#002762">
          Introduction
        </Typography>

        <Typography fontSize="16px" lineHeight="normal" pt={2} fontWeight="400">
          Welcome to the documentation for mongol-api. This API allows you to
          query information about Mongolian culture, language, and landscape.
          Whether you are building a web application, mobile app, or integrating
          with a third-party service, this documentation will guide you through
          the process of using our API.
        </Typography>
      </Stack>
      <Stack pt={12}>
        <Typography variant="h3" color="#002762">
          Getting Started
        </Typography>

        <Typography fontSize="16px" lineHeight="normal" pt={2} fontWeight="400">
          To make developer experience seamless as possible, we have created
          both rest api and graphql api so that developers can choose the
          appropriate service. You can find the documentation for both services
          below.
        </Typography>
      </Stack>
      <Stack pt={12}>
        <Typography variant="h3" color="#002762">
          Base URL
        </Typography>

        <Typography fontSize="16px" lineHeight="normal" pt={2} fontWeight="400">
          In order to get you started, first you need to know the base url of
          the api. The base url is the root url of the api. We have provided
          example base url for each api service.
        </Typography>

        <Alert
          severity="info"
          sx={{
            backgroundColor: '#F1F7FF',
            color: '#000',
            fontSize: '14px',
            lineHeight: 'normal',
            fontWeight: 400,
            mt: '20px',
          }}
        >
          Rest API: https://mongol-api-rest.vercel.app
        </Alert>

        <Alert
          severity="info"
          sx={{
            backgroundColor: '#F1F7FF',
            color: '#000',
            fontSize: '14px',
            lineHeight: 'normal',
            fontWeight: 400,
            mt: '10px',
          }}
        >
          GraphQL API: https://mongol-api-graphql.vercel.app
        </Alert>
      </Stack>

      <Stack pt={12}>
        <Typography variant="h3" color="#002762">
          API Endpoints
        </Typography>

        <Typography fontSize="16px" lineHeight="normal" pt={2} fontWeight="400">
          The API endpoints are the urls that you use to make requests to the
          api. We have provided example endpoints for each api service.
        </Typography>

        <Alert
          severity="info"
          sx={{
            backgroundColor: '#F1F7FF',
            color: '#000',
            fontSize: '14px',
            lineHeight: 'normal',
            fontWeight: 400,
            mt: '20px',
          }}
        >
          Rest API: https://mongol-api-rest.vercel.app/api/traditionalclothes
        </Alert>

        <Alert
          severity="info"
          sx={{
            backgroundColor: '#F1F7FF',
            color: '#000',
            fontSize: '14px',
            lineHeight: 'normal',
            fontWeight: 400,
            mt: '10px',
          }}
        >
          GraphQL API: https://mongol-api-graphql.vercel.app/api/graphql
        </Alert>
      </Stack>

      <Stack pt={12}>
        <Typography variant="h3" color="#002762">
          Support
        </Typography>

        <Typography fontSize="16px" lineHeight="normal" pt={2} fontWeight="400">
          If you have any questions or need assistance, please contact our
          support team at contact.trietech@gmail.com.
        </Typography>
      </Stack>

      <Stack pt={12}>
        <Typography variant="h3" color="#002762">
          Conclusion
        </Typography>

        <Typography fontSize="16px" lineHeight="normal" pt={2} fontWeight="400">
          Thank you for using the mongol-api. We hope this documentation has
          been helpful in getting you started. If you have any feedback or
          suggestions for improvement, we&apos;d love to hear from you.
        </Typography>
      </Stack>
    </Stack>
  );
};
