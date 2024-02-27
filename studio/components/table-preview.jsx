import { TablePreview } from '@sanity/table';

export const TableWithCaptionPreview = (props) => {
  const { table, caption, title, ...rest } = props;
  const tablePreviewProps = { ...rest, rows: table?.rows || [] };

  return (
    <>
      <TablePreview {...tablePreviewProps} />
      <div style={{ border: '1px solid green' }}>
        <div className='caption'>{caption}</div>
      </div>
    </>
  );
};
