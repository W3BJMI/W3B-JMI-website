import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'
import { settingsType } from '../schemas/singletons/settings'
import { eventType } from './eventType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventType,blockContentType, categoryType, postType, authorType, settingsType],
}
