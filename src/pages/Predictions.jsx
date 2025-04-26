import { useEffect, useState, useMemo } from "react";
import Papa from "papaparse";
import { MaterialReactTable } from "material-react-table";
import { CircularProgress, GlobalStyles } from "@mui/material";

const teamColors = {
  Arsenal: "#ff000030",
  "Aston Villa": "#6700ff30",
  Bournemouth: "#ff880030",
  Brentford: "#d0000030",
  Brighton: "#0099ff30",
  Chelsea: "#0033cc30",
  "Crystal Palace": "#9900cc30",
  Everton: "#0055ff30",
  Fulham: "#99999930",
  Ipswich: "#0044bb30",
  Leicester: "#0066cc30",
  Liverpool: "#c8102e30",
  "Man City": "#6cabdd30",
  "Man Utd": "#da291c30",
  Newcastle: "#241f1f30",
  "Nottingham Forest": "#ed1c2430",
  Southampton: "#d7192030",
  Spurs: "#00184830",
  "West Ham": "#7a263a30",
  Wolves: "#fdb91330",
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
    return headers.map((header) => {
      if (header === "Position" || header === "Team") {
        const uniqueVals = [...new Set(data.map((r) => r[header]))].filter(
          Boolean
        );
        return {
          accessorKey: header,
          header,
          enableSorting: false,
          enableColumnOrdering: true,
          enableColumnFilter: true,
          filterVariant: "multi-select",
          filterSelectOptions: uniqueVals,
          filterFn: "arrIncludesSome",
        };
      }

      return {
        accessorKey: header,
        header,
        enableColumnOrdering: true,
        enableColumnFilter: false,
      };
    });
  }, [headers, data]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">
        <CircularProgress size={60} sx={{ color: "#00ff99" }} />
      </div>
    );
  }

  return (
    <div className="p-6 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] min-h-screen text-white overflow-x-auto w-full max-w-screen font-['Noto_Sans',sans-serif]">
      <GlobalStyles
        styles={{
          ".MuiTableHead-root .MuiInputBase-inputAdornedEnd": {
            paddingRight: "0 !important",
          },
          ".MuiTableHead-root .MuiSelect-icon": {
            display: "none", // remove if you prefer to keep the arrow
          },
        }}
      />
      <h1 className="text-4xl md:text-5xl text-center font-extrabold text-white mb-8 [text-shadow:_1px_1px_2px_black]">
        Best FPL prediction table
      </h1>

      <div className="bg-[#1b2a36] border border-[#2c3e50] p-6 rounded-xl shadow-md mb-8 text-white text-center">
        <h2 className="text-2xl font-extrabold mb-2 text-white">
          Welcome to the Ultimate Fantasy Football Predictor 🧠⚽
        </h2>
        <p className="text-[1.1rem] font-medium text-gray-300 max-w-[800px] mx-auto">
          This is not just another fantasy league table.{" "}
          <b className="text-white">Tamir's Prediction Engine</b> is the most
          accurate, lightning-fast, data-crushing table in the game. Updated
          weekly. Optimized daily. Fearless forever.
        </p>
      </div>

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
          measureElement: (el) => el?.getBoundingClientRect().height || 48,
        }}
        enableColumnVirtualization={true}
        columns={columns}
        data={data}
        enablePagination={false}
        initialState={{
          showColumnFilters: true,
          columnPinning: { left: ["Name"] },
        }}
        enableFilters
        enableSorting
        muiTableContainerProps={{
          sx: {
            maxHeight: "70vh",
            overflowY: "auto",
            overflowX: "auto",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            borderRadius: "10px",
            boxShadow: "0 0 15px rgba(0, 255, 153, 0.2)",
          },
        }}
        muiTableHeadProps={{
          sx: { position: "sticky", top: 0, zIndex: 2 },
        }}
        muiTableHeadCellProps={{
          sx: {
            padding: "4px",
            fontWeight: "bold",
            fontSize: isMobile ? "12px" : "0.85rem",
            maxWidth: 100,
            lineHeight: 1.2,
            textAlign: "center",
            whiteSpace: "normal",
            wordWrap: "break-word",
            overflowWrap: "break-word",
            color: "#000000",
            "& .MuiBox-root": { whiteSpace: "normal", display: "block" },
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
            color: "#000000",
          },
        })}
      />
    </div>
  );
}

export default Predictions;
