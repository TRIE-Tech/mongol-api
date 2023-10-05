import { Alert, Stack, Typography } from '@mui/material';

export const HomePanel = () => {
  return (
    <Stack pl={20}>
      <Stack>
        <Typography variant="h3" color="#002762">
          Introduction
        </Typography>

        <Typography fontSize="16px" lineHeight="normal" pt={2} fontWeight="400">
          Welcome to the documentation for the [API Name]. This API allows you
          to [briefly describe the main purpose or functionality of the API].
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
          To access the [API Name], you need to [explain the authentication
          process, such as obtaining an API key, OAuth token, or any other
          method].
        </Typography>

        <Alert
          severity="info"
          sx={{
            backgroundColor: '#F1F7FF',
            color: '#000',
            fontSize: '14px',
            lineHeight: 'normal',
            fontWeight: 400,
            mt: '24px',
          }}
        >
          The base URL for all API requests is:
        </Alert>
      </Stack>
      <Stack pt={12}>
        <Typography variant="h3" color="#002762">
          Base URL
        </Typography>

        <Typography fontSize="16px" lineHeight="normal" pt={2} fontWeight="400">
          It&apos;s a standard documentation layout so you can expect it to
          behave the same. But for the sake of documentation 😁 and as example,
          let&apos;s take a look at how to navigate through this Figma file. For
          main navigation, you should update the Master Components. We have a
          left side bar for main navigation. You can hover your mouse on them in
          Prototype Mode and click to navigate through the pages you have
          linked.
        </Typography>
      </Stack>

      <Stack pt={12}>
        <Typography variant="h3" color="#002762">
          API Endpoints
        </Typography>

        <Typography fontSize="16px" lineHeight="normal" pt={2} fontWeight="400">
          The following endpoints are available for this API:
        </Typography>
      </Stack>

      <Stack pt={12}>
        <Typography variant="h3" color="#002762">
          Support
        </Typography>

        <Typography fontSize="16px" lineHeight="normal" pt={2} fontWeight="400">
          If you have any questions or need assistance, please contact our
          support team at support@example.com.
        </Typography>
      </Stack>

      <Stack pt={12}>
        <Typography variant="h3" color="#002762">
          Conclusion
        </Typography>

        <Typography fontSize="16px" lineHeight="normal" pt={2} fontWeight="400">
          Thank you for using the [API Name]. We hope this documentation has
          been helpful in getting you started. If you have any feedback or
          suggestions for improvement, we&apos;d love to hear from you. Thank
          you for using the [API Name].
        </Typography>
      </Stack>
    </Stack>
  );
};
