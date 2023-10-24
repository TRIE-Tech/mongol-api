import FileCopyIcon from '@mui/icons-material/FileCopy';
import { Box, IconButton, Stack, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { DocsTable } from 'src/components/table/Table';

type CodePanelTypes = {
  restQuery: string;
  restQueryResult: string;
  graphQLQuery: string;
  graphQLQueryResults: string;
  queryParameters: Record<string, string>;
};

export const CodePanel = (props: CodePanelTypes) => {
  const {
    restQuery,
    restQueryResult,
    graphQLQuery,
    graphQLQueryResults,
    queryParameters,
  } = props;

  const { palette, spacing } = useTheme();
  const [apiType, setApiType] = useState('graphql');

  const copyToClipboard = async () => {
    const value = apiType === 'rest' ? restQuery : graphQLQuery;
    try {
      await navigator.clipboard.writeText(value);
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
    }
  };

  return (
    <Stack pl={20} data-cy="Docs-Page-Provinces-Tab">
      <Stack
        bgcolor={palette.blue[200]}
        borderRadius={spacing(2)}
        overflow="hidden"
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          borderBottom={`1px solid ${palette.common.white}`}
          p={5}
        >
          <Box sx={{ display: 'flex' }}>
            <Typography
              variant="body2"
              color="white"
              onClick={() => setApiType('graphql')}
              data-cy="Docs-Tabs-Graphql-Query-Button"
              sx={{
                textDecoration: apiType === 'graphql' ? 'underline' : 'none',
                cursor: 'pointer',
              }}
            >
              GraphQL
            </Typography>
            <Typography color="white" variant="body2" px={2}>
              /
            </Typography>
            <Typography
              variant="body2"
              color="white"
              data-cy="Docs-Tabs-Rest-Query-Button"
              onClick={() => setApiType('rest')}
              sx={{
                textDecoration: apiType === 'rest' ? 'underline' : 'none',
                cursor: 'pointer',
              }}
            >
              REST
            </Typography>
          </Box>
          <IconButton
            onClick={copyToClipboard}
            data-cy="Docs-Page-Provinces-Panel-Copy-Icon-Button"
            sx={{
              color: palette.common.white,
              padding: '0px',
              margin: '0px',
            }}
          >
            <FileCopyIcon />
          </IconButton>
        </Stack>

        <SyntaxHighlighter
          language="jsx"
          style={vscDarkPlus}
          customStyle={{
            padding: '20px',
            backgroundColor: palette.blue[200],
            height: '100%',
            borderRadius: spacing(2),
          }}
        >
          {apiType === 'rest' ? restQuery : graphQLQuery}
        </SyntaxHighlighter>
      </Stack>
      <Stack pt={6} borderRadius={spacing(2)} overflow="hidden">
        <SyntaxHighlighter
          language="jsx"
          style={vscDarkPlus}
          customStyle={{
            padding: '20px',
            backgroundColor: palette.blue[200],
            height: '100%',
            borderRadius: spacing(2),
          }}
        >
          {apiType === 'rest' ? restQueryResult : graphQLQueryResults}
        </SyntaxHighlighter>
      </Stack>
      <Stack pt={12}>
        <Typography variant="h3" color="#002762" pb={12}>
          Documentation
        </Typography>

        <DocsTable data={queryParameters} />
      </Stack>
    </Stack>
  );
};
