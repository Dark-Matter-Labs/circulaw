import { AiOutlineHighlight } from "react-icons/ai"
import Highlight from "../../../components/highlight"

export default {
    title: 'Intro',
    name: 'intro',
    type: 'object',
    fields: [
        {
      title: 'Intro text',
      name: 'introText',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: 'block',
          styles: [{ title: 'normal', value: 'normal' }],
          marks: {
            decorators: [
              {
                title: 'Highlight',
                value: 'highlight',
                blockEditor: {
                  render: Highlight,
                  icon: AiOutlineHighlight,
                },
              },
            ],
            annotations: [],
          },
          lists: [],
        },
      ],
    },
    ],
}