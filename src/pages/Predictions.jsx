import { useEffect, useState, useMemo } from "react";
import Papa from "papaparse";
import { MaterialReactTable } from "material-react-table";
import { Box, Typography, CircularProgress } from "@mui/material";
import "./Predictions.css";

const teamColors = {
  Arsenal: "#ff000010",
  "Aston Villa": "#6700ff10",
  Bournemouth: "#ff880010",
  Brentford: "#d0000010",
  Brighton: "#0099ff10",
  Chelsea: "#0033cc10",
  "Crystal Palace": "#9900cc10",
  Everton: "#0055ff10",
  Fulham: "#99999910",
  Ipswich: "#0044bb10",
  Leicester: "#0066cc10",
  Liverpool: "#c8102e10",
  "Man City": "#6cabdd10",
  "Man Utd": "#da291c10",
  Newcastle: "#241f1f10",
  "Nottingham Forest": "#ed1c2410",
  Southampton: "#d7192010",
  Spurs: "#00184810",
  "West Ham": "#7a263a10",
  Wolves: "#fdb91310",
};

function Predictions() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    fetch("/data.csv")
      .then((res) => res.text())
      .then((text) => {
        const parsed = Papa.parse(text, { header: true });
        setData(parsed.data);
        setHeaders(parsed.meta.fields);
        setLoading(false);
      });
  }, []);
  const columns = useMemo(() => {
    return headers.map((header) => ({
      accessorKey: header,
      header,
      enableColumnOrdering: true,
      enableColumnFilter: true,
    }));
  }, [headers]);
  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <CircularProgress size={60} sx={{ color: "#00ff99" }} />
      </Box>
    );
  }
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Best FPL prediction table
      </Typography>

      <Box className="intro-banner">
        <Typography variant="h5" className="intro-title">
          Welcome to the Ultimate Fantasy Football Predictor 🧠⚽
        </Typography>
        <Typography variant="body1" className="intro-text">
          This is not just another fantasy league table.{" "}
          <b>Tamir's Prediction Engine</b> is the most accurate, lightning-fast,
          data-crushing table in the game. Updated weekly. Optimized daily.
          Fearless forever.
        </Typography>
      </Box>
      <MaterialReactTable
        columnSizingMode="static"
        defaultColumn={{
          minSize: isMobile ? 60 : 70,
          size: isMobile ? 70 : 80,
          maxSize: isMobile ? 90 : 300,
        }}
        enableColumnActions={false}
        enableColumnPinning
        enableRowVirtualization
        virtualizerProps={{
          measureElement: (el) => {
            return el?.getBoundingClientRect().height || 48;
          },
        }}
        enableColumnVirtualization={true}
        columns={columns}
        data={data}
        enablePagination={false}
        initialState={{
          columnPinning: {
            left: ["Name"],
          },
        }}
        enableFilters
        enableSorting
        muiTableContainerProps={{
          sx: {
            maxHeight: "70vh",
            overflowY: "auto",
            overflowX: "auto",
          },
        }}
        muiTableHeadProps={{
          sx: {
            position: "sticky",
            top: 0,
            zIndex: 2,
          },
        }}
        muiTableHeadCellProps={{
          sx: {
            padding: "4px",
            fontWeight: "bold",
            fontSize: "0.85rem",
            maxWidth: 100,
            lineHeight: 1.2,
            textAlign: "center",
            whiteSpace: "normal",
            wordWrap: "break-word",
            overflowWrap: "break-word",
            "& .MuiBox-root": {
              whiteSpace: "normal",
              display: "block",
            },
          },
        }}
        muiTableBodyCellProps={({ row }) => ({
          sx: {
            backgroundColor: teamColors[row.original.Team] || "transparent",
            whiteSpace: "nowrap",
            padding: "4px",
            maxWidth: 150,
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          },
        })}
      />
    </Box>
  );
}

export default Predictions;
