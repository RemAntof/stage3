import Animal from '@interfaces/animal';

const convertToCsv = (items: { item: Animal }) => {
  const separator = ',';
  const nextRowSeparator = '\n';
  const csvData = [];
  for (const id in items) {
    const animalKeys = Object.keys(items[id]);
    const csvRow =
      `${id} - ` +
      animalKeys
        .map((key) => items[id][key])
        .join(separator) +
      separator;
    csvData.push(csvRow);
  }
  return csvData.join(nextRowSeparator);
};

const exportToCsv = (
  filename: string,
  items: { item: Animal }
) => {
  const csvContent = convertToCsv(items);
  const blob = new Blob([csvContent], {
    type: 'text/csv;charset=utf-8;',
  });
  const link = document.createElement('a');
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

export default exportToCsv;
