import {MdOutlineArrowDropDownCircle} from 'react-icons/md'

export default {
    title: 'Drop down',
    name: 'dropDown',
    type: 'object',
    icon: MdOutlineArrowDropDownCircle,
    fields: [
      {
        title: 'Drop down word/s',
        name: 'dropDownWord',
        type: 'string',
        description: 'this is the word that is being highlighted. Do not put the word into the general text.',
      },
      {
        title: 'Drop Down Text',
        name: 'dropDownTextText',
        type: 'text',
      },
    ],
  };
  