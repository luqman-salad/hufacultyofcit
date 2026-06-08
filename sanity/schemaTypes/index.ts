import { type SchemaTypeDefinition } from 'sanity'
import facilitiesPage from './facilities' // Make sure the path accurately maps your folder structure
import deanMessagePage from './deanMessagePage'
import visionMissionPage from './visionMissionPage'
import historyPage from './historyPage'
import department from './department' 
import researchPage from './research'
import staffPage from './staffPage'
import contactPage from './contactPage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    facilitiesPage,
    deanMessagePage,
    visionMissionPage,
    historyPage,
    department, 
    researchPage,
    staffPage,
    contactPage,
  ],
}