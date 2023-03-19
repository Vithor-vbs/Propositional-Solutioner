function generateTable() {
  const expression = document.getElementById("expression").value;
  const variables = expression.match(/[a-z]/g);
  const table = [];

  // Generate truth values for variables
  for (let i = 0; i < Math.pow(2, variables.length); i++) {
    const row = {};
    variables.forEach((variable, j) => {
      row[variable] = Boolean(i & Math.pow(2, variables.length - j - 1));
    });
    row["Result"] = eval(
      expression
        .replace(/[a-z]/g, (x) => row[x])
        .replace(/~/g, "!")
        .replace(/\^/g, "&&")
        .replace(/v/g, "||")
        .replace(/->/g, "=>")
        .replace(/<->/g, "<=>")
    );
    table.push(row);
  }

  // Generate table HTML
  let tableHtml = "<table><thead><tr>";
  variables.forEach((variable) => {
    tableHtml += `<th>${variable}</th>`;
  });
  tableHtml += "<th>Result</th></tr></thead><tbody>";
  table.forEach((row) => {
    tableHtml += "<tr>";
    variables.forEach((variable) => {
      tableHtml += `<td>${row[variable]}</td>`;
    });
    tableHtml += `<td>${row["Result"]}</td></tr>`;
  });
  tableHtml += "</tbody></table>";

  // Display table
  document.getElementById("tableContainer").innerHTML = tableHtml;
}
