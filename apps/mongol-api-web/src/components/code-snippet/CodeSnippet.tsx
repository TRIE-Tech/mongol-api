import FileCopyIcon from '@mui/icons-material/FileCopy';
import { Box, IconButton, Tooltip, useTheme } from '@mui/material';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

type CodeSnippetType = {
  value: string;
  maxWidth: string;
  testId?: string;
};

export const CodeSnippet = ({ value, maxWidth, testId }: CodeSnippetType) => {
  const theme = useTheme();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        maxWidth: maxWidth ? maxWidth : '100%',
      }}
      data-cy={testId}
    >
      <Tooltip title="Copy to Clipboard" placement="top">
        <IconButton
          onClick={copyToClipboard}
          sx={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            color: theme.palette.common.white,
          }}
        >
          <FileCopyIcon />
        </IconButton>
      </Tooltip>

      <SyntaxHighlighter
        language="jsx"
        style={vscDarkPlus}
        showLineNumbers={true}
        customStyle={{
          padding: '20px',
          borderRadius: '8px',
          backgroundColor: theme.palette.blue[200],
          height: '100%',
        }}
      >
        {value}
      </SyntaxHighlighter>
    </Box>
  );
};
