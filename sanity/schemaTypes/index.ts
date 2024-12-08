import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'
import { settingsType } from '../schemas/singletons/settings'
import { eventType } from './eventType'
import { personType } from './personType'
import { executiveBoardType } from './executiveBoardType'
import { teamType } from './teamType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventType, blockContentType, categoryType, postType, personType, executiveBoardType, teamType, authorType, settingsType],
}
