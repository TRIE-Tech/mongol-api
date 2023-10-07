import {
  Paper,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material';

interface TableProps {
  data: Record<string, string>;
}

export const DocsTable = ({ data }: TableProps) => {
  const { spacing } = useTheme();
  return (
    <TableContainer component={Paper} sx={{ borderRadius: spacing(2) }}>
      <MuiTable>
        <TableHead sx={{ backgroundColor: '#f6f6f6' }}>
          <TableRow>
            <TableCell>Parameters</TableCell>
            <TableCell align="left">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(data).map(([key, description]) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{ color: '#3446C8' }}>
                <Typography variant="subtitle2">{key}</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography fontSize={'16px'}>{description}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};
