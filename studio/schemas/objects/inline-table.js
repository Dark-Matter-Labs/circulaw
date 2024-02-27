import { TableWithCaptionPreview } from '../../components/table-preview'

export default {
    title: 'Table',
    name: 'inlineTable',
    type: 'object',
    components: {
      preview: TableWithCaptionPreview, // Add custom preview component
    },
    fields: [
      {
        name: 'table',
        title: 'Table',
        type: 'table', // Specify 'table' type
      },
      {
        name: 'caption',
        type: 'string',
        title: 'Caption',
      },
    ],
    preview: {
      select: {
        table: 'table',
        caption: 'caption'
      }
    }
  }