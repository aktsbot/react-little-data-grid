import "./DataGrid.css";

interface IColumn {
  rowField: string;
  text: string;
}

interface IRow extends Record<string, string | number> {
  id: string;
}

const _makeId = () => new Date().getTime();

const _makeHead = ({
  cols,
  showIndexCol,
}: {
  cols: IColumn[];
  showIndexCol: boolean;
}) => {
  if (cols.length === 0) {
    return <></>;
  }

  const id = _makeId();

  return (
    <tr>
      {showIndexCol && <th>#</th>}
      {cols.map((c) => (
        <th key={`rldg-col-${id}-${c.rowField}`}>{c.text}</th>
      ))}
    </tr>
  );
};

const _makeBody = ({
  rows,
  cols,
  showIndexCol,
  editable,
}: {
  rows: IRow[];
  cols: IColumn[];
  showIndexCol: boolean;
  editable: boolean;
}) => {
  if (rows.length === 0) {
    return <></>;
  }

  const trs = [];
  for (const [idx, r] of rows.entries()) {
    const tds = [];
    if (showIndexCol) {
      tds.push(<td key={`td-idx-${idx}`}>{idx + 1}</td>);
    }
    for (const c of cols) {
      const rf = c["rowField"];
      tds.push(
        <td
          contentEditable={editable}
          key={`td-${idx}-${rf}-${r["id"]}`}
          dangerouslySetInnerHTML={{ __html: r[rf] }}
        ></td>
      );
    }
    trs.push(<tr key={`tr-${idx}-${r["id"]}`}>{tds}</tr>);
  }

  return trs;
};

const SimpleDataGrid = ({
  cols,
  rows,
  showIndexCol = false,
  editable = false,
}: {
  rows: IRow[];
  cols: IColumn[];
  showIndexCol: boolean;
  editable: boolean;
}) => {
  return (
    <div className="rldg-wrapper">
      <table>
        <thead>{_makeHead({ cols, showIndexCol })}</thead>
        <tbody>{_makeBody({ cols, rows, showIndexCol, editable })}</tbody>
      </table>
    </div>
  );
};

export default SimpleDataGrid;
